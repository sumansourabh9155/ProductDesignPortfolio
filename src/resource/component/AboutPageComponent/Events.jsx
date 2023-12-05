import React from "react";
import techstack from "../../../assets/images/techstack.jpeg";
import bubbleup from "../../../assets/images/bubbleup.jpg";
import spade from "../../../assets/images/spade.jpg";

const Events = () => {
  return (
    <div className="mb-12">
      {/* Events techStack */}
      <p className=" pb-2 pt-16  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
        Public Speaking
      </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl pb-7 md:mb-12 font-bold flex justify-center suman">
        My Events
      </h1>
      <div class="flex items-center justify-center ">
        <div class="group hover:shadow-[0px_16px_49px_0px_#e76e5025] relative transform hover:scale-105 duration-500 ease-in-out flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
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
                  Organized and led an event at Lovely Professional University,
                  fostering interaction and learning.
                </li>
                <li>
                  Created a successful landing page design for a cosmetic shop,
                  which attracted over 250 attendees and was duplicated more
                  than 200 times within the Figma Communities.
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
        <div class="group hover:shadow-[0px_16px_49px_0px_#e76e5025] relative transform hover:scale-105 duration-500 ease-in-out flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
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
        <div class="group hover:shadow-[0px_16px_49px_0px_#e76e5025] relative transform hover:scale-105 duration-500 ease-in-out flex w-full max-w-6xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
          <div class="relative m-0 w-4/12  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={spade} alt="image" class="h-full w-full object-cover" />
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
                  Organized and led an event at Lovely Professional University,
                  fostering interaction and learning.
                </li>
                <li>
                  Created a successful landing page design for a cosmetic shop,
                  which attracted over 250 attendees and was duplicated more
                  than 200 times within the Figma Communities.
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
    </div>
  );
};

export default Events;
