import PropTypes from "prop-types";

import "./style.css";

function SelectInput({
  label,
  register,
  errors,
  registerName,
  defaultValue,
  children,
}) {
  return (
    <>
      <label>{label}</label>
      <select {...register} defaultValue={defaultValue}>
        {children}
      </select>
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
};

export default SelectInput;
