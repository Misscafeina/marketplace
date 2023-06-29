import "./style.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import AcceptCookies from "../../pages/cookiesPopUp/CookiesPopUp";

function FooterHome() {
  const { cookiesActive, showPopUp } = useContext(PopUpContext);

  const [activeIcon, setActiveIcon] = useState(false);

  const handleIconClick = () => {
    setActiveIcon(!activeIcon);
  };

  return (
    <body>
      {cookiesActive && <div>{showPopUp ? <AcceptCookies /> : null}</div>}
      <nav className="navFooterVarios">
        <ul className="firstList">
          <li>
            <h4>SHOP AND BUY</h4>
            <ul>
              <li>Register</li>
              <li>Upload Item</li>
              <li>
                <Link to={"/bestsellers"} style={{ color: "white" }}>
                  Best Sellers
                </Link>
              </li>
              <li>Map Search</li>
              <li>Categories</li>
              <li>All products</li>
            </ul>
          </li>
          <li>
            <h4>RETROTECH</h4>
            <ul>
              <li>About us</li>
              <li>Shipping & returns</li>
              <li>FaQs</li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="navFooterRRSS">
        <ul className="social-icon">
          <li>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/instagram.svg"
                alt="instagram"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/twitter.svg"
                alt="twitter"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/facebook.svg"
                alt="facebook"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/whatsapp.svg"
                alt="whatsapp"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navFooterTerms">
        <ul className="link">
          <li>
            <Link to={"/useConditions"} style={{ color: "white" }}>
              Condiciones de uso
            </Link>
          </li>
          <li>
            <Link to={"/privacy"} style={{ color: "white" }}>
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link to={"/legal"} style={{ color: "white" }}>
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link to={"/cookies"} style={{ color: "white" }}>
              Cookies
            </Link>
          </li>
        </ul>
      </nav>

      <span className="copyright">
        {" "}
        © 2023, Retrotech.com, Inc. o sus afiliados
      </span>
      <span className="last">{""}</span>
    </body>
  );
}

export default FooterHome;
