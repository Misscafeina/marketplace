import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { postChatMessage } from "../../services";
import { getDealDetails } from "../../services/dealsService";
import { PopUpContext } from "../../context/popUpContext";
import { useError } from "../../context/ErrorContext";

const Chat = ({
  userInfo,
  dealInfo,
  setDealInfo,
  setUserInfo,
  handleProductChanges,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [status, setStatus] = useState(dealInfo.dealData.status);
  const [userId, setUserId] = useState(null); // Estado para almacenar el ID del usuario actual
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();

  const handleSendMessage = async () => {
    try {
      const message = { message: newMessage, status };
      await postChatMessage(dealInfo.dealData.id, message);
      setNewMessage("");
      handleProductChanges();

      const response = await getDealDetails(dealInfo.dealData.id);
      response.status === "ok" && setDealInfo(response.data);
    } catch (error) {
      setShowPopUp(true);
      setErrorActive(true);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleUpdateStatus = (option) => {
    if (option === "Completar pedido") {
      setStatus("Completado");
      // Lógica adicional para completar pedido
    } else if (option === "Cancelar pedido") {
      setStatus("Cancelado");
      // Lógica adicional para cancelar pedido
    } else if (option === "Aceptar pedido") {
      setStatus("Aceptado");
      // Lógica adicional para aceptar pedido
    } else if (option === "Rechazar pedido") {
      setStatus("Rechazado");
      // Lógica adicional para rechazar pedido
    }
  };

  const {
    avatarVendorUrl,
    usernameVendor,
    avatarBuyerUrl,
    usernameBuyer,
    idBuyer,
    idVendor,
  } = dealInfo?.dealData;

  return (
    <div className="container">
      <div className="status">
        <button className="status-button" onClick={handleMenuToggle}>
          Actualizar Estado
        </button>
        {showMenu && (
          <ul className="status-options">
            {userId === idBuyer && (
              <>
                <li onClick={() => handleUpdateStatus("Completar pedido")}>
                  Completar pedido
                </li>
                <li onClick={() => handleUpdateStatus("Cancelar pedido")}>
                  Cancelar pedido
                </li>
              </>
            )}
            {userId === idVendor && (
              <>
                <li onClick={() => handleUpdateStatus("Aceptar pedido")}>
                  Aceptar pedido
                </li>
                <li onClick={() => handleUpdateStatus("Rechazar pedido")}>
                  Rechazar pedido
                </li>
              </>
            )}
          </ul>
        )}
      </div>
      <div className="message-list">
        {dealInfo?.messages.map((message) => (
          <div key={message.id} className="message">
            <div className="user-profile">
              <img
                src={
                  message.idSender === idBuyer
                    ? avatarBuyerUrl
                    : avatarVendorUrl
                }
                alt="Profile"
              />
            </div>
            <div className="user-details">
              <div className="user-name">
                {message.idSender === idBuyer ? usernameBuyer : usernameVendor}
              </div>
              <div className="message-content">{message.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
        <button className="delete-button" onClick={handleMenuToggle}>
          Borrar
        </button>
      </div>
    </div>
  );
};

Chat.propTypes = {
  dealInfo: PropTypes.object,
  setDealInfo: PropTypes.func,
  setUserInfo: PropTypes.func,
  handleProductChanges: PropTypes.func,
};

export default Chat;
