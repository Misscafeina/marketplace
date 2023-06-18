import { useContext } from "react";
import { editOwnProfile } from "../services/userService";
import { useNavigate } from "react-router";
import { PopUpContext } from "../context/popUpContext";

function useUpdateUserForm() {
  const { showPopUp, setShowPopUp } = useContext(PopUpContext);
  const navigate = useNavigate();

  const submitInfo = async (data) => {
    try {
      const removeEmptyFields = (data) => {
        for (const field in data) {
          if (!data[field]) {
            delete data[field];
          }
        }
      };
      removeEmptyFields(data);

      const formData = new FormData();
      if (!data.images || !data.images[0]) {
        delete data.images;
      } else {
        formData.append("images", data.images[0]);
      }
      for (const [key, value] of Object.entries(data)) {
        if (key !== "image") formData.append(key, value);
      }
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await editOwnProfile(formData, config);
      response.status === "ok" && setShowPopUp(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return {
    submitInfo,
    showPopUp,
    setShowPopUp,
  };
}

export default useUpdateUserForm;
