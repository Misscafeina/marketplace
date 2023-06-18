import "./style.css";
import { useContext } from "react";
import LoginForm from "../../components/users/loginForm/LoginForm";
import "./style.css";
import { PopUpContext } from "../../context/popUpContext";
import RegisterForm from "../../components/users/registerForm/RegisterForm";
import NewProductForm from "../../components/products/newProductForm/NewProductForm";

function NewProductPage() {
  const { showPopUp, loginActive, registerActive, newProductActive } =
    useContext(PopUpContext);

  if (loginActive) {
    return <div>{showPopUp ? <LoginForm /> : null}</div>;
  } else if (registerActive) {
    return <div>{showPopUp ? <RegisterForm /> : null}</div>;
  } else if (newProductActive) {
    return <div> {showPopUp ? <NewProductForm /> : null}</div>;
  }
  return (
    <>
      <NewProductForm />
    </>
  );
}

export default NewProductPage;
