import GithubIcon from "../Shared/icons/Github";
import LinkedinIcon from "../Shared/icons/Linkedin";
import XIcon from "../Shared/icons/X";
import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="w-[6%] h-screen px-1 py-2.5 flex-col items-start justify-start pt-[5%]"
    >
      <NavbarItem
        href="https://www.linkedin.com/in/marvin-leonel-rivas-trejo-97a581150/"
        textColor="#28282B"
        hoverColor="#3A94C5"
        isExternal={true}
      >
        <LinkedinIcon />
      </NavbarItem>
      <NavbarItem
        href="https://x.com/LeonelRivasDev"
        textColor="#28282B"
        hoverColor="#5C6A72"
        isExternal={true}
      >
        <XIcon />
      </NavbarItem>
      <NavbarItem
        href="https://github.com/Leonel0493"
        textColor="#28282B"
        hoverColor="#DF69BA"
        isExternal={true}
      >
        <GithubIcon />
      </NavbarItem>

      {/* line separator */}
      <div className="w-[1px] h-28 bg-[#28282B] mt-2.5 mb-20 ml-[50%] "></div>

      <NavbarCopyright textColor="#28282B" />
    </div>
  );
};

export default Navbar;
