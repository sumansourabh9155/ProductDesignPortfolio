import React from "react";
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

      <div className="pt-20 px-12">
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
                My Projects
              </p>
            </div>
          </section>
        </div>

        <div className="mb-40 pt-20">
          <img className="px-80 py-10" src={rakiar} alt="RaikarsGoodVibes" />
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold ">RaikarsGoodVibes</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              25 Oct 2022
            </p>
          </div>
          <p className="pt-5 text-xl text-gray-500">
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
          <div className="flex justify-start pt-8 gap-6">
            <a
              href="https://raikarsgoodvibes.com/"
              target="_blank"
              rel="noreferrer"
              className="flex px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
            >
              <p className="text-white">Check the Website</p>
              <img src={newtab} className="w-8" alt="" />
            </a>

            <a
              href="https://www.behance.net/gallery/170593097/RaikarsGoodVibes"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
            >
              Case Study
            </a>
          </div>
        </div>

        <div className="px-10">
          <img src={glamor} className="px-20" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold ">Glamor Ai</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              25 Oct 2022
            </p>
          </div>
          <p className="pt-5 text-xl text-gray-500">
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
          <div className="flex justify-start pt-8 gap-6">
            <a
              href="https://www.behance.net/gallery/169935581/Glamor-AI"
              target="_blank"
              rel="noreferrer"
              className="flex px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
            >
              <p className="text-white">Case Study</p>
              <img src={newtab} className="w-8" alt="" />
            </a>

            <a
              href="#_"
              target="_blank"
              className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
            >
              Prototype
            </a>
          </div>
        </div>

        <div className="px-20">
          <img src={hoodie} className="px-20 pt-20" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold ">See what others are saying</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              25 Oct 2022
            </p>
          </div>
          <p className="pt-5 text-xl text-gray-500">
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
          <div className="flex justify-start pt-8 gap-6">
            <a
              href="#_"
              // bg-[url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
              className="flex px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
            >
              <p className="text-white">Check My Design</p>
              <img src={newtab} className="w-8" alt="" />
            </a>

            <a
              href="#_"
              className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
            >
              Figma File
            </a>
          </div>
        </div>

        <div className="px-20">
          <img src={beauty} className="px-32 pb-20 pt-40 " alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold ">See what others are saying</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              25 Oct 2022
            </p>
          </div>
          <p className="pt-5 text-xl text-gray-500">
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
          <div className="flex justify-start pt-8 gap-6">
            <a
              href="#_"
              // bg-[url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
              className="flex px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
            >
              <p className="text-white">Check My Design</p>
              <img src={newtab} className="w-8" alt="" />
            </a>

            <a
              href="#_"
              className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
            >
              Figma File
            </a>
          </div>
        </div>

        <div className="px-20">
          <img src={shoe} className="p-32" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold ">See what others are saying</h2>
            <p className="font-semibold px-4 py-1 outline  rounded-full outline-offset-2 outline-1 ...">
              25 Oct 2022
            </p>
          </div>
          <p className="pt-5 text-xl text-gray-500">
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
          <div className="flex justify-start pt-8 gap-6">
            <a
              href="#_"
              // bg-[url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
              className="flex px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
            >
              <p className="text-white">Check My Design</p>
              <img src={newtab} className="w-8" alt="" />
            </a>

            <a
              href="#_"
              className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
            >
              Figma File
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
