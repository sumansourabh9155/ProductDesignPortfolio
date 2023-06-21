import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import buss from "../../../assets/images/buss.png";
import ux from "../../../assets/images/ux.png";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);

const Help = () => {
  return (
    <div>
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <p className="pb-2 relative flex items-start justify-start w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
              Love to tell you
            </p>
        <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-12 font-bold pb-5 flex justify-center suman">
          How We Can Help You Succeed
        </h1>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Image --> */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src={buss}
              alt="productivity"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            ></img>
          </div>

          {/* <!-- Content --> */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Unlock Your Business Potential
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              We specialize in creating custom solutions that unleash the full
              growth potential of your business.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Maximize productivity and accelerate growth
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Stay ahead of the competition with innovative solutions
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Continuously improve and exceed expectations
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Integrate seamlessly with your existing systems
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-20 md:flex-row max-w-7xl lg:px-16">
          {/* <!-- Content --> */}
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Create Exceptional User Experiences
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              I am specialize in creating visually appealing and highly
              functional user experiences.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Research the event and target audience to meet specific needs
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Implement cutting-edge design trends and techniques
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Merge design and technology seamlessly for optimal functionality
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Craft user experiences that leave a lasting impression
              </li>
            </ul>
          </div>
          {/* <!-- End  Content -->

        <!-- Image --> */}
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src={ux}
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
              alt="settings"
            ></img>
          </div>
        </div>
        {/* Additional Feature */}
        <div className="box-border flex justify-center mt-14">
          <Link
            to="/contact"
            className="px-8 py-2 text-xs md:text-base font-semibold text-white uppercase bg-[#033d35] rounded shadow outline-none  hover:shadow-md focus:outline-none ease transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ..."
          >
            Book a Call
          </Link>
        </div>
        {/* End Additional Feature */}
      </section>
    </div>
  );
};

export default Help;
