import { USER_INFO } from "../utils/constants";
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

const savedUserData = USER_INFO;
const token = savedUserData?.accessToken;

// Función para distinguir si se necesita el header de Authorization
const isBearerTokenRequired = (url) => {
  const parsedUrl = new URL(url);
  // Rutas públicas de nuestro backend
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
    // Si tenemos token y el endpoint requiere autentificación
    if (token && isBearerTokenRequired(config.url)) {
      // Añadimos el header a la congig
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
    if (response?.data?.data?.accessToken) {
      // Añadimos al localStorage el token

      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
    }

    return response;
  },

  function (error) {
    // Si nos devuelve que está no autorizado porque el token ha caducado
    if (
      error.response.status === 401 &&
      // Y la url anterior no es el login (sino se piden los todos y no da tiempo a setear el localStorage ya que no es inmediato)
      (error.config.url.indexOf("/login") !== -1 ||
        error.config.url.indexOf("/account") !== -1)
    ) {
      // Eliminamos los datos del localStorage
      localStorage.removeItem("userInfo");
      // Y redirigimos al login
      window.location.href = "/login";
    }
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
};
