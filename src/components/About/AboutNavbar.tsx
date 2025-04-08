import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const AboutNavbar = () => {
  return (
    <div
      id="navbar"
      className="w-[6%] h-screen px-1 py-2.5 flex-col items-start justify-start pt-[5%]"
    >
      <NavbarItem
        href="/"
        title="Home"
        hoverColor="#3A94C5"
        textColor="#28282B"
        isExternal={false}
      />

      {/* line separator */}
      <div className="w-[1px] h-28 bg-[#28282B] mt-2.5 mb-20 ml-[50%] "></div>

      <NavbarCopyright textColor="#28282B" />
    </div>
  );
};

export default AboutNavbar;
