import {
  postNewProduct,
  uploadProductPictures,
} from "../services/productsService";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";
import { useError } from "../context/ErrorContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useApp from "./useApp";

function useNewProductForm() {
  const { setErrorMessage, errorMessage } = useError();
  const navigate = useNavigate();
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { handleProductChanges } = useApp();
  const submitInfo = async (data) => {
    try {
      if (!data.images[0]) throw new Error("Debes incluir al menos 1 foto");
      const productData = { ...data };
      if (data.images.length > 10)
        throw new Error("El máximo son 10 fotos por producto");
      delete productData.images;
      const response = await postNewProduct(productData);
      const {
        data: {
          productInfo: { id },
        },
      } = response;
      if (response.status !== "ok") throw new Error(response?.data?.error);
      const formData = new FormData();

      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const filesResponse = await uploadProductPictures(formData, config, id);
      handleProductChanges();
      filesResponse.status === "ok" && navigate(`/product/${id}`);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response?.data?.error || err.message);
    }
  };

  return { submitInfo };
}

export default useNewProductForm;
