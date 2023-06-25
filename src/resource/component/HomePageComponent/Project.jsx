import React from "react";
import About from "../../../assets/Project/About.png";
import Glamor from "../../../assets/Project/Glamor.png";
import Beauty from "../../../assets/Project/Beauty.png";
import Shoe from "../../../assets/Project/Shoe.png";
import Hoodie from "../../../assets/Project/Hoodie.png";
import Food from "../../../assets/Project/Food.png";
import ReactGA from "react-ga";
import { NavLink } from "react-router-dom";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const Project = () => {
  return (
    <div>
      <p className=" pb-2 pt-16  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
        Best of
      </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl pb-7 md:mb-12 font-bold flex justify-center suman">
        My Projects
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 md:px-12 gap-4 h-100">
        <div class="grid gap-3">
          <NavLink to="/projects">
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Beauty}
              alt=""
            ></img>
          </NavLink>
          <NavLink to="/projects">
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Food}
              alt=""
            ></img>
          </NavLink>
        </div>
        <NavLink class="grid gap-3">
          <NavLink to="/projects" >
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={About}
              alt=""
            ></img>
          </NavLink>
          <NavLink to="/projects">
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Glamor}
              alt=""
            ></img>
          </NavLink>
        </NavLink>

        <div class="grid gap-3 ">
          <NavLink to="/projects" className="hidden md:block">
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Shoe}
              alt=""
            ></img>
          </NavLink>
          <NavLink to="/projects" className="hidden md:block">
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Hoodie}
              alt=""
            ></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
