import { useState, useContext } from "react";
import {
  editProduct,


} from "../services/productsService";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { PopUpContext } from "../context/popUpContext";
import { useError } from "../context/ErrorContext";

function useUpdateProductForm() {
  const navigate = useNavigate();
  const [productInfo, setproductInfo] = useState({});
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const { id } = useParams();
  // useEffect(() => {
  //   const getProductInfo = async () => {

  //   };
  //   getProductInfo();
  // }, []);
  const submitInfo = async (data) => {
    try {
      const config = {
        header: {
          "content-Type": "application/json",
        },
      };
      await editProduct(data, config, id);
      navigate(`/product/${id}`);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };
  return {
    actions: { setproductInfo, submitInfo },
  };
}

export default useUpdateProductForm;
