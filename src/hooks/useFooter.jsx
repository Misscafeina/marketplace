import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PopUpContext } from "../context/popUpContext";
import AcceptCookies from "../pages/cookiesPopUp/CookiesPopUp";

function useFooter() {
  const { setCookiesActive, setShowPopUp, showPopup } =
    useContext(PopUpContext);

  const navigate = useNavigate();

  const instagram = () => {
    navigate("/instagram");
  };

  const facebook = () => {
    navigate("/facebook");
  };
  const twitter = () => {
    navigate("/twitter");
  };

  const whatsapp = () => {
    navigate("/whatsapp");
  };

  const handleClickCookies = () => {
    setShowPopUp(true);
    setCookiesActive(true);
    showPopup && AcceptCookies;
  };
  return { instagram, facebook, twitter, whatsapp, handleClickCookies };
}
export default useFooter;
