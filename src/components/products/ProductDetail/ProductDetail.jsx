import "./style.css";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link, useParams} from "react-router-dom";
import {findProductsByQuery, postNewDeal} from "../../../services";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {PopUpContext} from "../../../context/popUpContext";
import {useError} from "../../../context/ErrorContext";
import {Rating} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const ProductDetail = ({
                           product: {avgReviewsVendor, description, images, name, price, state, usernameVendor},
                           wishlistArray,
                           handleAddRemoveFromWishlist,
                           handleProductChanges,
                       }) => {
    const navigate = useNavigate();
    const {setShowPopUp, setErrorActive} = useContext(PopUpContext);
    const {setErrorMessage} = useError();
    const [homePage, setHomePage] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const {id} = useParams();
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
                const related = await findProductsByQuery(name);
                const array = [];
                const productsArray = [];
                for (let i = 0; i < 3; i++) {
                    const randomNum = Math.floor(
                        Math.random() * related.data.products.length
                    );
                    const exists = array.find((a) => a === randomNum);
                    if (!!exists || related.data.products[randomNum]?.id === id) {
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
            if (userInfo?.username === usernameVendor) {
                setOwner(true);
            } else {
                setOwner(false);
            }
        }
    }, [userInfo]);

    const handleBuyButton = async () => {
        try {
            const data = await postNewDeal(id);
            data.status === "ok" && handleProductChanges();
            const {
                data: {id: idDeal},
            } = data;
            navigate(`/deals/${idDeal}`);
        } catch (err) {
            setShowPopUp(true);
            setErrorActive(true);
            setErrorMessage(err.response?.data?.error);
        }
    };

    return (
        <div className="product-detail">
            <h2 className="product-title">{name}</h2>
            {
                <div>
                    <Rating
                        name={usernameVendor}
                        value={avgReviewsVendor}
                        readOnly
                    />
                    <p>{usernameVendor}</p>
                </div>
            }

            <p className="product-price">
                {price}
                {" €"}
            </p>
            <div className="product-carousel">
                <Carousel autoPlay={false}>
                    {images?.map((image, index) => {
                        return (
                            <div key={index} className="product-image">
                                <img src={image} alt={name}/>
                            </div>
                        );

                    })}
                </Carousel>
            </div>

            {homePage ? null : (
                <p className="product-description">{description}</p>
            )}
            {homePage ? null : <p>{state}</p>}
            <div className="product-buttons">
                <button className="buy-button" onClick={handleBuyButton}>
                    Comprar
                </button>
                <button
                    className="fav-button"
                    onClick={() => handleAddRemoveFromWishlist(id)}
                >
                    {wishlistArray?.includes(id) ? (
                        <FavoriteIcon className="favorite"/>
                    ) : (
                        <FavoriteBorderIcon className="no-favorite"/>
                    )}
                </button>
            </div>

            {homePage ? null : (
                <>
                    <div className="related-products">
                        {relatedProducts.length > 0 && (
                            <>
                                <h3>Productos que quizás te interesen:</h3>
                                <ul>
                                    {relatedProducts.map((p) => {
                                        const path = `/product/${p?.id}`;
                                        return (
                                            <li key={p?.id}>
                                                <Link to={path}>{p?.name}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        )}
                    </div>

                    {owner && (
                        <div>
                            <Link to={`/editproduct/${id}`}>
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
    handleProductChanges: PropTypes.func,
};

export default ProductDetail;
