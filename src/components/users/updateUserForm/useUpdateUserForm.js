import { useEffect, useState } from "react";
import { USER_INFO } from "../../../utils/constants";
import { editOwnProfile, getOwnProfile } from "../../../services/userService";

function useUpdateUserForm() {
  const [avatarUrl, setAvatarUrl] = useState();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const handleImageChange = (e) => {
    const target = e.target.files[0];
    const url = URL.createObjectURL(target);
    setAvatarUrl(url);
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleLastnameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRepeatPassword(value);
  };
  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };
  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegion(value);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleBioChange = (e) => {
    const value = e.target.value;
    setBio(value);
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const profile = await getOwnProfile();
        console.log(profile);
        const {
          data: {
            data: {
              userData: { name, lastName, bio, address, city, region, country },
            },
          },
        } = profile;

        setName(name || "");
        setLastname(lastName || "");
        setAddress(address || "");
        setCity(city || "");
        setRegion(region || "");
        setCountry(country || "");
        setBio(bio || "");
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, []);
  useEffect(() => {
    setAvatarUrl(USER_INFO?.avatar);
  }, []);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // for (const value of formData.keys()) {
    //   console.log(value);
    // }
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await editOwnProfile(formData, config);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    state: {
      avatarUrl,
      name,
      lastname,
      password,
      repeatPassword,
      country,
      region,
      address,
      city,
      bio,
    },
    actions: {
      handleAddressChange,
      handleCityChange,
      handleCountryChange,
      handleImageChange,
      handleLastnameChange,
      handleNameChange,
      handlePasswordChange,
      handleRepeatPasswordChange,
      handleRegionChange,
      handleOnSubmit,
      handleBioChange,
    },
  };
}

export default useUpdateUserForm;
