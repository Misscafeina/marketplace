import { useContext } from "react";
import { registerUser } from "../services/userService";
import { PopUpContext } from "../context/popUpContext";

const useRegisterForm = () => {
  const { setShowPopUp } = useContext(PopUpContext);
  const submitInfo = async (data) => {
    try {
      const response = await registerUser(data);
      if (response.status === "ok") setShowPopUp(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return { submitInfo };
};

export default useRegisterForm;
