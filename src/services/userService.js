import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
export const loginUser = (username, password) => {
  return axios.post(`${BACKEND_URL}/users/login`, { username, password });
};
export const registerUser = (userinfo) => {
  return axios.post(`${BACKEND_URL}/users/register`, { userinfo });
};
export const getOwnProfile = () => {
  return axios.get(`${BACKEND_URL}/users/private`);
};
export const getAnyUserProfile = (username) => {
  return axios.post(`${BACKEND_URL}/users/:${username}`);
};
export const editOwnProfile = (formData, config) => {
  return axios.patch(`${BACKEND_URL}/users/private`, formData, config);
};
