import PropTypes from "prop-types";
import ProductContainer from "../productContainer/ProductContainer";

const ProductsContainer = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product) => {
          return <ProductContainer key={product.id} product={product} />;
        })}
      </ul>
    </>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default ProductsContainer;
