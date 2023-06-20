import "./style.css";
import useFooter from "../../hooks/useFooter";
import { Link } from "react-router-dom";

function Footer() {
  const { instagram, facebook, twitter, whatsapp } = useFooter();
  return (
    <footer>
      <nav className="navFooterVarios">
        <ul className="firstList">
          <li>
            <h4>SHOP AND BUY</h4>
            <ul>
              <li>Register</li>
              <li>Upload Item</li>
              <li>Best Sellers</li>
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
              <li>Contact Us</li>
            </ul>
          </li>
        </ul>
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
            <Link to={"/privacy"}>Aviso de privacidad</Link>
          </li>
          <li>
            <Link to={"/legal"}>Legal</Link>
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
