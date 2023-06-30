// import { useWishlist } from "../../context/WishlistContext";
import PropTypes from "prop-types";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";

function Wishlist({ wishlist, wishlistArray, handleAddRemoveFromWishlist }) {
  return (
    <div>
      <ProductsContainer
        products={wishlist}
        wishlistArray={wishlistArray}
        handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
      />
    </div>
  );
}
Wishlist.propTypes = {
  wishlist: PropTypes.array,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};

export default Wishlist;
