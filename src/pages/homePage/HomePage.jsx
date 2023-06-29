import { useEffect, useState } from "react";
import { getProducts, getProductsByName } from "../../services/";
import PropTypes from "prop-types";
import "./style.css";
import Background from "../../components/background/Background";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";
import { useSearchParams } from "react-router-dom";

function HomePage({ wishlistArray, handleAddRemoveFromWishlist }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { category, price, name, location } =
      Object.fromEntries(searchParams);
    if (name) {
      const getProducts = async () => {
        const result = await getProductsByName(name);
        setProducts(result.data.products);
      };
      getProducts();
    } else {
      const requestProducts = async () => {
        const response = await getProducts();
        setProducts(response.products);
      };
      requestProducts();
    }
  }, [searchParams]);

  return (
    <>
      <Background />
      <ProductsContainer
        products={products}
        wishlistArray={wishlistArray}
        handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
      />
    </>
  );
}
HomePage.propTypes = {
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};

export default HomePage;
