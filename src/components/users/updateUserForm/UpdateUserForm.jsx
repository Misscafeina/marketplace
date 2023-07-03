import "./style.css";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import {
  LASTNAME_VALIDATIONS,
  LASTNAME_VALIDATIONS_REQUIRED,
  LONG_TEXT_VALIDATIONS,
  LONG_TEXT_VALIDATIONS_REQUIRED,
  NAME_VALIDATIONS,
  NAME_VALIDATIONS_REQUIRED,
  PASSWORD_VALIDATIONS,
  PASSWORD_VALIDATIONS_REQUIRED,
  REQUIRED,
} from "../../../utils/formValidationConstants";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import SingleFileInput from "../../inputs/SingleFileInput";
import CountryInpunt from "../../inputs/CountryInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import { useNavigate } from "react-router";
import useUpdateUserForm from "../../../hooks/useUpdateUserForm";
import { getOwnProfile } from "../../../services";
import { useContext } from "react";
import { PopUpContext } from "../../../context/popUpContext";
import { useError } from "../../../context/ErrorContext";

function UpdateUserForm({ selectedField, setUserInfo }) {
  const navigate = useNavigate();
  const { submitInfo } = useUpdateUserForm();
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();
  const onSubmit = async (data) => {
    try {
      await submitInfo(data);
      const updatedProfile = await getOwnProfile();
      updatedProfile?.status === "ok" && setUserInfo(updatedProfile.data);
      navigate("/profile");
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response.data.error);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
          {selectedField === "name" && (
            <TextInput
              label={"Nombre:"}
              register={register(
                "name",
                selectedField === "name"
                  ? NAME_VALIDATIONS_REQUIRED
                  : NAME_VALIDATIONS
              )}
              errors={errors}
              registerName={"name"}
            />
          )}
          {selectedField === "lastName" && (
            <TextInput
              label={"Apellidos:"}
              register={register(
                "lastname",
                selectedField === "lastName"
                  ? LASTNAME_VALIDATIONS_REQUIRED
                  : LASTNAME_VALIDATIONS
              )}
              errors={errors}
              registerName={"lastname"}
            />
          )}
          {selectedField === "bio" && (
            <TextAreaInput
              label={"Bio:"}
              register={register(
                "bio",
                selectedField === "bio"
                  ? LONG_TEXT_VALIDATIONS_REQUIRED
                  : LONG_TEXT_VALIDATIONS
              )}
              errors={errors}
              registerName={"bio"}
            />
          )}
          {selectedField === "address" && (
            <>
              <TextInput
                label={"Dirección:"}
                register={register(
                  "address",
                  selectedField === "address"
                    ? LONG_TEXT_VALIDATIONS_REQUIRED
                    : LONG_TEXT_VALIDATIONS
                )}
                errors={errors}
                registerName={"address"}
              />
              <TextInput
                label={"Ciudad:"}
                register={register(
                  "city",
                  selectedField === "address"
                    ? LONG_TEXT_VALIDATIONS_REQUIRED
                    : LONG_TEXT_VALIDATIONS
                )}
                errors={errors}
                registerName={"city"}
              />
              <TextInput
                label={"Provincia:"}
                register={register(
                  "region",
                  selectedField === "address"
                    ? NAME_VALIDATIONS_REQUIRED
                    : NAME_VALIDATIONS
                )}
                errors={errors}
                registerName={"region"}
              />
              <CountryInpunt
                label={"País"}
                register={register("country", REQUIRED)}
                registerName={"country"}
                errors={errors}
              />
            </>
          )}
          {selectedField === "avatar" && (
            <SingleFileInput label={"Avatar:"} register={register("images")} />
          )}
          {selectedField === "password" && (
            <>
              <PasswordInput
                label={"Contraseña:"}
                register={register(
                  "password",
                  selectedField === "password"
                    ? PASSWORD_VALIDATIONS_REQUIRED
                    : PASSWORD_VALIDATIONS
                )}
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
            </>
          )}

          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
}
UpdateUserForm.propTypes = {
  selectedField: PropTypes.string,
  setUserInfo: PropTypes.func,
};

export default UpdateUserForm;
