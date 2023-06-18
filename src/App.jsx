import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import { PopUpProvider } from "./context/popUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Wishlist from "./pages/wislist/Wishlist";
import NewProductPage from "./pages/newProductPage/NewProductPage";
import { useEffect, useState } from "react";
import { getOwnProfile } from "./services";
import UpdateUserPopUp from "./pages/UpdateUserPopUp/UpdateUserPopUp";
//import NewProductPage from "./pages/newProductPage/NewProductPage";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [selectedField, setSelectedField] = useState("");
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await getOwnProfile();
        response?.status === "ok" && setUserInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, []);

  return (
    <PopUpProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/editprofile"
          element={
            <UpdateUserPopUp
              selectedField={selectedField}
              setUserInfo={setUserInfo}
            />
          }
        />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/profile"
          element={
            <ProfilePage
              userInfo={userInfo}
              setSelectedField={setSelectedField}
            />
          }
        />

        <Route path="/newproduct" element={<NewProductPage />} />
      </Routes>

      <Footer />
    </PopUpProvider>
  );
}

export default App;
