import NavbarCopyright from "./NavbarCopyright";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="w-[6%] h-screen px-1 py-2.5 flex-col items-start justify-start pt-[5%]"
    >
      <NavbarItem
        href="https://www.linkedin.com/in/marvin-leonel-rivas-trejo-97a581150/"
        title="LI"
        hexCode="#3A94C5"
      />
      <NavbarItem href="#" title="TW" hexCode="#5C6A72" />
      <NavbarItem
        href="https://github.com/Leonel0493"
        title="GH"
        hexCode="#DF69BA"
      />

      {/* line separator */}
      <div className="w-[1px] h-28 bg-[#28282B] mt-2.5 mb-20 ml-[50%] "></div>

      <NavbarCopyright />
    </div>
  );
};

export default Navbar;
