import { useState } from "react";
import ChatList from "./chatlist/ChatList";
import ChatWindow from "./chatwindow/ChatWindow";
import "./style.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuOptionClick = (option) => {
    // Aquí puedes implementar la lógica para cada opción del menú
    console.log("Opción seleccionada:", option);
  };

  return (
    <div className="container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
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
      <ChatList />
      <ChatWindow />
    </div>
  );
}

export default Chat;
