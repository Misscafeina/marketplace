import { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { USER_INFO } from "../utils/constants";
import { getOwnProfile, getWishlist, loginUser } from "../services/userService";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const savedUserData = JSON.parse(localStorage.getItem(USER_INFO));

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!savedUserData);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      if (isAuthenticated) {
        try {
          const { data } = await getWishlist();
          console.log(data);
          setWishlist(data);
        } catch (error) {
          console.error(error);
        }
      }
      getInfo();
    };
  }, []);
  const login = async (username, password) => {
    try {
      const response = await loginUser(username, password);

      response?.status === "ok" && setIsAuthenticated(true);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const logout = () => {
    localStorage.clear("userInfo");
    setIsAuthenticated(false);
    navigate("/");
    // window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
