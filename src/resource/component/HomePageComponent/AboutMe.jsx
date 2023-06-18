import suman from "../../../assets/images/suman.jpg";
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
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
        <div className="max-w-3xl flex flex-col justify-center p-4 md:p-12">
          {/* Image for mobile view */}
          <img
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-32 w-32 bg-cover bg-center"
            src={suman}
          ></img>
          {/* Blockquote */}
          <p className="mb-4 leading-relaxed text-xl text-[#f4a462]">
            About Me{" "}
          </p>
          <h1 className="title-font tracking-wide sm:text-2xl md:text-4xl xl:text-6xl mb-4 font-bold">
            Suman <spam className="text-[#e76e50]">Sourabh</spam>
          </h1>
          <p className="mb-4 leading-relaxed text-xl text-[#2a9d90]">
            Currently student of Graduation{" "}
          </p>
          <blockquote className="font-serif">
            <p>
              <span className="pr-1 font-serif text-2xl text-center text-red-600">
                "
              </span>
              Creating an aesthetically pleasing and functionally efficient user
              experience requires attention to detail and staying up-to-date
              with the latest design trends. It involves a comprehensive
              approach that involves research, collaboration, and
              implementation.
              <span className="pl-1 font-serif text-2xl text-red-600">"</span>
            </p>
			<footer className="m-2">
              Rachael Halloway,{" "}
              <cite className="pl-3 text-red-600 font-bold italic">
                Supreme Leader of a Free Mars
              </cite>
            </footer>
            <ul>
              <li>Research</li> <li>Design Trends</li>{" "}
              <li>Attention to Detail</li>
              <li>Collaboration</li>
              <li>Functionality</li>
              <li>Continued Improvement</li>
            </ul>
            <div className="mb-2 mx-auto lg:mx-0 w-3/5 pt-3 border-b-2 border-orange-500 opacity-25"></div>
            
            <div className="pt-5">
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
