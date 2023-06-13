import Steps from "./Component/WorkPrecessSteps";

const WorkProcess = () => {
  return (
    <div className="p-10">
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-12 font-bold pb-5 flex justify-center">
        Work Process I use
      </h1>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center justify-between">
        <Steps />
        <Steps />
        <Steps />
        <Steps />
        <Steps />
        <Steps />
      </div>
      </div>
    </div>
  );
};

export default WorkProcess;
