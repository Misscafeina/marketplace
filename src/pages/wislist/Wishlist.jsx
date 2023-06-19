import { useWishlist } from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

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
