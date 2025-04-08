import { FC } from "react";

type NavbarCopyrightProps = {
  textColor: string;
};

const NavbarCopyright: FC<NavbarCopyrightProps> = ({ textColor }) => {
  return (
    <div className="w-18 absolute top-auto bottom-[3vh] left-[0%] right-[0%] flex-auto pl-5 pr-3 transform-[rotate(-90deg)]">
      <div
        className="text-center tracking-[4px] text-xs font-medium"
        style={{ color: textColor }}
      >
        © 2025
      </div>
    </div>
  );
};

export default NavbarCopyright;
