import { useNavigate } from "react-router-dom";

function useFooter() {
  const navigate = useNavigate();

  const instagram = () => {
    navigate("/instagram");
  };

  const facebook = () => {
    navigate("/facebook");
  };
  const twitter = () => {
    navigate("/twitter");
  };

  const whatsapp = () => {
    navigate("/whatsapp");
  };

  return { instagram, facebook, twitter, whatsapp };
}
export default useFooter;
