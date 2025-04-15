import GithubIcon from "../Shared/icons/Github";
import LinkedinIcon from "../Shared/icons/Linkedin";
import XIcon from "../Shared/icons/X";
import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const Navbar = () => {
  return (
    <div
      id="navbar-left"
      className="relative w-screen h-[10%] px-[10%] flex flex-row justify-start items-center 
             sm:h-auto 
             md:w-[10%] md:h-screen md:flex-col md:px-0 md:justify-start
             lg:w-[6%]"
    >
      <div
        id="navbar-items"
        className="w-auto h-full flex flex-row justify-center items-center 
        sm:py-[2.5%] 
        md:h-auto md:flex-col md:py-[0] md:pt-[20%] md:justify-start"
      >
        <NavbarItem
          hoverColor="#3A94C5"
          textColor="#28282B"
          isExternal={true}
          href="https://linkedin.com/in/marvin-leonel-rivas-trejo-97a581150/"
        >
          <LinkedinIcon />
        </NavbarItem>

        <NavbarItem
          hoverColor="#DF69BA"
          textColor="#28282B"
          isExternal={true}
          href="https://github.com/leonel-rivas"
        >
          <GithubIcon />
        </NavbarItem>
        <NavbarItem
          hoverColor="#5C6A72"
          textColor="#28282B"
          isExternal={true}
          href="https://x.com/LeonelRivasDev"
        >
          <XIcon />
        </NavbarItem>
      </div>

      {/* line decoration */}
      <div
        className="bg-[#28282B] w-[50px] h-[1px] 
                    md:w-[1px] md:h-[110px] md:my-6"
      ></div>

      <NavbarCopyright textColor="#28282B" />
    </div>
  );
};

export default Navbar;
