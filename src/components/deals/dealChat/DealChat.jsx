import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  LONG_TEXT_VALIDATIONS,
  LONG_TEXT_VALIDATIONS_REQUIRED,
  REQUIRED,
} from "../../../utils/formValidationConstants";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import {
  getDealDetails,
  postChatMessage,
} from "../../../services/dealsService";

DealChat.propTypes = {
  dealInfo: PropTypes.object,
  setDealInfo: PropTypes.func,
};

function DealChat({ dealInfo, setDealInfo }) {
  const [date, setDate] = useState(dayjs(new Date()));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentDate = new Date();
  const onSubmit = async (message) => {
    // console.log(e);
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
