import React from "react";
import Apple from "../../../assets/icon/apple.png";

import Atlassian from "../../../assets/icon/atlassian.png";

import MaterialUI from "../../../assets/icon/materialui.png";
import { Link } from "react-router-dom";

const IconVector = () => {
  return (
    <div>
      <div className=" bodymargin ">
        <p className="text-4xl pb-2 md:pb:10 pt-5 md:pt-10 subheadline flex justify-center font-bold">
          Icon or Vector
        </p>

        <div className="flex gap-5 pt-4 md:pt-10 px-2 md:px-12 rounded-xl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
              <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                <div class="p-8">
                  <a
                    href="https://shapes.framer.website/"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <img className="w-12" src={Apple} alt="linkedin link"></img>
                  </a>

                  <p class="subheadline block mt-1 text-lg pb-3 ">
                    Shapes.framer.website
                  </p>
                  <p className="pb-7">
                    Contain Vecor of shapes. You can download it as SVG or PNG.
                    Explore the collection of 120+ basic SVG shapes for your
                    upcoming project. Simply click on a shape to copy its SVG
                    code to your clipboard. 
                  </p>
                  <Link to="https://shapes.framer.website/" target="_blank" class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="buttonsmall">Visit</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
              <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                <div class="p-8">
                  <a
                    href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <img
                      className="w-12"
                      src={MaterialUI}
                      alt="linkedin link"
                    ></img>
                  </a>

                  <p class="subheadline block mt-1 text-lg pb-3 ">
                    Google Material Design System
                  </p>
                  <p className="pb-7">
                    Google created and publicly shared their Material Design
                    System that goes into the tiniest details regarding
                    everything there is to know about the design and design
                    principles.
                  </p>
                  <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="buttonsmall">Visit</button>
                  </div>
                </div>
              </div>
            </div>

           
           
            <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
              <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                <div class="p-8">
                  <a
                    href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <img
                      className="w-14"
                      src={Atlassian}
                      alt="linkedin link"
                    ></img>
                  </a>

                  <p class="subheadline block mt-1 text-lg pb-3 ">
                    Atlassian Design System
                  </p>
                  <p className="pb-7">
                    Atlassian Design System focuses on providing valuable
                    assistance to teams from all over the world by making their
                    collaboration seamless and easy.
                  </p>
                  <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="buttonsmall">Visit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconVector;
