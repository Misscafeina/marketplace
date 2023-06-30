import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("name") ?? "");
  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?name=${input}`);
  };
  return { handleInput, handleSubmit, input };
}

export default useSearch;
