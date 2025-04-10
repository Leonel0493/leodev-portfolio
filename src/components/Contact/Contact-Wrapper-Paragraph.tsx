import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const ContactWrapperParagraph = ({ children }: ParagraphProps) => {
  return (
    <p className="font-JetBrains-Mono text-[#FFE7DE] text-sm font-light leading-[1.9] my-2.5">
      {children}
    </p>
  );
};

export default ContactWrapperParagraph;
