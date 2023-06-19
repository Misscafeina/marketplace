import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getWishlist } from "../services";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) setWishlist([]);
    else {
      const getInfo = async () => {
        try {
          const { data } = await getWishlist();
          console.log(data);
          setWishlist(data);
        } catch (error) {
          console.error(error);
        }
      };
      getInfo();
    }
  }, [isAuthenticated]);
  useEffect(() => {
    const arr = wishlist.map((item) => {
      return item.id;
    });
    setWishlistArray(arr);
  }, [wishlist]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, wishlistArray }}>
      {children}
    </WishlistContext.Provider>
  );
};
export const useWishlist = () => useContext(WishlistContext);
WishlistProvider.propTypes = {
  children: PropTypes.node,
};
export default WishlistProvider;
