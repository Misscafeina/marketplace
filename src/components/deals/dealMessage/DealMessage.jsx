import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import "./style.css";

DealMessage.propTypes = {
  message: PropTypes.object,
  dealInfo: PropTypes.object,
};

function DealMessage({ message, dealInfo }) {
  const timedate = new Date(message?.proposedDate).toLocaleString();
  const createdDate = new Date(message?.createdAt).toLocaleDateString();
  const createdTime = new Date(message?.createdAt).toLocaleTimeString();

  return (
    <section key={message.id} className="deal-message">
      {dealInfo?.dealData?.idBuyer === message.idSender && (
        <div className="deal-message-sender-info">
          <h4>{dealInfo?.dealData?.usernameBuyer}</h4>
        </div>
      )}
      {dealInfo?.dealData?.idVendor === message.idSender && (
        <div className="deal-message-sender-info">
          <p className="message-created-date">{createdTime}</p>
          <p className="message-created-date">{createdDate}</p>
          <h4>{dealInfo?.dealData?.usernameVendor}</h4>
          <Avatar
            alt={dealInfo?.dealData?.usernameVendor}
            src={dealInfo?.dealData?.avatarVendorUrl}
          />
        </div>
      )}
      <div className="message-content">
        {message?.message && (
          <>
            <h4>Mensaje:</h4>
            <p>{message.message}</p>
          </>
        )}
        {message?.location && (
          <>
            <h4>Ubicación propuesta:</h4>
            <p>{message.location}</p>
          </>
        )}
        {message?.proposedDate && (
          <>
            <h4>Día y hora propuestos:</h4>
            <p>{timedate} </p>
          </>
        )}
        {message?.status && (
          <>
            <h4>Estado actual:</h4>
            <p>{message?.status}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default DealMessage;
