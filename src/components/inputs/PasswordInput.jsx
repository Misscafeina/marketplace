import PropTypes from "prop-types";

import "./style.css";

function PasswordInput({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type="password" {...register} />
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default PasswordInput;
