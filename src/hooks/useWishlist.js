import { useEffect, useState } from "react";
import { getProducts, getWishlist } from "../services";

function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
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
  }, []);

  return { wishlist, setWishlist };
}

export default useWishlist;
