import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { postChatMessage } from "../../services";
import { getDealDetails } from "../../services/dealsService";

const Chat = ({ dealInfo, setDealInfo }) => {
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  // const [blockedUsers, setBlockedUsers] = useState([]);
  // const [reportedUsers, setReportedUsers] = useState([]);
  const handleSendMessage = async () => {
    try {
      const message = { message: newMessage, status: "approved" };
      await postChatMessage(dealInfo.dealData.id, message);
      setNewMessage("");

      const response = await getDealDetails(dealInfo.dealData.id);
      response.status === "ok" && setDealInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // const handleMenuOptionClick = (option) => {
  //   if (option === "Borrar conversación") {
  //     setMessages([]);
  //   } else if (option === "Bloquear usuario") {
  //     const lastMessage = messages[messages.length - 1];
  //     if (lastMessage && !blockedUsers.includes(lastMessage.user.name)) {
  //       setBlockedUsers([...blockedUsers, lastMessage.user.name]);
  //     }
  //   } else if (option === "Reportar usuario") {
  //     const lastMessage = messages[messages.length - 1];
  //     if (lastMessage && !reportedUsers.includes(lastMessage.user.name)) {
  //       setReportedUsers([...reportedUsers, lastMessage.user.name]);
  //     }
  //   }
  // };
  const {
    avatarVendorUrl,
    usernameVendor,

    avatarBuyerUrl,
    usernameBuyer,
    idBuyer,
  } = dealInfo?.dealData;

  return (
    <div className="container">
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
        <button onClick={handleSendMessage}>Send</button>
        <div className="menu">
          <button className="menu-button" onClick={handleMenuToggle}>
            ...
          </button>
          {showMenu && (
            <ul className="menu-options">
              <li onClick={() => handleMenuOptionClick("Borrar conversación")}>
                Borrar conversación
              </li>
              <li onClick={() => handleMenuOptionClick("Reportar usuario")}>
                Reportar usuario
              </li>
              <li onClick={() => handleMenuOptionClick("Bloquear usuario")}>
                Bloquear usuario
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
Chat.propTypes = {
  dealInfo: PropTypes.object,
  setDealInfo: PropTypes.func,
};
export default Chat;
