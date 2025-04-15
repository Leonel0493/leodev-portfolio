import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const AboutNavbar = () => {
  return (
    <div
      id="navbar"
      className="w-full h-[10%] flex flex-row static pb-[0] px-[7%] pt-[5%] xl:w-[6%] items-center justify-center"
    >
      <NavbarItem
        href="/"
        title="Home"
        hoverColor="#3A94C5"
        textColor="#28282B"
        isExternal={false}
      />

      {/* line separator */}
      <div className="bg-[#28282B] w-[40px] h-[2px] my-[0] ml-[7px] mr-[17px] pr-[0]"></div>

      <NavbarCopyright textColor="#28282B" />
    </div>
  );
};

export default AboutNavbar;
