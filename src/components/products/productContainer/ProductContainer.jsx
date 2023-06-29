import PropTypes from "prop-types";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnyUserProfile } from "../../../services";

const ProductContainer = ({
  product,
  wishlistArray,
  handleAddRemoveFromWishlist,
}) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const getUserId = async () => {
      if (userInfo) {
        const response = await getAnyUserProfile(userInfo.username);
        setUserId(response.data.userData.id);
      }
    };
    getUserId();
  }, [userInfo]);
  const handleProductClick = (e) => {
    const id = e.currentTarget.id;
    const url = window.location.href;
    console.log(e.target.localName);
    if (
      e.target.localName === "button" ||
      e.target.localName === "svg" ||
      e.target.localName === "path"
    ) {
    } else if (url !== `http://localhost:5173/product/${id}`) {
      navigate(`/product/${id}`);
      if (userId === product.idUser) console.log("Este producto es tuyo"); //Aqui va la logica de editar producto
    }
  };
  return (
    <li
      className="product-container"
      key={product.id}
      id={product.id}
      onClick={(e) => {
        handleProductClick(e);
      }}
    >
      <ProductDetail
        product={product}
        wishlistArray={wishlistArray}
        handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
      />
    </li>
  );
};

ProductContainer.propTypes = {
  product: PropTypes.object,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
};

export default ProductContainer;
