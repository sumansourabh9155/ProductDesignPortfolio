import React from "react";
import fonts from "../../../assets/blog/fonts.jpg";
import color from "../../../assets/blog/color.jpg";
import uiux from "../../../assets/blog/uiux.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="  ">
      <p className=" pb-2 pt-16  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
        Best of
      </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl  md:mb-2 font-bold flex justify-center suman">
        My Recent Blogs
      </h1>

      <div className="flex gap-5 pt-2 md:pt-4 px-2 md:px-12 rounded-xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default Blog;
