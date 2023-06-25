import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function useSearch() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?name=${input}`);
  };
  return { handleInput, handleSubmit };
}

export default useSearch;
