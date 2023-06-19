import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { USER_INFO } from "../utils/constants";
import { loginUser } from "../services/userService";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!USER_INFO);

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
    window.location.reload();
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
