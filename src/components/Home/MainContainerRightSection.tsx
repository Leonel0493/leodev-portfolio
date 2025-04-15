import MainContainerRightSectionNavItem from "./MainContainerRightSection-NavItems";

const MainContainerRightSection = () => {
  return (
    <div
      id="main-container-right-section"
      className="w-full h-auto flex flex-col items-start justify-start text-left
                 md:pt-[6vh]
                 lg:w-[80%] lg:h-[90vh] lg:column-gap-[16px] lg:row-gap-[16px] lg:pt-[5vh] lg:relative lg:relative lg:ml-[25%]"
    >
      <nav
        id="main-nav"
        className="flex flex-col text-left pl-[0px]
                   lg:pt-[10%] lg:pl-[3%]"
      >
        <MainContainerRightSectionNavItem displayName="Work" url="/work" />
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
