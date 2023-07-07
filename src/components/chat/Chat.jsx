import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { postChatMessage } from "../../services";
import { getDealDetails } from "../../services/dealsService";
import { PopUpContext } from "../../context/popUpContext";
import { useError } from "../../context/ErrorContext";

const Chat = ({
  dealInfo,
  setDealInfo,

  handleProductChanges,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [status, setStatus] = useState(dealInfo.dealData.status);
  const [newStatus, setNewStatus] = useState("");
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext);
  const { setErrorMessage } = useError();

  const handleSendMessage = async () => {
    try {
      const message = { message: newMessage };
      if (newStatus) message.status = newStatus;
      console.log(message);
      await postChatMessage(dealInfo.dealData.id, message);
      setNewMessage("");
      setStatus(newStatus);
      setNewStatus("");
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

  console.log(dealInfo);
  const {
    avatarVendorUrl,
    usernameVendor,
    avatarBuyerUrl,
    usernameBuyer,
    idBuyer,
    idVendor,
    userRole,
  } = dealInfo?.dealData;

  return (
    <div className="container">
      <div className="status"></div>
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
        <div className="chat-buttons">
          <div className="menu ">
            <button className="menu-button" onClick={handleMenuToggle}>
              Estado del pedido
            </button>
            {showMenu && (
              <ul className="menu-options">
                {userRole === "buyer" && (
                  <>
                    <li
                      onClick={() => {
                        setNewStatus("cancelled");
                        setShowMenu(!showMenu);
                      }}
                    >
                      Cancelar pedido
                    </li>
                    {status === "approved" && (
                      <li
                        onClick={() => {
                          setNewStatus("completed");
                          setShowMenu(!showMenu);
                        }}
                      >
                        Completar pedido
                      </li>
                    )}
                  </>
                )}
                {userRole === "vendor" && (
                  <>
                    {status === "requested" && (
                      <li
                        onClick={() => {
                          setNewStatus("approved");
                          setShowMenu(!showMenu);
                        }}
                      >
                        Aceptar pedido
                      </li>
                    )}
                    <li
                      onClick={() => {
                        setNewStatus("rejected");
                        setShowMenu(!showMenu);
                      }}
                    >
                      Rechazar pedido
                    </li>
                    {status === "approved" && (
                      <li
                        onClick={() => {
                          setNewStatus("completed");
                          setShowMenu(!showMenu);
                        }}
                      >
                        Completar pedido
                      </li>
                    )}
                  </>
                )}
              </ul>
            )}
            <button className="send-button" onClick={handleSendMessage}>
              Enviar mensaje
            </button>
          </div>
        </div>
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
