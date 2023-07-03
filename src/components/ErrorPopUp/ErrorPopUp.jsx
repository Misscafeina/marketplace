import { useContext } from "react";
import { useError } from "../../context/ErrorContext";
import { PopUpContext } from "../../context/popUpContext";

function ErrorPopUp() {
  const { errorMessage, setErrorMessage } = useError();
  const { setErrorActive } = useContext(PopUpContext);

  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{errorMessage}</p>
        <button
          onClick={() => {
            setErrorActive(false);
            setErrorMessage("");
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default ErrorPopUp;
