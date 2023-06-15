import { useState, useEffect } from "react";
import Contact from "../page/Contact";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(
        prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 1
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed w-full transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <header className="lg:pr-28 w-full text-gray-700 shadow-sm body-font fixed item-center bg-white justify-between">
        <div className="container flex flex-col p-6 mx-auto md:flex-row justify-between">
          <div className="flex gap-40"><a
            href="#_"
            className="mb-4 font-bold text-2xl text-gray-900 title-font md:mb-0"
          >
            <p>
              Suman<span className="font-normal">Sourabh</span>
            </p>
          </a>
          <div className="md:hidden">
            <button
              className="flex items-center justify-center p-2 text-gray-900 transition-colors duration-200 rounded focus:outline-none hover:bg-gray-200 "
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          </div>
          <nav className="hidden md:flex md:flex-wrap items-center justify-between text-base md:ml-auto md:mr-auto">
            <a
              href="#_"
              className="mr-5 font-medium hover:text-gray-900"
            >
              Project
            </a>
            <a
              href="#_"
              className="mr-5 font-medium hover:text-gray-900"
            >
              Resources
            </a>
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">
              Blog
            </a>
            <a href="#_" className="font-medium hover:text-gray-900">
              About Me
            </a>
            
          </nav>
          
           {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className={`md:hidden  ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center pt-2 pb-4 space-y-1">
              <a
                href="#_"
                className="block font-medium hover:text-gray-900"
              >
                Project
              </a>
              <a
                href="#_"
                className="block font-medium hover:text-gray-900"
              >
                Resources
              </a>
              <a href="#_" className="block font-medium hover:text-gray-900">
                Blog
              </a>
              <a href="#_" className="block font-medium hover:text-gray-900">
                About Me
              </a>
              <a
              href="#_"
              className="px-4 py-2 text-xs font-bold text-white uppercase bg-black rounded shadow outline-none  hover:shadow-md focus:outline-none ease transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ..."
            >
              Sign Up
            </a>
            </div>
          </div>
          <div className="items-center hidden md:flex h-full">
            <Link to="/contact"
              className="px-4 py-2 text-xs font-bold text-white uppercase bg-black rounded shadow outline-none  hover:shadow-md focus:outline-none ease transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ..."
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
