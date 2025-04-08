import { FC } from "react";

type UrlProps = {
  displayName: string;
  url: string;
};

const MainContainerRightSectionNavItem: FC<UrlProps> = ({
  displayName,
  url,
}) => {
  return (
    <div
      id="nav-container"
      className="opacity-[1] blur-[0px] text-right pl=[5%] mb-[7%] inline-block relative"
    >
      <a
        href={url}
        className="z-10 text-[#28282B] uppercase font-Boldonse text-[8vw] font-light leading-[.95em] block relative"
      >
        {displayName}
      </a>
    </div>
  );
};

export default MainContainerRightSectionNavItem;
