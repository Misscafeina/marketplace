import PropTypes from "prop-types";
import ProductContainer from "../productContainer/ProductContainer";
import "./style.css";

const ProductsContainer = ({ products }) => {
  return (
    <ul className="products-container">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductContainer product={product} />
          </li>
        );
      })}
    </ul>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default ProductsContainer;
