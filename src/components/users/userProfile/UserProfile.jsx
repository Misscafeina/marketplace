import "./style.css";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PopUpContext } from "../../../context/PopUpContext";
import EditFieldButton from "../../inputs/EditFieldButton";
import EditPasswordButton from "../../inputs/EditPasswordButton";
import UpdateUserPopUp from "../../../pages/UpdateUserPopUp/UpdateUserPopUp";
import Rating from "react-rating";

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
  const [userData, setUserData] = useState(userInfo.userData);
  useEffect(() => {
    setUserData(userInfo.userData);
  }, [userInfo]);
  const { setEditProfileActive, editProfileActive, showPopUp, setShowPopUp } =
    useContext(PopUpContext);

  const {
    username,
    avatarUrl,
    bio,
    name,
    lastName,
    avgScore,
    address,
    city,
    region,
    country,
  } = userData;
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
          <div>
            <img src={avatarUrl} alt={username} />
            <span>
              <EditFieldButton
                setSelectedField={setSelectedField}
                field={"avatar"}
                setEditProfileActive={setEditProfileActive}
                setShowPopUp={setShowPopUp}
              />
            </span>
          </div>
          <div className="userInfo">
            <h2>{username}</h2>
            <div className="ratings">
              <Rating
                className="rating"
                initialRating={
                  avgScore
                } /* Si el initialRating tiene un valor que salga el empty y el full del color amarillo del css y sino, que los bordes salgan en gris (#888)*/
                emptySymbol={<span className="rating-empty">&#9734;</span>}
                fullSymbol={<span className="rating-full">&#9733;</span>}
                readonly
              />
            </div>

            <span>
              <EditPasswordButton
                setSelectedField={setSelectedField}
                field={"password"}
                setEditProfileActive={setEditProfileActive}
                setShowPopUp={setShowPopUp}
              />
            </span>
          </div>
        </div>
        <div className="containerProfile">
          <div className="editContainer">
            <div>
              <h3>Nombre:</h3>
              <textarea readOnly value={name}>
                {name}
              </textarea>
              <span>
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"name"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </div>
            <div>
              <h3>Apellidos:</h3>
              <textarea readOnly value={lastName}>
                {lastName}
              </textarea>
              <span className="edituserbutton">
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"lastName"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </div>
            <div>
              <h3>Bio:</h3>
              <textarea readOnly value={bio}>
                {bio}
              </textarea>
              <span>
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"bio"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </div>
            {/* <h3>Contraseña:</h3> */}
          </div>
          <div className="editContainer direction">
            <div>
              <h3>Dirección:</h3>

              <textarea
                readOnly
                value={address + ", " + city + ", " + region + ", " + country}
              >
                {address + ", " + city + ", " + region + ", " + country}
              </textarea>
              <span>
                <EditFieldButton
                  setSelectedField={setSelectedField}
                  field={"address"}
                  setEditProfileActive={setEditProfileActive}
                  setShowPopUp={setShowPopUp}
                />
              </span>
            </div>
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
