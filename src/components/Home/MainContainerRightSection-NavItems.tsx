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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".char");

    gsap.killTweensOf(letters);

    gsap.fromTo(
      letters,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: {
          each: 0.06,
          from: "end",
        },
      }
    );
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".char");
    gsap.set(letters, { x: 0, opacity: 1 });
  };

  return (
    <div
      ref={containerRef}
      id="nav-container"
      className="opacity-[1] blur-[0px] h-auto text-right pl-[5%] my-[30px] inline-block relative"
    >
      <a
        href={url}
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
