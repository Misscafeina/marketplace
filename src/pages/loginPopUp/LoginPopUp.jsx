import { useContext } from "react";
import LoginForm from "../../components/users/loginForm/LoginForm";
import "./style.css";
import { PopUpContext } from "../../context/popUpContext";
import RegisterForm from "../../components/users/registerForm/RegisterForm";

function LoginPopUp() {
  const { showPopUp, loginActive, registerActive } = useContext(PopUpContext);

  if (loginActive) {
    return <div>{showPopUp ? <LoginForm /> : null}</div>;
  } else if (registerActive) {
    return <div>{showPopUp ? <RegisterForm /> : null}</div>;
  }
}

export default LoginPopUp;
