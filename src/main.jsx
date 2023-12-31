import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";
import { PopUpProvider } from "./context/popUpContext.jsx";
import ErrorProvider from "./context/ErrorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PopUpProvider>
        <ErrorProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorProvider>
      </PopUpProvider>
    </BrowserRouter>
  </React.StrictMode>
);
