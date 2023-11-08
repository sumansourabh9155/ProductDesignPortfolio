import React from "react";
import "./Component/Animated.css";
import About from "../../../assets/Project/About.png";
import Glamor from "../../../assets/Project/Glamor.png";
import Beauty from "../../../assets/Project/Beauty.png";
import Shoe from "../../../assets/Project/Shoe.png";
import Hoodie from "../../../assets/Project/Hoodie.png";
import Food from "../../../assets/Project/Food.png";
import newtab from "../../../assets/icon/newtab.png";
import { Link } from "react-router-dom";

const AnimatedProjects = () => {
  return (
    <div className="relative h-screen md:m-8 overflow-hidden rounded-2xl group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
      <div class=" grid grids grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Shoe} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Hoodie} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={About} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Beauty} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Food} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Glamor} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Shoe} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Hoodie} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={About} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Beauty} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Food} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={Glamor} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AnimatedProjects;
