import PropTypes from "prop-types";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./style.css";

const ProductContainer = ({ product }) => {
  return (
    <div className="product-container">
      <ProductDetail product={product} />
    </div>
  );
};

ProductContainer.propTypes = { product: PropTypes.object };

export default ProductContainer;
