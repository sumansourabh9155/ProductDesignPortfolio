import React from 'react'
import branding from "../../../assets/icon/branding.png";
import Shopify from "../../../assets/icon/shopify.png";
import Uber from "../../../assets/icon/uber.png";
import Atlassian from "../../../assets/icon/atlassian.png";
import IBM from "../../../assets/icon/ibm.png";
import MaterialUI from "../../../assets/icon/materialui.png";
import { Link } from 'react-router-dom';

const DesignInspiration = () => {
  return (
    <div>
        <div className="bodymargin  ">
          <p className="text-4xl pb-2 md:pb:10 pt-5 md:pt-10 subheadline flex justify-center font-bold">
            Branding and Style Guides
          </p>

          <div  className="flex gap-5 pt-4 md:pt-10 px-2 md:px-12 rounded-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
              to={"https://brandingstyleguides.com/"} target="_blank" className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                   
                      <img
                        className="w-28"
                        src={branding}
                        alt="linkedin link"
                      ></img>
            

                    <p class="subheadline block mt-1 text-lg pb-3 ">
                    Branding Style Guides
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
              </Link>

              
              <Link to={""} className="group hover:shadow-[0px_16px_49px_0px_#e76e5025]">
                <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl transform hover:scale-105 duration-500 ease-in-out">
                  <div class="p-8">
                   
                      <img
                        className="w-14"
                        src={Atlassian}
                        alt="linkedin link"
                      ></img>
                 

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
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DesignInspiration