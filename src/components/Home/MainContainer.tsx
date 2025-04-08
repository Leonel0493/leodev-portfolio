import MainContainerLeftSection from "./MainContainerLeftSection";
import MainContainerRightSection from "./mainContainerRightSection";

const MainContainer = () => {
  return (
    <div
      id="main-container"
      className="w-[94%] bg-[#FFE7DE] flex flex-row mx-auto pr-[5%] pl-[10%]"
    >
      <MainContainerLeftSection />
      <MainContainerRightSection />
    </div>
  );
};

export default MainContainer;
