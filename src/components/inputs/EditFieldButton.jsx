import PropTypes from "prop-types";


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
      Editar
    </button>
  );
}

export default EditFieldButton;
