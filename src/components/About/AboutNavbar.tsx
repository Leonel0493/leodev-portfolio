import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const AboutNavbar = () => {
  return (
    <div
      id="about-navbar-left"
      className="relative w-screen h-[10vh] px-[10%] flex flex-row justify-start items-center 
             sm:h-auto 
             md:w-[10%] md:h-screen md:flex-col md:px-0 md:justify-start
             lg:fixed lg:w-[6%] lg:h-screen lg:top-0 lg:left-0 lg:z-50 lg:py-[15px]"
    >
      <div
        id="navbar-items"
        className="w-auto h-full flex flex-row justify-center items-center 
        sm:py-[2.5%] 
        md:h-auto md:flex-col md:py-[0] md:pt-[20%] md:justify-start"
      >
        <NavbarItem
          href="/"
          title="Home"
          hoverColor="#3A94C5"
          textColor="#28282B"
          isExternal={false}
        />
      </div>

      {/* line separator */}
      <div
        className="bg-[#28282B] w-[50px] h-[1px] 
                    md:w-[1px] md:h-[110px] md:my-6"
      ></div>

      <NavbarCopyright textColor="#28282B" />
    </div>
  );
};

export default AboutNavbar;
