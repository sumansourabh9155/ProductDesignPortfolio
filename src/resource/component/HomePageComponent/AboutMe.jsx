import { Link } from "react-router-dom";
import suman from "../../../assets/images/suman.jpg";
import ReactGA from "react-ga";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
export const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center pt-24 px-12" >
      <div className="md:w-7/12 lg:w-5/12 hidden lg:block">
        <img src={suman} className="rounded-tl-lg rounded-br-full" alt="description" />
      </div>
      <div className="max-w-2xl flex flex-col items-center lg:items-start p-4 md:p-12">
        {/* Image for mobile view */}
        <div className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-32 w-32 bg-cover bg-center" style={{ backgroundImage: `url(${suman})` }}></div>
        {/* Blockquote */}
        <p className="mb-1 leading-relaxed text-xl text-[#f4a462]">About Me</p>
        <h1 className="suman tracking-wide text-3xl sm:text-4xl md:text-5xl xl:text-5xl mb-2 font-bold">
          Suman <span className="text-[#e76e50] suman">Sourabh</span>
        </h1>
        <p className="mb-1 leading-relaxed text-xl text-[#2a9d90]">
          Currently a student of Graduation
        </p>
        <blockquote className="font-serif text-center md:text-left">
          <p className="mb-4">
            <span className="pr-1 font-serif text-2xl text-center text-red-600">"</span>
            My goal is to create a user experience that is both aesthetically pleasing and functionally efficient. I have an eye for detail and always strive to implement the latest design trends.
            <br /><br />
            I take the time to research the event and the target audience and create a design that meets the specific needs of the event and its users.
            <br /><br />
            I also work closely with the brand to ensure that the design I deliver is what they have in mind.
            <span className="pl-1 font-serif text-2xl text-red-600">"</span>
          </p>
          <div className="mb-4 w-3/5 border-b-2 border-orange-500 opacity-25 mx-auto lg:mx-0"></div>
          <div className="pt-10">
            <Link
              to="/projects"
              className="button-dark " role="button"
            >
              Check My Work
            </Link>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
