import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopUpContext } from "../context/popUpContext";
import LoginPopUp from "../pages/loginPopUp/LoginPopUp";
import NewProductPage from "../pages/newProductPage/NewProductPage";
import NewProductForm from "../components/products/newProductForm/NewProductForm";

function useHeader() {
  const navigate = useNavigate();
  const {
    showPopUp,
    setShowPopUp,
    loginActive,
    setLoginActive,
    registerActive,
    setRegisterActive,
    newProductActive,
    setNewProductActive,
  } = useContext(PopUpContext);

  window.addEventListener("click", ({ target }) => {
    if (target.className === "popup") setShowPopUp(false);
  });

  const returnHome = () => {
    navigate("/");
  };
  const userLog = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      navigate("/profile");
    } else {
      setShowPopUp(true);
      setLoginActive(true);
    }
    showPopUp ? LoginPopUp : null;
  };
  const wishList = () => {
    navigate("/wishlist");
  };
  const messages = () => {
    navigate("/messages");
  };
  const search = () => {};
  const addNewProduct = () => {
    console.log("hook");
    setShowPopUp(true);
    setNewProductActive(true);
    showPopUp && NewProductPage;
  };
  return { returnHome, userLog, wishList, messages, search, addNewProduct };
}
export default useHeader;
