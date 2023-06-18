import figma from "../../../assets/icon/figma.png"
import sketch from "../../.././assets/icon/sketch.png"
import html from "../../.././assets/icon/html.png"
import css from "../../.././assets/icon/css.png"
import js from "../../.././assets/icon/js.png"
import react from "../../.././assets/icon/react.png"
import xd from "../../.././assets/icon/xd.png"
import photoshop from "../../.././assets/icon/photoshop.png"

import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);

const Tech = () => {
  return (
    <section className="w-full text-lg px-5 py-10 scroll-smooth ">
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-4 font-bold pb-5">
        I Use the Latest Technology Available
      </h1>
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={figma} alt="Figma" />
            <p className="ml-2">Figma</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={sketch} alt="Sketch" />
            <p className="ml-2">Sketch</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={xd} alt="Sketch" />
            <p className="ml-2">Adobe Xd</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={photoshop} alt="Sketch" />
            <p className="ml-2">Adobe Photoshop</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={html} alt="HTML" />
            <p className="ml-2">HTML</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={css} alt="CSS" />
            <p className="ml-2">CSS</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={js} alt="JavaScript" />
            <p className="ml-2">JavaScript</p>
          </div>
          <div className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <img className="w-12" src={react} alt="React" />
            <p className="ml-2">React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
