import PropTypes from "prop-types";
import { useNavigate } from "react-router";

EditPasswordButton.propTypes = {
  setSelectedField: PropTypes.func,
  setEditProfileActive: PropTypes.func,
  targetPath: PropTypes.string,
  field: PropTypes.string,
};

function EditPasswordButton({
  setSelectedField,
  field,
  setEditProfileActive,
  setShowPopUp,
}) {
  const navigate = useNavigate();
  return (
    <button
      className="editBtn"
      onClick={() => {
        setSelectedField(field);
        setEditProfileActive(true);
        setShowPopUp(true);
      }}
    >
      Cambiar contraseña
    </button>
  );
}

export default EditPasswordButton;
