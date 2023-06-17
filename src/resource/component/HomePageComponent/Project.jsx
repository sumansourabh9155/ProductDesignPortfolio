import React from "react";
import About from "../../../assets/Project/About.png";
import Glamor from "../../../assets/Project/Glamor.png";
import Beauty from "../../../assets/Project/Beauty.png";
import Shoe from "../../../assets/Project/Shoe.png";
import Hoodie from "../../../assets/Project/Hoodie.png";
import Food from "../../../assets/Project/Food.png";
const Project = () => {
  return (
    <div>
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-12 font-bold pb-5 flex justify-center">
        My Projects
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 h-100">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={Beauty}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={Food}
              alt=""
            ></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={About}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={Glamor}
              alt=""
            ></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={Shoe}
              alt=""
            ></img>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
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
