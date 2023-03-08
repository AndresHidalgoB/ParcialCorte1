import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { LotContextProvider } from "./context/LotContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LotContextProvider>
      <App />
    </LotContextProvider>
  </React.StrictMode>
);
