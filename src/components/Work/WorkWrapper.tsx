import WorkWrapperLeft from "./WorkWrapperLeft";

const WorkWrapper = () => {
  return (
    <div
      id="work-wrapper"
      className="bg-[#28282B] w-screen flex flex-col px-[10%]
                   md:w-[90%] md:h-full md:mx-auto md:overflow-y-auto
                   lg:w-[94%] lg:flex-row"
    >
      <WorkWrapperLeft />
    </div>
  );
};

export default WorkWrapper;
