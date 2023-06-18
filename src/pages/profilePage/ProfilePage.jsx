import { useNavigate } from "react-router";
import "./style.css";

import PropTypes from "prop-types";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";
import EditFieldButton from "../../components/inputs/EditFieldButton";

ProfilePage.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
};

function ProfilePage({ userInfo, setSelectedField }) {
  const { setEditProfileActive } = useContext(PopUpContext);
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
  console.log(userInfo);
  return (
    <article>
      <h2>{username}</h2>
      <section>
        <h3>
          Avatar{" "}
          <span>
            <EditFieldButton
              setSelectedField={setSelectedField}
              field={"avatar"}
              setEditProfileActive={setEditProfileActive}
              targetPath={"/editprofile"}
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
              targetPath={"/editprofile"}
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
            targetPath={"/editprofile"}
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
            targetPath={"/editprofile"}
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
              targetPath={"/editprofile"}
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

export default ProfilePage;
