import instagram from "../../assets/Socal Media/icons8-instagram.png";
import behance from "../../assets/Socal Media/icons8-behance.png";
import github from "../../assets/Socal Media/icons8-github.png";
import dribble from "../../assets/Socal Media/icons8-dribble.png";
import Linkedin from "../../assets/Socal Media/icons8-linkedin.png";
import { NavLink } from "react-router-dom";
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);
const Footer = () => {
  return (
    <div>
      <section className="bg-white pt-12">
        <hr className="w-full h-0.5 bg-[#e76e50] opacity-25" />
        <div className="max-w-screen-xl px-4 pt-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <NavLink
                to="/"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Home
              </NavLink>
            </div>
            <div className="px-5 pt-2">
              <NavLink
                to={"/about"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About Me
              </NavLink>
            </div>
            <div className="px-5 py-2">
              <NavLink
                to={"/blog"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </NavLink>
            </div>
            <div className="px-5 py-2">
              <NavLink
                to={"/projects"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Projects
              </NavLink>
            </div>

            <div className="px-5 py-2">
              <NavLink
                to={"/resources"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Resources
              </NavLink>
            </div>
            <div className="px-5 py-2">
              <NavLink
                to={"/contact"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </NavLink>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="https://www.behance.net/sumansourabh" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Behance</span>
              <img className="w-12" src={behance} alt="behance link"></img>
            </a>
            <a href="https://www.instagram.com/ux.suman/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <img className="w-12" src={instagram} alt="instagram link"></img>
            </a>
            <a href="https://dribbble.com/sumansourabh9155" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Dribble</span>
              <img className="w-12" src={dribble} alt="dribble link"></img>
            </a>
            <a href="https://github.com/sumansourabh9155"  className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <img className="w-12" src={github} alt="github link"></img>
            </a>
            <a href="https://www.linkedin.com/in/sumansourabh9155/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Linkedin</span>
              <img className="w-12" src={Linkedin} alt="linkedin link"></img>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Suman Sourabh, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
