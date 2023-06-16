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
export const registerUser = async (userinfo) => {
  const { data } = await axios.post(`${BACKEND_URL}/users/register`, {
    userinfo,
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

  console.log(data);
  return data;
};
