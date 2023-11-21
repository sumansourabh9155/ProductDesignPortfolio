import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ReactGA from "react-ga";

import jwell from "../../assets/mockupcompress/jewll.webp";
import fashion from "../../assets/mockupcompress/fashion.webp";
import dog from "../../assets/mockupcompress/dog.webp";
import law from "../../assets/mockupcompress/law.webp";
import drink from "../../assets/mockupcompress/drink.webp";
import fainance from "../../assets/mockupcompress/fainance.webp";
import nft from "../../assets/mockupcompress/nft.webp";
import shopping from "../../assets/mockupcompress/shopping.webp";
import anime from "../../assets/mockupcompress/anime.webp";
import dress from "../../assets/mockupcompress/dress.webp";
import sneekers from "../../assets/mockupcompress/sneekers.webp";
import pizza from "../../assets/mockupcompress/pizza.webp";
import car from "../../assets/mockupcompress/car.webp";
import glamor from "../../assets/mockupcompress/glamor.webp";


import figma from "../../assets/icon/figma.png";
import illustrator from "../../assets/icon/illustrator.png";
import photoshop from "../../assets/icon/photoshop.png";
import newtab from "../../assets/icon/newtab.png";
import Footer from "../component/Footer";

ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const Projects = () => {
  return (
    <div>
      <Navbar />

      <div className="bodymargin pt-20  px-2 md:px-12 mb-32">
        <div className="dark:text-gray-100 ">
          <section className="text-[#033d35] -z-10  relative">
            <div
              className="lg:h-80 md:h-56 sm:h-48 hero-image w-full bg-right-bottom bg-cover flex"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80)",
              }}
            >
              <p className="suman relative container mx-auto p-4 flex items-center justify-center z-10 text-4xl md:text-7xl font-bold">
                My Projects
              </p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
          {/* ----------------------------------------------------------- Fashion-------------------------------------------------- */}

          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={fashion}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">Style Maven</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  Revolutionize online shopping for the trendy youth with our
                  cutting-edge fashion e-commerce experience
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- Jwelery-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={jwell}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />
                  <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                    Case Study
                  </p>
                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">Estelle's Jewels</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  Elevate your style with our premium yet affordable jewelry
                  e-commerce, upholding a legacy of timeless beauty.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- Glamor AI-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={glamor}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />
                  <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                    Case Study
                  </p>
                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">Glamor AI</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  Get fashion recommendations tailored to you. Influencers
                  curate outfits based on your preferences, while our AI
                  suggests daily wear for upcoming trends.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={nft}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={drink}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={fainance}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- mall-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={shopping}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={dog}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- mall-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={pizza}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={law}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={sneekers}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={dress}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={anime}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------- NFT-------------------------------------------------- */}
          <div className="py-4 group hover:shadow-[0px_16px_49px_0px_#e76e5025] ">
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-4">
                <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={car}
                    class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                    alt="Louvre"
                    loading="lazy"
                  />

                  <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
                    Oct 2022
                  </p>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <p class="subheadline block  text-2xl">NFT Platform</p>
                  <div className="flex gap-4">
                    <img className="w-6 " src={figma} alt="" />
                    <img className="w-6 " src={illustrator} alt="" />
                    <img className="w-6 " src={photoshop} alt="" />
                  </div>
                </div>

                <p className="pb-4 text-sm md:text-md text-gray-500">
                  APrestigious NFT firm partnering with industry giants,
                  providing exclusive NFT solutions to amplify brand presence
                  and digital assets
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <div class="flex justify-start space-x-10">
                    <Link
                      to="https://www.behance.net/gallery/170990813/Zodiac"
                      className="buttonsmalldark"
                      target="_blank"
                      role="button"
                    >
                      Behance
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                    <Link
                      to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                      target="_blank"
                      rel="noreferrer"
                      className="buttonsmall"
                      role="button"
                    >
                      Figma File
                      <img src={newtab} className="ml-2 w-4" alt="" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
