import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import UpdateUserForm from "./components/users/updateUserForm/UpdateUserForm";
import LoginPage from "./pages/loginPage/LoginPage";
import { PopUpProvider } from "./context/popUpContext";

function App() {
  return (
    <PopUpProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editprofile" element={<UpdateUserForm />} />
        {/* <Route path="/register" element={RegisterPage} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/wishlist" element={<WishList />} /> */}
        {/* <Route path="/profile" element={ProfilePage} /> */}
        {/* <Route path="/newproduct" element={NewProductPage} />  */}
      </Routes>

      <Footer />
    </PopUpProvider>
  );
}

export default App;
