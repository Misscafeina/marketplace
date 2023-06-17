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
      <option value="consoles">Consolas</option>
      <option value="games">Juegos</option>
      <option value="pc">PC</option>
      <option value="cloth">Ropa</option>
      <option value="controllers">Mandos</option>
      <option value="arcade">Arcade</option>
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
