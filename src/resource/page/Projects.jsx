import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ReactGA from "react-ga";
import hoodie from "../../assets/mockup/hoodieMockup.png";
import beauty from "../../assets/mockup/beautymockup.png";
import glamor from "../../assets/mockup/Glamormockup.png";
import shoe from "../../assets/mockup/showmockup.png";
import rakiar from "../../assets/mockup/raikarmockup.png";
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

        <div className="mb-40 pt-20">
          <img
            className="md:px-[4rem] lg:px-[25rem] md:py-10"
            src={rakiar}
            alt="RaikarsGoodVibes"
          />
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-5xl font-bold subheadline">RaikarsGoodVibes</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              Oct 2022
            </p>
          </div>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            aspernatur commodi cum dignissimos magnam exercitationem non vero?
            Autem quaerat repellat ratione blanditiis vel, consequatur
            voluptatibus iste dolore impedit unde ducimus numquam illum,
            exercitationem quam excepturi voluptatum ad deleniti asperiores
            itaque incidunt animi quibusdam ex suscipit. Expedita accusantium
            nam consequatur veniam?
          </p>
          <div className="flex pt-6 gap-4">
            <img className="w-12 " src={figma} alt="" />
            <img className="w-12 " src={illustrator} alt="" />
            <img className="w-12 " src={photoshop} alt="" />
          </div>

          <div className="md:flex justify-start pt-8 gap-10 space-y-3 md:space-y-0">
            <Link
              to="https://www.behance.net/gallery/170593097/RaikarsGoodVibes"
              className="button-dark"
              target="_blank"
              role="button"
            >
              Case study
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
            <Link
              to="https://raikarsgoodvibes.com/"
              target="_blank"
              rel="noreferrer"
              className="buttonlight "
              role="button"
            >
              Website
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
          </div>
        </div>

        <div className="lg:px-10">
          <img src={glamor} className="md:px-[0rem] lg:px-[4rem]" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold subheadline">Glamor Ai</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              Oct 2022
            </p>
          </div>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            aspernatur commodi cum dignissimos magnam exercitationem non vero?
            Autem quaerat repellat ratione blanditiis vel, consequatur
            voluptatibus iste dolore impedit unde ducimus numquam illum,
            exercitationem quam excepturi voluptatum ad deleniti asperiores
            itaque incidunt animi quibusdam ex suscipit. Expedita accusantium
            nam consequatur veniam?
          </p>
          <div className="flex pt-4 gap-4">
            <img className="w-12 " src={figma} alt="" />
            <img className="w-12 " src={illustrator} alt="" />
            <img className="w-12 " src={photoshop} alt="" />
          </div>

          <div className="md:flex justify-start pt-8 gap-10 space-y-3 md:space-y-0">
            <Link
              to="https://www.behance.net/gallery/169935581/Glamor-AI"
              className="button-dark"
              target="_blank"
              role="button"
            >
              Case Study
              <img src={newtab} className="w-8" alt="" />
            </Link>
            <Link
              to="https://www.figma.com/file/ds2rCYBjXFbWftxLplklMP/GlamorAI.-(App-Design)?type=design&node-id=187%3A3591&mode=design&t=63GZWHjxyevgMXrS-1"
              target="_blank"
              rel="noreferrer"
              className="buttonlight "
              role="button"
            > 
              Figma File
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
          </div>
        </div>

        <div className="lg:px-20">
          <img
            src={hoodie}
            className="md:px-[0rem] lg:px-[7rem] pt-20"
            alt=""
          />
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold subheadline">
              Hoodie Site
            </h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              Oct 2022
            </p>
          </div>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            aspernatur commodi cum dignissimos magnam exercitationem non vero?
            Autem quaerat repellat ratione blanditiis vel, consequatur
            voluptatibus iste dolore impedit unde ducimus numquam illum,
            exercitationem quam excepturi voluptatum ad deleniti asperiores
            itaque incidunt animi quibusdam ex suscipit. Expedita accusantium
            nam consequatur veniam?
          </p>
          <div className="flex pt-4 gap-4">
            <img className="w-12 " src={figma} alt="" />
            <img className="w-12 " src={illustrator} alt="" />
            <img className="w-12 " src={photoshop} alt="" />
          </div>
          <div className="md:flex justify-start pt-8 gap-10 space-y-3 md:space-y-0">
            <Link
              to="https://www.behance.net/gallery/170990813/Zodiac"
              className="button-dark"
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
              className="buttonlight "
              role="button"
            >
              Figma File
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
          </div>
        </div>

        <div className="lg:px-20">
          <img
            src={beauty}
            className="md:px-[0rem] lg:px-[8rem] pb-20 pt-40 "
            alt=""
          />
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold subheadline">
              Health Vatics
            </h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              Oct 2022
            </p>
          </div>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            aspernatur commodi cum dignissimos magnam exercitationem non vero?
            Autem quaerat repellat ratione blanditiis vel, consequatur
            voluptatibus iste dolore impedit unde ducimus numquam illum,
            exercitationem quam excepturi voluptatum ad deleniti asperiores
            itaque incidunt animi quibusdam ex suscipit. Expedita accusantium
            nam consequatur veniam?
          </p>
          <div className="flex pt-4 gap-4">
            <img className="w-12 " src={figma} alt="" />
            <img className="w-12 " src={illustrator} alt="" />
            <img className="w-12 " src={photoshop} alt="" />
          </div>
          <div className="md:flex justify-start pt-8 gap-10 space-y-3 md:space-y-0">
            <Link
              to="https://www.behance.net/gallery/168500405/HealthVatica"
              className="button-dark"
              target="_blank"
              role="button"
            >
              Behance
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
            <Link
              to="https://www.figma.com/file/sZq7nHDWcZOtqaiWbL3KRM/Beauty-Product-E-commerse-site?type=design&node-id=650%3A279&mode=design&t=ZSnLBu7Xdp05mENY-1"
              target="_blank"
              rel="noreferrer"
              className="buttonlight "
              role="button"
            >
              Figma File
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
          </div>
        </div>

        <div className="lg:px-20 ">
          <img
            src={shoe}
            className="md:px-[0rem] lg:px-[12rem] pt-20 md:pt-32 md:pb-10"
            alt=""
          />
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold subheadline">
              Shoe Store
            </h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              Oct 2022
            </p>
          </div>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            aspernatur commodi cum dignissimos magnam exercitationem non vero?
            Autem quaerat repellat ratione blanditiis vel, consequatur
            voluptatibus iste dolore impedit unde ducimus numquam illum,
            exercitationem quam excepturi voluptatum ad deleniti asperiores
            itaque incidunt animi quibusdam ex suscipit. Expedita accusantium
            nam consequatur veniam?
          </p>
          <div className="flex pt-4 gap-4">
            <img className="w-12 " src={figma} alt="" />
            <img className="w-12 " src={illustrator} alt="" />
            <img className="w-12 " src={photoshop} alt="" />
          </div>
          <div className="md:flex justify-start pt-8 gap-10 space-y-3 md:space-y-0">
            <Link
              to="https://www.behance.net/gallery/168500089/Sneakers-Landing-page"
              className="button-dark"
              target="_blank"
              role="button"
            >
              Behance
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
            <Link
              to="https://www.figma.com/community/file/1188097982700213814"
              target="_blank"
              rel="noreferrer"
              className="buttonlight"
              role="button"
            >
              Figma File
              <img src={newtab} className="ml-2 w-8" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
