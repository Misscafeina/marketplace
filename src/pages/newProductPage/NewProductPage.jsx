import "./style.css";
import { useContext, useEffect } from "react";
import { PopUpContext } from "../../context/popUpContext";
import NewProductForm from "../../components/products/newProductForm/NewProductForm";

function NewProductPage() {
  const { showPopUp, newProductActive } = useContext(PopUpContext);
  console.log(showPopUp, "popup", newProductActive);
  useEffect(() => {
    console.log(showPopUp, "popup", newProductActive);
  }, [showPopUp]);

  if (newProductActive) {
    return <div> {showPopUp ? <NewProductForm /> : null}</div>;
  }
}

export default NewProductPage;
