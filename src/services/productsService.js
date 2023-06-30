import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const getProducts = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/products`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};

export const postNewProduct = async (product) => {
  const {
    name,
    description,
    price,
    category,
    region,
    country,
    address,
    city,
    keywords,
    status,
    useSavedAddress,
  } = product;
  const { data } = await axios.post(`${BACKEND_URL}/products/create`, {
    name,
    description,
    price,
    category,
    region,
    country,
    address,
    city,
    keywords,
    status,
    useSavedAddress,
  });
  if (data.status !== "ok") throw new Error(data.message);
  return data;
};

export const editProduct = async (product) => {
  const { idProduct } = product;
  const { data } = await axios.patch(
    `${BACKEND_URL}/products/:${idProduct}`,
    product
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};

export const uploadProductPictures = async (files, config, idProduct) => {
  const { data } = await axios.put(
    `${BACKEND_URL}/products/${idProduct}`,
    files,
    config
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};

export const findProductsByQuery = async (name, category, price) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/products/search/?name=${name}&category=${category}&price=${price}`
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const getProductsByName = async (name) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/products/search/?name=${name}`
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const getProductsByCategotry = async (category) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/products/search/?category=${category}`
  );
  if (data.status !== "ok") throw new Error(data.message);
  return data;
};
export const getProductsByLocation = async (location) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/products/search/?location=${location}`
  );
  if (data.status !== "ok") throw new Error(data.message);
  return data;
};
export const getProductsByPrice = async (price) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/products/search/?price=${price}`
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const getProductDetails = async (idProduct) => {
  const { data } = await axios.get(`${BACKEND_URL}/products/${idProduct}`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
