import axios from "axios";
// import { REACT_APP_BACKEND_URL } from "process.env";
export const getProducts = () => {
  return axios.get(`http://localhost:3000/api/v1/products`);
};
