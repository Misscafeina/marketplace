import { USER_INFO } from "../utils/constants";
import { postChatMessage, postDealReview, postNewDeal } from "./dealsService";
import {
  getProducts,
  postNewProduct,
  editProduct,
  uploadProductPictures,
  getProductsByName,
  getProductsByCategotry,
  getProductsByLocation,
  getProductsByPrice,
  getProductDetails,
} from "./productsService";

import axios from "axios";
import {
  addRemoveFromWishlist,
  editOwnProfile,
  getAnyUserProfile,
  getOwnProfile,
  getWishlist,
  loginUser,
  registerUser,
  validateEmail,
} from "./userService";
let resp;
const isBearerTokenRequired = (url) => {
  const parsedUrl = new URL(url);
  const publicRoutes = [
    "/api/v1/users/login",
    "/api/v1/users/:username",
    "/api/v1/users/register",
    "/api/v1/products/search/?",
    "/api/v1/products",
  ];

  if (publicRoutes.includes(parsedUrl.pathname)) {
    return false;
  } else {
    return true;
  }
};

axios.interceptors.request.use(
  function (config) {
    const savedUserData = JSON.parse(localStorage.getItem(USER_INFO));

    const token = resp || savedUserData?.accessToken;

    if (token && isBearerTokenRequired(config.url)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    const {
      data: { data },
    } = response;
    if (data?.accessToken) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      resp = data.accessToken;
    }
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export {
  getProducts,
  postNewProduct,
  editProduct,
  uploadProductPictures,
  getProductsByName,
  getProductsByCategotry,
  getProductsByLocation,
  getProductsByPrice,
  getProductDetails,
  postNewDeal,
  postChatMessage,
  postDealReview,
  loginUser,
  registerUser,
  getOwnProfile,
  getAnyUserProfile,
  editOwnProfile,
  addRemoveFromWishlist,
  getWishlist,
  validateEmail,
};
