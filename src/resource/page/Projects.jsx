import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ReactGA from "react-ga";
import hoodie from "../../assets/mockup/hoodieMockup.png";
import beauty from "../../assets/mockup/beautymockup.png";
import glamor from "../../assets/mockup/Glamormockup.png";
import shoe from "../../assets/mockup/showmockup.png";
import rakiar from "../../assets/mockup/raikarmockup.png";
import gym from "../../assets/mockup/gym.webp";
import jwell from "../../assets/mockup/jewll.webp";
import fashion from "../../assets/mockup/fashion.webp";
import dog from "../../assets/mockup/dog.webp";
import law from "../../assets/mockup/law.webp";
import drink from "../../assets/mockup/drink.webp";
import fainance from "../../assets/mockup/fainance.webp";
import nft from "../../assets/mockup/nft.webp";
import shopping from "../../assets/mockup/shopping.webp";
import anime from "../../assets/mockup/anime.webp";
import dress from "../../assets/mockup/dress.webp";
import sneekers from "../../assets/mockup/sneekers.webp";
import pizza from "../../assets/mockup/pizza.webp";
import car from "../../assets/mockup/car.webp";

import figma from "../../assets/icon/figma.png";
import illustrator from "../../assets/icon/illustrator.png";
import photoshop from "../../assets/icon/photoshop.png";
import newtab from "../../assets/buttons/newtab.png";
import Footer from "../component/Footer";

ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const Projects = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-20  px-2 md:px-12 mb-32">
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
          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 ">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={fashion}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p>
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Style Maven
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>


          {/* ---------------------------------------------------------------------------------------------------- */}
          <div className="lg:px-12 ">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={jwell}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p>
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
              Estelle's Jewels
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          
          

          {/* --------------------------------------------------drink ------------------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={drink}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p>
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Cereja
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={sneekers}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Airluxe
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={pizza}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p>
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Pizza App
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={fainance}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p>
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Finance App
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={dog}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                TailorPup
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={law}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Acend Legal
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={shopping}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Gallerix
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={dress}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Boutique
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={nft}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Tiny Face 
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={anime}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Imagiworks
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
{/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

<div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={car}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                Carcruise
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------- Raikars Good Vibes-------------------------------------------------- */}

          <div className="lg:px-12 mt-20">
            <div class="relative cursor-pointer  pb-5  overflow-hidden bg-cover bg-no-repeat">
              <img
                src={gym}
                class="md:px-[0rem] lg:px-[0rem] transition duration-300 ease-in-out hover:scale-105"
                alt="Louvre"
              />
              {/* <p className=" absolute top-0 left-0 rounded-md bg-[#033d35] text-white font-semibold px-4 py-1 ">
                Case Study
              </p> */}
              <p className=" absolute top-0 right-0 rounded-md bg-[#e76e50] text-white font-semibold px-4 py-1 ">
              Oct 2022
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold subheadline ">
                RugedLift
              </h2>
              <div className="flex pt-4 gap-4">
              <img className="w-8 " src={figma} alt="" />
              <img className="w-8 " src={illustrator} alt="" />
              <img className="w-8 " src={photoshop} alt="" />
            </div>
            </div>
            <p className="pt-2 text-sm md:text-md text-gray-500">
              Style Maven is a fashion studio blending timeless elegance with
              boundless creativity. Passionate about artistry and
              sophistication, we captivate the fashion-forward with designs
              beyond the ordinary.
            </p>
            
            <div className="md:flex justify-start pt-4 gap-10 space-y-3 md:space-y-0">
              <Link
                to="https://www.behance.net/gallery/170990813/Zodiac"
                className="buttonsmalldark"
                target="_blank"
                role="button"
              >
                Behance
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
              <Link
                to="https://www.figma.com/file/NJtinxCRlqNjN39CaQ8MMa/Figma-Session?type=design&node-id=0%3A1&mode=design&t=ZSnLBu7Xdp05mENY-1"
                target="_blank"
                rel="noreferrer"
                className="buttonsmall "
                role="button"
              >
                Figma File
                <img src={newtab} className="ml-2 w-8" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
