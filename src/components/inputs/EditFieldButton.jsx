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
  targetPath,
}) {
  const navigate = useNavigate();
  return (
    <button
      className="editBtn"
      onClick={() => {
        setSelectedField(field);
        setEditProfileActive(true);
        navigate(targetPath);
      }}
    >
      Editar
    </button>
  );
}

export default EditFieldButton;
