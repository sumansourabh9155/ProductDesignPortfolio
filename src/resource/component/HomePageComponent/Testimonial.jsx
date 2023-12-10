import ReactGA from "react-ga";
import sam from "../../../assets/images/sam.jpg";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const Testimonial = () => {
  return (
    <div>
      <section className="flex items-center justify-center py-12 bg-white min-w-screen">
        <div className="md:px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative pb-2 flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 className="relative flex items-center justify-center w-full max-w-3xl text-4xl font-bold lg:justify-center suman">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#e76e50"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-[#ACE57F] lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>

            <div>
              <div className="xl:px-20  md:pt-8 2xl:mx-auto 2xl:container relative z-40">
                <div className="mt-14 md:flex justify-center items-center">
                  <div className="relative lg:w-1/2 h-80 w-72 xl:h-96 ">
                    <img
                      src={sam}
                      alt="profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover hover:shadow-[0px_16px_49px_0px_#e76e5025] rounded-xl"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-[#e76e50] rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        className=" w-12 h-12 lg:inline-block"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 lg:w-2/3 xl:ml-32 md:ml-20 md:mt-0  flex flex-col justify-between">
                    <div>
                      <h1 className=" subheadline text-2xl pt-5 md:pt-8 font-semibold text-gray-800">
                        He was definitely the person who if commits would
                        deliver with utmost excellence.
                      </h1>
                      <blockquote className="font-serif text-center md:text-left md:pt-4">
                        <p className="mb-4">
                          <span className="pr-1 font-serif text-2xl text-center text-red-600">
                            "
                          </span>
                          Suman worked on our dream project as a UX/UI Design
                          Lead. His gift to perfect the designs was seen since
                          very beginning of the project in his every action.
                          From understanding the product & brand to
                          understanding founders vision to executing those
                          minutest details. His sincerity and dedication to
                          execute plans inspite of numerous huddles is what
                          makes him true winner.I believe his this attitude and
                          grit for his work will help him carve his mark in this
                          Industry.
                          <span className="pl-1 font-serif text-2xl text-red-600">
                            "
                          </span>
                        </p>
                      </blockquote>
                    </div>
                    <div className="md:mt-8 mt-4">
                      <p className="suman text-xl font-semibold leading-4 text-gray-800">
                        Samira Pujari
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                        Founder & Owner, Art & Décor Brand "RaikarsGoodVibes"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
