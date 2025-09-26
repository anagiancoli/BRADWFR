import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Plate from "./pages/Plate/index.jsx"; // Importe o componente Plate
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";
import MenuProvider from "./_providers/Modal.jsx";

import { ToastContainer } from "react-toastify";
import About from "./pages/About/index.jsx";
import Plates from "./pages/Plates/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="plate/:id" element={<Plate />} />
          <Route path="about" element={<About />} />
          <Route path="plates" element={<Plates />} />
        </Routes>
      </MenuProvider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
