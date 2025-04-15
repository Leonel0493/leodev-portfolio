import { FC, ReactNode } from "react";

type AboutHeaderProps = {
  children: ReactNode;
};

const AboutHeader: FC<AboutHeaderProps> = ({ children }) => {
  return (
    <p className="font-Boldonse font-normal leading-[1.9em] my-[3%]">
      {children}
    </p>
  );
};

export default AboutHeader;
