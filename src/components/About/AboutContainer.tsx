import AboutWrapperLeft from "./AboutWrapperLeft";

const AboutContainer = () => {
  return (
    <div
      id="about-container"
      className="bg-[#FFE7DE] w-screen flex flex-col px-[10%]
      md:w-[90%] md:h-full md:mx-auto md:overflow-y-auto
      lg:w-[94%] lg:flex-row"
    >
      <AboutWrapperLeft />
    </div>
  );
};

export default AboutContainer;
