import "./style.css";

import PropTypes from "prop-types";
import UserProfile from "../../components/users/userProfile/UserProfile";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";

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
  return (
    <>
      {Object.keys(userInfo).length !== 0 && (
        <div>
          <UserProfile
            userInfo={userInfo}
            setSelectedField={setSelectedField}
            selectedField={selectedField}
            setUserInfo={setUserInfo}
          />
          <ProductsContainer products={userInfo.products} />
          <h4 style={{ backgroundColor: "red" }}>Vendidos</h4>
          <ProductsContainer products={userInfo.deals?.selling} />
        </div>
      )}
    </>
  );
}

export default ProfilePage;
