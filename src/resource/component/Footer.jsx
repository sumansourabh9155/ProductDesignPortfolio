import instagram from "../../assets/Socal Media/icons8-instagram-250.png";
import behance from "../../assets/Socal Media/icons8-behance-250.png";
import github from "../../assets/Socal Media/icons8-github-250.png";
import dribble from "../../assets/Socal Media/icons8-dribble-150.png";
import Linkedin from "../../assets/Socal Media/icons8-linkedin-250.png";
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);
const Footer = () => {
  return (
    <div>
      <section className="bg-white">
        <hr className="w-full h-0.5 bg-gray-100" />
        <div className="max-w-screen-xl px-4 pt-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
            </div>
            <div className="px-5 pt-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About Me
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Projects
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Resources
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <img className="w-12" src={behance}></img>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <img className="w-12" src={instagram}></img>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <img className="w-12" src={dribble}></img>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <img className="w-12" src={github}></img>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <img className="w-12" src={Linkedin}></img>
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
