import { useContext } from "react";
import LoginForm from "../../components/users/loginForm/LoginForm";
import "./style.css";
import { PopUpContext } from "../../context/popUpContext";

function LoginPopUp() {
  const { showPopUp, setShowPopUp } = useContext(PopUpContext);
  return <div>{showPopUp ? <LoginForm /> : null}</div>;
}

export default LoginPopUp;
