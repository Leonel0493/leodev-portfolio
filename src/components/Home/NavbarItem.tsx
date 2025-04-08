import { FC, useState } from "react";

type LinkProps = {
  href: string;
  title: string;
  hexCode: string;
};

const NavbarItem: FC<LinkProps> = ({ href, title, hexCode }) => {
  const [color, setColor] = useState("#28282B");
  return (
    <div
      id="navbar-item"
      className="flex-auto mb-10 pl-5 pr-5 transform-[rotate(-90deg)] items-center justify-center"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#28282B] text-center tracking-[5px] uppercase font-JetBrains-Mono font-bold text-xs block"
        style={{ color, "--hover-color": hexCode } as React.CSSProperties}
        onMouseEnter={() => setColor(hexCode)}
        onMouseLeave={() => setColor("#28282B")}
      >
        {title}
      </a>
    </div>
  );
};

export default NavbarItem;
