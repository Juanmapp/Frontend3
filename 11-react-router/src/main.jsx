import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About.jsx";
import Faqs from "./Faqs.jsx";
import Faq from "./Faq.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />

        <Route path="/Faqs/:id" element={<Faq />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
