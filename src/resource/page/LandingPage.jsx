import Navbar from "../component/Navbar";
import HeroSection from "../component/HomePageComponent/HeroSection";
import Tech from "../component/HomePageComponent/Tech";
import { AboutMe } from "../component/HomePageComponent/AboutMe";
import Footer from "../component/Footer";
import Help from "../component/HomePageComponent/Help";
import WorkProcess from "../component/HomePageComponent/WorkProcess";
import Testimonial from "../component/HomePageComponent/Testimonial";
import AnimatedProjects from "../component/HomePageComponent/AnimatedProjects";
import Project from "../component/HomePageComponent/Project";
import ReactGA from 'react-ga';
import Blog from "../component/HomePageComponent/Blog";
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);

// import Ribbon from '../component/Ribbon'

const LandingPage = () => {
  return (
    <div className=" bodymargin flex justify-between px-4 mx-auto max-w-screen-2xl">
    <div className="pattern-checks-sm pl-3 pr-3 ml-3 mr-3">
      <Navbar />
      
      <HeroSection />
      <Tech />
      <AboutMe />
      <AnimatedProjects/>
      <Help />
      {/* <Project/> */}
      <WorkProcess />
      <Blog/>
      <Testimonial />
      <Footer />
      {/* <Ribbon/> */}

    </div>
    </div>
  );
};

export default LandingPage;
