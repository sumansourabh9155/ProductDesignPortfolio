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


ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const Projects = () => {
  return (
    <div>
      <Navbar />
      
      
      <div className="px-12 pt-20">
      <div className="px-20">
          <img className="p-80" src={rakiar} alt="" />
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
              Prototype
            </a>
          </div>
        </div>
        
        <div className="px-20">
          <img src={glamor} className="p-40" alt="" />
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
              Prototype
            </a>
          </div>
        </div>
        
        <div className="px-20">
          <img src={hoodie} className="p-40"alt="" />
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
              Prototype
            </a>
          </div>
        </div>

        



        <div className="px-20">
          <img src={beauty} className="p-40" alt="" />
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
              Prototype
            </a>
          </div>
        </div>

        <div className="px-20">
          <img src={shoe} className="p-40" alt="" />
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
              Prototype
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
