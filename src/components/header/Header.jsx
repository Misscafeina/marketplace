import "./style.css";
import userLogo from "../../assets/userLogo.svg";
import logInLogo from "../../assets/log-in.svg";
import addProductLogo from "../../assets/plus-square.svg";
import wishListLogo from "../../assets/heart.svg";
import messageLogo from "../../assets/message-circle.svg";
import registerUserLogo from "../../assets/user-plus.svg";
import searchLogo from "../../assets/search.svg";
import useHeader from "../../hooks/useHeader";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";
import LoginForm from "../users/loginForm/LoginForm";
import RegisterForm from "../users/registerForm/RegisterForm";
import NewProductForm from "../products/newProductForm/NewProductForm";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { returnHome, userLog, wishList, messages, search, addNewProduct } =
    useHeader();
  const { showPopUp, loginActive, registerActive, newProductActive } =
    useContext(PopUpContext);
  const { logout } = useAuth();
  return (
    <header>
      {loginActive && <div>{showPopUp ? <LoginForm /> : null}</div>}
      {registerActive && <div>{showPopUp ? <RegisterForm /> : null}</div>}
      {newProductActive && <div>{showPopUp ? <NewProductForm /> : null}</div>}
      <h1 onClick={returnHome}>
        <img src="/logo.png" alt="logoweb" />
      </h1>
      <nav className="headerNav">
        <ul>
          <li>
            <button
              className="btn"
              onClick={() => {
                userLog();
              }}
            >
              <img src={userLogo} alt="user" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                wishList();
              }}
            >
              <img src={wishListLogo} alt="wishList" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                messages();
              }}
            >
              <img src={messageLogo} alt="message button" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                search();
              }}
            >
              <img src={searchLogo} alt="search button" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                addNewProduct();
              }}
            >
              <img src={addProductLogo} alt="Add new product button" />
            </button>
          </li>{" "}
          <li>
            <button
              className="btn"
              onClick={() => {
                logout();
              }}
            >
              <img src={logInLogo} alt="Logout button" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
