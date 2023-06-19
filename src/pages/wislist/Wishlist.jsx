// import { useWishlist } from "../../context/WishlistContext";
import PropTypes from "prop-types";
Wishlist.propTypes = {
  wishlist: PropTypes.arr,
};

function Wishlist({ wishlist }) {
  console.log(wishlist);
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

export default Wishlist;
