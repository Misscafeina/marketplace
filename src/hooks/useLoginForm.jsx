import { useNavigate } from "react-router";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";
import { useAuth } from "../context/AuthContext";
import { useError } from "../context/ErrorContext";

function useLoginForm() {
  const { user, setUser, login, isAuthenticated } = useAuth();
  const {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
    setErrorActive,
    errorActive,
    setAllFalse,
  } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const navigate = useNavigate();
  const submitInfo = async (data) => {
    const { username, password } = data;
    try {
      const response = await login(username, password);
      if (response.status === "ok") {
        setShowPopUp(false);
        setLoginActive(false);
      }
      // window.location.reload();
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };
  return {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
    errorActive,
    submitInfo,
  };
}

export default useLoginForm;
