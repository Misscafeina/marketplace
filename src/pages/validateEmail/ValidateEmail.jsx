import { useNavigate } from "react-router";
import { validateEmail } from "../../services";

ValidateEmail.propTypes = {};

function ValidateEmail() {
  const navigate = useNavigate();
  const code = window.location.pathname.split("/")[2];
  const verify = async (code) => {
    try {
      console.log(code);
      const response = await validateEmail(code);
      console.log(response);

      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };
  verify(code);

  return <div></div>;
}

export default ValidateEmail;
