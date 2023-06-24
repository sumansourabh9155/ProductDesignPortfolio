import React from "react";
import Navbar from "../component/Navbar";
import Maintenance from "../../assets/buttons/Maintenance.png";
import Footer from "../component/Footer";

const Avail = () => {
  return (
    <div>
      <Navbar />

      {/* <div className="pt-20 px-1 md:px-12">
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
      </div> */}

      <section class=" pt-16 ">
        <div class=" px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <img src={Maintenance} className="px-28" alt="Maintenance" />{" "}
          <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none suman lg:mb-6 md:text-5xl xl:text-6xl ">
            Under Maintenance
          </h1>
          <p class="font-light  md:text-lg xl:text-xl ">
            This page will be soon active.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Avail;
