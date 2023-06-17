import { useForm } from "react-hook-form";
import useNewProductForm from "../../../hooks/useNewProductForm";
import TextInput from "../../inputs/TextInput";
import TextAreaInput from "../../inputs/TextAreaInput";
import {
  HASHTAG_VALIDATIONS,
  LONG_TEXT_VALIDATIONS_REQUIRED,
  NAME_VALIDATIONS_REQUIRED,
  PRODUCT_NAME_REQUIRED,
  REQUIRED,
} from "../../../utils/formValidationConstants";
import CategoriesInput from "../../inputs/CategoriesInput";
import CountryInpunt from "../../inputs/CountryInput";
import NumberInput from "../../inputs/NumberInput";
import StatusInput from "../../inputs/StatusInput";

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { submitInfo } = useNewProductForm();

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>¿Qué producto vas a subir?</h2>
        <form onSubmit={handleSubmit(submitInfo)}>
          <CategoriesInput
            label={"Categoría"}
            register={register("category", REQUIRED)}
            registerName={"category"}
            errors={errors}
          />

          <TextInput
            label={"Marca y modelo:"}
            register={register("name", PRODUCT_NAME_REQUIRED)}
            registerName={"name"}
            errors={errors}
          />
          <TextAreaInput
            label={"Descripción del artículo"}
            register={register("description", LONG_TEXT_VALIDATIONS_REQUIRED)}
            errors={errors}
          />
          <StatusInput
            label={"Estado del Producto"}
            register={register("status", REQUIRED)}
            registerName={"status"}
            errors={errors}
          />
          <NumberInput
            label={"Precio:"}
            register={register("price", REQUIRED)}
            registerName={"price"}
            errors={errors}
          />
          <TextInput
            label={"#hashtags"}
            register={("keywords", HASHTAG_VALIDATIONS)}
            registerName={"keywords"}
            errors={errors}
          />

          <TextInput
            label={"Dirección:"}
            register={register("address", LONG_TEXT_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"address"}
          />
          <TextInput
            label={"Ciudad:"}
            register={register("city", LONG_TEXT_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"city"}
          />
          <TextInput
            label={"Provincia:"}
            register={register("region", NAME_VALIDATIONS_REQUIRED)}
            errors={errors}
            registerName={"region"}
          />
          <CountryInpunt
            label={"País"}
            register={register("country", REQUIRED)}
            registerName={"country"}
            errors={errors}
          />

          <button type="submit">Continuar</button>
        </form>
      </div>
    </div>
  );
};
export default NewProductForm;
