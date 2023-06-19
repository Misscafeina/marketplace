import "./style.css";

import PropTypes from "prop-types";
import UserProfile from "../../components/users/userProfile/UserProfile";

ProfilePage.propTypes = {
  userInfo: PropTypes.object,
  setSelectedField: PropTypes.func,
  selectedField: PropTypes.string,
  setUserInfo: PropTypes.func,
};

function ProfilePage({
  selectedField,
  setSelectedField,
  userInfo,
  setUserInfo,
}) {
  console.log(userInfo);
  return (
    <>
      {userInfo && (
        <UserProfile
          userInfo={userInfo}
          setSelectedField={setSelectedField}
          selectedField={selectedField}
          setUserInfo={setUserInfo}
        />
      )}
    </>
  );
}

export default ProfilePage;
