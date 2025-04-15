import NavbarCopyright from "../Shared/NavbarCopyright";
import NavbarItem from "../Shared/NavbarItem";

const WorkNavbar = () => {
  return (
    <div
      id="navbar"
      className="relative w-screen h-[10vh] px-[10%] flex flex-row justify-start items-center 
             sm:h-auto 
             md:w-[10%] md:py-[30px] md:h-screen md:flex-col md:px-0 md:justify-start md:fixed
             lg:w-[6%] lg:h-screen lg:top-0 lg:left-0 lg:z-50 lg:py-[15px]"
    >
      <NavbarItem
        href="/"
        title="Home"
        hoverColor="#3A94C5"
        textColor="#FFE7DE"
        isExternal={false}
      />

      {/* line separator */}
      <div
        className="bg-[#FFE7DE] w-[50px] h-[1px] 
                    md:w-[1px] md:h-[110px] md:my-6"
      ></div>

      <NavbarCopyright textColor="#FFE7DE" />
    </div>
  );
};

export default WorkNavbar;
