import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Link, NavLink } from "react-router-dom";
import play from "../../../assets/buttons/play.png";

ReactGA.initialize("G-R2Q7XQ6WBW");

const HeroSection = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="container mx-auto px-2 md:px-5 pt-20 md:pt-28 pb-10">
      <section className=" body-font justify-center scroll-smooth">
        <div className="flex flex-col md:flex-row items-center">
          <div className="lg:flex-grow flex flex-col text-[#033d35] md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-none">
            <p className="mb-2 md:mb-4 leading-relaxed text-sm md:text-xl text-[#e76e50]">
              Designing for Impact:
            </p>
            <h1 className="leading-normal text-3xl  md:text-4xl xl:text-6xl mb-4 font-bold suman">
              Designing {" "}
              <span className="text-[#e76e50] suman">
                User-Centric Experiences{" "}
              </span>{" "}
              that Engage
            </h1>
            <p className="mb-8 tracking-wide leading-relaxed opacity-80 text-sm md:text-base">
              Crafting intuitive, accessible, and visually compelling interfaces
              that not only meet but exceed user expectations—because your
              digital presence deserves more than just a good design
            </p>
            <div className="flex justify-center gap-6 pt-2">
              <Link to={"/projects"} className="button-dark " role="button">
                Check My Work
              </Link>
            </div>
          </div>
          <div className="w-full  sm:w-40 lg:max-w-xl lg:w-full md:w-full xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
            <div className="w-full justify-center">
              <NavLink
                to="/projects"
                className="block relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4"
                  alt="hero"
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  loading="lazy"
                />
                <button className="absolute bottom-0 left-5 bg-white text-white rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </NavLink>
              <NavLink
                to="/projects"
                className="hidden md:block relative transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4"
                  alt="hero"
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  loading="lazy"
                />
                <button className="absolute bottom-0 left-5 bg-white text-white rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </NavLink>
              <NavLink
                to="/projects"
                className="hidden md:block relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4"
                  alt="hero"
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  loading="lazy"
                />
                <button className="absolute bottom-0 left-5 bg-white text-white rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
