import { useEffect, useState } from "react";
import {
  findProductsByQuery,
  getProducts,
  getProductsByName,
} from "../../services/";
import PropTypes from "prop-types";
import "./style.css";
import Background from "../../components/background/Background";
import FooterHome from "../../components/footerhome/FooterHome";

import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

function HomePage({
  wishlistArray,
  handleAddRemoveFromWishlist,
  handleProductChanges,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const { input } = useSearch();

  useEffect(() => {
    const { category, price, location } = Object.fromEntries(searchParams);
    if (name || category || price || location) {
      const getProducts = async () => {
        const name = input;
        const result = await findProductsByQuery(name, category, price);
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
        setProducts={setProducts}
        handleProductChanges={handleProductChanges}
      />
      <FooterHome />
    </>
  );
}
HomePage.propTypes = {
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
  handleProductChanges: PropTypes.func,
};

export default HomePage;
