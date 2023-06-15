import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const getProducts = () => {
  return axios.get(`${BACKEND_URL}/products`);
};

export const postNewProduct = (product) => {
  const {
    name,
    description,
    price,
    category,
    keywords,
    address,
    region,
    country,
    city,
    status,
  } = product;

  return axios.post(`${BACKEND_URL}/products/create`, {
    name,
    description,
    price,
    category,
    keywords,
    address,
    region,
    country,
    city,
    status,
  });
};

export const editProduct = (product) => {
  const {
    idProduct,
    name,
    description,
    price,
    category,
    keywords,
    country,
    region,
    address,
    city,
    status,
  } = product;
  return axios.patch(`${BACKEND_URL}/products/:${idProduct}`, {
    name,
    description,
    price,
    category,
    keywords,
    country,
    region,
    address,
    city,
    status,
  });
};

//!recordar que hay que agregar la config "Content-Type": "multipart/form-data" en el componente,
export const uploadProductPictures = (files, config, idProduct) => {
  return axios.put(`${BACKEND_URL}/products/:${idProduct}`, files, config);
};
export const getProductsByName = (name) => {
  return axios.get(`${BACKEND_URL}/products/search/?name=${name}`);
};
export const getProductsByCategotry = (category) => {
  return axios.get(`${BACKEND_URL}/products/search/?category=${category}`);
};
export const getProductsByLocation = (location) => {
  return axios.get(`${BACKEND_URL}/products/search/?location=${location}`);
};
export const getProductsByPrice = (price) => {
  return axios.get(`${BACKEND_URL}/products/search/?price=${price}`);
};
export const getProductDetails = (idProduct) => {
  return axios.get(`${BACKEND_URL}/products/:${idProduct}`);
};
