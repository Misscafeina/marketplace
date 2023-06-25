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

  return (
    <div>
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
      ></DialogTitle>
      <DialogContent>
        <DialogContentText>
          Retrotech S.L. utiliza cookies propias y de terceros para fines
          estrictamente funcionales, permitiendo la navegación en la web, así
          como para fines analíticos, para mostrarte publicidad (tanto general
          como personalizada) en base a un perfil elaborado a partir de tus
          hábitos de navegación (p.ej. páginas visitadas) y para optimizar la
          web. Para administrar o deshabilitar estas cookies haz click en
          Configuración de Cookies. Puedes obtener más información en nuestra{" "}
          <Link to={"/cookies"}>Política de cookies</Link>. Pulsa el botón
          Aceptar Cookies para confirmar que has leído y aceptado la información
          presentada. Después de aceptar, no volveremos a mostrarte este
          mensaje, excepto en el caso de que borres las cookies de tu
          dispositivo
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className=".button" autoFocus onClick={handleRequiredCookies}>
          Ver Cookies requeridas
        </Button>
        <Button className=".button" onClick={handleClose}>
          Aceptar
        </Button>
      </DialogActions>
    </div>
  );
}

export default AcceptCookies;
