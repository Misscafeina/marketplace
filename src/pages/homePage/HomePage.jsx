import { useEffect, useState } from "react";
import { getProducts } from "../../services/";
import "./style.css";
import Background from "../../components/background/Background";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";

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
    <>
      <Background />
      <ProductsContainer products={products} />
    </>
  );
}

export default HomePage;
