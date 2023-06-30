import "./style.css";
import PropTypes from "prop-types";
DealMessagesContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

function DealMessagesContainer({ children }) {
  return <article className="deal-messages-container">{children}</article>;
}

export default DealMessagesContainer;
