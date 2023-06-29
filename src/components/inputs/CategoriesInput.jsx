import SelectInput from "./SelectInput";
import PropTypes from "prop-types";

function CategoriesInput({ label, register, registerName, errors }) {
  return (
    <SelectInput
      label={label}
      register={register}
      registerName={registerName}
      errors={errors}
      defaultValue={"games"}
    >
      <option value="gaming">Gaming</option>
      <option value="music">Música</option>
      <option value="video">Video</option>
      <option value="photography">Fotografía</option>
      <option value="computer">Ordenador</option>
      <option value="collector">Collección</option>
      <option value="television">Televisión</option>
      <option value="cloth">Ropa</option>
      <option value="others">Otros</option>
    </SelectInput>
  );
}
CategoriesInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
  children: PropTypes.node,
};

export default CategoriesInput;
