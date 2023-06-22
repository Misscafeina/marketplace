import { useContext } from "react";
import AcceptCookies from "../../components/acceptcookies/AcceptCookies";
import { PopUpContext } from "../../context/popUpContext";
import Cookies from "../../components/cookies/Cookies";

function CookiesPopUp() {
  const { cookiesPolicyActive, setCookiesPolicyActive, setAllFalse } =
    useContext(PopUpContext);
  const handleClick = () => {
    setCookiesPolicyActive(false);
    setAllFalse();
    localStorage.setItem("cookies", JSON.stringify({ accepted: true }));
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        {!cookiesPolicyActive ? (
          <AcceptCookies />
        ) : (
          <div>
            <Cookies />
            <p onClick={handleClick}>Aceptar cookies</p>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default CookiesPopUp;
