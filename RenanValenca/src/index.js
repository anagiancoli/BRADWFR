import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "../src/components/navbar";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BasicExample />
    <App />
  </StrictMode>
);