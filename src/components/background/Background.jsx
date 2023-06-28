import { BsSearch } from "react-icons/bs";
import recording from "../../assets/Recording.mp4";
import "./styles.css";

function Background() {
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
      <div className="form-container">
        <form className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search in Retrotech"
          />
          <BsSearch className="icon-search" size={60} />
        </form>
      </div>
    </div>
  );
}

export default Background;
