import { BsSearch } from "react-icons/bs";
import recording from "../../assets/Recording.mp4";
import "./styles.css";
import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import Filter from "../filter/Filter";

function Background() {
  const { filterActive, setFilterActive, showPopUp, setShowPopUp } =
    useContext(PopUpContext);
  const handleButtonClick = () => {
    setFilterActive(true);
    setShowPopUp(true);
  };
  return (
    <div className="carousel-container">
      <div className="video-container">
        <video
          className="w-full h-full object-cover"
          src={recording}
          autoPlay
          muted
        />
      </div>
      {filterActive && <div>{showPopUp ? <Filter /> : null}</div>}
      <div className="form-container">
        <form className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search in Retrotech"
          />
          <BsSearch className="icon-search" size={60} />
        </form>
        <div>
          <button onClick={handleButtonClick}>Filtrar</button>
        </div>
      </div>
    </div>
  );
}

export default Background;
