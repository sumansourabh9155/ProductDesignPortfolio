import React from "react";
import sinaiscreen from "../../../assets/sinaidesert/sinaiscreen.png";
import manpersona from "../../../assets/sinaidesert/manpersona.png";
import familypersona from "../../../assets/sinaidesert/familypersona.png";
import flowchart from "../../../assets/sinaidesert/flowchart.png";
import wireframe from "../../../assets/sinaidesert/wireframe.png";
import component from "../../../assets/sinaidesert/component.png";
import inter from "../../../assets/sinaidesert/inter.png";
import sinaithumbnail from "../../../assets/sinaidesert/sinaithumbnail.png";
import booking from "../../../assets/sinaidesert/booking.png";
import air from "../../../assets/sinaidesert/air.png";
import trip from "../../../assets/sinaidesert/trip.png";
import kayak from "../../../assets/sinaidesert/kayak.png";
import expedia from "../../../assets/sinaidesert/expedia.png";
import text from "../../../assets/sinaidesert/text.png";
import colors from "../../../assets/sinaidesert/colors.png";
import ui from "../../../assets/sinaidesert/ui.png";


import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const Jobringer = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-[#F37344] h-screen " style={{ color: "#903643" }}>
        <div className="">
          <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-5">
              <a
                href="#"
                class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-[#545D3E] rounded-full hover:bg-[#829553] "
                role="alert"
              >
                <span class="text-sm font-medium text-white p-2 px-5">
                  Solution for Fashion Industry
                </span>
              </a>
              <h1 class="max-w-xl mb-4 text-4xl sinaiwhite font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Sinai Online
              </h1>
              <p class="max-w-xl mb-6 font-light sinaiwhite text-white sinaiwhite lg:mb-8 lg:text-sm">
                Platform dedicated to booking camps, hotels, and drivers in the
                Sinai Desert, with the aim of providing users with a seamless,
                engaging, and informative experience while promoting the unique
                attractions and experiences in the Sinai Desert.
              </p>

              <a
                href="#"
                class="sinaiwhite inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  bg-[#545D3E] border-gray-300 rounded-lg hover:bg-[#829553] focus:ring-4 focus:ring-gray-100 dark:text-white "
              >
                Visit Figma File
                <svg
                  class="w-5 h-5 ml-2 -mr-1 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    fill="white"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
              <img src={sinaiscreen} alt="mockup"></img>
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
              <h1 class="mb-4 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
                Project Information (Goal)
              </h1>
            </header>
            <p class="lead sinai text-sm">
              Users face a fragmented and suboptimal experience when trying to
              book accommodations and drivers in the Sinai Desert due to a lack
              of user-friendly and cohesive interfaces. Key issues include
              complex booking processes, inconsistent information presentation,
              limited mobile accessibility, and a lack of inclusivity for users
              with varying levels of tech proficiency and accessibility needs.
            </p>

            <h1 class="my-4 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Problems User face
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Fragmented booking experience.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Limited mobile optimization.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Complex procedures.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Difficulty pairing
                </span>{" "}
              </li>
             
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Inconsistent information.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                 Target Tourists, families, diving enthusiasts, eco-tourists, and users with varying tech proficiency.
                </span>{" "}
              </li>
            </ol>

            <h1 class="mb-4 pt-8 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Solution For User
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Intuitive interface.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Efficient booking flows.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Mobile optimization.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Comprehensive information.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Inclusion of qualityand size guides.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Accessibility compliance.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Additional features for user engagement and competitiveness.
                </span>{" "}
              </li>
            </ol>

            <h1 class="mb-4 mt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Competitor Analysis
            </h1>
            <p class="lead sinai">
              To understand the user need, I needed to understand how current
              products are addressing needs and identify area or potential
              growth, I started with an audit of competitors current performance
            </p>

            <table class="table-fixed w-full my-5  ">
              <thead>
                <tr>
                  <th class="px-4 py-2 bg-gray-100 sinai">Competetors</th>
                  <th class="px-4 py-2 bg-gray-100 sinai">Strength</th>
                  <th class="px-4 py-2 bg-gray-100 sinai">Weakness</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-300">
                  <td className="p-5">
                    <img src={booking} alt="booking.com" />
                  </td>
                  <td class="px-4 py-2 ">
                    <ol className="list-disc">
                      <li>Great search.</li>
                      <li>Strong filters.</li>
                      <li>User-friendly.</li>
                      <li>Interactive maps.</li>
                    </ol>
                  </td>
                  <td class="px-4 py-2 ">
                    <ol className="list-disc">
                      <li>Bad user interface</li>
                      <li>No Direct Customer Interaction</li>
                      <li>Unwilling to Convince</li>
                    </ol>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td className="p-5">
                    <img src={air} alt="booking.com" />
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>Map feature.</li>
                      <li>Impressive search.</li>
                      <li>Affordable hotel alternative.</li>
                      <li>High company valuation.</li>
                    </ol>
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>Filter feature is buggy.</li>
                      <li>Remove customer reviews.</li>
                      <li>No Social media activity.</li>
                      <li>ISome hosts charge high prices.</li>
                    </ol>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td className="p-5">
                    <img src={trip} alt="booking.com" />
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>Strong dealer community, satisfied customers.</li>
                      <li>Strong filters.</li>
                      <li>
                        Diverse brand portfolio, multiple revenue streams.
                      </li>
                    </ol>
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>Poor search feature.</li>
                      <li>Unfriendly call center staff.</li>
                      <li>Unexplained deletion of negative reviews.</li>
                      <li>Limited filter options.</li>
                    </ol>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td className="p-5">
                    <img src={kayak} alt="booking.com" />
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>
                        Real-time flight tracking, departures, and arrivals.
                      </li>
                      <li>Tour plan suggestions.</li>
                      <li>Quality customer service.</li>
                      <li>Global travel map recommendations.</li>
                    </ol>
                  </td>
                  <td class="px-4 py-2">
                    <ol className="list-disc">
                      <li>Price discrepancies when booking.</li>
                      <li>Slow performance, subpar deals displayed.</li>
                    </ol>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td className="p-5">
                    <img src={expedia} alt="booking.com" />
                  </td>
                  <td class="px-4 py-2">
                    {" "}
                    <ol className="list-disc">
                      <li>User-friendly navigation.</li>
                      <li>Diverse information.</li>
                      <li>Effective refund process.</li>
                      <li>Affordable prices.</li>
                    </ol>
                  </td>
                  <td class="px-4 py-2">
                    {" "}
                    <ol className="list-disc">
                      <li>App crashes, technical errors.</li>
                      <li>Subpar service.</li>
                      <li>Website errors affecting bookings.</li>
                      <li>Limited social media activity and engagement.</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>

            <h1 class="mb-4 pt-8 sinai text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Persona
            </h1>
            <figure>
              <img src={manpersona} alt=""></img>
              <figcaption className="text-center">
              Persona 1
              </figcaption>
            </figure>
            <figure>
              <img src={familypersona} alt=""></img>
              <figcaption className="text-center">
                Persona 2
              </figcaption>
            </figure>

            <h1 class="mt-8 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Font Used (Inter)
            </h1>
            <div className="jitems-center">
              <ul class="  text-gray-500  dark:text-gray-400">
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Cleanliness and modernity
                  </span>{" "}
                  The Inter font has a clean and contemporary look that is
                  consistent with the brand's focus on adventure and
                  exploration.
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Readability and accessibility
                  </span>{" "}
                  The Inter font is highly legible, even at smaller sizes, which
                  is important for ensuring that the brand's message is easily
                  communicated to potential customers.
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Friendliness and approachability
                  </span>{" "}
                  The Inter font has a friendly and approachable feel that is
                  consistent with the brand's commitment to warmth and
                  hospitality.
                </li>
              </ul>
            </div>
            <div class=" grid grid-cols-12 gap-14 lg:mt-6">
              <div className="col-span-6">
                <p className="sinai font-semibold pb-2">Inter Font</p>
                <img src={inter} alt="mockup"></img>
              </div>
              <div className="col-span-6">
                <p className="sinai font-semibold pb-2">Inter Bold Font</p>
                <img src={inter} alt="mockup"></img>
              </div>
            </div>
            <p className="sinai font-semibold pb-2 lg:mt-6">Inter Bold Font</p>
            <img src={text} alt="mockup"></img>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Colors I used for Sinai Online
            </h1>
            <figure>
              <img src={colors} alt=""></img>
              <figcaption className="text-center">
                Color ( green , Orange ,Brown)
              </figcaption>
            </figure>
            <ul class=" space-y-1 text-gray-500  list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Adventure and exploration
                </span>{" "}
                Brown and green are earthy tones that are often associated with
                the natural world, while orange can add a touch of excitement
                and energy.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Reliability and trust
                </span>{" "}
                Brown can also be seen as a symbol of stability and
                dependability, while green can suggest growth and harmony.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Warmth and hospitality
                </span>{" "}
                Orange is a vibrant and welcoming color that can create a sense
                of warmth and friendliness.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Nature and the outdoors
                </span>{" "}
                The combination of brown, orange, and green can evoke images of
                the desert landscape, which could be appealing to potential
                customers who are interested in exploring the Sinai Desert.
              </li>
            </ul>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              User Flow
            </h1>
            <figure>
              <img src={flowchart} alt=""></img>
              <figcaption className="text-center">
                user Flow Flowchart
              </figcaption>
            </figure>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Wireframe
            </h1>
            <figure>
              <img src={wireframe} alt=""></img>
              <figcaption className="text-center">
                Wireframe
              </figcaption>
            </figure>

            <h1 class="mb-4 pt-8 sinai text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Component
            </h1>
            <figure>
              <img src={component} alt=""></img>
              <figcaption className="text-center">
                Components
              </figcaption>
            </figure>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              High fidelity wireframes
            </h1>
            <figure>
              <img src={ui} alt=""></img>
              <figcaption className="text-center">
              All user Interface
              </figcaption>
            </figure>
            <figure>
              <img src={sinaithumbnail} alt=""></img>
              <figcaption className="text-center">
                user Interface
              </figcaption>
            </figure>
          </article>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Jobringer;
