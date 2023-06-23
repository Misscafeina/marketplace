import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
  PRODUCT_NAME_REQUIRED,
  REQUIRED,
} from "../../../utils/formValidationConstants";
import { useForm } from "react-hook-form";
MuiNewProductForm.propTypes = { userInfo: PropTypes.object };

function MuiNewProductForm({ userInfo }) {
  const [getSavedAddres, setGetSavedAddres] = useState(false);

  useEffect(() => {
    if (userInfo?.userData?.locationLat) setGetSavedAddres(true);
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { submitInfo } = useNewProductForm();
  console.log(getSavedAddres);
  return (
    <div>
      <h2>¿Qué producto vas a subir?</h2>
      <form onSubmit={handleSubmit(submitInfo)} noValidate>
        {" "}
        <Stack spacing={2} width={500}>
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
              //   required
              variant="filled"
              defaultValue={""}
            >
              <MenuItem value={""} disabled>
                <em>Seleccionar categoría</em>
              </MenuItem>

              <MenuItem value={"consoles"}>Consolas</MenuItem>
              <MenuItem value={"cloth"}>PC</MenuItem>
              <MenuItem value={"used"}>Ropa</MenuItem>
              <MenuItem value={"controllers"}>Mandos</MenuItem>
              <MenuItem value={"arcade"}>Arcade</MenuItem>
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
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("useSavedAddress")}
                  checked={getSavedAddres}
                  onChange={() => {
                    setGetSavedAddres(!getSavedAddres);
                  }}
                />
              }
              label="Utilizar Dirección guardada"
            />
          </FormGroup>
          {!getSavedAddres && (
            <>
              <TextField
                label="Dirección:"
                type="text"
                // required
                variant="filled"
                {...register("address", LONG_TEXT_VALIDATIONS_REQUIRED)}
                errors={errors}
              />
              <TextField
                label="Ciudad:"
                type="text"
                // required
                variant="filled"
                {...register("city", LONG_TEXT_VALIDATIONS_REQUIRED)}
                errors={errors}
              />
              <TextField
                label="Provincia:"
                type="text"
                // required
                variant="filled"
                {...register("region", NAME_VALIDATIONS_REQUIRED)}
                errors={errors}
              />
              <TextField
                label="País:"
                type="text"
                // required
                variant="filled"
                {...register("country", NAME_VALIDATIONS_REQUIRED)}
                errors={errors}
              />
            </>
          )}

          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="file"
            {...register("images", REQUIRED, {
              validate: (value) => {
                if (value.length > 10) {
                  console.log(value);
                  return "Máximo 10 fotos";
                }
              },
            })}
            inputProps={{
              multiple: true,
            }}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default MuiNewProductForm;
