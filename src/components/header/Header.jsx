import "./style.css";
import userLogo from "../../assets/userLogo.svg";
import logInLogo from "../../assets/log-in.svg";
import addProductLogo from "../../assets/plus-square.svg";
import wishListLogo from "../../assets/heart.svg";
import useHeader from "../../hooks/useHeader";
import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import LoginForm from "../users/loginForm/LoginForm";
import RegisterForm from "../users/registerForm/RegisterForm";
import { useAuth } from "../../context/AuthContext";
import Search from "../search/Search";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import ErrorPopUp from "../errorPopUp/errorPopUp";
import Navbar from "../navbar/Navbar";

function Header() {
  const { isAuthenticated } = useAuth();
  const { returnHome, userLog, wishList, addNewProduct } = useHeader();
  const { showPopUp, loginActive, registerActive, errorActive } =
    useContext(PopUpContext);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header>
      {loginActive && <div>{showPopUp ? <LoginForm /> : null}</div>}
      {registerActive && <div>{showPopUp ? <RegisterForm /> : null}</div>}
      {errorActive && <div>{showPopUp ? <ErrorPopUp /> : null}</div>}

      <h1 className="logo" onClick={returnHome}>
        <img src="/logo.png" alt="logoweb" className="Logo" />
      </h1>
      {location.pathname !== "/" && window.innerWidth > 840 ? <Search /> : null}
      {window.innerWidth <= 440 ? (
        <Navbar />
      ) : (
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
            <li>
              <button
                className="btn"
                onClick={() => {
                  addNewProduct();
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
      )}
    </header>
  );
}

export default Header;
