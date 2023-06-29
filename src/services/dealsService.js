import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const postNewDeal = async (idProduct) => {
  const { data } = await axios.post(`${BACKEND_URL}/products/${idProduct}`);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const postChatMessage = async (idDeal, chatMessage) => {
  //chatmessage debe contener: {message, address, time, status}
  const { data } = await axios.post(
    `${BACKEND_URL}/deals/${idDeal}`,
    chatMessage
  );
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
export const postDealReview = async (idDeal, review) => {
  //review debe contener: {comment, score}
  const { data } = await axios.post(`${BACKEND_URL}/review/${idDeal}`, review);
  if (data.status !== "ok") throw new Error(data.message);

  return data;
};
