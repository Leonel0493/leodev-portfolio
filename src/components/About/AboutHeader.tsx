import { FC, ReactNode } from "react";

type AboutHeaderProps = {
  children: ReactNode;
};

const AboutHeader: FC<AboutHeaderProps> = ({ children }) => {
  return (
    <p className="font-Boldonse text-xl text-left leading-[1.75em] uppercase tracking-[4px my-[7%]">
      {children}
    </p>
  );
};

export default AboutHeader;
