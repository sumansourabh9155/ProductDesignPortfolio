import Navbar from "../component/Navbar";
import HeroSection from "../component/HomePageComponent/HeroSection";
import Tech from "../component/HomePageComponent/Tech";
import { AboutMe } from "../component/HomePageComponent/AboutMe";
import Footer from "../component/Footer";
import Help from "../component/HomePageComponent/Help";
import WorkProcess from "../component/HomePageComponent/WorkProcess";
import Testimonial from "../component/HomePageComponent/Testimonial";
import Project from "../component/HomePageComponent/Project";
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);

// import Ribbon from '../component/Ribbon'

const LandingPage = () => {
  return (
    <div className="pattern-checks-sm">
      <Navbar />
      <HeroSection />
      <Tech />
      <AboutMe />
      <Help />
      <Project/>
      <WorkProcess />
      <Testimonial />
      <Footer />
      {/* <Ribbon/> */}
    </div>
  );
};

export default LandingPage;
