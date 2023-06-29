import PropTypes from "prop-types";
import ProductContainer from "../productContainer/ProductContainer";
import "./style.css";

const ProductsContainer = ({
  products,
  wishlistArray,
  handleAddRemoveFromWishlist,
}) => {
  return (
    <ul className="products-container">
      {products.map((product) => {
        return (
          <ProductContainer
            key={product.id}
            product={product}
            wishlistArray={wishlistArray}
            handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
          />
        );
      })}
    </ul>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};

export default ProductsContainer;
