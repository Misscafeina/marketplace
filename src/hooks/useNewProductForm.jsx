import { useNavigate } from "react-router";
import { postNewProduct } from "../services/productsService";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";

function useNewProductForm() {
  const { setNewProductActive, setShowPopUp } = useContext(PopUpContext);

  const submitInfo = async (data) => {
    try {
      const response = await postNewProduct(data);
      if (response.status === "ok") {
        setNewProductActive(false);
        setShowPopUp(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return { submitInfo };
}

export default useNewProductForm;
