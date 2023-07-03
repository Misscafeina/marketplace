import { useContext } from "react";
import { registerUser } from "../services/userService";
import { PopUpContext } from "../context/popUpContext";
import { useError } from "../context/ErrorContext";

const useRegisterForm = () => {
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const submitInfo = async (data) => {
    try {
      const response = await registerUser(data);
      if (response.status === "ok") setShowPopUp(false);
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };

  return { submitInfo };
};

export default useRegisterForm;
