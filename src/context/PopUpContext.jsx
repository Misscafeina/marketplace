import { createContext, useState } from "react";

const PopUpContext = createContext();

const PopUpProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <PopUpContext.Provider value={{ showPopUp, setShowPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
};

export { PopUpContext, PopUpProvider };
