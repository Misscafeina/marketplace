import "./style.css";
import SearchLogo from "../../assets/search.svg";
import useSearch from "../../hooks/useSearch";

function Search() {
  const { handleInput, handleSubmit } = useSearch();
  return (
    <div className="wrap">
      <form
        className="search"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="searchTerm"
          placeholder="¿Qué estás buscando?"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button type="submit" className="searchButton">
          <i className="search">
            <img src={SearchLogo} alt="Search Logo" />
          </i>
        </button>
      </form>
    </div>
  );
}
export default Search;
