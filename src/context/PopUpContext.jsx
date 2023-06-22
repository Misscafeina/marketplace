import { createContext, useState } from "react";
import PropTypes from "prop-types";

const PopUpContext = createContext();

const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [registerActive, setRegisterActive] = useState(false);
  const [newProductActive, setNewProductActive] = useState(false);
  const [editProfileActive, setEditProfileActive] = useState(false);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);
  const [cookiesActive, setCookiesActive] = useState(false);

  const setAllFalse = () => {
    setShowPopUp(false);
    setLoginActive(false);
    setRegisterActive(false);
    setNewProductActive(false);
    setEditProfileActive(false);
    setCookiesActive(false);
  };

  return (
    <PopUpContext.Provider
      value={{
        showPopUp,
        setShowPopUp,
        loginActive,
        setLoginActive,
        registerActive,
        setRegisterActive,
        newProductActive,
        setNewProductActive,
        editProfileActive,
        setEditProfileActive,
        setAllFalse,
        cookiesActive,
        setCookiesActive,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export { PopUpContext, PopUpProvider };
PopUpProvider.propTypes = {
  children: PropTypes.node,
};
