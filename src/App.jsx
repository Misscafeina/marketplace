import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import { PopUpProvider } from "./context/popUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Wishlist from "./pages/wislist/Wishlist";
import UpdateProductForm from "./components/products/updateProductForm/UpdateProductForm";
import Header from "./components/header/Header";
import UseConditions from "./pages/useConditions/UseConditions";
import Privacy from "./pages/privacy/Privacy";
import Legal from "./pages/legal/Legal";
import Cookies from "./cookies/Cookies";
import { useAuth } from "./context/AuthContext";
import { getOwnProfile } from "./services";


function App() {
  const { isAuthenticated } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [selectedField, setSelectedField] = useState("");
  useEffect(() => {
    if (isAuthenticated) {
      const getInfo = async () => {
        try {
          const response = await getOwnProfile();
          response.status === "ok" && setUserInfo(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getInfo();
    } else setUserInfo({});
    console.log("hola");
  }, [isAuthenticated]);
  return (
    <PopUpProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/profile"
            element={
              <ProfilePage
                userInfo={userInfo}
                setSelectedField={setSelectedField}
                selectedField={selectedField}
                setUserInfo={setUserInfo}
              />
            }
          />
          <Route path="/editproduct" element={<UpdateProductForm />} />
        </Routes>


        <Route path="/wishlist" element={<Wishlist />} />

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
     
           <Footer />
        <Routes>
          <Route path="/useConditions" element={<UseConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>

    </PopUpProvider>
  );
}

export default App;
