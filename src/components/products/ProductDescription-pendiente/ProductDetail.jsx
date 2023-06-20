import { useState } from 'react';
import Slider from 'react-slick';
import StarRating from './StarRating';
// import MessageSeller from './MessageSeller';
import RelatedProducts from './RelatedProducts';
import SellerRatings from './SellerRatings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";

const ProductDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const FavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const MessageClick = () => {
    // Lógica envío de mensaje al vendedor
    alert('Mensaje enviado al vendedor');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="product-detail">
      <h2>Título del Producto</h2>
      <div className="product-rating">
        <StarRating rating={4.5} />
      </div>
      <p>Precio</p>
      <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={MessageClick}>Enviar Mensaje al Vendedor</button>
      <button onClick={FavoriteClick}>
        {isFavorite ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
      </button>
      <div className="product-carousel">
        <Slider {...settings}>
          <div>
            <img src="imagen1.jpg" alt="Imagen 1" />
          </div>
          <div>
            <img src="imagen2.jpg" alt="Imagen 2" />
          </div>
          <div>
            <img src="imagen3.jpg" alt="Imagen 3" />
          </div>
        </Slider>
      </div>
      <RelatedProducts />
      <SellerRatings />
    </div>
  );
};

export default ProductDetail;
