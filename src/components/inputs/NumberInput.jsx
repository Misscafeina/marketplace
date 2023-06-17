import PropTypes from "prop-types";

import "./style.css";

function NumberInput({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type="number" {...register} />
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

NumberInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default NumberInput;
