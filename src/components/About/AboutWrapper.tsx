import AboutWrapperLeft from "./AboutWrapperLeft";
import AboutWrapperRight from "./AboutWrapperRight";

const AboutWrapper = () => {
  return (
    <div
      id="about-wrapper"
      className="w-[94%] bg-[#FFE7DE] flex flex-row mx-auto p-2.5 pl-6"
    >
      <AboutWrapperLeft />
      <AboutWrapperRight />
    </div>
  );
};

export default AboutWrapper;
