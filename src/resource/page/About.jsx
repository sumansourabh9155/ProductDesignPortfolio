import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import suman from "../../assets/images/suman.jpg";
import Events from "../component/AboutPageComponent/Events";


import ReactGA from "react-ga";
import Timeline from "../component/AboutPageComponent/Timeline";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const ExampleComponent = () => {
  return (
    <div>
      <Navbar />

      <div className="bodymargin pt-20 px-1 md:px-12">
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
                About Me
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row items-center pt-0 md:pt-24 px-2 md:px-12">
          <div className="md:w-7/12 lg:w-5/12 hidden lg:block">
            <img
              src={suman}
              className=" rounded-tl-lg rounded-br-full"
              alt="description"
            />
          </div>
          <div className="max-w-2xl flex flex-col items-center lg:items-start p-4 md:p-12">
            {/* Image for mobile view */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-32 w-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${suman})` }}
            ></div>
            {/* Blockquote */}
            <p className="mb-1 leading-relaxed text-xl text-[#f4a462]">
              About Me
            </p>
            <h1 className="suman tracking-wide text-3xl sm:text-4xl md:text-5xl xl:text-5xl mb-2 font-bold">
              Suman <span className="text-[#e76e50] suman">Sourabh</span>
            </h1>
            <p className="mb-1 leading-relaxed text-xl text-[#2a9d90]">
              Currently a student of Graduation
            </p>
            <blockquote className="font-serif text-center md:text-left">
              <p className="mb-4">
                <span className="pr-1 font-serif text-2xl text-center text-red-600">
                  "
                </span>
                My goal is to create a user experience that is both
                aesthetically pleasing and functionally efficient. I have an eye
                for detail and always strive to implement the latest design
                trends.
                <br />
                <br />
                I take the time to research the event and the target audience
                and create a design that meets the specific needs of the event
                and its users.
                <br />
                <br />I also work closely with the brand to ensure that the
                design I deliver is what they have in mind.
                <span className="pl-1 font-serif text-2xl text-red-600">"</span>
              </p>
              <div className="mb-4 w-3/5 border-b-2 border-orange-500 opacity-25 mx-auto lg:mx-0"></div>
              <div className="flex justify-center  md:justify-start pt-0 sm:item-center md:pt-10">
                <Link to="/projects" className="button-dark " role="button">
                  Check My Work
                </Link>
              </div>
            </blockquote>
          </div>
        </div>
        <Events/>
        
        
      </div>
    
      <Footer />
    </div>
  );
};

export default ExampleComponent;
