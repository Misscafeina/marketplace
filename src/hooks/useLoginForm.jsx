import { useNavigate } from "react-router";
import { loginUser } from "../services/userService";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";

function useLoginForm() {
  const {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
  } = useContext(PopUpContext);
  const navigate = useNavigate();
  const submitInfo = async (data) => {
    const { username, password } = data;
    try {
      //   console.log(username, password);
      const response = await loginUser(username, password);
      if (response.status === "ok") setShowPopUp(false);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
    submitInfo,
  };
}

export default useLoginForm;
