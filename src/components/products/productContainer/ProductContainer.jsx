import PropTypes from "prop-types";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductContainer = ({ product }) => {
  return <ProductDetail product={product} />;
};

ProductContainer.propTypes = { product: PropTypes.object };

export default ProductContainer;
