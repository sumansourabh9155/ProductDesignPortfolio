import React from "react";
import "./Component/Animated.css";

import jewll from "../../../assets/mockup/jewll.webp";
import drink from "../../../assets/mockup/drink.webp";
import car from "../../../assets/mockup/car.webp";
import dog from "../../../assets/mockup/dog.webp";
import dress from "../../../assets/mockup/dress.webp";
import nft from "../../../assets/mockup/nft.webp";
import pizza from "../../../assets/mockup/pizza.webp";
import sneekers from "../../../assets/mockup/sneekers.webp";
import glamor from "../../../assets/mockup/glamor.webp";
import anime from "../../../assets/mockup/anime.webp";
import perfume from "../../../assets/mockup/perfume.webp";
import fainance from "../../../assets/mockup/fainance.webp";
import Beauty from "../../../assets/mockup/Beauty.webp";
import raikar from "../../../assets/mockup/raikar.webp";
import law from "../../../assets/mockup/law.webp";

import { Link } from "react-router-dom";

const AnimatedProjects = () => {
  return (
    <div>
      <p className=" pb-2 pt-4  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
        Best of
      </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl  md:mb-12 font-bold flex justify-center suman">
        My Design Works
      </h1>
      <div className="relative group h-[60vh] mt-6  md:h-[60vh] lg:h-[80vh] flex items-center justify-center md:m-8 overflow-hidden  group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
        <div className="absolute inset-0 z-10 hidden  group-hover:flex items-center justify-center  bg-black bg-opacity-75">
          <div>
            <p className="relative pb-2 flex items-center justify-center w-full leading-relaxed text-sm md:text-xl orange  lg:justify-center lg:items-center">
              Best of my work
            </p>

            <h2 className="relative flex items-center suman justify-center w-full max-w-3xl text-2xl  lg:text-4xl font-bold lg:justify-center text-white">
              Check out My work
            </h2>

            <div className="flex items-center justify-center pt-6 md:pt-12">
              <Link to={"/casestudy"} className="buttonlight">
                Check Projects
              </Link>
            </div>
          </div>
        </div>
        {/* <div class="absolute flex justify-center self-center text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
        <button className="buttonsmall">Visit</button>
      </div> */}
        <div class="grids grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={jewll} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={drink} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={car} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={law} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={nft} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Beauty} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={nft} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={dress} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={dog} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={anime} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={fainance} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={glamor} alt="" />
            </div>
          </div>
          <div class=" hidden  md:grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={pizza} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={sneekers} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={glamor} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={jewll} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={car} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={perfume} alt="" />
            </div>
          </div>
          <div class="hidden   lg:grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={fainance} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={anime} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={perfume} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={raikar} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={drink} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={law} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjects;
