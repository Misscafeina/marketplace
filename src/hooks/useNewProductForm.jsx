import { useNavigate } from "react-router";
import { postNewProduct } from "../services/productsService";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";

function useNewProductForm() {
  const { setNewProductActive } = useContext(PopUpContext);
  const navigate = useNavigate();
  const submitInfo = async (data) => {
    try {
      const response = await postNewProduct(data);
      if (response.status === "ok") setNewProductActive(false);
      navigate("/newproduct");
    } catch (error) {
      console.error(error.message);
    }
  };

  return { submitInfo };
}

export default useNewProductForm;
