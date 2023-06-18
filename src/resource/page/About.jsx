import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);
const ExampleComponent = () => {
  return (
    <div>
      <Navbar />


      <div>
        {" "}
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical bar running through the middle */}
              <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

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
                                purus vitae id. Morbi in vestibulum nec varius.
                                Et diam cursus quis sed purus nam. Scelerisque
                                amet elit non sit ut tincidunt condimentum. Nisl
                                ultrices eu venenatis diam.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                purus vitae id. Morbi in vestibulum nec varius.
                                Et diam cursus quis sed purus nam. Scelerisque
                                amet elit non sit ut tincidunt condimentum. Nisl
                                ultrices eu venenatis diam.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                purus vitae id. Morbi in vestibulum nec varius.
                                Et diam cursus quis sed purus nam. Scelerisque
                                amet elit non sit ut tincidunt condimentum. Nisl
                                ultrices eu venenatis diam.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                purus vitae id. Morbi in vestibulum nec varius.
                                Et diam cursus quis sed purus nam. Scelerisque
                                amet elit non sit ut tincidunt condimentum. Nisl
                                ultrices eu venenatis diam.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
                                  nesciunt? Numquam debitis eligendi aspernatur
                                  mum.
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
      <Footer />
    </div>
  );
};

export default ExampleComponent;
