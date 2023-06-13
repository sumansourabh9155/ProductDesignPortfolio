import suman from "../../../assets/images/suman.jpg";

export const AboutMe = () => {
  return (
    <div>
      <div className="container flex flex-col px-5 py-4 mx-auto  md:py-16 md:flex-row md:items-center scroll-smooth">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            className="object-cover h-{100px}  rounded-2xl shadow-md shadow-gray-200"
            src={suman}
            alt="Suman Sourabh"
          ></img>
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2 p-8">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-4 leading-relaxed text-xl text-[#E57FE5]">
              About Me{" "}
            </p>
            <h1 className="title-font tracking-wide sm:text-2xl md:text-4xl xl:text-6xl mb-4 font-bold">
              Suman <spam className="text-[#ACE57F]">Sourabh</spam>
            </h1>
            <p className="mb-4 leading-relaxed text-xl text-[#ACE57F]">
              Currently student of Graduation{" "}
            </p>
            <p className="mb-8 leading-relaxed opacity-50 font-medium pr-10">
              Creating an aesthetically pleasing and functionally efficient user
              experience requires attention to detail and staying up-to-date
              with the latest design trends. It involves a comprehensive
              approach that involves research, collaboration, and
              implementation.
              <ul >
                <li>
                  Research: Conduct thorough research to understand the event,
                  target audience, and specific requirements.
                </li>{" "}
                <li>
                  Design Trends: Stay updated on the latest design trends to
                  ensure a modern and appealing aesthetic.
                </li>{" "}
                <li>
                  Attention to Detail: Pay close attention to colors,
                  typography, layouts, and visual elements for a cohesive
                  design.
                </li>
                <li>
                  Collaboration: Work closely with event organizers to align
                  with their vision and gather feedback.
                </li>
                <li>
                  Functionality: Prioritize usability, intuitive interfaces, and
                  efficient organization of information.
                </li>
                <li>
                  Continued Improvement: Gather user feedback, conduct testing,
                  and iterate on the design for ongoing enhancement.
                </li>
              </ul>
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#_"
                // bg-[url('https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
                className="px-8 py-2 text-md font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-black bg-black rounded shadow  active:bg-teal-600 hover:shadow-md ease"
              >
                Check My Work
              </a>
            </div>
          </div>
          {/* <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button className="w-3 h-3 mx-2 bg-black rounded-full md:mx-0 focus:outline-none"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:black"></button>
          </div> */}
        </div>
      </div>

      {/* <ol class="relative border-l border-gray-200 dark:border-gray-700">
				<li class="mb-10 ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Application UI v2.0.0{" "}
						<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
							Latest
						</span>
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on January 13th, 2022
					</time>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts,
						kanban board, calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<a
						href="#"
						class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
					>
						<svg
							class="w-4 h-4 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
								clip-rule="evenodd"
							></path>
						</svg>{" "}
						Download ZIP
					</a>
				</li>
				<li class="mb-10 ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Figma v1.3.0
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on December 7th, 2021
					</time>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we
						keep a parity between the two versions even as we update the
						project.
					</p>
				</li>
				<li class="ml-6">
					<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
						<svg
							aria-hidden="true"
							class="w-3 h-3 text-blue-800 dark:text-blue-300"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Flowbite Library v1.2.2
					</h3>
					<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Released on December 2nd, 2021
					</time>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li>
			</ol> */}
    </div>
  );
};
