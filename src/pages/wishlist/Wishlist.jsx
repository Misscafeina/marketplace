// import { useWishlist } from "../../context/WishlistContext";
import PropTypes from "prop-types";

function Wishlist({ wishlist }) {
  return (
    <div>
      <ul>
        {wishlist.map((product) => (
          <h1 key={product.id}>{product.name}</h1>
        ))}
      </ul>
    </div>
  );
}
Wishlist.propTypes = {
  wishlist: PropTypes.array,
};

export default Wishlist;
