import { useContext, useEffect } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { PopUpContext } from "../../../context/popUpContext";
import EditPasswordButton from "../../inputs/EditPasswordButton";
import EditFieldButton from "../../inputs/EditFieldButton";
import UpdateUserPopUp from "../../../pages/UpdateUserPopUp/UpdateUserPopUp";

UserProfile.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
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
    userData: {
      username,
      name,
      lastName,
      avatarUrl,
      bio,
      address,
      city,
      region,
      country,
      avgScore,
    },
  } = userInfo;

  return (
    <article className="userProfile">
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
      <h2>
        {username}
        <span>
          <EditPasswordButton
            setSelectedField={setSelectedField}
            field={"password"}
            setEditProfileActive={setEditProfileActive}
            setShowPopUp={setShowPopUp}
          />
        </span>
      </h2>
      <section>
        <h3>
          Avatar{" "}
          <span>
            <EditFieldButton
              setSelectedField={setSelectedField}
              field={"avatar"}
              setEditProfileActive={setEditProfileActive}
              setShowPopUp={setShowPopUp}
            />
          </span>
        </h3>
      </section>
      <img src={avatarUrl} alt={username} />
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
      <h3>Valoración media: {avgScore}</h3>
      <section>
        <h3>
          Dirección{" "}
          <span>
            <EditFieldButton
              setSelectedField={setSelectedField}
              field={"address"}
              setEditProfileActive={setEditProfileActive}
              setShowPopUp={setShowPopUp}
            />
          </span>
        </h3>
        <h4>Dirección: {address}</h4>
        <h4>Ciudad: {city}</h4>
        <h4>Provincia: {region}</h4>
        <h4>País: {country}</h4>
      </section>
    </article>
  );
}

export default UserProfile;
