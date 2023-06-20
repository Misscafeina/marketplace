import PropTypes from "prop-types";

const ProductContainer = ({ children }) => {
  return { children };
};

ProductContainer.propTypes = { children: PropTypes.node };

export default ProductContainer;
