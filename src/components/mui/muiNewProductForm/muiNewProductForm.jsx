import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import {
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import useNewProductForm from "../../../hooks/useNewProductForm";
import {
  LONG_TEXT_VALIDATIONS_REQUIRED,
  NAME_VALIDATIONS_REQUIRED,
  PICTURE_REQUIRED,
  PRODUCT_NAME_REQUIRED,
  REQUIRED,
} from "../../../utils/formValidationConstants";
import { useForm } from "react-hook-form";
import { postNewProduct, uploadProductPictures } from "../../../services";
import { useNavigate } from "react-router-dom";
import { useError } from "../../../context/ErrorContext";
import { PopUpContext } from "../../../context/popUpContext";
MuiNewProductForm.propTypes = {
  userInfo: PropTypes.object,
  handleProductChanges: PropTypes.func,
};

function MuiNewProductForm({ userInfo, handleProductChanges }) {
  const { setErrorMessage, errorMessage } = useError();
  const navigate = useNavigate();
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const [getSavedAddres, setGetSavedAddres] = useState(false);

  useEffect(() => {
    if (userInfo?.userData?.locationLat) setGetSavedAddres(true);
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitInfo = async (data) => {
    try {
      if (!data.images[0]) throw new Error("Debes incluir al menos 1 foto");
      const productData = { ...data };
      if (data.images.length > 10) {
        throw new Error("El máximo son 10 fotos por producto");
      }
      delete productData.images;
      const response = await postNewProduct(productData);
      const {
        data: {
          productInfo: { id },
        },
      } = response;
      if (response.status !== "ok") throw new Error(response?.data?.error);
      const formData = new FormData();

      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const filesResponse = await uploadProductPictures(formData, config, id);

      filesResponse.status === "ok" && navigate(`/product/${id}`);
      handleProductChanges();
    } catch (err) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(err.response?.data?.error || err.message);
    }
  };
  // const { submitInfo } = useNewProductForm();
  return (
    <div className="newProductForm ">
      <h2>¿Qué producto vas a subir?</h2>

      <form onSubmit={handleSubmit(submitInfo)} noValidate>
        {" "}
        <Stack spacing={2} maxWidth={500}>
          <TextField
            label="Título:"
            type="text"
            // required
            variant="filled"
            {...register("name", PRODUCT_NAME_REQUIRED)}
            errors={errors}
            helperText={errors.name?.message}
          />
          <TextField
            label="Descripción:"
            type="text"
            // required
            variant="filled"
            {...register("description", LONG_TEXT_VALIDATIONS_REQUIRED)}
            errors={errors}
            helperText={errors.description?.message}
            multiline
          />
          <FormControl>
            <InputLabel id="category">Categoría: </InputLabel>
            <Select
              labelId="category"
              label="Categoría"
              {...register("category", REQUIRED, {
                minLength: { value: 2, message: "campo requerido" },
              })}
              //   helperText={errors.category?.message}
              //   required
              variant="filled"
              defaultValue={""}
            >
              <MenuItem value={""} disabled>
                <em>Seleccionar categoría</em>
              </MenuItem>

              <MenuItem value={"gaming"}>Gaming</MenuItem>
              <MenuItem value={"music"}>Música</MenuItem>
              <MenuItem value={"video"}>Video</MenuItem>
              <MenuItem value={"photography"}>Fotografía</MenuItem>
              <MenuItem value={"computer"}>Ordenador</MenuItem>
              <MenuItem value={"collector"}>Collección</MenuItem>
              <MenuItem value={"television"}>Televisión</MenuItem>
              <MenuItem value={"cloth"}>Ropa</MenuItem>
              <MenuItem value={"others"}>Otros</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="status-label">Estado del Producto </InputLabel>
            <Select
              labelId="status-label"
              label="Estado del Producto"
              {...register("status", REQUIRED, {
                minLength: { value: 2, message: "campo requerido" },
              })}
              errors={errors}
              //   helperText={errors.status?.message}
              //   required
              variant="filled"
              defaultValue={""}
            >
              <MenuItem value={""} disabled>
                <em>seleccionar estado</em>
              </MenuItem>
              <MenuItem value={"new"}>Nuevo</MenuItem>
              <MenuItem value={"used"}>Usado</MenuItem>
              <MenuItem value={"refurbished"}>Reacondicionado</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Precio:"
            type="number"
            // required
            variant="filled"
            {...register("price", REQUIRED)}
            errors={errors}
            helperText={errors.price?.message}
          />
          {userInfo?.userData?.locationLat && (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("useSavedAddress", {
                      value: { getSavedAddres },
                    })}
                    checked={getSavedAddres}
                    onChange={() => {
                      setGetSavedAddres(!getSavedAddres);
                    }}
                  />
                }
                label="Utilizar Dirección guardada"
              />
            </FormGroup>
          )}
          {!getSavedAddres && (
            <>
              <TextField
                label="Dirección:"
                type="text"
                // required
                variant="filled"
                {...register("address", LONG_TEXT_VALIDATIONS_REQUIRED)}
                errors={errors}
                helperText={errors.address?.message}
              />
              <TextField
                label="Ciudad:"
                type="text"
                // required
                variant="filled"
                {...register("city", LONG_TEXT_VALIDATIONS_REQUIRED)}
                errors={errors}
                helperText={errors.city?.message}
              />
              <TextField
                label="Provincia:"
                type="text"
                // required
                variant="filled"
                {...register("region", NAME_VALIDATIONS_REQUIRED)}
                errors={errors}
                helperText={errors.region?.message}
              />
              <TextField
                label="País:"
                type="text"
                // required
                variant="filled"
                {...register("country", NAME_VALIDATIONS_REQUIRED)}
                errors={errors}
                helperText={errors.country?.message}
              />
            </>
          )}

          <TextField
            id="pictures"
            label="Fotos"
            variant="outlined"
            type="file"
            {...register("images", PICTURE_REQUIRED, {
              validate: (value) => {
                if (value.length > 10) {
                  return "Máximo 10 fotos";
                } else if (value.length === 0) {
                  return "Mínimo 1 foto";
                }
              },
            })}
            inputProps={{
              multiple: true,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "gray" }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default MuiNewProductForm;
