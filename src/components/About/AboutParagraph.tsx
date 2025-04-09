import { FC, ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const AboutParagraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="font-JetBrains-Mono text-[#28282B] text-sm font-light leading-[1.9] my-2.5">
      {children}
    </p>
  );
};

export default AboutParagraph;
