import { useEffect, useState } from "react";
import { getProducts } from "../../services/";
import PropTypes from "prop-types";
import "./style.css";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";

function HomePage({ wishlistArray, handleAddRemoveFromWishlist }) {
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
    <ProductsContainer
      products={products}
      wishlistArray={wishlistArray}
      handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
    />
  );
}
HomePage.propTypes = {
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};
export default HomePage;
