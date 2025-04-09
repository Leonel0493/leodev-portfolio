import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const WorkNavbar = () => {
  return (
    <div
      id="navbar"
      className="w-[6%] h-screen px-1 py-2.5 flex-col items-start justify-start pt-[5%]"
    >
      <NavbarItem
        href="/"
        title="Home"
        hoverColor="#3A94C5"
        textColor="#FFE7DE"
        isExternal={false}
      />

      {/* line separator */}
      <div className="w-[1px] h-28 bg-[#FFE7DE] mt-2.5 mb-20 ml-[50%] "></div>

      <NavbarCopyright textColor="#FFE7DE" />
    </div>
  );
};

export default WorkNavbar;
