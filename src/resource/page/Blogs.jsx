import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Post from "../component/Blog/Post";

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
        <Post />
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
