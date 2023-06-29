import { BsSearch } from "react-icons/bs";
import recording from "../../assets/Recording.mp4";
import "./styles.css";

import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import Filter from "../filter/Filter";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

function Background() {
  const { filterActive, setFilterActive, showPopUp, setShowPopUp } =
    useContext(PopUpContext);
  const handleButtonClick = () => {
    setFilterActive(true);
    setShowPopUp(true);
  };
  const { handleSubmit, handleInput, input } = useSearch();

  return (
    <div className="carousel-container">
      <div className="video-container">
        <video
          className="w-full h-full object-cover"
          src={recording}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="form-container">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search in Retrotech"
            value={input}
            onChange={handleInput}
          />
          <BsSearch className="icon-search" size={60} />
        </form>
      </div>
    </div>
  );
}

export default Background;
