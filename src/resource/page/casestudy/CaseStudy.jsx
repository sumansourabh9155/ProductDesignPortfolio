import React from "react";
import raikarscreen from "../../../assets/raikargoodvibes/raikarscreen.png";
import glamorscreen from "../../../assets/glamorai/glamorscreen.png";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import sinaiscreen from "../../../assets/sinaidesert/sinaiscreen.png";
import jwellscreeen from "../../../assets/estellesJewels/jwellscreeen.png";

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

        <section class="bg-[#29003C] h-screen " style={{ color: "#903643" }}>
          <div className="">
            <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-6">
                <Link
                  to="/casestudy/RaikarGoodVibes"
                  class="inline-flex justify-between items-center py-2 px-5  mb-7 text-sm  bg-[#4c0b6a] rounded-full hover:bg-[#29003C] "
                  role="alert"
                >
                  <span class="text-sm font-medium text-white p-2 raikargoodvibeswhite">
                    UI/UX and Front-end Development
                  </span>
                </Link>
                <h1 class="raikargoodvibeswhite max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Raikars Good Vibes
                </h1>
                <a
                  href="https://raikarsgoodvibes.com"
                  class="max-w-xl mb-2 font-light text-white raikargoodvibeswhite  lg:text-sm"
                >
                  https://raikarsgoodvibes.com
                </a>
                <p class="max-w-xl mb-6 font-light text-white raikargoodvibeswhite lg:mb-8 lg:text-md">
                  Online platform that offers a wide range of metal creations,
                  including art, decor, and lifestyle products. The platform
                  serves both retail and wholesale customers, and it also offers
                  a manufacturing service to meet the global demand.
                </p>

                <Link
                  preventScrollReset={true}
                  to="/casestudy/RaikarGoodVibes"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-[#4c0b6a] focus:ring-4 focus:ring-gray-100 dark:text-white "
                >
                  Case Study
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
                </Link>
              </div>
              <div class="w-6/12 md:w-full lg:mt-0 lg:col-span-5 lg:flex">
                <img src={raikarscreen} alt="mockup"></img>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-[#903643] lg:h-screen" style={{ color: "#903643" }}>
          <div className="">
            <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-5 md:col-span-12">
                <a
                  href="/casestudy/RaikarGoodVibes"
                  class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm bg-[#9B4A55] rounded-full hover:bg-[#903643]"
                  role="alert"
                >
                  <span class="text-sm font-medium text-white p-2 px-5 glamorwhite">
                    Solution for Fashion Industry
                  </span>
                </a>
                <h1 class="glamorwhite max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  GlamorAI
                </h1>
                <p class="max-w-xl mb-6 font-light text-white glamorwhite lg:mb-8 lg:text-sm">
                  Introducing DressSense, the AI-powered fashion app that
                  provides personalized outfit suggestions based on your
                  wardrobe, location, skin tone, and occasion. Follow
                  influencers for fashion inspiration, stay updated with trends,
                  and express your unique style effortlessly.
                </p>
                <Link
                  preventScrollReset={true}
                  to="/casestudy/GlamorAI"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-[#9B4A55] focus:ring-4 focus:ring-gray-100 dark:text-white"
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
                </Link>
              </div>
              <div class=" lg:mt-0 lg:col-span-7 lg:flex">
                <img src={glamorscreen} alt="mockup"></img>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-[#F37344] h-screen " style={{ color: "#903643" }}>
          <div className="">
            <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-6">
                <a
                  href="#"
                  class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-[#545D3E] rounded-full hover:bg-[#829553] "
                  role="alert"
                >
                  <span class="text-sm font-medium text-white p-2 px-5">
                    Platform to book Camp and Drivers
                  </span>
                </a>
                <h1 class="max-w-xl mb-4 text-4xl sinaiwhite font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Sinai Online
                </h1>
                <p class="max-w-xl mb-6 font-light sinaiwhite text-white sinaiwhite lg:mb-8 lg:text-sm">
                Platform dedicated to booking camps, hotels, and drivers in the
                Sinai Desert, with the aim of providing users with a seamless,
                engaging, and informative experience while promoting the unique
                attractions and experiences in the Sinai Desert.
                </p>

                <Link
                  preventScrollReset={true}
                  to="/casestudy/SinaiOnline"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border  border-white rounded-lg hover:bg-[#4c0b6a] focus:ring-4 focus:ring-gray-100 dark:text-white "
                >
                  Case Study
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
                </Link>
              </div>
              <div class="w-10/12 md:w-full mt-2 lg:mt-0 lg:col-span-6   lg:flex">
                <img src={sinaiscreen} alt="mockup"></img>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-[#FFE7CF] h-screen " style={{ color: "#903643" }}>
          <div className="">
            <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-6">
                <a
                  href="#"
                  class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-[#424B54] rounded-full hover:bg-[#829553] "
                  role="alert"
                >
                  <span class="text-sm font-medium jwellwhite  text-white p-2 px-5">
                    Solution for Fashion Industry
                  </span>
                </a>
                <h1 class="max-w-xl mb-4 text-4xl jwellwhite font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                  Estelle's Jewels
                </h1>
                <p class="max-w-xl mb-6 font-light jwellwhite text-black sinaiwhite lg:mb-8 lg:text-sm">
                The traditional jewelry shop, established in 1952, lacks an online presence that resonates with the modern audience. With no existing digital platform, the brand faces a challenge in reaching and engaging with a broader market. The absence of an e-commerce website hinders potential customers from experiencing the brand's legacy, elegance, and luxury.
                </p>

                <Link
                  preventScrollReset={true}
                  to="/casestudy/EstellesJewels"
                  class="inline-flex jwellwhite items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-black rounded-lg hover:bg-[#4c0b6a] focus:ring-4 focus:ring-gray-100  "
                >
                  Case Study
                  <svg
                    class="w-5 h-5 ml-2 -mr-1 "
                    fill="currentColor"
                    Z
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="black"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div class="w-10/12 md:w-full mt-2 lg:mt-0 lg:col-span-6   lg:flex">
                <img src={jwellscreeen} alt="mockup"></img>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
