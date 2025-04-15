import MainContainerLeftSection from "./MainContainerLeftSection";
import MainContainerRightSection from "./MainContainerRightSection";

const MainContainer = () => {
  return (
    <div
      id="main-container"
      className="relative bg-[#FFE7DE] w-screen h-auto flex flex-col px-[10%]
      md:w-[90%] md:h-full md:mx-auto md:overflow-y-auto
      lg:w-[94%] lg:flex-row"
    >
      <MainContainerLeftSection />
      <MainContainerRightSection />
    </div>
  );
};

export default MainContainer;
