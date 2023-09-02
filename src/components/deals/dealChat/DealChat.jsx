import PropTypes from "prop-types";
import {
  postChatMessage,
  getDealDetails,
} from "../../../services/dealsService";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import "dayjs/locale/es";
import {
  LONG_TEXT_VALIDATIONS_REQUIRED,
  LONG_TEXT_VALIDATIONS,
} from "../../../constants/formValidation";

DealChat.propTypes = {
  dealInfo: PropTypes.object,
  setDealInfo: PropTypes.func,
};

function DealChat({ dealInfo, setDealInfo }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (message) => {
    await postChatMessage(dealInfo.dealData.id, message);
    const response = await getDealDetails(dealInfo.dealData.id);
    response.status === "ok" && setDealInfo(response.data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <TextField
          label="Mensaje:"
          type="text"
          //   variant="filled"
          {...register("message", LONG_TEXT_VALIDATIONS_REQUIRED)}
          errors={errors}
          helperText={errors.message?.message}
        />
        <TextField
          label="Dirección:"
          type="text"
          //   variant="filled"
          {...register("address", LONG_TEXT_VALIDATIONS)}
          errors={errors}
          helperText={errors.address?.message}
        />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            {...register("time")}
            label={"time"}
            minDate={currentDate}
            value={date}
            onChange={(value) => {
              setDate(value);
            }}
          />
        </LocalizationProvider> */}

        {dealInfo.dealData.userRole === "vendor" && (
          <FormControl>
            <InputLabel id="status">Estado: </InputLabel>
            <Select
              labelId="status"
              label="Estado:"
              {...register("status")}
              //   variant="filled"
              defaultValue={null}
            >
              <MenuItem value={null} disabled>
                <em>Cambiar estado....</em>
              </MenuItem>
              {dealInfo?.dealData?.status === "requested" && (
                <MenuItem value={"approved"}>Aceptar</MenuItem>
              )}
              <MenuItem value={"rejected"}>Rechazar</MenuItem>
              {dealInfo?.dealData?.status === "approved" && (
                <MenuItem value={"completed"}>Marcar como finalizado</MenuItem>
              )}
            </Select>
          </FormControl>
        )}
        {dealInfo.dealData.userRole === "buyer" && (
          <FormControl>
            <InputLabel id="category">Categoría: </InputLabel>
            <Select
              labelId="status"
              label="Estado:"
              {...register("status")}
              variant="filled"
              defaultValue={null}
            >
              <MenuItem value={null} disabled>
                <em>Cambiar estado....</em>
              </MenuItem>
              <MenuItem value={"cancelled"}>Cancelar</MenuItem>
              {dealInfo?.dealData?.status === "approved" && (
                <MenuItem value={"completed"}>Marcar como finalizado</MenuItem>
              )}
            </Select>
          </FormControl>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "gray" }}
        >
          Enviar
        </Button>
      </Stack>
    </form>
  );
}

export default DealChat;
