import axios from "axios";
import { REACT_APP_BACKEND_URL } from "process.env";
export const login = (username, password) => {
  return axios.post(REACT_APP_BACKEND_URL, { username, password });
};
