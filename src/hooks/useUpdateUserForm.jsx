import { useState, useEffect } from "react";
import { editOwnProfile, getOwnProfile } from "../services/userService";
import { useNavigate } from "react-router";

function useUpdateUserForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { userData },
      } = await getOwnProfile();
      setUserInfo(userData);
    };
    getUserInfo();
  }, []);
  const submitInfo = async (data) => {
    try {
      console.log(data);
      const removeEmptyFields = (data) => {
        for (const field in data) {
          if (!data[field]) {
            delete data[field];
          }
        }
      };
      removeEmptyFields(data);
      console.log(data);

      const formData = new FormData();
      if (!data.images[0]) {
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

      await editOwnProfile(formData, config);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };
  return {
    state: { userInfo },
    actions: { setUserInfo, submitInfo },
  };
}

export default useUpdateUserForm;
