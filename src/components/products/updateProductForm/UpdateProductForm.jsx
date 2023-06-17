import "./style.css";

import { useForm } from "react-hook-form";
import useUpdateProductForm from "../../../hooks/useUpdateProductForm";
import {
  PRODUCT_NAME,
  LONG_TEXT_VALIDATIONS,
  HASHTAG_VALIDATIONS,
  REQUIRED,
  LONG_TEXT_VALIDATIONS_REQUIRED,
  NAME_VALIDATIONS_REQUIRED,
} from "../../../utils/formValidationConstants";
import TextInput from "../../inputs/TextInput";
import CountryInpunt from "../../inputs/CountryInput";
import NumberInput from "../../inputs/NumberInput";
import CategoriesInput from "../../inputs/CategoriesInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import StatusInput from "../../inputs/StatusInput";

function UpdateProductForm() {
  const {
    state: {
      productInfo: {
        name,
        description,
        price,
        category,
        region,
        country,
        address,
        city,
        keywords,
        status,
      },
    },
    actions: { submitInfo },
  } = useUpdateProductForm();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(submitInfo)} className="formContainer">
        <CategoriesInput
          label={category ? `Categoría: (${category})` : "Categoría:"}
          register={register("category", REQUIRED)}
          errors={errors}
          registerName={"category"}
        />
        <TextInput
          label={name ? `Marca y modelo: (${name})` : "Marca y modelo:"}
          register={register("name", PRODUCT_NAME)}
          errors={errors}
          registerName={"name"}
        />

        <TextAreaInput
          label={
            description
              ? `Descripción del artículo: (${description})`
              : "Descripción del artículo:"
          }
          register={register("description", LONG_TEXT_VALIDATIONS)}
          errors={errors}
          registerName={"description"}
        />
        <StatusInput
          label={
            status ? `Estado del Producto: ${status}` : "Estado del Producto:"
          }
          register={register("status", REQUIRED)}
          errors={errors}
          registerName={"status"}
        />
        <NumberInput
          label={price ? `Precio: ${price}` : "Precio:"}
          register={register("price", REQUIRED)}
          errors={errors}
          registerName={"price"}
        />
        <TextInput
          label={keywords ? `#hagstags: ${keywords}` : "keywords:"}
          register={register("keywords", HASHTAG_VALIDATIONS)}
          errors={errors}
          registerName={"keywords"}
        />

        <TextInput
          label={address ? `Dirección: ${address}` : "Dirección:"}
          register={register("address", LONG_TEXT_VALIDATIONS_REQUIRED)}
          registerName={"address"}
          errors={errors}
        />

        <TextInput
          label={city ? `Ciudad: ${city}` : "Ciudad:"}
          register={register("city", LONG_TEXT_VALIDATIONS_REQUIRED)}
          registerName={"city"}
          errors={errors}
        />

        <TextInput
          label={region ? `Provincia: ${region}` : "Provincia:"}
          register={register("region", NAME_VALIDATIONS_REQUIRED)}
          registerName={"region"}
          errors={errors}
        />

        <CountryInpunt
          label={country ? `País: ${country}` : "País:"}
          register={register("country", REQUIRED)}
          registerName={"country"}
          errors={errors}
        />

        <button type="submit">Actualizar</button>
      </form>
    </>
  );
}

export default UpdateProductForm;
