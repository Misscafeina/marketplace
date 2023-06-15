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

function Header() {
  const { returnHome, userLog, wishList, messages, search, addNewProduct } =
    useHeader();
  const { showPopUp, setShowPopUp } = useContext(PopUpContext);

  return (
    <header>
      <h1 onClick={returnHome}>RetroTech</h1>
      <nav className="headerNav">
        <ul>
          <li>
            <button
              onClick={() => {
                userLog();
              }}
            >
              <img src={userLogo} alt="user" />
              {showPopUp ? <LoginForm /> : null}
            </button>
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
              onClick={(e) => {
                wishList();
              }}
            >
              <img src={wishListLogo} alt="wishList" />
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                messages();
              }}
            >
              <img src={messageLogo} alt="message button" />
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                search();
              }}
            >
              <img src={searchLogo} alt="search button" />
            </button>
          </li>
          <li>
            <button
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
