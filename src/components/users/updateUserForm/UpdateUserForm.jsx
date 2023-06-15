import "./style.css";

import { useForm } from "react-hook-form";
import classnames from "classnames";
import { editOwnProfile } from "../../../services/userService";

function UpdateUserForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const submitInfo = async (data) => {
    console.log(data);
    const removeEmptyFields = (data) => {
      for (const field in data) {
        if (data[field] === "") {
          delete data[field];
        }
      }
    };
    removeEmptyFields(data);
    console.log(data);

    const formData = new FormData();
    if (data.images[0]) {
      formData.append("images", data.images[0]);
    }
    for (const [key, value] of Object.entries(data)) {
      if (key !== "image") formData.append(`${key}`, JSON.stringify(value));
    }
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      await editOwnProfile(formData, config);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };
  const submitPassword = (info) => {
    console.log(info);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitInfo)} className="formContainer">
        <label> Nombre:</label>
        <input type="text" {...register("name")} />
        <label> Apellidos:</label>
        <input type="text" {...register("lastname")} />
        <label> Bio:</label>
        <input type="text" {...register("bio")} />
        <label> Dirección:</label>
        <input type="text" {...register("address")} />
        <label> Ciudad:</label>
        <input type="text" {...register("city")} />
        <label> Provincia:</label>
        <input type="text" {...register("region")} />
        <label> País:</label>
        <input type="text" {...register("country")} />
        <label>Avatar: </label>
        <input {...register("images")} type="file" id="images" />
        <button type="submit">enviar</button>
      </form>
      <form onSubmit={handleSubmit(submitPassword)} className="formContainer">
        <label> Contraseña:</label>
        <input type="password" {...register("password")} />
        <label> Repetir contraseña:</label>
        <input type="password" {...register("repeatPassword")} />
        <button type="submit">enviar</button>
      </form>
      ;
    </>
  );
}

export default UpdateUserForm;
