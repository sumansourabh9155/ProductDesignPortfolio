import React from "react";
import jobscreen from "../../../assets/jobringer/jobringermock.webp";
import color from "../../../assets/jobringer/color.png";
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
      <section class="bg-[#0030F9] h-screen " style={{ color: "#903643" }}>
        <div className="">
          <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-5">
              <a
                href="#"
                class="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm  bg-white rounded-full hover:bg-[#829553] "
                role="alert"
              >
                <span class="text-sm font-medium text-[#0030F9] p-2 px-5">
                  Re-Design of Jobringer
                </span>
              </a>
              <h1 class="max-w-xl mb-4 text-4xl jobwhite font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                JobRinger
              </h1>
              <p class="max-w-xl mb-6 font-light jobwhite text-white jobwhite lg:mb-8 lg:text-sm">
                Platform dedicated to booking camps, hotels, and drivers in the
                Sinai Desert, with the aim of providing users with a seamless,
                engaging, and informative experience while promoting the unique
                attractions and experiences in the Sinai Desert.
              </p>

              <a
                href="#"
                class="jobwhite inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  bg-white border-gray-300 rounded-lg hover:bg-[#829553] focus:ring-4 focus:ring-gray-100 text-[#0030F9]  "
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
                    fill="#0030F9 "
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
              <img src={jobscreen} alt="mockup"></img>
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
              <h1 class="mb-4 text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
                Project Information (Goal)
              </h1>
            </header>
            <p class="lead job text-md">
              The primary objective of this redesign is to enhance the overall
              user experience of the job portal website. This involves improving
              SEO, attracting companies to open job portals, better visualizing
              the platform's offerings, building trust and authenticity,
              optimizing the search and filter functionalities, and encouraging
              users to download the app. Additionally, the redesign aims to
              provide a comprehensive job description, promote partnered
              companies, and facilitate newsletter sign-ups for personalized job
              recommendations.
            </p>

            <h1 class="my-4 job text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Problems User face
            </h1>
            <ol class=" space-y-1 text-gray-500  dark:text-gray-400">
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Low Visibility and SEO Ranking:
                </span>{" "}
                Landing page lacks SEO optimization, leading to poor visibility.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Limited Company Engagement:
                </span>{" "}
                Insufficient incentives for companies, impacting job portal
                engagement.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Complex Navigation:
                </span>{" "}
                Inefficient search and filter functionalities hinder seamless
                navigation.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Ineffective Visualization:
                </span>{" "}
                Platform offerings aren't well-visualized, causing user
                confusion.
              </li>

              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Lack of Trust and Authenticity:
                </span>{" "}
                Landing page fails to convey trustworthiness, potentially
                deterring users.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Insufficient Job Descriptions:
                </span>{" "}
                Job listings lack detailed, user-friendly descriptions.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Limited Promotion of Partnered Companies:
                </span>{" "}
                Inadequate showcasing of partnered companies on the landing
                page.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Ineffective Newsletter Signup:
                </span>{" "}
                Suboptimal process for collecting newsletter sign-ups.
              </li>
            </ol>

            <h1 class="mb-4 pt-8 job text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Solution For User
            </h1>
            <ol class=" space-y-1 text-gray-500   dark:text-gray-400">
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  SEO Optimization:
                </span>{" "}
                Implement SEO best practices for improved visibility.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Incentivize Companies:
                </span>{" "}
                Develop compelling value propositions for company engagement.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Streamlined Navigation:
                </span>{" "}
                Redesign search and filter for a user-friendly experience.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Visual Storytelling:
                </span>{" "}
                Use visuals to effectively communicate platform services.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Trust-Building Elements:
                </span>{" "}
                Implement trust signals like testimonials and security badges.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Accessibility compliance.
                </span>{" "}
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Comprehensive Job Descriptions:
                </span>{" "}
                Enhance job listings with detailed descriptions.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  Promotion of Partnered Companies:
                </span>{" "}
                Showcase partnered companies prominently.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  POptimized Newsletter Signup:
                </span>{" "}
                Simplify the sign-up process for increased subscriptions.
              </li>
            </ol>

            <h1 class="mb-4 mt-8 text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Competitor Analysis
            </h1>
            <p class="lead job">
              To understand the user need, I needed to understand how current
              products are addressing needs and identify area or potential
              growth, I started with an audit of competitors current performance
            </p>

            <table class="table-fixed w-full my-5  ">
              <thead>
                <tr>
                  <th class="px-4 py-2 bg-gray-100 job">Competetors</th>
                  <th class="px-4 py-2 bg-gray-100 job">Strength</th>
                  <th class="px-4 py-2 bg-gray-100 job">Weakness</th>
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

            <h1 class="mb-4 pt-8 job text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl dark:text-black">
              Persona
            </h1>
            <figure>
              <img src={manpersona} alt=""></img>
              <figcaption className="text-center">Persona 1</figcaption>
            </figure>
            <figure>
              <img src={familypersona} alt=""></img>
              <figcaption className="text-center">Persona 2</figcaption>
            </figure>

            <h1 class="mt-8 job text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Font Used (Inter)
            </h1>
            <div className="jitems-center">
              <ul class="  text-gray-500  dark:text-gray-400">
                <li className="job">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Cleanliness and modernity
                  </span>{" "}
                  The Inter font has a clean and contemporary look that is
                  consistent with the brand's focus on adventure and
                  exploration.
                </li>
                <li className="job">
                  <span class="font-semibold text-lg text-gray-900 dark:text-black">
                    Readability and accessibility
                  </span>{" "}
                  The Inter font is highly legible, even at smaller sizes, which
                  is important for ensuring that the brand's message is easily
                  communicated to potential customers.
                </li>
                <li className="job">
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
                <p className="job font-semibold pb-2">Inter Font</p>
                <img src={inter} alt="mockup"></img>
              </div>
              <div className="col-span-6">
                <p className="job font-semibold pb-2">Inter Bold Font</p>
                <img src={inter} alt="mockup"></img>
              </div>
            </div>
            <p className="job font-semibold pb-2 lg:mt-6">Inter Bold Font</p>
            <img src={text} alt="mockup"></img>

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Colors I used 
            </h1>
            <p className="job">This harmonious palette communicates trustworthiness, professionalism, innovation, and positivity</p>
            <figure className="py-5">
              <img src={color} alt=""></img>
              <figcaption className="text-center">
              consisting of #0030F9, #F2F7FF, #A259FF, and #0ACF83.
              </figcaption>
            </figure>
            <ul class=" space-y-1 text-gray-500  list-inside dark:text-gray-400">
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  #0030F9 (Blue)
                </span>{" "}
                Conveys trust and professionalism, crucial for a job portal.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  #F2F7FF (Light Blue/Gray)
                </span>{" "}
                Provides a clean and modern backdrop, enhancing readability.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  #A259FF (Purple)
                </span>{" "}
                Suggests creativity and innovation, attracting forward-thinking
                companies.
              </li>
              <li className="job">
                <span class="font-semibold text-lg text-gray-900 dark:text-black">
                  #0ACF83 (Green)
                </span>{" "}
                Represents positivity and growth, aligning with users' career
                aspirations.
              </li>
            </ul>

            

            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
              Wireframe
            </h1>
            <figure>
              <img src={wireframe} alt=""></img>
              <figcaption className="text-center">Wireframe</figcaption>
            </figure>


            <h1 class="mb-4 pt-8 text-3xl font-semibold leading-tight job text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">
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
              <figcaption className="text-center">user Interface</figcaption>
            </figure>
          </article>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Jobringer;
