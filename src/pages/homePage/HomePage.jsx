import { useEffect, useState } from "react";
import { getProducts } from "../../services/";
import "./style.css";

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
        return (
          <li key={product.id}>
            <h4>{product.name}</h4>
          </li>
        );
      })}
    </ul>
  );
}
export default HomePage;
