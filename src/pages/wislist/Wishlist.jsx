import useWishlist from "../../hooks/useWishlist";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div>
      <ul>
        {wishlist.map((product) => (
          <>
            <h1 key={product.id}>{product.name}</h1>
            {/* <img src={} alt="" /> */}
          </>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
