import PropTypes from "prop-types";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProductContainer = ({ product }) => {
  const navigate = useNavigate();
  const handleProductClick = (e) => {
    const id = e.currentTarget.id;
    navigate(`/product/${id}`);
  };
  return (
    <li
      className="product-container"
      key={product.id}
      id={product.id}
      onClick={handleProductClick}
    >
      <ProductDetail product={product} />
    </li>
  );
};

ProductContainer.propTypes = { product: PropTypes.object };

export default ProductContainer;
