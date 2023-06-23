import PropTypes from "prop-types";

import "./style.css";
import { useState } from "react";

function MultipleFilesInput({ label, register, registerName, errors }) {
  const [imageUrls, setImageUrls] = useState([]);
  const handleOnChange = (event) => {
    const images = event.target.files;
    setImageUrls([]);
    const urls = [];
    for (const image of images) {
      const url = URL.createObjectURL(image);
      urls.push(url);
    }
    setImageUrls([...urls]);
  };
  console.log(imageUrls);
  return (
    <>
      <label>{label}</label>
      <input type="file" {...register} onChange={handleOnChange} multiple />
      <div className="multiple-form-images-container">
        {imageUrls.length > 0 &&
          imageUrls.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="image"
                className="multiple-form-images-preview"
              />
            );
          })}
      </div>
      {errors[registerName] && <span>{errors[registerName].message}</span>}
    </>
  );
}

MultipleFilesInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
  registerName: PropTypes.string,
};

export default MultipleFilesInput;
