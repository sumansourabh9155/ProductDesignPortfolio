import React from "react";

import jwellscreeen from "../../../assets/estellesJewels/jwellscreeen.png";
import wireframe from "../../../assets/estellesJewels/wireframe.png";
import persona1 from "../../../assets/estellesJewels/persona1.png";
import persona2 from "../../../assets/estellesJewels/persona2.png";
import color from "../../../assets/estellesJewels/color.png";
import font from "../../../assets/estellesJewels/font.png";
import hero from "../../../assets/estellesJewels/hero.png";
import product from "../../../assets/estellesJewels/product.png";
import heatmap from "../../../assets/estellesJewels/heatmap.png";
import ui from "../../../assets/estellesJewels/ui.png";

import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const EstellesJewels = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-[#FFE7CF] h-screen " style={{ color: "#903643" }}>
        <div className="">
          <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-6">
              <a
                href="#"
                class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-[#424B54] rounded-full hover:bg-[#829553] "
                role="alert"
              >
                <span class="text-sm font-medium jwellwhite  text-white p-2 px-5">
                  Solution for Fashion Industry
                </span>
              </a>
              <h1 class="max-w-xl mb-4 text-4xl jwellwhite font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                Estelle's Jewels
              </h1>
              <p class="max-w-xl mb-6 font-light jwellwhite text-black sinaiwhite lg:mb-8 lg:text-sm">
                The traditional jewelry shop, established in 1952, lacks an
                online presence that resonates with the modern audience. With no
                existing digital platform, the brand faces a challenge in
                reaching and engaging with a broader market. The absence of an
                e-commerce website hinders potential customers from experiencing
                the brand's legacy, elegance, and luxury.
              </p>

              <Link
                preventScrollReset={true}
                to="/casestudy/EstellesJewels"
                class="inline-flex jwellwhite items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-black rounded-lg hover:bg-[#4c0b6a] focus:ring-4 focus:ring-gray-100  "
              >
                Case Study
                <svg
                  class="w-5 h-5 ml-2 -mr-1 "
                  fill="currentColor"
                  Z
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    fill="black"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div class="w-10/12 md:w-full mt-2 lg:mt-0 lg:col-span-6   lg:flex">
              <img src={jwellscreeen} alt="mockup"></img>
            </div>
          </div>
        </div>
      </section>
      <main class="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white font-['Tenor Sans'] antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                {/* <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  ></img>
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                      alt="Jese Leos"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div> */}
              </address>
              <h1 class="mb-4 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
                Project Information (Goal)
              </h1>
            </header>
            <p class="lead jwell text-sm">
              Create a brand-new e-commerce platform that embodies the essence
              of the established jewelry shop while catering to the modern
              tastes and preferences of online consumers. The goal is to build a
              seamless, visually captivating platform that reflects the brand's
              core values of elegance, desire, trust, empowerment, luxury,
              neutrality, established tradition, modernism, and simplicity.
            </p>

            <h1 class="my-4 jwell text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Problems Statement
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Designing a jewelry website that is both elegant and modern.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Making the website user-friendly and informative.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Conveying the brand's rich history and legacy of
                  craftsmanship.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Maintaining a luxurious and sophisticated atmosphere.
                </span>{" "}
              </li>
            </ol>

            <h1 class="mb-4 pt-8 jwell text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Solution
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Merges tradition with modern aesthetics.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Showcases jewelry in a visually striking manner.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Encourages exploration and empowers users to make informed
                  decisions.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Incorporates dynamic product showcases, personalized
                  recommendations, and a wishlist feature.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Narrates the brand's rich history and legacy of craftsmanship.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Provides a simple and clean navigation structure.
                </span>{" "}
              </li>
              <li className="jwell">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Prioritizes user-centric features.
                </span>{" "}
              </li>
            </ol>

            <h1 class="mb-4 pt-8 jwell text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Persona
            </h1>
            <figure>
              <img src={persona1} alt=""></img>
              <figcaption className="text-center">Persona 1</figcaption>
            </figure>
            <figure>
              <img src={persona2} alt=""></img>
              <figcaption className="text-center">Persona 2</figcaption>
            </figure>

            <h1 class="mt-8 jwell text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Font Used (Inter)
            </h1>
            <div className="jitems-center">
              <ul class="  text-gray-500  dark:text-gray-400">
                <li className="jwell">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Cleanliness and modernity
                  </span>{" "}
                  The Inter font has a clean and contemporary look that is
                  consistent with the brand's focus on adventure and
                  exploration.
                </li>
                <li className="jwell">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Readability and accessibility
                  </span>{" "}
                  The Inter font is highly legible, even at smaller sizes, which
                  is important for ensuring that the brand's message is easily
                  communicated to potential customers.
                </li>
                <li className="jwell">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Friendliness and approachability
                  </span>{" "}
                  The Inter font has a friendly and approachable feel that is
                  consistent with the brand's commitment to warmth and
                  hospitality.
                </li>
              </ul>
            </div>

            <img src={font} alt="mockup"></img>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Colors I used for Sinai Online
            </h1>
            <figure>
              <img src={color} alt=""></img>
              <figcaption className="text-center">Color Pallete</figcaption>
            </figure>
            <ol class=" space-y-1 text-gray-500 list-disc  list-inside dark:text-gray-400">
              <li className="jwell">
                Conveys{" "}
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  luxury, sophistication, and elegance.
                </span>
              </li>
              <li className="jwell">
                Is a{" "}
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  classic and timeless color palette
                </span>{" "}
                that is both modern and traditional.
              </li>
              <li className="jwell">
                Is associated with{" "}
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  purity, clarity, wisdom, wealth, and prosperity.
                </span>
              </li>
              <li className="jwell">
                Suggests that the brand is{" "}
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  trustworthy, reliable, and committed
                </span>{" "}
                to excellence.
              </li>
              <li className="jwell">
                Is a great choice for a jewelry website because it conveys a
                sense of{" "}
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  luxury, sophistication, and elegance.
                </span>
              </li>
            </ol>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Wireframe
            </h1>
            <figure>
              <img src={wireframe} alt=""></img>
              <figcaption className="text-center">Wireframe</figcaption>
            </figure>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              High fidelity wireframes
            </h1>
            <figure>
              <img src={ui} alt=""></img>
              <figcaption className="text-center">
                All user Interface
              </figcaption>
            </figure>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Design Decisions
            </h1>
            <figure>
              <img src={hero} alt=""></img>
              <figcaption className="text-center">Components</figcaption>
            </figure>
            <figure>
              <img src={product} alt=""></img>
              <figcaption className="text-center">Components</figcaption>
            </figure>
            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight jwell text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Heat Map
            </h1>
            <figure>
              <img src={heatmap} alt=""></img>
              <figcaption className="text-center">Heat Map</figcaption>
            </figure>
          </article>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default EstellesJewels;
