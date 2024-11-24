import React from "react";
import { createRoot } from "react-dom/client";
import Game from "./components/Game"; // Ajuste o caminho para a nova estrutura
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
