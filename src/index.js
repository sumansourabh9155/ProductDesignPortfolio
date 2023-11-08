import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./resource/page/LandingPage";
import Admin from "./resource/page/Admin";
import About from "./resource/page/About";
import Contact from "./resource/page/Contact";
import Projects from "./resource/page/Projects";
import Blog from "./resource/page/Blogs";
import Avail from "./resource/page/Avail";
import RaikarGoodVibes from "./resource/page/casestudy/RaikarGoodVibes";
import GlamorAI from "./resource/page/casestudy/GlamorAI";
import SinaiDesert from "./resource/page/casestudy/SinaiDesert";
import Resources from "./resource/page/Resources";
import reportWebVitals from "./reportWebVitals";
import AnimatedCursor from "react-animated-cursor";
import { CaseStudy } from "./resource/page/casestudy/CaseStudy";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ReactGA from "react-ga";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AnimatedCursor
      innerSize={18}
      outerSize={18}
      color="231, 110, 80"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/contactme" element={<Navigate replace to="/contact" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/casestudy" element={<CaseStudy />} />

        <Route
          path="/casestudy/RaikarGoodVibes"
          element={<RaikarGoodVibes />}
        />
        <Route path="/casestudy/GlamorAI" element={<GlamorAI />} />
        <Route path="/casestudy/SinaiDesert" element={<SinaiDesert />} />
        <Route path="/sumanAdmin" element={<Admin />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Maintenance" element={<Avail />} />
      </Routes>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
