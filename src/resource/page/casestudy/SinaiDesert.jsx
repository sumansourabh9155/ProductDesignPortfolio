import React from "react";
import sinaiscreen from "../../../assets/sinaidesert/sinaiscreen.png";
import logo from "../../../assets/glamorai/logo.png";
import tools from "../../../assets/glamorai/tools.png";
import dust from "../../../assets/glamorai/dust.png";
import brand from "../../../assets/glamorai/brand.png";
import chart from "../../../assets/glamorai/chart.png";
import map from "../../../assets/glamorai/map.png";
import font from "../../../assets/glamorai/font.png";
import color from "../../../assets/glamorai/color.png";
import userflow from "../../../assets/glamorai/userflow.png";
import wireframe from "../../../assets/glamorai/wireframe.png";
import design from "../../../assets/glamorai/design.png";
import exp1 from "../../../assets/glamorai/exp1.png";
import exp2 from "../../../assets/glamorai/exp2.png";
import exp3 from "../../../assets/glamorai/exp3.png";
import exp4 from "../../../assets/glamorai/exp4.png";

import prototype from "../../../assets/glamorai/prototype.png";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const SinaiDesert = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-[#F37344] h-screen " style={{ color: "#903643" }}>
        <div className="">
          <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-5">
              <a
                href="#"
                class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-[#9B4A55] rounded-full hover:bg-gray-200 "
                role="alert"
              >
                <span class="text-sm font-medium text-white p-2 px-5">
                  Solution for Fashion Industry
                </span>
              </a>
              <h1 class="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Sinai Online
              </h1>
              <p class="max-w-xl mb-6 font-light text-gray-300 sinaiwhite lg:mb-8 lg:text-md">
                Introducing DressSense, the AI-powered fashion app that provides
                personalized outfit suggestions based on your wardrobe,
                location, skin tone, and occasion. Follow influencers for
                fashion inspiration, stay updated with trends, and express your
                unique style effortlessly.
              </p>

              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white "
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
            <p class="lead sinai">
              Design a tailored website for the Sinai Desert, addressing the
              absence of a one-stop online platform that offers seamless
              camp/hotel bookings and dependable driver hiring services, thereby
              resolving the challenges of fragmented and less-than-satisfactory
              travel planning experiences.
            </p>
            <div className="flex gap-2 mt-6">
              <div>
                <h1 class="mb-4 text-xl sinai font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
                  Work Process
                </h1>
                <p className="text-sm sinai">
                  As a UX designer, my role is to analyze user behavior and
                  feedback, understand the needs and goals of the user, and
                  create design solutions that are intuitive, efficient, and
                  enjoyable to use.
                </p>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={logo} alt="mockup"></img>
                </div>
              </div>
              <div>
                <h1 class="mb-4 text-xl sinai font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
                  Tools I used
                </h1>
                <p className="text-sm sinai">
                  During my research I used the following tools to gather data
                  and Communicating and presenting my ideas.
                </p>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={tools} alt="mockup"></img>
                </div>
              </div>
            </div>

            <h1 class="mb-4 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Problems User face
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Lack of knowledge
                </span>{" "}
                leads to frustration and wasted money
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Time-consuming
                </span>{" "}
                due to vast options
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Non-personalized
                </span>{" "}
                fashion shopping experience is inaccurate and inconvenient
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Difficulty pairing
                </span>{" "}
                clothing according to eventt
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Difficulty determining
                </span>{" "}
                appropriate clothing for place and temperature
              </li>
            </ol>

            <h1 class="mb-4 pt-8 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Solution For User
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Intelligent fashion recommendation
                </span>{" "}
                based on style, body type, and occasion.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Advanced filtering
                </span>{" "}
                for quicker shopping decisions.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Educational content
                </span>{" "}
                for informed choices.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Personalized user experience
                </span>{" "}
                for accuracy and convenience.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Inclusion of qualityand size guides.
                </span>{" "}
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Event-based outfit
                </span>{" "}
                suggestions.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Location and weather-based
                </span>{" "}
                clothing recommendations.
              </li>
            </ol>

            <h1 class="mb-4 mt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Competitor Analysis
            </h1>
            <p class="lead sinai">
              To understand the user need, I needed to understand how current
              products are addressing needs and identify area or potential
              growth, I started with an audit of competitors app and web stores.
            </p>
            <div className="flex justify-between place-items-center">
              <div>
                <h1 class="mb-4 text-xl sinai font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
                  Current Market Size
                </h1>
                <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li className="sinai">
                    The fashion industry is a multi-billion dollar global
                    market, with an estimated value of
                    <span class="font-semibold text-gray-900 dark:text-black">
                      $1.5 trillion in 2020.
                    </span>{" "}
                  </li>
                  <li className="sinai">
                    The online fashion market has been growing rapidly, with a
                    projected global market size of
                    <span class="font-semibold text-gray-900 dark:text-black">
                      $872 billion by 2023.
                    </span>{" "}
                  </li>
                </ol>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={dust} alt="mockup"></img>
              </div>
            </div>
            <figure>
              <img src={brand} alt=""></img>
              <figcaption>Competitor Analysis </figcaption>
            </figure>
            <h1 class="mb-4 pt-8 sinai text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Market Size and Competition using Chart
            </h1>
            <figure>
              <img src={chart} alt=""></img>
              <figcaption className="text-center">
                Competitor Analysis{" "}
              </figcaption>
            </figure>

            <h1 class="mb-4 sinai  pt-8 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Few occasion and Style of Clothing in India
            </h1>
            <figure>
              <img src={map} alt=""></img>
              <figcaption className="text-center">
                Competitor Analysis{" "}
              </figcaption>
            </figure>

            <h1 class="mt-8 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Target Audience
            </h1>
            <div className="flex justify-between items-center">
              <ul class="  text-gray-500  dark:text-gray-400">
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Age Group
                  </span>{" "}
                  : 18 - 40
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Financial Status :
                  </span>{" "}
                  Middle Class, Upper Middle Class to High Class
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Work Profile:
                  </span>{" "}
                  Student, working Professional and homemaker.
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    User Category :
                  </span>{" "}
                  Bachelor's married couple married with kids
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Target skill:
                  </span>{" "}
                  Users who are not into fashion to those who are very much into
                  fashion
                </li>
                <li className="sinai">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Attitude towards technology:
                  </span>{" "}
                  From those who tolerate technology to take savvy user
                </li>
              </ul>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-[90%]">
                <img src={dust} alt="mockup"></img>
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              <div>
                <h1 class="mb-4 text-xl sinai font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
                  Work Process
                </h1>
                <p className="text-sm sinai">
                  Because that is important element of any brand I carefully
                  select each color to reflect the brand essence and convey the
                  core values, warmth and selflessness.
                </p>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={color} alt="mockup"></img>
                </div>
              </div>
              <div>
                <h1 class="mb-4 text-xl sinai font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
                  Tools I used
                </h1>
                <p className="text-sm sinai">
                  Typography to reflect simplicity and aura of a brand I have
                  chosen around which gives modern perspective to interface
                </p>
                <div class="hidden lg:mt-5  lg:col-span-5 lg:flex">
                  <img src={font} alt="mockup"></img>
                </div>
              </div>
            </div>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              User Flow of the App
            </h1>
            <figure>
              <img src={userflow} alt=""></img>
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
                user Flow Flowchart
              </figcaption>
            </figure>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              High fidelity wireframes
            </h1>
            <figure>
              <img src={design} alt=""></img>
              <figcaption className="text-center">
                user Flow Flowchart
              </figcaption>
            </figure>
            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Prototype
            </h1>
            <figure>
              <img src={prototype} alt=""></img>
              <figcaption className="text-center">
                user Flow Flowchart
              </figcaption>
            </figure>
            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              What Our Application will do
            </h1>

            <table class="table-auto w-full my-5 text-center ">
              <thead>
                <tr>
                  <th class="px-4 py-2 bg-gray-100 sinai">Country</th>
                  <th class="px-4 py-2 bg-gray-100 sinai">Date & Time</th>
                  <th class="px-4 py-2 bg-gray-100 sinai">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2 sinai">United States</td>
                  <td class="px-4 py-2 sinai">April 21, 2021</td>
                  <td class="px-4 py-2 ">
                    <strong class="">$2,300</strong>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2">Canada</td>
                  <td class="px-4 py-2">May 31, 2021</td>
                  <td class="px-4 py-2">
                    <strong class="">$300</strong>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2">United Kingdom</td>
                  <td class="px-4 py-2">June 3, 2021</td>
                  <td class="px-4 py-2">
                    <strong class="">$2,500</strong>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2">Australia</td>
                  <td class="px-4 py-2">June 23, 2021</td>
                  <td class="px-4 py-2">
                    <strong class="">$3,543</strong>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2">Germany</td>
                  <td class="px-4 py-2">July 6, 2021</td>
                  <td class="px-4 py-2">
                    <strong class="">$99</strong>
                  </td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="px-4 py-2">France</td>
                  <td class="px-4 py-2">August 23, 2021</td>
                  <td class="px-4 py-2">
                    <strong class="">$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              How our Platform will help them
            </h1>
            <figure>
              <img src={exp1} alt=""></img>
            </figure>
            <figure>
              <img src={exp2} alt=""></img>
            </figure>
            <figure>
              <img src={exp4} alt=""></img>
            </figure>
            <figure>
              <img src={exp3} alt=""></img>
            </figure>

            <h1 class="mb-4 mt-8 sinai text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              How AI will play an important role
            </h1>
            <ol class=" space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Collecting user data
                </span>{" "}
                to learn about individual preferences.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Analyzing clothing images
                </span>{" "}
                to identify patterns and styles.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Understanding user input
                </span>{" "}
                to make natural interactions possible.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Using reinforcement learning
                </span>{" "}
                to improve recommendations over time.
              </li>
              <li className="sinai">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Leveraging the collective knowledge
                </span>{" "}
                of users to make more personalized recommendations.
              </li>
            </ol>
            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              How can we generate Cashflow
            </h1>
            <div className="grid grid-cols-2 place-items-center bg-[#903643] ">
              <div class="max-w-sm px-8 py-4 ">
                <p className="text-[#9B4A55]  sinaiwhite text-9xl  -z-10 ... -top-8 -left-8">
                  01
                </p>
                <div>
                  <a href="#">
                    <h5 class="mb-2 text-2xl sinaiwhite text-white">
                      Brands collab
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-300 text-sm sinaiwhite">
                    Partner with more fashion retailers and e-commerce platforms
                    to increase commission-based revenue streams.
                  </p>
                </div>
              </div>
              <div class="max-w-sm px-8 py-4 ">
                <p className="text-[#9B4A55]  text-9xl  -z-10 ... -top-8 -left-8">
                  02
                </p>
                <div>
                  <a href="#">
                    <h5 class="mb-2 text-2xl sinaiwhite  text-white">Ads</h5>
                  </a>
                  <p class="mb-3 text-gray-300 text-sm sinaiwhite">
                    Expand your advertising opportunities for fashion brands and
                    retailers to promote their products on your platform.
                  </p>
                </div>
              </div>
              <div class="max-w-sm px-8 pb-4 ">
                <p className="text-[#9B4A55]   text-9xl  -z-10 ... -top-8 -left-8">
                  03
                </p>
                <div>
                  <a href="#">
                    <h5 class="mb-2 text-2xl sinaiwhite  text-white">
                      influencer
                    </h5>
                  </a>
                  <p class="mb-3 text-gray-300 text-sm  sinaiwhite">
                    Explore opportunities for sponsored content and influencer
                    collaborations to increase brand awareness and drive traffic
                    to your platform.
                  </p>
                </div>
              </div>
              <div class="max-w-sm px-8 pb-4 ">
                <p className="text-[#9B4A55]   text-9xl  -z-10 ... -top-8 -left-8">
                  04
                </p>
                <div>
                  <a href="#">
                    <h5 class="mb-2 text-2xl sinaiwhite text-white">Premium</h5>
                  </a>
                  <p class="mb-3 text-gray-300 text-sm sinaiwhite">
                    Offer premium features such as style consultations, wardrobe
                    analysis, and personalized styling services for a fee.
                  </p>
                </div>
              </div>
            </div>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight sinai text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              12 weeks Market Plan
            </h1>
            <ul className="list-disc pl-4 ">
              <li className="sinai">
                Use<strong className="text-black"> social media </strong>to
                share fashion tips
              </li>
              <li className="sinai">
                Collaborate with fashion{" "}
                <strong className="text-black">influencers and bloggers</strong>
              </li>
              <li className="sinai">
                <strong className="text-black">Host fashion workshops</strong>{" "}
                and events to teach dressing techniques
              </li>
              <li className="sinai">
                <strong className="text-black">
                  {" "}
                  Partner with clothing brands
                </strong>{" "}
                to offer personalized recommendations
              </li>
              <li className="sinai">
                <strong className="text-black">
                  Start from the inside out
                </strong>
                .We will create informative and visually appealing content such
                as infographics and videos to educate people about dressing and
                your idea.
              </li>
            </ul>
          </article>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SinaiDesert;
