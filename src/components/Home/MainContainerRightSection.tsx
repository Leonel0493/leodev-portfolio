import MainContainerRightSectionNavItem from "./MainContainerRightSection-NavItems";

const MainContainerRightSection = () => {
  return (
    <div
      id="main-container-right-section"
      className="w-[65%] h-[90vh] float-right gap-x-4 gap-y-4 text-center flex-col justify-center items-center pt-[5vh] flex relative top-[0%] left-auto right-[0%] bottom-[0%]"
    >
      <nav id="main-nav" className="text-left pt-[10%] pl-[6%]">
        <MainContainerRightSectionNavItem displayName="Home" url="/" />
        <MainContainerRightSectionNavItem displayName="About" url="/about" />
        <MainContainerRightSectionNavItem
          displayName="Contact"
          url="/contact"
        />
      </nav>
    </div>
  );
};

export default MainContainerRightSection;
