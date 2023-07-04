import { useNavigate } from "react-router";
import { validateEmail } from "../../services";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";
import { useError } from "../../context/ErrorContext";

ValidateEmail.propTypes = {};

function ValidateEmail() {
  const navigate = useNavigate();
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const code = window.location.pathname.split("/")[2];
  const verify = async (code) => {
    try {
      const response = await validateEmail(code);
      response.status === "ok" && navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.status !== 403) {
        setShowPopUp(true);
        setErrorActive(true);
        setErrorMessage(err.response.data.error);
      }
      navigate("/");
    }
  };
  verify(code);

  return <div></div>;
}

export default ValidateEmail;
