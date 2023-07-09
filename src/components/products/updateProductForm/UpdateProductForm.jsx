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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetails } from "../../../services";
import { useState } from "react";

function UpdateProductForm() {
  const {
    actions: { submitInfo },
  } = useUpdateProductForm();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const getProduct = async () => {
      const response = await getProductDetails(id);

      setProduct(response.data);
    };
    getProduct();
  }, []);
  useEffect(() => {
    if (product.usernameVendor)
      if (product.usernameVendor !== userInfo.username) {
        navigate(`/product/${id}`);
      }
  }, [product]);
  return (
    <>
      <form onSubmit={handleSubmit(submitInfo)} className="formContainer">
        <CategoriesInput
          label={
            product.category ? `Categoría: (${product.category})` : "Categoría:"
          }
          register={register("category", REQUIRED)}
          errors={errors}
          registerName={"category"}
        />
        <TextInput
          label={name ? `Nombre: (${name})` : "Nombre:"}
          register={register("name", PRODUCT_NAME)}
          errors={errors}
          registerName={"name"}
        />

        <TextAreaInput
          label={
            product.description
              ? `Descripción del artículo: (${product.description})`
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
          register={register("status")}
          errors={errors}
          registerName={"status"}
        />
        <NumberInput
          label={product.price ? `Precio: ${product.price}` : "Precio:"}
          register={register("price")}
          errors={errors}
          registerName={"price"}
        />

        <TextInput
          label={
            product.address ? `Dirección: ${product.address}` : "Dirección:"
          }
          register={register("address", LONG_TEXT_VALIDATIONS)}
          registerName={"address"}
          errors={errors}
        />

        <TextInput
          label={product.city ? `Ciudad: ${product.city}` : "Ciudad:"}
          register={register("city", LONG_TEXT_VALIDATIONS)}
          registerName={"city"}
          errors={errors}
        />

        <TextInput
          label={product.region ? `Provincia: ${product.region}` : "Provincia:"}
          register={register("region", LONG_TEXT_VALIDATIONS)}
          registerName={"region"}
          errors={errors}
        />

        <CountryInpunt
          label={product.country ? `País: ${product.country}` : "País:"}
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
