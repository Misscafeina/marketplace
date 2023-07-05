import "./style.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { postNewDeal } from "../../../services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PopUpContext } from "../../../context/popUpContext";
import { useError } from "../../../context/ErrorContext";

const ProductDetail = ({
  product,
  wishlistArray,
  handleAddRemoveFromWishlist,
  setProducts,
  products,
  handleProductChanges,
}) => {
  const navigate = useNavigate();
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const handleBuyButton = async () => {
    try {
      const data = await postNewDeal(product?.id);
      data.status === "ok" && handleProductChanges();
      const updatedProducts = products.filter((item) => item.id !== product.id);
      const {
        data: { id: idDeal },
      } = data;
      setProducts([...updatedProducts]);
      navigate(`/deals/${idDeal}`);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(product);

  return (
    <div className="product-detail">
      <h2 className="product-title">{product?.name}</h2>
      <div className="product-rating">
        <Rating
          className="rating"
          initialRating={
            product?.avgReviewsVendor
          } /* Si el initialRating tiene un valor que salga el empty y el full del color amarillo del css y sino, que los bordes salgan en gris (#888)*/
          emptySymbol={<span className="rating-empty">&#9734;</span>}
          fullSymbol={<span className="rating-full">&#9733;</span>}
          readonly
        />
        {product?.avgReviewsVendor}
      </div>

      <p className="product-price">
        {product?.price}
        {" €"}
      </p>

      <div className="product-carousel">
        {}
        <Slider {...settings}>
          {product?.images?.map((image, index) => {
            return (
              <div key={index} className="product-image">
                <img src={image} alt={product?.name} />
              </div>
            );
          })}
        </Slider>
      </div>
      <p className="product-description">{product?.description}</p>
      <div className="product-buttons">
        <button className="buy-button" onClick={handleBuyButton}>
          Comprar
        </button>
        <button
          className="fav-button"
          onClick={() => handleAddRemoveFromWishlist(product.id)}
        >
          {wishlistArray?.includes(product.id) ? (
            <FavoriteIcon className="favorite" />
          ) : (
            <FavoriteBorderIcon className="no-favorite" />
          )}
        </button>
      </div>

      <div className="related-products">
        <h3>You may also like</h3>
        <ul>
          {/* Lista de productos relacionados */}
          <li>Producto relacionado 1</li>
          <li>Producto relacionado 2</li>
          <li>Producto relacionado 3</li>
        </ul>
      </div>
      <div className="seller-ratings">
        <h3>Valoraciones del Vendedor</h3>
        <ul>
          {/* Lista de valoraciones del vendedor */}
          <li>Valoración 1</li>
          <li>Valoración 2</li>
          <li>Valoración 3</li>
        </ul>
      </div>
      <div>
        <Link to="/chat">
          <button className="chat-button">Chat</button>
        </Link>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
  setProducts: PropTypes.func,
  products: PropTypes.array,
  handleProductChanges: PropTypes.func,
};

export default ProductDetail;
