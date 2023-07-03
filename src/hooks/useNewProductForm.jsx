import {
  postNewProduct,
  uploadProductPictures,
} from "../services/productsService";
import { useContext, useState } from "react";
import { PopUpContext } from "../context/popUpContext";
import { useError } from "../context/ErrorContext";

function useNewProductForm() {
  const { setErrorMessage, erroMessage } = useError();

  const { setNewProductActive, setShowPopUp, setAllFalse, setErrorActive } =
    useContext(PopUpContext);

  const submitInfo = async (data) => {
    console.log("data");

    try {
      console.log(data);
      console.log(data.useSavedAddress);
      const productData = { ...data };
      if (data.images.length > 10) throw new Error("maximo 10 fotos");
      delete productData.images;
      const response = await postNewProduct(productData);
      const {
        data: {
          productInfo: { id },
        },
      } = response;
      if (response.status !== "ok") throw new Error("no se creo");
      const formData = new FormData();
      console.log(data);
      console.log(data.images);

      console.log("id", id, +id);
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
        console.log(formData);
      }

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const filesResponse = await uploadProductPictures(formData, config, id);
      filesResponse.status === "ok" && setAllFalse();
    } catch (err) {
      console.log(err);
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response?.data?.error);
    }
  };

  return { submitInfo };
}

export default useNewProductForm;
