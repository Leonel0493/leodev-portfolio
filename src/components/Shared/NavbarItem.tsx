import { FC, ReactNode, useRef } from "react";

type LinkProps = {
  href: string;
  title?: string;
  textColor: string;
  hoverColor: string;
  isExternal: boolean;
  children?: ReactNode;
};

const NavbarItem: FC<LinkProps> = ({
  href,
  title,
  textColor,
  hoverColor,
  isExternal,
  children,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (linkRef.current) {
      linkRef.current.style.color = hoverColor;
    }
  };

  const handleMouseLeave = () => {
    if (linkRef.current) {
      linkRef.current.style.color = textColor;
    }
  };

  return (
    <div
      id="navbar-item"
      className="flex-auto mb-10 pl-5 pr-5 items-center justify-center"
    >
      <a
        ref={linkRef}
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-center tracking-[5px] uppercase font-JetBrains-Mono font-bold text-xs block transform rotate-[-90deg] transition-colors duration-300"
        style={{ color: textColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title || children}
      </a>
    </div>
  );
};

export default NavbarItem;
