import ReactGA from 'react-ga';
import tick from '../../../assets/buttons/tick.png';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);


const WorkProcess = () => {
  const detail = [
    {
      step: "Step 1",
      headline: "Discovery Problem Statement",
      subtitle: "What is the core requirement of the product?",
      para: ["Research","Competitor Analysis"],
    },
    {
      step: "Step 2",
      headline: "Site plan and Content",
      subtitle: "Some description about your design exploration.",
      para: ["brainstorming","content strategy", "Brand Identity"],
    },
    {
      step: "Step 3",
      headline: "Wireframe and Design",
      subtitle:
        "I prepare the design for developers and create documentation of decisions made.",
      para: ["User Interface Design","User Flow"],
    },
    {
      step: "Step 4",
      headline: "Art Direction Development",
      subtitle: "I work closely with developers during project implementation.",
      para: ["prototyping", "design system", "Development"],
    },
    {
      step: "Step 5",
      headline: "Debugging and Testing",
      subtitle:
        "I monitor and support the project post-launch to gain knowledge and develop more ideas for improvement.",
      para: ["A/B Testing", "Quality Assurance", "Bug Fixing"],
    },
    {
      step: "Step 6",
      headline: "Launch",
      subtitle:
        "I monitor and support the project post-launch to gain knowledge and develop more ideas for improvement.",
      para: ["Idea Validation","Product Launch","Product Iteration"],
    },
  ];

  const FetchListItem = (props) => {
    const listItems = props.para.map((point) => (
      <li
        key={point}
         className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex align-middle items-center justify-center">
                  <img src={tick} className="h-10" alt="" />
                </span>{" "}
                {point}
             
        
      </li>
    ));

    return <>{listItems}</>;
  };

  const content = detail.map((item) => (
    <div key={item.step}>
     
      <div className="">
        <a
          href="#_"
          className="px-8 py-2 text-xs md:text-md font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-[#e76e50] bg-[#e76e50] rounded shadow active:bg-teal-600 hover:shadow-md ease"
        >
          {item.step}
        </a>
        
        <div className="pl-12 py-8 ">
          <h2 className="subheadline m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            {item.headline}
          </h2>
          <p className="pt-1 pb-2 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-14 lg:text-lg">
            {item.subtitle}
          </p>
          <ul className="pt-2 m-0 leading-6 border-0 border-gray-300">
            <FetchListItem para={item.para} />
          </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="px-2 md:px-10 mt-4">
      <p className="pb-2 relative flex items-center justify-center w-full leading-relaxed text-sm md:text-xl text-[#e76e50]  lg:justify-center lg:items-center">
              To make the smooth process
            </p>
      <h1 className="title-font tracking-wide text-3xl md:text-2xl xl:text-4xl mb-12 font-bold pb-5 flex justify-center suman">
        Work Process I Use
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center justify-between">
          {content}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
