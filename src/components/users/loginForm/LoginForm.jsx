import { useContext, useState } from "react";
import { loginUser } from "../../../services/userService";
import { PopUpContext } from "../../../context/popUpContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showPopUp, setShowPopUp } = useContext(PopUpContext);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.statusText === "OK") setShowPopUp(false);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            value={username}
            id="username"
            name="username"
            onChange={handleUsernameChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={handlePasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
