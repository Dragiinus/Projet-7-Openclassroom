import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Projet-7-Openclassroom/public/index.html">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);