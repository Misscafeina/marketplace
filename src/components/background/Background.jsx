import { BsSearch } from "react-icons/bs";
import recording from "../../assets/Recording.mp4";
import "./style.css";
import { useContext } from "react";
import { PopUpContext } from "../../context/popUpContext";
import Filter from "../filter/Filter";
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
        <button className="button-17" role="button" onClick={handleButtonClick}>
          Filtrar
        </button>

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
      {filterActive && <div>{showPopUp ? <Filter /> : null}</div>}
    </div>
  );
}

export default Background;
