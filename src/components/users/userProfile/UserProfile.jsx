import "./style.css";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { PopUpContext } from "../../../context/PopUpContext";
import EditFieldButton from "../../inputs/EditFieldButton";
import UpdateUserPopUp from "../../../pages/UpdateUserPopUp/UpdateUserPopUp";
import StarRating from "../../products/ProductDescription-pendiente/StarRating";
import SellerRatings from "../../products/ProductDescription-pendiente/SellerRatings";
import { BiSolidStarHalf } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

UserProfile.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
  selectedField: PropTypes.string,
  setUserInfo: PropTypes.func,
};

function UserProfile({
  userInfo,
  setSelectedField,
  selectedField,
  setUserInfo,
}) {
  const { setEditProfileActive, editProfileActive, showPopUp, setShowPopUp } =
    useContext(PopUpContext);

  const { username, avatarUrl, address, city, region, country } =
    userInfo.userData;

  const [avatarImage, setAvatarImage] = useState(avatarUrl);
  const [password, setPassword] = useState(""); // Estado para la contraseña

  const handleImageChange = () => {
    const newImage = prompt("Introduce la URL de la nueva imagen:");
    if (newImage) {
      setAvatarImage(newImage);
    }
  };

  const handlePasswordChange = () => {
    const newPassword = prompt("Introduce la nueva contraseña:");
    if (newPassword) {
      setPassword(newPassword);
    }
  };

  const handleLocationChange = () => {
    const newLocation = prompt("Introduce la nueva dirección:");
    if (newLocation) {
      setPassword(newLocation);
    }
  };

  return (
    <article className="userProfile">
      <div className="firstContainer">
        <div className="avatarContainer">
          <img src={avatarImage} alt={username} />
          <ul className="userInfo">
            <li>
              <h2>{username}</h2>
            </li>
            <li className="ratings">
              <BiSolidStarHalf />
              <StarRating stars={5} />
              <span>({5})</span>
            </li>
            <li>
              <button className="editButton" onClick={handleImageChange}>
                Cambiar imagen
              </button>
            </li>
          </ul>
        </div>
        <div className="location">
          <MdOutlineLocationOn />
          <span>Navas de Tolosa, 8 .28013. Madrid. Spain</span>
        </div>
      </div>
      <div className="container">
        <div className="editContainer">
          <h3>Contraseña:</h3>
          <button className="editButton" onClick={handlePasswordChange}>
            Cambiar contraseña
          </button>
          {password && <p>Nueva contraseña: {password}</p>}
        </div>
        <div className="editContainer">
          <h3>Dirección:</h3>
          <button className="editButton" onClick={handleLocationChange}>
            Cambia la Dirección
          </button>
          <h4>{address}</h4>
          <h4>{city}</h4>
          <h4>{region}</h4>
          <h4>{country}</h4>
          <EditFieldButton
            setSelectedField={setSelectedField}
            field={"address"}
            setEditProfileActive={setEditProfileActive}
            setShowPopUp={setShowPopUp}
          />
        </div>
      </div>
      <div className="container">
        <div className="salesItem">
          <h3>Compras</h3>
          {/* Aquí puedes agregar el contenido de las compras */}
        </div>
        <div className="salesItem">
          <h3>Ventas</h3>
          {/* Aquí puedes agregar el contenido de las ventas */}
        </div>
        <div className="salesItem">
          <h3>Valoraciones de Vendedores</h3>
          <SellerRatings />
        </div>
      </div>
      {editProfileActive && (
        <div>
          {showPopUp ? (
            <UpdateUserPopUp
              selectedField={selectedField}
              setUserInfo={setUserInfo}
            />
          ) : null}
        </div>
      )}
    </article>
  );
}

export default UserProfile;
