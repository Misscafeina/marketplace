import { useEffect, useState } from "react";
import { USER_INFO } from "../../../utils/constants";
import { editOwnProfile } from "../../../services/userService";

function UpdateUserForm() {
  const [avatarUrl, setAvatarUrl] = useState();
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [address, setAddress] = useState(null);

  const [city, setCity] = useState(null);

  useEffect(() => {
    setAvatarUrl(USER_INFO?.avatar);
  }, []);

  const handleImageChange = (e) => {
    const target = e.target.files[0];
    const url = URL.createObjectURL(target);
    setAvatarUrl(url);
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleLastnameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRepeatPassword(value);
  };
  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };
  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegion(value);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  // Función para llamar a backend y guardar la imagen localmente
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    for (const value of formData.keys()) {
      console.log(value);
    }
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await editOwnProfile(formData, config);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          onChange={handleNameChange}
        />
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          id="name"
          onChange={handleLastnameChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="text"
          name="password"
          value={password}
          id="password"
          onChange={handlePasswordChange}
        />
        <label htmlFor="repeatPassword">Repetir Contraseña</label>
        <input
          type="text"
          name="repeatPassword"
          value={repeatPassword}
          id="repeatPassword"
          onChange={handleRepeatPasswordChange}
        />
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          name="address"
          value={address}
          id="address"
          onChange={handleAddressChange}
        />
        <label htmlFor="city">Ciudad</label>
        <input
          type="text"
          name="city"
          value={city}
          id="city"
          onChange={handleCityChange}
        />
        <label htmlFor="region">Provincia</label>
        <input
          type="text"
          name="region"
          value={region}
          id="region"
          onChange={handleRegionChange}
        />
        <label htmlFor="country">País</label>
        <input
          type="text"
          name="country"
          value={country}
          id="country"
          onChange={handleCountryChange}
        />
        <input type="file" name="myFile" onChange={handleImageChange} />
        <button>ENVIAR</button>
        {avatarUrl && (
          <div>
            <img src={avatarUrl} alt="avatar" height="150" />
          </div>
        )}
      </form>
    </>
  );
}

export default UpdateUserForm;
