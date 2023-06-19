import "./style.css";
import useFooter from "../../hooks/useFooter";

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
            <a href="../pages/useConditions/UseCondition.jsx">
              Condiciones de uso
            </a>
          </li>
          <li>
            <a href="/pages/privacy/Privacy.jsx">Aviso de privacidad</a>
          </li>
          <li>
            <a href="/pages/legal/Legal.jsx">Área legal</a>
          </li>
          <li>
            <a href="/pages/cookies/Cookies.jsx">Cookies</a>
          </li>
        </ul>
      </nav>
      <p> © 2023, Retrotech.com, Inc. o sus afiliados</p>
    </footer>
  );
}
export default Footer;
