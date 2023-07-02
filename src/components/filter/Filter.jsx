import { useContext, useEffect } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import useSearch from "../../hooks/useSearch";

function Filter() {
  const { setAllFalse } = useContext(PopUpContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ascCheck, setAscCheck] = useState(false);
  const [descCheck, setDescCheck] = useState(false);
  const [locationCheck, setLocationCheck] = useState(false);
  const [checkValue, setCheckValue] = useState(
    searchParams.get("order") || "Location"
  );
  const { input } = useSearch();
  useEffect(() => {
    checkValue === "ASC" ? setAscCheck(true) : null;
    checkValue === "DESC" ? setDescCheck(true) : null;
    checkValue === "Location" ? setLocationCheck(true) : null;
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAllFalse();
    setSearchParams({
      name: input,
      category: e.target[0].value,
      order: checkValue,
      //   location: e.target.location.value,
    });
  };
  const handleSortChange = (e) => {
    if (e.target.value === "ASC") {
      ascCheck ? null : setAscCheck(true),
        setDescCheck(false),
        setLocationCheck(false),
        setCheckValue("ASC");
    }
    if (e.target.value === "DESC") {
      descCheck ? null : setDescCheck(true),
        setAscCheck(false),
        setLocationCheck(false),
        setCheckValue("DESC");
    }
    if (e.target.value === "Location") {
      locationCheck ? null : setDescCheck(false),
        setAscCheck(false),
        setLocationCheck(true),
        setCheckValue("Location");
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="filterForm" onSubmit={(e) => handleSubmitForm(e)}>
          <label htmlFor="category">Elija una categoría:</label>
          <select id="category">
            <option>All</option>
            <option value="music">Música</option>
            <option value="video">Video</option>
            <option value="photography">Fotografia</option>
            <option value="gaming">Gaming</option>
            <option value="computer">Computer</option>
            <option value="collector">Collector</option>
            <option value="television">Television</option>
            <option value="cloth">Ropa</option>
            <option value="others">Otros</option>
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
            <label htmlFor="location">Ordenar por distancia</label>
            <input
              type="radio"
              id="location"
              name="location"
              value="Location"
              checked={locationCheck}
              onChange={(e) => handleSortChange(e)}
            />
          </fieldset>
          {/* <label htmlFor="location">Ubicación:</label>
          <input type="text" id="location" /> */}
          <button type="submit">Filtrar</button>
        </form>
      </div>
    </div>
  );
}
export default Filter;
