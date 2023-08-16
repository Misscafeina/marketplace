import { useParams } from "react-router-dom";
import ProductContainer from "../../components/products/productContainer/ProductContainer";
import { findProductsByQuery, getProductDetails } from "../../services";
import "./style.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SingleProduct({
  wishlistArray,
  handleAddRemoveFromWishlist,
  handleProductChanges,
  products,
}) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await getProductDetails(id);
      setProduct(response.data);
      response.status === "ok" ? setProduct(response.data) : null;
    };
    loadProduct();
  }, [id]);

  return (
    <div className="singleProduct">
      <ProductContainer
        product={product}
        products={products}
        handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
        wishlistArray={wishlistArray}
        handleProductChanges={handleProductChanges}
      />
    </div>
  );
}
SingleProduct.propTypes = {
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};

export default SingleProduct;
