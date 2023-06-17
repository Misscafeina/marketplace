import SelectInput from "./SelectInput";
import PropTypes from "prop-types";

function StatusInput({ label, register, registerName, errors }) {
  return (
    <SelectInput
      label={label}
      register={register}
      registerName={registerName}
      errors={errors}
      defaultValue={"used"}
    >
      <option value="new">Nuevo</option>
      <option value="used">Usado</option>
      <option value="refurbished">Reacondicionado</option>
    </SelectInput>
  );
}
StatusInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
  children: PropTypes.node,
};

export default StatusInput;
