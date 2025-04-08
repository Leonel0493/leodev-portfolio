import { FC, useRef } from "react";
import { gsap } from "gsap";

type UrlProps = {
  displayName: string;
  url: string;
};

const MainContainerRightSectionNavItem: FC<UrlProps> = ({
  displayName,
  url,
}) => {
  const textRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    const letters = textRef.current?.querySelectorAll(".char");
    if (letters) {
      gsap.fromTo(
        letters,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.03,
          ease: "power2.out",
        }
      );
    }
  };

  const handleMouseLeave = () => {
    const letters = textRef.current?.querySelectorAll(".char");
    if (letters) {
      gsap.set(letters, { y: 0, opacity: 1 }); // o setear al estado inicial si querés
    }
  };

  return (
    <div
      id="nav-container"
      className="opacity-[1] blur-[0px] h-auto text-right pl-[5%] py-[17px] inline-block relative"
    >
      <a
        href={url}
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="z-10 text-[#28282B] uppercase font-Boldonse text-[8vw] font-light leading-[.95em] block relative"
      >
        {displayName.split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </a>
    </div>
  );
};

export default MainContainerRightSectionNavItem;
