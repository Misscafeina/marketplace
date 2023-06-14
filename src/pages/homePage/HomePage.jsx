import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService";
import "./style.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const requestProducts = async () => {
      const response = await getProducts();
      setProducts(response.data.products);
      console.log(response);
    };
    requestProducts();
  }, []);
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
