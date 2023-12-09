import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import color from "../../assets/blog/color.jpg";
import fonts from "../../assets/blog/fonts.jpg";
import uiux from "../../assets/blog/uiux.jpg";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="bodymargin px-1 md:px-12 pt-20 pb-10 md:pb-20">
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
                My Blogs
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="flex gap-5 pt-2 md:pt-4 px-2 md:px-12 rounded-xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* uiux */}
          <Link
            to={
              "https://www.instagram.com/p/Cou2nJ2v9th/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={uiux}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    UI/UX
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p class="subheadline block mt-1 text-lg pb-1 ">
                  Difference Between UI/UX
                </p>
                <p className="pb-7">
                  UI is what the user sees and interacts with, while UX is the
                  overall experience that the user has while interacting with
                  the product. Just like human without Brain.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
          {/* Color */}
          <Link
            to={
              "https://www.instagram.com/p/Cq0mVv4JklS/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={color}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    Color
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p class="subheadline block mt-1 text-lg pb-1 ">
                  Emotion created by Color
                </p>
                <p className="pb-7">
                  Warm tones like red evoke passion, love, and energy, while
                  cool blues bring calmness and serenity. Each hue triggers
                  unique emotional responses, creating a visual language that
                  speaks directly to our feelings.{" "}
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
          {/* font */}
          <Link
            to={
              "https://www.instagram.com/p/Co5OwmeStTR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={fonts}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    Fonts
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p className="subheadline block mt-1 text-lg pb-1">
                  Emotion conveyed by Fonts
                </p>
                <p className="pb-7">
                  Bold, uppercase fonts may express strength and urgency, while
                  cursive scripts evoke elegance and romance. The choice of font
                  shapes how words feel, communicating mood and personality.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
          {/* ux */}
          <Link
            to={
              "https://www.instagram.com/p/CokgNBPv3sb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={color}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    UI/UX
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p class="subheadline block mt-1 text-lg pb-1 ">
                  UX: The Secret to Design Success
                </p>
                <p className="pb-7">
                  UX stands for User Experience, which refers to the feelings
                  and perceptions a person has when using a product, service, or
                  system. The goal of UX design is to create a positive and
                  efficient experience for the user.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
          {/* ux */}
          <Link
            to={
              "https://www.instagram.com/p/CrbRMU8JI8C/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={color}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    UI/UX
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p class="subheadline block mt-1 text-lg pb-1 ">
                  Essential Element for Great UI/UX Design
                </p>
                <p className="pb-7">
                  Good UI enhances usability and appeal, while poor UI leads to
                  frustration and high bounce rates. Key elements of good UI are
                  essential for creating successful products or services
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
          {/* ux */}
          <Link
            to={
              "https://www.instagram.com/p/CokgNBPv3sb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            }
            target="_blank"
            className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]"
          >
            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
              <div class="p-8">
                <img
                  className="rounded-lg pb-3"
                  src={color}
                  alt="linkedin link"
                ></img>

                <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-[#e76e50] text-primary-800 text-white rounded-md text-md font-medium inline-flex items-center px-2.5 py-0.5 ">
                    UI/UX
                  </span>
                  <span class="text-md text-[#e76e50]">14 days ago</span>
                </div>
                <p class="subheadline block mt-1 text-lg pb-1 ">
                  Key for User-Centered Data Field
                </p>
                <p className="pb-7">
                  It helps users understand the context of the information they
                  are reading,provides credibility and enhances the user's trust
                  also helps users relate to the content by showing real-world
                  applications.
                </p>
                <div class=" text-gray-500 opacity-0 translate-y-4 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="buttonsmall">Visit</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
