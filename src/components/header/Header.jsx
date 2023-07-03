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
import { PopUpContext } from "../../context/PopUpContext";
import LoginForm from "../users/loginForm/LoginForm";
import RegisterForm from "../users/registerForm/RegisterForm";
import NewProductForm from "../products/newProductForm/NewProductForm";
import { useAuth } from "../../context/AuthContext";
import Search from "../search/Search";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import ErrorPopUp from "../errorPopUp/errorPopUp";

function Header() {
  const { isAuthenticated } = useAuth();
  const { returnHome, userLog, wishList, messages, addNewProduct } =
    useHeader();
  const { showPopUp, loginActive, registerActive, errorActive } =
    useContext(PopUpContext);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(window.innerWidth);
  return (
    <header>
      {loginActive && <div>{showPopUp ? <LoginForm /> : null}</div>}
      {registerActive && <div>{showPopUp ? <RegisterForm /> : null}</div>}
      {errorActive && <div>{showPopUp ? <ErrorPopUp /> : null}</div>}

      <h1 onClick={returnHome}>
        <img src="/logo.png" alt="logoweb" />
      </h1>
      <nav className="headerNav">
        <ul>
          {location.pathname !== "/" ? (
            <li>
              <Search />
            </li>
          ) : null}
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
          {isAuthenticated && (
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
          )}
          {isAuthenticated && (
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
          )}
          <li>
            <button
              className="btn"
              onClick={() => {
                navigate("/newproduct");
              }}
            >
              <img src={addProductLogo} alt="Add new product button" />
            </button>
          </li>
          {isAuthenticated && (
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
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
