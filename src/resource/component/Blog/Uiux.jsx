import React from "react";
import Navbar from "../Navbar";

const Uiux = () => {
  return (
    <div>
      <Navbar />
      <p className=" pb-2 pt-28  flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
        Best of
      </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl  md:mb-12 font-bold flex justify-center suman">
        Diffrence Between UI/UX
      </h1>
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h2 className="suman text-xl">What Is UX?</h2>
          <p>
            UX stands for User Experience, which refers to the feelings and
            perceptions a person has when using a product, service, or system.
            The goal of UX design is to create a positive and efficient
            experience for the user. It involves designing products that meet
            their needs in the most intuitive way.
          </p>

<img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2 className="suman text-xl pt-6">UX: The Perfect Fit for You?</h2>
          <p>
            Think of it like being a party planner, but instead of planning a
            party, you're planning a person's experience with a website or app.
            You want to make sure everything runs smoothly, there are no
            technical glitches, and most importantly, that everyone has a great
            time! So if you're a fan of making people happy and love the idea of
            being a virtual party planner, UX might be the field for you.
          </p>
          <h2 className="suman text-xl pt-6">Facts about UX design:</h2>
          <p>
            Think of it like being a party planner, but instead of planning a
            party, you're planning a person's experience with a website or app.
            You want to make sure everything runs smoothly, there are no
            technical glitches, and most importantly, that everyone has a great
            time! So if you're a fan of making people happy and love the idea of
            being a virtual party planner, UX might be the field for you.
          </p>
          <h2 className="suman text-xl pt-6">UX: The Perfect Fit for You?</h2>
          <ol className="list-disc list-inside">
            <li>
              Considers overall user experience with a product/service/system
            </li>
            <li>Involves understanding user needs and goals</li>
            <li>Multidisciplinary field</li>
            <li>Ongoing process with constant iteration and testing</li>
            <li>Improves customer satisfaction and drives business success</li>
            <li>More than just aesthetics</li>
            <li>Can be applied to any product/service type</li>
          </ol>
          <h2 className="suman text-xl pt-6">Myths about UX design:</h2>
          <ol className="list-disc list-inside">
            <li>UX is only about appearance</li>
            <li>UX is only for digital products</li>
            <li>UX is a one-time process</li>
            <li>UX is only for big companies</li>
            <li>UX is only about making things easier</li>
          </ol>
        </article>
      </div>
    </div>
  );
};

export default Uiux;
