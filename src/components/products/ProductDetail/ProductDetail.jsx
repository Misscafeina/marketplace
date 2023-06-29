import "./style.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { postNewDeal } from "../../../services";

const ProductDetail = ({
  product,
  wishlistArray,
  handleAddRemoveFromWishlist,
}) => {
  console.log(product);
  const handleBuyButton = async () => {
    const {
      data: { id: idDeal },
    } = await postNewDeal(product?.id);
    console.log(idDeal);
    // Lógica para enviar mensaje al vendedor
    alert("Mensaje enviado al vendedor");
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-detail">
      <h2 className="product-title">{product?.name}</h2>
      <div className="product-rating">
        {}
        Valoración: {}
      </div>
      <p className="product-price">
        {product?.price}
        {" €"}
      </p>
      <div className="product-carousel">
        {/* Carrusel con fotos del producto */}
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
    </div>
  );
};
ProductDetail.propTypes = {
  product: PropTypes.object,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};
export default ProductDetail;
