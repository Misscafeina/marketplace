import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const { setAllFalse } = useContext(PopUpContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleOnClick = () => {
    setAllFalse();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <label htmlFor="category">Elija una categoría:</label>
          <select id="category">
            <option>All</option>
            <option value="consoles">Consolas</option>
            <option value="games">Juegos</option>
            <option value="pc">PC</option>
            <option value="cloth">Ropa</option>
            <option value="controllers">Mandos</option>
            <option value="arcade">Arcade</option>
          </select>
          <input type="radio" id="ascPrice" name="ascPrice" value="ASC" />
          <label htmlFor="ascPrice">Precio de menor a mayor</label>
          <input type="radio" id="desPrice" name="desPrice" value="DESC" />
          <label htmlFor="desPrice">Precio de mayor a menor</label>
          <button onClick={handleOnClick}>Filtrar</button>
        </form>
      </div>
    </div>
  );
}
export default Filter;
