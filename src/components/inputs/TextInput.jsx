import PropTypes from "prop-types";

import "./style.css";

function TextInput({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type="text" {...register} />
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default TextInput;
