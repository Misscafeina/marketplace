import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Filter() {
  const { setAllFalse } = useContext(PopUpContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ascCheck, setAscCheck] = useState(true);
  const [descCheck, setDescCheck] = useState(false);
  const [checkValue, setCheckValue] = useState("ASC");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAllFalse();
    setSearchParams({
      category: e.target[0].value,
      price: checkValue,
      location: e.target.location.value,
    });
  };
  const handleSortChange = (e) => {
    if (e.target.value === "ASC") {
      ascCheck ? null : setAscCheck(true),
        setDescCheck(false),
        setCheckValue("ASC");
    }
    if (e.target.value === "DESC") {
      descCheck ? null : setAscCheck(false),
        setDescCheck(true),
        setCheckValue("DESC");
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="filterForm" onSubmit={(e) => handleSubmitForm(e)}>
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
          <fieldset className="sort" id="sort">
            <label htmlFor="ascPrice">Precio de menor a mayor</label>
            <input
              type="radio"
              id="ascPrice"
              name="ascPrice"
              value="ASC"
              checked={ascCheck}
              onChange={(e) => handleSortChange(e)}
            />
            <label htmlFor="desPrice">Precio de mayor a menor</label>
            <input
              type="radio"
              id="desPrice"
              name="desPrice"
              value="DESC"
              checked={descCheck}
              onChange={(e) => handleSortChange(e)}
            />
          </fieldset>
          <label htmlFor="location">Ubicación:</label>
          <input type="text" id="location" />
          <button type="submit">Filtrar</button>
        </form>
      </div>
    </div>
  );
}
export default Filter;
