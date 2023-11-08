import React from "react";
import raikarscreen from "../../../assets/raikargoodvibes/raikarscreen.png";
import glamorscreen from "../../../assets/glamorai/glamorscreen.png";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import RaikarGoodVibes from "./RaikarGoodVibes";
import GlamorAI from "./GlamorAI";
export const CaseStudy = () => {
  return (
    <div>
      <Navbar />
      <div className=" dark:text-gray-100">
        <section className=" text-[#033d35] -z-10 relative ">
          <div
            className="lg:h-80 md:h-56 sm:h-48 hero-image bg-right-bottom bg-cover flex"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80)",
            }}
          >
            <p className="suman relative container mx-auto p-4 flex items-center justify-center z-10 text-4xl md:text-7xl font-bold">
              Case Study
            </p>
          </div>
        </section>
        <Link to={RaikarGoodVibes}>
          <section class="bg-[#29003C] h-screen " style={{ color: "#903643" }}>
            <div className="">
              <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-6">
                  <a
                    href="#"
                    class="inline-flex justify-between items-center py-2 px-5  mb-7 text-sm  bg-[#4c0b6a] rounded-full hover:bg-gray-200 "
                    role="alert"
                  >
                    <span class="text-sm font-medium text-white p-2 ">
                      UI/UX and Front-end Development
                    </span>
                  </a>
                  <h1 class="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Raikars Good Vibes
                  </h1>
                  <p class="max-w-xl mb-2 font-light text-white raikargoodvibeswhite  lg:text-sm">
                    https://raikarsgoodvibes.com
                  </p>
                  <p class="max-w-xl mb-6 font-light text-white raikargoodvibeswhite lg:mb-8 lg:text-md">
                    Online platform that offers a wide range of metal creations,
                    including art, decor, and lifestyle products. The platform
                    serves both retail and wholesale customers, and it also
                    offers a manufacturing service to meet the global demand.
                  </p>

                  <a
                    href="#"
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white "
                  >
                    Visit Figma File
                    <svg
                      class="w-5 h-5 ml-2 -mr-1 "
                      fill="currentColor"
                      Z
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        fill="white"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-6/12 md:w-full lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={raikarscreen} alt="mockup"></img>
                </div>
              </div>
            </div>
          </section>
        </Link>
        <Link to={GlamorAI}>
        <section class="bg-[#903643] lg:h-screen" style={{ color: "#903643" }}>
  <div className="">
    <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-5 md:col-span-12">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm bg-[#9B4A55] rounded-full hover:bg-gray-200"
          role="alert"
        >
          <span class="text-sm font-medium text-white p-2 px-5">
            Solution for Fashion Industry
          </span>
        </a>
        <h1 class="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          GlamorAI
        </h1>
        <p class="max-w-xl mb-6 font-light text-gray-300 glamorwhite lg:mb-8 lg:text-md">
          Introducing DressSense, the AI-powered fashion app that provides
          personalized outfit suggestions based on your wardrobe, location, skin
          tone, and occasion. Follow influencers for fashion inspiration, stay
          updated with trends, and express your unique style effortlessly.
        </p>

        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white"
        >
          Visit Figma File
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              fill="white"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class=" lg:mt-0 lg:col-span-7 lg:flex">
        <img src={glamorscreen} alt="mockup"></img>
      </div>
    </div>
  </div>
</section>

        </Link>
      </div>
      <Footer />
    </div>
  );
};
