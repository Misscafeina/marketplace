import "./style.css";
import userLogo from "../../assets/userLogo.svg";
import logInLogo from "../../assets/log-in.svg";
import addProductLogo from "../../assets/plus-square.svg";
import wishListLogo from "../../assets/heart.svg";
import messageLogo from "../../assets/message-circle.svg";
import registerUserLogo from "../../assets/user-plus.svg";
import searchLogo from "../../assets/search.svg";
import useHeader from "../../hooks/useHeader";
import { useContext, useEffect } from "react";
import { PopUpContext } from "../../context/popUpContext";
import LoginForm from "../users/loginForm/LoginForm";
import RegisterForm from "../users/registerForm/RegisterForm";

function Header() {
  const { returnHome, userLog, wishList, messages, search, addNewProduct } =
    useHeader();
  const { showPopUp, setShowPopUp, loginActive, registerActive } =
    useContext(PopUpContext);

  useEffect(() => {
    console.log(showPopUp);
  }, [showPopUp]);

  return (
    <header>
      <h1 onClick={returnHome}>RetroTech</h1>
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
            {loginActive && <div>{showPopUp ? <LoginForm /> : null}</div>}
            {registerActive && <div>{showPopUp ? <RegisterForm /> : null}</div>}
          </li>
          {/* <li>
            <button>
              <img src={logInLogo} alt="login button" />
            </button>
          </li> */}
          {/* <li>
            <button>
              <img src="" alt="User photo" />{" "}
              Aquí debería ir la foto del usuario
            </button>
          </li>  */}
          <li>
            <button
              className="btn"
              onClick={(e) => {
                wishList();
              }}
            >
              <img src={wishListLogo} alt="wishList" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={(e) => {
                messages();
              }}
            >
              <img src={messageLogo} alt="message button" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={(e) => {
                search();
              }}
            >
              <img src={searchLogo} alt="search button" />
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={(e) => {
                addNewProduct();
              }}
            >
              <img src={addProductLogo} alt="Add new product button" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
