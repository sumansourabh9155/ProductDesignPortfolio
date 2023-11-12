import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Framer from "../../assets/buttons/Frame.png";
import { Link } from "react-router-dom";
import suman from "../../assets/images/suman.jpg";
import techstack from "../../assets/images/techstack.jpeg";
import bubbleup from "../../assets/images/bubbleup.jpg";
import spade from "../../assets/images/spade.jpg";

import ReactGA from "react-ga";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);
const ExampleComponent = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-20 px-1 md:px-12">
        <div className=" dark:text-gray-100">
          <section className=" text-[#033d35] -z-10 relative ">
            <div
              className="lg:h-80 md:h-56 sm:h-48 hero-image bg-right-bottom bg-cover flex"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80)",
              }}
            >
              <p className="suman relative container mx-auto p-4 flex items-center justify-center z-10 text-4xl md:text-7xl font-bold">
                About Me
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row items-center pt-0 md:pt-24 px-2 md:px-12">
          <div className="md:w-7/12 lg:w-5/12 hidden lg:block">
            <img
              src={suman}
              className=" rounded-tl-lg rounded-br-full"
              alt="description"
            />
          </div>
          <div className="max-w-2xl flex flex-col items-center lg:items-start p-4 md:p-12">
            {/* Image for mobile view */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-32 w-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${suman})` }}
            ></div>
            {/* Blockquote */}
            <p className="mb-1 leading-relaxed text-xl text-[#f4a462]">
              About Me
            </p>
            <h1 className="suman tracking-wide text-3xl sm:text-4xl md:text-5xl xl:text-5xl mb-2 font-bold">
              Suman <span className="text-[#e76e50] suman">Sourabh</span>
            </h1>
            <p className="mb-1 leading-relaxed text-xl text-[#2a9d90]">
              Currently a student of Graduation
            </p>
            <blockquote className="font-serif text-center md:text-left">
              <p className="mb-4">
                <span className="pr-1 font-serif text-2xl text-center text-red-600">
                  "
                </span>
                My goal is to create a user experience that is both
                aesthetically pleasing and functionally efficient. I have an eye
                for detail and always strive to implement the latest design
                trends.
                <br />
                <br />
                I take the time to research the event and the target audience
                and create a design that meets the specific needs of the event
                and its users.
                <br />
                <br />I also work closely with the brand to ensure that the
                design I deliver is what they have in mind.
                <span className="pl-1 font-serif text-2xl text-red-600">"</span>
              </p>
              <div className="mb-4 w-3/5 border-b-2 border-orange-500 opacity-25 mx-auto lg:mx-0"></div>
              <div className="flex justify-center  md:justify-start pt-0 sm:item-center md:pt-10">
                <Link to="/projects" className="button-dark " role="button">
                  Check My Work
                </Link>
              </div>
            </blockquote>
          </div>
        </div>
        {/* Events techStack */}
        <p className=" pb-2 pt-16  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
          Public Speaking
        </p>
        <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl pb-7 md:mb-12 font-bold flex justify-center suman">
          My Events
        </h1>
        <div class="flex items-center justify-center">
          <div class="relative flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-4/12 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={techstack}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-[#e76e50] antialiased">
                November 22
              </h6>
              <h4 class="mb-2 block  text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                UI/UX with Figma
              </h4>
              <p class="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                <ol className="list-disc pl-5">
                  <li>
                    Organized and led an event at Lovely Professional
                    University, fostering interaction and learning.
                  </li>
                  <li>
                    Created a successful landing page design for a cosmetic
                    shop, which attracted over 250 attendees and was duplicated
                    more than 200 times within the Figma Communities.
                  </li>
                </ol>
              </p>
              <a class="inline-block" href="#">
                <button class="buttonsmall" type="button">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    aria-hidden="true"
                    class="h-4 pl-1 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Events Bubbleup */}
        <div class="flex items-center justify-center pt-6">
          <div class="relative flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-4/12  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={bubbleup}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-[#e76e50] antialiased">
                December 22
              </h6>
              <h4 class="mb-2 block  text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Intro to UI/UX
              </h4>
              <p class="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                <ol className="list-disc pl-5">
                  <li>
                    Delivered a webinar in partnership with the BubbleUp
                    Community, sharing knowledge and insights
                  </li>
                  <li>
                    Created the landing page design for a shoe brand that was
                    replicated over 500 times within the Figma Communities,
                    demonstrating its popularity and impact. Communities
                  </li>
                </ol>
              </p>
              <a class="inline-block" href="#">
                <button class="buttonsmall" type="button">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    aria-hidden="true"
                    class="h-4 pl-1 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Events Spade */}
        <div class="flex items-center justify-center pt-6">
          <div class="relative flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-4/12  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={spade}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-[#e76e50] antialiased">
                November 22
              </h6>
              <h4 class="mb-2 block  text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                UI/UX with Figma
              </h4>
              <p class="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
                <ol className="list-disc pl-5">
                  <li>
                    Organized and led an event at Lovely Professional
                    University, fostering interaction and learning.
                  </li>
                  <li>
                    Created a successful landing page design for a cosmetic
                    shop, which attracted over 250 attendees and was duplicated
                    more than 200 times within the Figma Communities.
                  </li>
                </ol>
              </p>
              <a class="inline-block" href="#">
                <button class="buttonsmall" type="button">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    aria-hidden="true"
                    class="h-4 pl-1 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <p className=" pb-2 pt-16  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
          Public Speaking
        </p>
        <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl pb-7 md:mb-12 font-bold flex justify-center suman">
          My Events
        </h1>
        
        <div class="flex items-center justify-center">
          <div className="w-full max-w-6xl py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* Vertical bar running through the middle */}
                <div className="hidden sm:block w-1 bg-[#e76e50] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Left section */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow ">
                          <div className="flex items-start space-x-3">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center h-8 text-sm hover:underline"
                            >
                              v3.2.0
                            </a>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a
                                  rel="noopener noreferrer"
                                  href="#"
                                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                                  ></span>
                                  <span className="group-hover:underline dark:text-gray-100">
                                    Feature
                                  </span>
                                </a>
                                <span className="text-xs whitespace-nowrap">
                                  10h ago
                                </span>
                              </div>
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec
                                  varius. Et diam cursus quis sed purus nam.
                                  Scelerisque amet elit non sit ut tincidunt
                                  condimentum. Nisl ultrices eu venenatis diam.
                                </p>
                              </div>
                              <ul className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </div>
                                <li className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          <div className="flex items-start space-x-3">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center h-8 text-sm hover:underline"
                            >
                              v3.2.0
                            </a>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a
                                  rel="noopener noreferrer"
                                  href="#"
                                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                                  ></span>
                                  <span className="group-hover:underline dark:text-gray-100">
                                    Feature
                                  </span>
                                </a>
                                <span className="text-xs whitespace-nowrap">
                                  10h ago
                                </span>
                              </div>
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec
                                  varius. Et diam cursus quis sed purus nam.
                                  Scelerisque amet elit non sit ut tincidunt
                                  condimentum. Nisl ultrices eu venenatis diam.
                                </p>
                              </div>
                              <ul className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </div>
                                <li className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Left section */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          <div className="flex items-start space-x-3">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center h-8 text-sm hover:underline"
                            >
                              v3.2.0
                            </a>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a
                                  rel="noopener noreferrer"
                                  href="#"
                                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                                  ></span>
                                  <span className="group-hover:underline dark:text-gray-100">
                                    Feature
                                  </span>
                                </a>
                                <span className="text-xs whitespace-nowrap">
                                  10h ago
                                </span>
                              </div>
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec
                                  varius. Et diam cursus quis sed purus nam.
                                  Scelerisque amet elit non sit ut tincidunt
                                  condimentum. Nisl ultrices eu venenatis diam.
                                </p>
                              </div>
                              <ul className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </div>
                                <li className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="mt-6 sm:mt-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          <div className="flex items-start space-x-3">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center h-8 text-sm hover:underline"
                            >
                              v3.2.0
                            </a>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                                <a
                                  rel="noopener noreferrer"
                                  href="#"
                                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                                  ></span>
                                  <span className="group-hover:underline dark:text-gray-100">
                                    Feature
                                  </span>
                                </a>
                                <span className="text-xs whitespace-nowrap">
                                  10h ago
                                </span>
                              </div>
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec
                                  varius. Et diam cursus quis sed purus nam.
                                  Scelerisque amet elit non sit ut tincidunt
                                  condimentum. Nisl ultrices eu venenatis diam.
                                </p>
                              </div>
                              <ul className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </div>
                                <li className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      className="w-4 h-4 fill-current dark:text-violet-400"
                                    >
                                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">
                                      Quis velit quae similique maxime optio
                                      temporibus
                                    </h4>
                                  </div>
                                  <p className="ml-7 dark:text-gray-400">
                                    Illum hic placeat unde porro, cupiditate
                                    nesciunt? Numquam debitis eligendi
                                    aspernatur mum.
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          Air.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExampleComponent;
