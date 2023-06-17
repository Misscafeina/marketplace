import { createContext, useState } from "react";

const PopUpContext = createContext();

const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [registerActive, setRegisterActive] = useState(false);
  const [newProductActive, setNewProductActive]= useState(false);

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

      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export { PopUpContext, PopUpProvider };
