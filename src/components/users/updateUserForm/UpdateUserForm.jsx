import useUpdateUserForm from "./useUpdateUserForm";
import "./style.css";

function UpdateUserForm() {
  const {
    state: {
      avatarUrl,
      name,
      lastname,
      password,
      repeatPassword,
      country,
      region,
      address,
      city,
      bio,
    },
    actions: {
      handleAddressChange,
      handleCityChange,
      handleCountryChange,
      handleImageChange,
      handleLastnameChange,
      handleNameChange,
      handlePasswordChange,
      handleRepeatPasswordChange,
      handleRegionChange,
      handleOnSubmit,
      handleBioChange,
    },
  } = useUpdateUserForm();

  return (
    <section>
      <h2>cambiar info</h2>
      <form method="post" onSubmit={handleOnSubmit} className="formContainer">
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
          id="lastname"
          onChange={handleLastnameChange}
        />

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          value={bio}
          id="bio"
          onChange={handleBioChange}
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
      <h2>cambiar Contraseña</h2>
      <form action="post" onSubmit={handleOnSubmit} className="formContainer">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={handlePasswordChange}
        />
        <label htmlFor="repeatPassword">Repetir Contraseña</label>
        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          id="repeatPassword"
          onChange={handleRepeatPasswordChange}
        />
        <button>cambiar Contraseña</button>
      </form>
    </section>
  );
}

export default UpdateUserForm;
