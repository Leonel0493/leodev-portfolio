import ContactWrapperParagraph from "./Contact-Wrapper-Paragraph";

const ContactWrapper = () => {
  return (
    <div
      id="contact-wrapper"
      className="bg-[#28282B] w-screen flex flex-col px-[10%]
                 md:w-[90%] md:h-full md:mx-auto md:overflow-y-auto md:mb-[10%]
                 lg:w-[94%] lg:flex-row"
    >
      {/* Content Info */}
      <div
        id="contact-left-content"
        className="w-full h-auto flex flex-col justify-center items-start static text-[#FFE7DE]"
      >
        <p
          id="header-conatct"
          className="w-full font-Boldonse text-[10vw] text-left mt-[9%] mb-[3%]"
        >
          Hello.
        </p>

        <ContactWrapperParagraph>
          Need an efficient, well-structured system that improves and
          facilitates your workflow?
        </ContactWrapperParagraph>

        <ContactWrapperParagraph>
          Do you need an analytical, responsible, proactive, and friendly
          software engineer?
        </ContactWrapperParagraph>

        <ContactWrapperParagraph>Get in touch.</ContactWrapperParagraph>

        <p className="font-JetBrains-Mono text-sm font-light leading-[1.9]">
          Email:{" "}
          <span className="underline decoration-solid">
            leonrivas04@gmail.com
          </span>
        </p>
        <p className="font-JetBrains-Mono text-sm font-light leading-[1.9]">
          On line:{" "}
          <a
            href="https://www.linkedin.com/in/marvin-leonel-rivas-trejo-97a581150/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-solid"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactWrapper;
