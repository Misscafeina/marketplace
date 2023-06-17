import PropTypes from "prop-types";

import "./style.css";

function TextAreaInput({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type="textarea" {...register} />
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

TextAreaInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default TextAreaInput;
