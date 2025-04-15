import { FC } from "react";

type NavbarCopyrightProps = {
  textColor: string;
};

const NavbarCopyright: FC<NavbarCopyrightProps> = ({ textColor }) => {
  return (
    <div className="w-full text-right md:h-full md:text-left md:pt-[180px]">
      <div
        className="tracking-[4px] text-xs font-medium md:absolute md:bottom-10 md:pl-[10%] md:rotate-[-90deg]"
        style={{ color: textColor }}
      >
        © 2025
      </div>
    </div>
  );
};

export default NavbarCopyright;
