import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FoodState from "./Context/FoodState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FoodState>
        <App />
      </FoodState>
    </BrowserRouter>
  </React.StrictMode>
);
