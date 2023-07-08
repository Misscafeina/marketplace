import PropTypes from "prop-types";
import { useNavigate } from "react-router";

EditFieldButton.propTypes = {
  setSelectedField: PropTypes.func,
  setEditProfileActive: PropTypes.func,
  targetPath: PropTypes.string,
  field: PropTypes.string,
};

function EditFieldButton({
  setSelectedField,
  field,
  setEditProfileActive,
  setShowPopUp,
}) {
  return (
    <button
      className="editBtn"
      onClick={() => {
        setSelectedField(field);
        setEditProfileActive(true);
        setShowPopUp(true);
      }}
    >
      Editar {field}
    </button>
  );
}

export default EditFieldButton;
