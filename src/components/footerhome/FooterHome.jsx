import "./style.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AcceptCookies from "../../pages/cookiesPopUp/CookiesPopUp";
import { useEffect } from "react";
import { PopUpContext } from "../../context/popUpContext";

function FooterHome() {
  const { cookiesActive, showPopUp, setCookiesActive, setShowPopUp } =
    useContext(PopUpContext);

  const [activeIcon, setActiveIcon] = useState(false);

  const handleIconClick = () => {
    setActiveIcon(!activeIcon);
  };

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem("cookies"));
    if (!cookies) {
      setCookiesActive(true);
      setShowPopUp(true);
    }
  }, []);
  return (
    <footer className="footerHome">
      {cookiesActive && <div>{showPopUp ? <AcceptCookies /> : null}</div>}
      <nav className="navFooterVarios">
        <ul className="firstList">
          <li>
            <h4>SHOP AND BUY</h4>
            <ul>
              <li>
                <Link
                  to={"/product/:id"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  All Products
                </Link>{" "}
              </li>
              <li>
                <Link
                  to={"/newproduct"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Add New Product
                </Link>{" "}
              </li>

              <li>
                <Link
                  to={"/editproduct"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Changes in Your Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>RETROTECH</h4>
            <ul>
              <li>
                <Link
                  to={"/aboutUs"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  About Us
                </Link>{" "}
              </li>
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
            <Link
              to={"/useConditions"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Condiciones de uso
            </Link>
          </li>
          <li>
            <Link
              to={"/privacy"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link
              to={"/legal"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link
              to={"/cookies"}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
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
    </footer>
  );
}

export default FooterHome;
