import { useState } from "react";
import "./style.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [reportedUsers, setReportedUsers] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = {
        content: newMessage,
        user: {
          name: userInfo.username,
          profilePicture: userInfo.avatar,
        },
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuOptionClick = (option) => {
    if (option === "Borrar conversación") {
      setMessages([]);
    } else if (option === "Bloquear usuario") {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && !blockedUsers.includes(lastMessage.user.name)) {
        setBlockedUsers([...blockedUsers, lastMessage.user.name]);
      }
    } else if (option === "Reportar usuario") {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && !reportedUsers.includes(lastMessage.user.name)) {
        setReportedUsers([...reportedUsers, lastMessage.user.name]);
      }
    }
  };

  return (
    <div className="container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="user-profile">
              <img src={message.user.profilePicture} alt="Profile" />
            </div>
            <div className="user-details">
              <div className="user-name">{message.user.name}</div>
              <div className="message-content">{message.content}</div>
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

export default Chat;
