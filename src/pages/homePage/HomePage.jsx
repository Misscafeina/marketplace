import { useEffect, useState } from "react";
import {
  findProductsByQuery,
  getProducts,
  getProductsByName,
} from "../../services/";
import PropTypes from "prop-types";
import "./style.css";
import Background from "../../components/background/Background";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

function HomePage({
  wishlistArray,
  handleAddRemoveFromWishlist,
  handleProductChanges,
  products,
  setProducts,
  locationLat,
  locationLong,
}) {
  const { input } = useSearch();

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
    </>
  );
}
HomePage.propTypes = {
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
  handleProductChanges: PropTypes.func,
  locationLat: PropTypes.number,
  locationLong: PropTypes.number,
};

export default HomePage;
