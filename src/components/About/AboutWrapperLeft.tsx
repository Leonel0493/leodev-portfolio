import AboutHeader from "./AboutHeader";
import AboutParagraph from "./AboutParagraph";

const AboutWrapperLeft = () => {
  return (
    <div
      id="about-section-left"
      className="w-full min-h-screen pt-[10%] pb-[12%] flex flex-col justify-center items-start relative "
    >
      <img
        src="/img/IMG_1192.JPG"
        alt="Leonel Rivas Developer"
        className="mt-[1%] mb-[0] ml-[0%] w-[35%] left-auto top-[0%] bottom-[0%] right-[0%] absolute block"
      />

      <div
        id="header-mask"
        className="mb-[1vh] z-60
                     md:pt-[10%]"
      >
        <p
          id="header"
          className="text-left text-[14vw] tracking-[0] leading-[1em] font-Boldonse "
        >
          About
        </p>
      </div>

      <div className="w-full lg:w-[65%]">
        <p className="pb-[0%] text-[20px] leading-[1.3em] mt-[5%] font-Boldonse">
          Hi! Leonel here.
        </p>

        <p className="pb-[0%] text-[20px] leading-[1.3em] mt-[5%] mb-[8%] font-Boldonse">
          I'm a Computer Engineer, creative, efficient, and problem solver
          Engineer.
        </p>

        <div id="about-body" className="pb-[6%] pr-3 overflow-y-visible">
          <AboutParagraph>
            The efficiency, elegance, and craftsmanship of good code can make
            the difference between a cutting-edge product and just another
            system on the market. The world of high technology began to attract
            my attention when my father brought our first computer home, and I
            became fascinated with the operation of tools like Microsoft
            Encarta, Messenger, and web browsers.
          </AboutParagraph>

          <AboutParagraph>
            Fast forward to 2010 when I decided to attend high school with a
            specialization in computer science. I encountered subjects like
            programming, networks, and operating systems, and fell in love with
            it, so the next step of studying Computer Science Engineering was
            inevitable.
          </AboutParagraph>

          <AboutParagraph>
            What I love about being a Computer Science Engineer with a
            specialization in Software Develop Engineering is the ability to
            design efficient and effective solutions that solve real-world
            problems. This goes beyond typing a few lines of code, downloading a
            few libraries, and it works; it involves having a passion for
            designing experiences and solutions that help people in their daily
            lives. Leveraging customer experience and understanding their needs
            is essential to improving workflows, whether it's creating a payment
            spreadsheet or developing systems that integrate cross-functional
            processes across the company.
          </AboutParagraph>

          <AboutParagraph>This is one of my favorite quotes:</AboutParagraph>

          <p
            id="about-quote"
            className="w-full font-Boldonse text-xl block pb-[2%] font-light leading-[1.9em]"
          >
            "First solve the problem, then write the code"
          </p>

          <AboutParagraph>
            This is a phrase I love, because you can't just go write code for
            the sake of it; that's not my thing. I love designing and
            programming real solutions or products that make people's lives, and
            especially their workflow, easier.
          </AboutParagraph>

          <AboutHeader>Experience</AboutHeader>

          <AboutParagraph>- Degree in Computer Science Engineer</AboutParagraph>
          <AboutParagraph>
            - 7 yeas of experience in Software Engineer, Agile and DevOps
          </AboutParagraph>

          <div className="mt-6 mb-6">
            <AboutParagraph>Within those 7 years, I have:</AboutParagraph>
          </div>

          <AboutParagraph>
            - 7 years of experience in Scrum metodology
          </AboutParagraph>
          <AboutParagraph>- 6 year of experience in C#</AboutParagraph>
          <AboutParagraph>- 6 year of experience in JavaScript</AboutParagraph>
          <AboutParagraph>- 3 year of experience in TypeScript</AboutParagraph>
          <AboutParagraph>- 3 year of experience in React</AboutParagraph>
          <AboutParagraph>
            - 3 year of experience in NodeJS and NestJS
          </AboutParagraph>
          <AboutParagraph>- 1 year of experience in Java</AboutParagraph>
          <AboutParagraph>- 1 year of experience Lead DevOps</AboutParagraph>

          <AboutHeader>Skills</AboutHeader>

          <AboutParagraph>
            C# / Net Core / .NET / React / TypeScript / JavaScript / NodeJS /
            NestJS / SQL Server / MySQL / Postgres / Mongo / Docker / Kubernetes
            / Git / Github / Azure DevOps
          </AboutParagraph>

          <div id="cv-download" className="w-full h-auto my-20">
            <a
              href="/docs/Leonel Rivas CV 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/5 h-auto py-5 px-6 bg-[#28282B] text-[#FFE7DE] text-center text-2xl font-Boldonse rounded-r-4xl hover:pr-24 transition-all duration-300 ease-in-out"
            >
              My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWrapperLeft;
