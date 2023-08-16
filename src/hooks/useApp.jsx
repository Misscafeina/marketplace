import { useAuth } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import {
  addRemoveFromWishlist,
  getOwnProfile,
  getProducts,
  getWishlist,
} from "../services";
import { PopUpContext } from "../context/popUpContext";
import { useError } from "../context/ErrorContext";
import { useSearchParams } from "react-router-dom";

function useApp() {
  const { isAuthenticated } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [selectedField, setSelectedField] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);
  const [locationLat, setLocationLat] = useState();
  const [locationLong, setLocationLong] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  useEffect(() => {
    if (isAuthenticated) {
      const getInfo = async () => {
        try {
          const response = await getOwnProfile();
          response?.status === "ok" && setUserInfo(response.data);
        } catch (err) {
          setShowPopUp(true);
          setErrorActive(true);
          setErrorMessage(err.response.data.error);
        }
      };
      getInfo();
    } else setUserInfo({});
  }, [isAuthenticated]);

  useEffect(() => {
    const { name, category, order } = Object.fromEntries(searchParams);
    if (name || category || order) {
      const getProducts = async () => {
        // const name = input;
        const lat = locationLat;
        const long = locationLong;
        const result = await findProductsByQuery(
          name,
          category,
          order,
          lat,
          long
        );
        setProducts(result.data.products);
      };
      getProducts();
    } else {
      const requestProducts = async () => {
        const response = await getProducts();
        setProducts(response.products);
      };
      requestProducts();
    }
  }, [searchParams]);
  useEffect(() => {
    const getLocation = async () => {
      const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      };
      function success(pos) {
        const crd = pos.coords;
        setLocationLat(crd.latitude);
        setLocationLong(crd.longitude);
      }
      function error(err) {
        if (err) {
          if (userInfo.lat) {
            setLocationLat(userInfo.lat);
            setLocationLong(userInfo.long);
          } else {
            setLocationLat("40.42303945117233");
            setLocationLong("-3.6804417870805737");
          }
        }
      }
      await navigator.geolocation.getCurrentPosition(success, error, options);
    };
    getLocation();
  }, [userInfo]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const getInfo = async () => {
  //       try {
  //         const response = await getOwnProfile();
  //         response?.status === "ok" && setUserInfo(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     getInfo();
  //   } else setUserInfo({});
  // }, []);

  useEffect(() => {
    if (!isAuthenticated) setWishlist([]);
    else {
      const getInfo = async () => {
        try {
          const { data } = await getWishlist();
          setWishlist(data);
        } catch (err) {
          setShowPopUp(true);
          setErrorActive(true);
          setErrorMessage(err.response.data.error);
        }
      };
      getInfo();
    }
  }, [isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated) {
      setWishlistArray([]);
    } else {
      const arr = wishlist.map((item) => {
        return item.id;
      });
      setWishlistArray(arr);
    }
  }, [wishlist, isAuthenticated]);
  const handleAddRemoveFromWishlist = async (idProduct) => {
    try {
      await addRemoveFromWishlist(idProduct);
      const { data } = await getWishlist();
      setWishlist(data);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };
  const handleProductChanges = async () => {
    try {
      const response = await getOwnProfile();
      response?.status === "ok" && setUserInfo(response.data);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };
  return {
    isAuthenticated,
    userInfo,
    setUserInfo,
    selectedField,
    setSelectedField,
    wishlist,
    setWishlist,
    wishlistArray,
    setWishlistArray,
    handleAddRemoveFromWishlist,
    handleProductChanges,
    locationLat,
    locationLong,
    products,
    setProducts,
  };
}

export default useApp;
