import "./style.css";
import PropTypes from "prop-types";
DealContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

function DealContainer({ title, children }) {
  return (
    <article className="deal-container">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default DealContainer;
