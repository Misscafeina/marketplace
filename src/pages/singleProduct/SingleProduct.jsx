import { useParams } from "react-router-dom";
import ProductContainer from "../../components/products/productContainer/ProductContainer";
import { getProductDetails } from "../../services";
import "./style.css";
import { useEffect, useState } from "react";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await getProductDetails(id);
      setProduct(response.data);
      response.status === "ok" ? setProduct(response.data) : null;
    };
    loadProduct();
  }, []);

  return <ProductContainer product={product} />;
}

export default SingleProduct;
