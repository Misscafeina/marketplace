import "./style.css";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { PopUpContext } from "../../../context/PopUpContext";
import EditFieldButton from "../../inputs/EditFieldButton";
import EditPasswordButton from "../../inputs/EditPasswordButton";
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

  const {
    username,
    avatarUrl,
    bio,
    name,
    lastName,
    address,
    city,
    region,
    country,
  } = userInfo.userData;

  return (
    <>
      <article className="userProfile">
        {showPopUp ? (
          <UpdateUserPopUp
            selectedField={selectedField}
            setUserInfo={setUserInfo}
          />
        ) : null}
        <div className="firstContainer">
          <div className="avatarContainer">
            <img src={avatarUrl} alt={username} />
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
                <span>
                  <EditFieldButton
                    setSelectedField={setSelectedField}
                    field={"avatar"}
                    setEditProfileActive={setEditProfileActive}
                    setShowPopUp={setShowPopUp}
                  />
                </span>
                <span>
                  <EditPasswordButton
                    setSelectedField={setSelectedField}
                    field={"password"}
                    setEditProfileActive={setEditProfileActive}
                    setShowPopUp={setShowPopUp}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="containerProfile">
          <div className="editContainer">
            <div>
              <h3>
                Bio:
                <span>
                  <EditFieldButton
                    setSelectedField={setSelectedField}
                    field={"bio"}
                    setEditProfileActive={setEditProfileActive}
                    setShowPopUp={setShowPopUp}
                  />
                </span>
              </h3>
              <p>{bio}</p>
            </div>
            <h3>
              Nombre: {name}
              <span>
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"name"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </h3>
            <h3>
              Apellidos: {lastName}
              <span>
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"lastName"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </h3>
            {/* <h3>Contraseña:</h3> */}
          </div>
          <div className="editContainer">
            <h3>Dirección:</h3>
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
    </>
  );
}

export default UserProfile;
