import PropTypes from "prop-types";
import { PopUpContext } from "../../context/popUpContext";
import UpdateUserForm from "../../components/users/updateUserForm/UpdateUserForm";
import { useContext } from "react";

UpdateUserPopUp.propTypes = {
  selectedField: PropTypes.string,
  setUserInfo: PropTypes.func,
};

function UpdateUserPopUp({ selectedField, setUserInfo }) {
  const { editProfileActive } = useContext(PopUpContext);
  if (editProfileActive)
    return (
      <>
        {
          <UpdateUserForm
            selectedField={selectedField}
            setUserInfo={setUserInfo}
          />
        }
      </>
    );
}

export default UpdateUserPopUp;
