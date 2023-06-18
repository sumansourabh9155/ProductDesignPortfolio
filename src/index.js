import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./resource/page/LandingPage";
import Admin from "./resource/page/Admin";
import About from "./resource/page/About";
import Contact from "./resource/page/Contact";
import Projects from "./resource/page/Projects";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/contactme" element={<Navigate replace to="/contact"/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
