import React from "react";
import Navbar from "../component/Navbar";

const Blogs = () => {
  return (
    <div>
        <Navbar />


        
        <div className="px-12 pt-20">
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

          <div className="container pt-20">
            <div>
              <p className="text-4xl pt-20 flex justify-center font-bold">
                Figma User Interface
              </p>
              <div className="flex pt-10">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container pt-20">
            <div>
              <p className="text-4xl pt-20 flex justify-center font-bold">
                Figma User Interface
              </p>
              <div className="flex pt-10">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Blogs;
