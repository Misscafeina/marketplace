import "./style.css";
import userLogo from "../../assets/userLogo.svg";
import logInLogo from "../../assets/log-in.svg";
import addProduct from "../../assets/plus-square.svg";
import wishHeart from "../../assets/heart.svg";
import message from "../../assets/message-circle.svg";
import registerUser from "../../assets/user-plus.svg";
import search from "../../assets/search.svg";
function Header() {
  return (
    <header>
      <h1>RetroTech</h1>
      <nav className="headerNav">
        <ul>
          {/* <li>
            <button>
              <img src={logInLogo} alt="login button" />
            </button>
          </li> */}
          <li>
            <button>
              <img src={userLogo} alt="user" />
            </button>
          </li>
          {/* <li>
            <button>
              <img src="" alt="User photo" />{" "}
              Aquí debería ir la foto del usuario
            </button>
          </li>  */}
          <li>
            <button>
              <img src={wishHeart} alt="wishList" />
            </button>
          </li>
          <li>
            <button>
              <img src={message} alt="message button" />
            </button>
          </li>
          <li>
            <button>
              <img src={search} alt="search button" />
            </button>
          </li>
          <li>
            <button>
              <img src={addProduct} alt="Add new product button" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
