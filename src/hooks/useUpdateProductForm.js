import { useState, useEffect } from "react";
import { editProduct, getProducts } from "../services/productsService";
import { useNavigate } from "react-router";

function useUpdateProductForm() {
  const navigate = useNavigate();
  const [productInfo, setproductInfo] = useState({});
  useEffect(() => {
    const getProductInfo = async () => {
      const {
        data: { productData },
      } = await getProducts();
      setproductInfo(productData);
    };
    getProductInfo();
  }, []);
  const submitInfo = async (data, config) => {
    try {
      console.log(data);
      const removeEmptyFields = (data) => {
        for (const field in data) {
          if (!data[field]) {
            delete data[field];
          }
        }
      };
      removeEmptyFields(data);
      console.log(data);
      await editProduct(data, config);
      navigate("/newproduct");
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };
  return {
    state: { productInfo },
    actions: { setproductInfo, submitInfo },
  };
}

export default useUpdateProductForm;
