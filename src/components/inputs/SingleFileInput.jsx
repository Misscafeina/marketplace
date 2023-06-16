import PropTypes from "prop-types";

import "./style.css";
import { useState } from "react";

function SingleFileInput({ label, register }) {
  const [imageUrl, setImageUrl] = useState();
  const handleOnChange = (event) => {
    const target = event.target.files[0];
    const url = URL.createObjectURL(target);
    setImageUrl(url);
  };
  return (
    <>
      <label>{label}</label>
      <input type="file" {...register} onChange={handleOnChange} />
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="avatar" className="imagePreview" />
        </div>
      )}
    </>
  );
}

SingleFileInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default SingleFileInput;
