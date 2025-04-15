import { ReactNode, FC } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const AboutParagraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="font-JetBrains-Mono font-normal leading-[1.9em] my-[15px]">
      {children}
    </p>
  );
};

export default AboutParagraph;
