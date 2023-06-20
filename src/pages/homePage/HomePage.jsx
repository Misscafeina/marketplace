import { useEffect, useState } from "react";
import { getProducts } from "../../services/";
import "./style.css";
import ProductDetail from "../productDescription/productDescription";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const requestProducts = async () => {
      const response = await getProducts();
      setProducts(response.products);
    };
    requestProducts();
  }, [filter]);
  return (
    <ul>
      {products.map((product) => {
        return <ProductDetail key={product.id} product={product} />;
      })}
    </ul>
  );
}
export default HomePage;
