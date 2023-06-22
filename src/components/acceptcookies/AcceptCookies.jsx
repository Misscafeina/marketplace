import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, useNavigate } from "react-router-dom";
import { PopUpContext } from "../../context/popUpContext";

function AcceptCookies() {
  const { setAllFalse, setCookiesPolicyActive } = useContext(PopUpContext);
  const navigate = useNavigate();
  const handleClose = () => {
    setAllFalse();

    localStorage.setItem("cookies", JSON.stringify({ accepted: true }));
  };
  const handleRequiredCookies = () => {
    localStorage.setItem("cookies", JSON.stringify({ accepted: true }));
    navigate("/cookies");
    setAllFalse();
  };
  const handlePolicy = () => {
    setCookiesPolicyActive(true);
  };
  return (
    <div>
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Subscribe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Aceptar cookies.{" "}
          <span onClick={handlePolicy}>Política de cookies</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleRequiredCookies}>
          Aceptar cookies requeridas
        </Button>
        <Button onClick={handleClose}>Aceptar</Button>
      </DialogActions>
    </div>
  );
}

export default AcceptCookies;
