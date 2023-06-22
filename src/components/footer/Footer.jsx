import "./style.css";
import useFooter from "../../hooks/useFooter";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";
import AcceptCookies from "../../pages/cookiesPopUp/CookiesPopUp";

function Footer() {
  const { instagram, facebook, twitter, whatsapp, handleClickCookies } =
    useFooter();
  const { cookiesActive, showPopUp } = useContext(PopUpContext);

  return (
    <footer>
      {cookiesActive && <div>{showPopUp ? <AcceptCookies /> : null}</div>}
      <nav className="navFooterVarios">
        <ul className="firstList">
          <li>
            <h4>SHOP AND BUY</h4>
            <ul>
              <li>Register</li>
              <li>Upload Item</li>
              <Link to={"/bestsellers"}>Best Sellers</Link>
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

              <li></li>
            </ul>
          </li>
        </ul>
        <div className="cookie">
          <button
            className="btn"
            onClick={() => {
              handleClickCookies();
              console.log("click");
            }}
          >
            <img src="/cookie.png" alt="cookie"></img>
          </button>
        </div>
      </nav>
      <nav className="navFooterRRSS">
        <ul className="rrssList">
          <li>
            <button
              className="btn"
              onClick={() => {
                instagram();
                console.log("click");
              }}
            >
              <img src="/instagram.png" alt="instagram"></img>
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                facebook();
                console.log("click");
              }}
            >
              <img src="/facebook.png" alt="facebook"></img>
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                twitter();
                console.log("click");
              }}
            >
              <img src="/twitter.png" alt="twitter"></img>
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => {
                whatsapp();
                console.log("click");
              }}
            >
              <img src="/whatsapp.png" alt="whatsapp"></img>
            </button>
          </li>
        </ul>
      </nav>

      <nav className="navFooterTerms">
        <ul>
          <li>
            <Link to={"/useConditions"}>Condiciones de uso</Link>
          </li>
          <li>
            <Link to={"/privacy"}>Política de privacidad</Link>
          </li>
          <li>
            <Link to={"/legal"}>Aviso Legal</Link>
          </li>
          <li>
            <Link to={"/cookies"}>Cookies</Link>
          </li>
        </ul>
      </nav>
      <p> © 2023, Retrotech.com, Inc. o sus afiliados</p>
    </footer>
  );
}
export default Footer;
