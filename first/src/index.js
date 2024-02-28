import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MoviesList from "./MoviesList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <MoviesList/>
    </div>
  </React.StrictMode>
);
