import "./style.css";

import { useForm } from "react-hook-form";
import useUpdateUserForm from "../../../hooks/useUpdateUserForm";
import {
  LASTNAME_VALIDATIONS,
  LONG_TEXT_VALIDATIONS,
  NAME_VALIDATIONS,
  PASSWORD_VALIDATIONS,
} from "../../../utils/formValidationConstants";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";
import SingleFileInput from "../../inputs/SingleFileInput";

function UpdateUserForm() {
  const {
    state: {
      userInfo: { name, lastName, address, city, region, country },
    },
    actions: { submitInfo },
  } = useUpdateUserForm();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(submitInfo)} className="formContainer">
        <TextInput
          label={name ? `Nombre: (${name})` : "Nombre:"}
          register={register("name", NAME_VALIDATIONS)}
          errors={errors}
          registerName={"name"}
        />
        <TextInput
          label={lastName ? `Apellidos: (${lastName})` : "Apellidos:"}
          register={register("lastname", LASTNAME_VALIDATIONS)}
          errors={errors}
          registerName={"lastname"}
        />

        <TextInput
          label={"Bio:"}
          register={register("bio", LONG_TEXT_VALIDATIONS)}
          errors={errors}
          registerName={"bio"}
        />
        <TextInput
          label={address ? `Dirección: ${address}` : "Dirección:"}
          register={register("address", LONG_TEXT_VALIDATIONS)}
          errors={errors}
          registerName={"address"}
        />
        <TextInput
          label={city ? `Ciudad: ${city}` : "Ciudad:"}
          register={register("city", LONG_TEXT_VALIDATIONS)}
          errors={errors}
          registerName={"city"}
        />
        <TextInput
          label={region ? `Provincia: ${region}` : "Provincia:"}
          register={register("region", NAME_VALIDATIONS)}
          errors={errors}
          registerName={"region"}
        />
        <TextInput
          label={country ? `País: ${country}` : "País:"}
          register={register("country", NAME_VALIDATIONS)}
          errors={errors}
          registerName={"country"}
        />
        <SingleFileInput label={"Avatar:"} register={register("images")} />
        <PasswordInput
          label={"Contraseña:"}
          register={register("password", PASSWORD_VALIDATIONS)}
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

        <button type="submit">enviar</button>
      </form>
    </>
  );
}

export default UpdateUserForm;
