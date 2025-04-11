import AboutHeader from "./AboutHeader";
import AboutParagraph from "./AboutParagraph";

const AboutWrapperLeft = () => {
  return (
    <div
      id="about-wrapper-left"
      className="w-2/5 h-screen flex flex-col justify-normal items-start"
    >
      <p
        id="about-header"
        className="w-full font-Boldonse text-left mt-[9%] mb-[2%] text-[10vw] font-light"
      >
        About
      </p>

      <p
        id="about-subtitle"
        className="w-full font-Boldonse text-xl block pb-[2%] font-light leading-[1.9em]"
      >
        Hi! Leonel here. I'm a Computer Engineer, creative, efficient, and
        problem solver Engineer.
      </p>

      <div
        id="about-body"
        className="overflow-y-auto max-h-[500px] pb-[6%] pr-3"
      >
        <AboutParagraph>
          The efficiency, elegance, and craftsmanship of good code can make the
          difference between a cutting-edge product and just another system on
          the market. The world of high technology began to attract my attention
          when my father brought our first computer home, and I became
          fascinated with the operation of tools like Microsoft Encarta,
          Messenger, and web browsers.
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
          lives. Leveraging customer experience and understanding their needs is
          essential to improving workflows, whether it's creating a payment
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
          This is a phrase I love, because you can't just go write code for the
          sake of it; that's not my thing. I love designing and programming real
          solutions or products that make people's lives, and especially their
          workflow, easier.
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
          NestJS / SQL Server / MySQL / Postgres / Mongo / Docker / Kubernetes /
          Git / Github / Azure DevOps
        </AboutParagraph>

        <div className="my-20">
          <a
            href="#"
            className="w-2/5 h-auto py-5 px-6 bg-[#28282B] text-[#FFE7DE] text-center text-2xl font-Boldonse rounded-r-4xl hover:pr-24 transition-all duration-300 ease-in-out"
          >
            My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutWrapperLeft;
