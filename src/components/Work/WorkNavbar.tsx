import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const WorkNavbar = () => {
  return (
    <div
      id="navbar"
      className="w-full h-[10%] flex flex-row items-center justify-center static pb-[0] px-[7%] pt-[5%]"
    >
      <NavbarItem
        href="/"
        title="Home"
        hoverColor="#3A94C5"
        textColor="#FFE7DE"
        isExternal={false}
      />

      {/* line separator */}
      <div className="bg-[#FFE7DE] w-[40px] h-[2px] my-[0] ml-[7px] mr-[17px] pr-[0]"></div>

      <NavbarCopyright textColor="#FFE7DE" />
    </div>
  );
};

export default WorkNavbar;
