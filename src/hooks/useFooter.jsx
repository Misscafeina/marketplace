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

  const AcceptCookies = () => {
    navigate("/acceptcookies");
  };
  return { instagram, facebook, twitter, whatsapp, AcceptCookies };
}
export default useFooter;
