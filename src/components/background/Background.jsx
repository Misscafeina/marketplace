import { AiOutlineSearch } from "react-icons/ai";
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
        <form className="search-bar" size={12000}>
          <input
            className="search-input"
            type="text"
            placeholder="Search products"
          />
          <button className="search-icon">
            <AiOutlineSearch size={30} className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Background;
