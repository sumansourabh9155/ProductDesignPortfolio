import suman from "../../../assets/images/suman.jpg";
import ReactGA from "react-ga";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
export const AboutMe = () => {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row items-center pt-24 justify-center"
        data-aos="fade-in"
      >
        <div className="lg:w-5/12 hidden lg:block py-4">
          <img
            src={suman}
            className="rounded-tl-lg rounded-br-full"
            data-aos="fade-in"
            alt="description"
          />
        </div>
        <div className="max-w-3xl flex flex-col it justify-center p-4 md:p-12">
          {/* Image for mobile view */}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-32 w-32 bg-cover bg-center"
            style={{
              backgroundImage: "src={suman}",
            }}
          ></div>
          {/* Blockquote */}
          <p className="mb-1 leading-relaxed text-xl text-[#f4a462]">
            About Me{" "}
          </p>
          <h1 className="suman tracking-wide sm:text-2xl md:text-4xl xl:text-5xl mb-2 font-bold">
            Suman <spam className="text-[#e76e50] suman">Sourabh</spam>
          </h1>
          {/* <p className="mb-1 leading-relaxed text-xl text-[#2a9d90]">
            Currently student of Graduation{" "}
          </p> */}
          <blockquote className="font-serif">
            <p>
              <span className="pr-1 font-serif text-2xl text-center text-red-600">
                "
              </span>
              I create visually appealing and highly functional user experiences
              as a UI/UX Designer and Full-Stack Web Developer. I bring your
              ideas to life by merging cutting-edge design and technology. My
              design meets the specific needs of the event and its users after
              researching the event and its target audience.
              <span className="pl-1 font-serif text-2xl text-red-600">"</span>
            </p>
            <div className="mb-2 mx-auto lg:mx-0 w-3/5 pt-3 border-b-2 border-orange-500 opacity-25"></div>
            <footer className="py-2 text-lg">
              <cite className=" text-red-600 font-bold italic">
                Process I follow while,
              </cite>
              Designing a Product
            </footer>
            <ul>
              <li className="pt-2">
                {" "}
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Research
              </li>{" "}
              <li className="pt-2">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Design Trends
              </li>{" "}
              <li className="pt-2">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Attention to Detail
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Collaboration
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Functionality
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Continued Improvement
              </li>
            </ul>

            <div className="pt-10">
              <a
                href="#_"
                className="px-8 py-2 text-md font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#033d35] bg-[#033d35] rounded shadow  active:bg-teal-600 hover:shadow-md ease"
              >
                Check My Work
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
