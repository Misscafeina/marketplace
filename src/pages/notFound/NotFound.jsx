import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/"> volver al inicio</Link>
    </div>
  );
}

export default NotFound;
