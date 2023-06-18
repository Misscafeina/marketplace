import "./style.css";

import PropTypes from "prop-types";
import UserProfile from "../../components/users/userProfile/UserProfile";

ProfilePage.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
};

function ProfilePage({ userInfo, setSelectedField }) {
  return (
    <>
      <UserProfile userInfo={userInfo} setSelectedField={setSelectedField} />
    </>
  );
}

export default ProfilePage;
