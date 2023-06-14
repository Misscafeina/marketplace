import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={RegisterPage} /> */}
        {/* <Route path="/login" element={LoginPage} />
        <Route path="/profile" element={ProfilePage} />
        <Route path="/newproduct" element={NewProductPage} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
