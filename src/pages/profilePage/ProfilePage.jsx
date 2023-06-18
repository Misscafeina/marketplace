import "./style.css";

import PropTypes from "prop-types";
import UserProfile from "../../components/users/userProfile/UserProfile";

ProfilePage.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
};

function ProfilePage({
  userInfo,
  setUserInfo,
  selectedField,
  setSelectedField,
}) {
  return (
    <>
      <UserProfile
        userInfo={userInfo}
        setSelectedField={setSelectedField}
        selectedField={selectedField}
        setUserInfo={setUserInfo}
      />
    </>
  );
}

export default ProfilePage;
