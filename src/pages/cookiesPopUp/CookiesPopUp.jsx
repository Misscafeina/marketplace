import Cookies from "../../components/cookies/Cookies";

function CookiesPopUp() {
  return (
    <div className="popup">
      <div className="popup-inner">
        <Cookies />
        Aceptas las Cookies de Retrotech
      </div>
    </div>
  );
}

export default CookiesPopUp;
