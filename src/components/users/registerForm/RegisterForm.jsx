import { useContext } from "react";
import { PopUpContext } from "../../../context/popUpContext";

const RegisterForm = () => {
  const { setLoginActive, loginActive, registerActive, setRegisterActive } =
    useContext(PopUpContext);

  const handleSpan = () => {
    setRegisterActive(false);
    setLoginActive(true);
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <label>Probando</label>
          <input />
          <label>Probando</label>
          <input />
          <label>Probando</label>
          <input />
          <label>Probando</label>
          <input />
          <label>Probando</label>
          <input />
          <label>Probando</label>
          <input />
          <button>Boton de prueba</button>
        </form>
        <p>
          ¿Ya estás registrado?{" "}
          <span className="register" onClick={handleSpan}>
            Inicia sesion
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
