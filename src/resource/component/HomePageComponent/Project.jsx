import React from "react";
import About from "../../../assets/Project/About.png";
import Glamor from "../../../assets/Project/Glamor.png";
import Beauty from "../../../assets/Project/Beauty.png";
import Shoe from "../../../assets/Project/Shoe.png";
import Hoodie from "../../../assets/Project/Hoodie.png";
import Food from "../../../assets/Project/Food.png";
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);
const Project = () => {
  return (
    <div>
      <p className=" pb-2 relative flex items-start justify-start w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
              Best of
            </p>
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-12 font-bold pb-5 flex justify-center suman">
        My Projects
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 h-100">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Beauty}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Food}
              alt=""
            ></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={About}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Glamor}
              alt=""
            ></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Shoe}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg brightness-75 hover:brightness-100"
              src={Hoodie}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
