import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
export const loginUser = async (username, password) => {
  const { data } = await axios.post(`${BACKEND_URL}/users/login`, {
    username,
    password,
  });
  // console.log(data);
  if (data.status !== "ok") throw new Error(data.message);
  return data;
};
export const registerUser = async (userInfo) => {
  const { username, email, password, repeatPassword } = userInfo;
  const { data } = await axios.post(`${BACKEND_URL}/users/register`, {
    username,
    email,
    password,
    repeatPassword,
  });
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const getOwnProfile = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/users/private`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const getAnyUserProfile = async (username) => {
  const { data } = await axios.post(`${BACKEND_URL}/users/:${username}`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const editOwnProfile = async (formData, config) => {
  const { data } = await axios.patch(
    `${BACKEND_URL}/users/private`,
    formData,
    config
  );
  if (data.status !== "ok") throw new Error(data.message);

  // console.log(data);
  return data;
};
export const getWishlist = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/wishlist`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const addRemoveFromWishlist = async (idProduct) => {
  const { data } = await axios.post(`${BACKEND_URL}/wishlist/:${idProduct}`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
