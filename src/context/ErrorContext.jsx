/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const ErrorContext = createContext();

function ErrorProvider({ children }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ErrorContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}

ErrorProvider.propTypes = {
  children: PropTypes.node,
};
export default ErrorProvider;
