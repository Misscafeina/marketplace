import PropTypes from "prop-types";
import ProductContainer from "../productContainer/ProductContainer";
import "./style.css";

const ProductsContainer = ({ products }) => {
  return (
    <ul className="products-container">
      {products.map((product) => {
        return <ProductContainer key={product.id} product={product} />;
      })}
    </ul>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default ProductsContainer;
