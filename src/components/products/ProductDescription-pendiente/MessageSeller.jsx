const MessageSeller = () => {
    const handleMessageClick = () => {
      // Lógica para enviar mensaje al vendedor
      alert('Mensaje enviado al vendedor');
    };
  
    return (
      <button onClick={handleMessageClick}>
        Enviar Mensaje al Vendedor
      </button>
    );
  };
  