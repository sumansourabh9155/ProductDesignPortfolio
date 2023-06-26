import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Apple from "../../assets/icon/apple.png";
import Shopify from "../../assets/icon/shopify.png";
import Uber from "../../assets/icon/uber.png";
import Atlassian from "../../assets/icon/atlassian.png";
import IBM from "../../assets/icon/ibm.png";
import MaterialUI from "../../assets/icon/materialui.png";

class Resources extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="pt-20 px-12">
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
                  Resources
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="  ">
          <p className="text-4xl pb-2 md:pb:10 pt-5 md:pt-10 subheadline flex justify-center font-bold">
            Design System
          </p>

          <div className="flex gap-5 pt-1 md:pt-5 px-2 md:px-12 rounded-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img
                        className="w-12"
                        src={Apple}
                        alt="linkedin link"
                      ></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      Apple Human Interface Guidelines
                    </p>
                    <p className="pb-7">
                      Apple’s first official design kit for Figma contains a
                      comprehensive set of components, views, system interfaces,
                      text styles, color styles, materials, and layout guides.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img
                        className="w-12"
                        src={MaterialUI}
                        alt="linkedin link"
                      ></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      Google Material Design System
                    </p>
                    <p className="pb-7">
                      Google created and publicly shared their Material Design
                      System that goes into the tiniest details regarding
                      everything there is to know about the design and design
                      principles.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img
                        className="w-20"
                        src={Uber}
                        alt="linkedin link"
                      ></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      Uber Design System
                    </p>
                    <p className="pb-7">
                      According to Uber, movement ignites opportunity. Uber
                      requires an effective design system that the company
                      shares with the rest of the world.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img
                        className="w-14"
                        src={Shopify}
                        alt="linkedin link"
                      ></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      Shopify Design System Polaris
                    </p>
                    <p className="pb-7">
                      Shopify is a global eCommerce platform that provides
                      everything a brand may need to run and grow its business
                      in one place.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img className="w-16" src={IBM} alt="linkedin link"></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      IBM Carbon Design System
                    </p>
                    <p className="pb-7">
                      According to IBM, a good design is not only a mere
                      requirement but an actual responsibility to the users.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                    <a
                      href="https://www.figma.com/community/file/1248375255495415511/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <img
                        className="w-14"
                        src={Atlassian}
                        alt="linkedin link"
                      ></img>
                    </a>

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                      Atlassian Design System
                    </p>
                    <p className="pb-7">
                      Atlassian Design System focuses on providing valuable
                      assistance to teams from all over the world by making
                      their collaboration seamless and easy.
                    </p>
                    <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="buttonsmall">Visit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
