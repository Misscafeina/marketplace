import { useContext, useState } from "react";
import { loginUser } from "../../../services/userService";
import { PopUpContext } from "../../../context/popUpContext";
import "./style.css";
import RegisterForm from "../registerForm/RegisterForm";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
  } = useContext(PopUpContext);

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
      if (response.status === "ok") setShowPopUp(false);
      console.log(showPopUp);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = () => {
    setRegisterActive(true);
    setLoginActive(false);
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
        <p>
          ¿Eres nuev@?
          <span className="register" onClick={handleRegister}>
            ¡Regístrate!
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
