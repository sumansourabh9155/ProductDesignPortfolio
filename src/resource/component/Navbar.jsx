import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactGA from "react-ga";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize("G-R2Q7XQ6WBW");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0);
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

  const navLinks = [
    { to: "/casestudy", text: "Case Study" },
    { to: "/projects", text: "Projects" },
    { to: "/resources", text: "Resources" },
    { to: "/blog", text: "Blog" },
    { to: "/About", text: "About Me" },
  ];

  return (
    <div className="md:pl-12 flex justify-center mx-auto max-w-screen-2xl">
      <div
        className={`fixed w-full transition-transform duration-300 z-40 ${
          isScrolled ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <header className="lg:px-0 w-full md:w-[95%] text-gray-700 shadow-sm bottom body-font fixed bg-white rounded-xl mt-2">
          <div className="container flex flex-col pt-4 md:p-4 mx-auto md:flex-row justify-between items-center">
            <div className="flex px-4 gap-24 md:gap-40">
              <Link to={"/"} className="mb-4 font-bold text-2xl text-gray-900 title-font md:mb-0">
                <p>
                  Suman<span className="font-normal">Sourabh</span>
                </p>
              </Link>
              <div className="md:hidden">
                <button
                  className="flex items-center justify-center md:p-2 text-gray-900 transition-colors duration-200 rounded focus:outline-none hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="hidden md:flex md:flex-wrap items-center justify-between text-base md:ml-auto md:mr-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "mr-5 font-bold text-[#e76e50]" : "mr-5 block font-medium hover:text-gray-700"
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>

            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
              <div className="flex flex-col items-center pt-2 pb-4 space-y-1 bg-white">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "font-bold text-[#e76e50]" : "block font-medium hover:text-gray-700"
                    }
                  >
                    {link.text}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact"
                  className="px-4 py-2 text-xs font-bold text-white uppercase bg-[#e76e50] rounded shadow outline-none hover:shadow-md focus:outline-none ease transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ..."
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="items-center hidden md:flex h-full">
              <Link to="/contact" className="buttonsmall" role="button">
                Contact
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
