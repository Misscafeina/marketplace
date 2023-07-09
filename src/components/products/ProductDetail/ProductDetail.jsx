import "./style.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import {
  findProductsByQuery,
  getAnyUserProfile,
  postNewDeal,
} from "../../../services";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
  const [homePage, setHomePage] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/wishlist" ||
      location.pathname === "/profile"
    ) {
      setHomePage(true);
    } else {
      setHomePage(false);
      const getRelatedProducts = async () => {
        const related = await findProductsByQuery(product.name);

        const array = [];
        const productsArray = [];
        for (let i = 0; i < 3; i++) {
          const randomNum = Math.floor(
            Math.random() * related.data.products.length
          );
          const exists = array.find((a) => a === randomNum);
          if (!!exists || related.data.products[randomNum]?.id === product.id) {
            related.data.products.length > 3 ? i-- : null;
          } else {
            array.push(randomNum);
            productsArray.push(related.data.products[randomNum]);
          }
        }
        setRelatedProducts(productsArray);
      };
      getRelatedProducts();
    }
  }, [id]);

  useEffect(() => {
    if (location.pathname === `/product/${id}`) {
      if (userInfo.username === product.usernameVendor) {
        setOwner(true);
      } else {
        setOwner(false);
      }
    }
  }, [userInfo]);

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

  return (
    <div className="product-detail">
      <h2 className="product-title">{product?.name}</h2>
      {homePage ? null : (
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
        </div>
      )}

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
      {homePage ? null : (
        <p className="product-description">{product?.description}</p>
      )}
      {homePage ? null : <p>{product?.state}</p>}
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

      {homePage ? null : (
        <>
          <div className="related-products">
            {relatedProducts.length > 0 ? (
              <>
                <h3>Productos que quizás te interesen:</h3>
                <ul>
                  {relatedProducts.map((p) => {
                    const path = `/product/${p.id}`;
                    return (
                      <li key={p.id}>
                        <Link to={path}>{p.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
          </div>

          {owner && (
            <div>
              <Link to="/editproduct/20">
                <button className="chat-button">Editar producto</button>
              </Link>
            </div>
          )}
        </>
      )}
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
