import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import { PopUpProvider } from "./context/popUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Wishlist from "./pages/wislist/Wishlist";
import UpdateProductForm from "./components/products/updateProductForm/UpdateProductForm";
import Header from "./components/header/Header";

import UseConditions from "./components/useConditions/UseConditions";
import Privacy from "./components/privacy/Privacy";
import Legal from "./components/legal/Legal";
import Cookies from "./components/cookies/Cookies";

import useApp from "./hooks/useApp";

function App() {
  const {
    isAuthenticated,
    userInfo,
    setUserInfo,
    selectedField,
    setSelectedField,
    wishlist,
    wishlistArray,
    handleAddRevomveFromWishlist,
  } = useApp();
  console.log(wishlist);
  return (
    <PopUpProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editproduct" element={<UpdateProductForm />} />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                handleAddRevomveFromWishlist={handleAddRevomveFromWishlist}
              />
            }
          />
          {
            <Route
              path="/profile"
              element={
                isAuthenticated && (
                  <ProfilePage
                    userInfo={userInfo}
                    setSelectedField={setSelectedField}
                    selectedField={selectedField}
                    setUserInfo={setUserInfo}
                  />
                )
              }
            />
          }
          <Route path="/editproduct" element={<UpdateProductForm />} />
          <Route path="/useConditions" element={<UseConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </div>
    </PopUpProvider>
  );
}

export default App;
