const WorkPrecessSteps = () => {
  const detail = {
    step1: {
      step: "Step 1",
      title: "Discovery",
      subtitle: "What is the core requirement of the product?",
      para1: "Step 1",
      para2: "Step 1",
      para3: "Step 1",
    },
  };
  return (
    <div>
      <div className="">
        <a
          href="#_"
          className="px-8 py-2 text-xs md:text-md font-semibold text-white uppercase transition-all duration-150 outline outline-2 outline-black bg-black rounded shadow  active:bg-teal-600 hover:shadow-md ease"
        >
          {detail.step1.step}
        </a>
        <div className="pl-12 py-8">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            {detail.step1.title}
          </h2>
          <p className="pt-1 pb-2 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            {detail.step1.subtitle}
          </p>
          <ul className="pt-2 m-0 leading-6 border-0 border-gray-300">
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{" "}
              {detail.step1.para1}
            </li>
            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-[#ACE57F] rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>{" "}
              {detail.step1.para2}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkPrecessSteps;
