import ReactGA from "react-ga";
import play from "../../../assets/buttons/play.png";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const HeroSection = () => {
  return (
    <div className="">
      <section className="texpattern-vertical-lines-xlt-black body-font justify-center scroll-smooth">
        <div className="container mx-auto flex px-5 pt-28 pb-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col text-[#033d35] md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-none">
            <p className="mb-4 leading-relaxed text-sm md:text-xl text-[#e76e50]">
              Designing for Impact:
            </p>
            <h1 className=" leading-loose tracking-wide text-3xl md:text-6xl xl:text-[63px] mb-4 font-bold suman">
              Empowering{" "}
              <spam className="text-[#e76e50] suman">Purpose-Driven</spam>{" "}
              Brands to Thrive
            </h1>
            {/* <p className="mb-1 leading-relaxed text-2xl text-[#033d35]" >Seamless Digital Experiences, Where Design Meets Code</p> */}
            <p className="mb-8  tracking-wide leading-relaxed opacity-80 test-sm md:text-md">
            Creating success stories by empowering visionaries Unleashing growth potential with tailored solutions Solutions that propel businesses to new heights"
            </p>
            {/* <h1 className="title-font tracking-wide text-3xl md:text-6xl xl:text-5xl mb-4 font-bold font-['Cardo']">
              Crafting Captivating Digital Experiences: Unlocking the Perfect
              Blend of Beauty and Functionality
            </h1> */}
            <div className="flex justify-center gap-6 pt-2">
              <a
                href="#_"
                // bg-[url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
                className="px-8 py-2 text-xs md:text-base font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
              >
                Check My Work
              </a>
              <a
                href="#_"
                className="px-8 py-2 text-xs md:text-base font-bold text-[#033d35] uppercase transition-all duration-150 rounded shadow outline outline-2 active:bg-teal-600 hover:shadow-md"
              >
                Resume
              </a>
            </div>
          </div>
          <div
            id="pattern"
            className="w-full sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
          >
            <div className="w-full justify-center ">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4 "
                  alt="hero"
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <button class="absolute bottom-0 left-5 bg-white text-white  rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </div>
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4 "
                  alt="hero"
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <button class="absolute bottom-0 left-5 bg-white text-white  rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </div>
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <img
                  className="object-cover object-center rounded-xl brightness-95 hover:brightness-100 h-40 w-full my-4 "
                  alt="hero"
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                />
                <button class="absolute bottom-0 left-5 bg-white text-white  rounded-full hover:bg-white m-2">
                  <img className="h-12 pl-3 p-3" src={play} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
