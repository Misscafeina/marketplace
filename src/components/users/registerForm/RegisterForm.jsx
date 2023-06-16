import { useContext } from "react";
import { PopUpContext } from "../../../context/popUpContext";
import { useForm } from "react-hook-form";
import {
  NAME_VALIDATIONS_REQUIRED,
  PASSWORD_VALIDATIONS_REQUIRED,
  EMAIL_VALIDATIONS_REQUIRED,
} from "../../../utils/formValidationConstants";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import useRegisterForm from "../../../hooks/useRegisterForm";

const RegisterForm = () => {
  const { setLoginActive, loginActive, registerActive, setRegisterActive } =
    useContext(PopUpContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { submitInfo } = useRegisterForm();
  const handleSpan = () => {
    setRegisterActive(false);
    setLoginActive(true);
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit(submitInfo)}>
          <TextInput
            label="Introduce tu nombre de usuario"
            register={register("username", NAME_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"username"}
          />
          <TextInput
            label="Introduce tu correo electrónico"
            register={register("email", EMAIL_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"email"}
          />
          <PasswordInput
            label={"Contraseña:"}
            register={register("password", PASSWORD_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"password"}
          />
          <PasswordInput
            label={"Repetir contraseña:"}
            register={register("repeatPassword", {
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Las contraseñas no coinciden";
                }
              },
            })}
            errors={errors}
            registerName={"repeatPassword"}
          />
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
