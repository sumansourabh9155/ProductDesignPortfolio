import { Link } from "react-router-dom";
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
        <div className="lg:w-5/12 hidden lg:block ">
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
          <h1 className="suman tracking-wide sm:text-2xl md:text-5xl xl:text-5xl mb-2 font-bold">
            Suman <spam className="text-[#e76e50] suman">Sourabh</spam>
          </h1>
          <p className="mb-1 leading-relaxed text-xl text-[#2a9d90]">
            Currently student of Graduation{" "}
          </p>
          <blockquote className="font-serif">
            <p>
              <span className="pr-1 font-serif text-2xl text-center text-red-600">
                "
              </span>
              My goal is to create a user experience that is both aesthetically
              pleasing and functionally efficient. I have an eye for detail and
              always strive to implement the latest design trends.<br></br><br></br> I take the
              time to research the event and the target audience and create a
              design that meets the specific needs of the event and its users.<br></br> <br></br> I
              also work closely with the brand to ensure that the
              design I deliver is what they have in mind.
              <span className="pl-1 font-serif text-2xl text-red-600">"</span>
            </p>
            <div className="mb-2 mx-auto lg:mx-0 w-3/5 pt-3 border-b-2 border-orange-500 opacity-25"></div>
            {/* <footer className="py-2 text-lg">
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
            </ul> */}

            <div className="pt-10">
              <Link
                to={"/projects"}
                className="px-8 py-2 text-xs md:text-base font-semibold text-white uppercase bg-[#033d35] rounded shadow outline-none  hover:shadow-md focus:outline-none ease transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ..."
              >
                Check My Work
              </Link>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
