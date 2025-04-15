const MainContainerLeftSection = () => {
  return (
    <div
      id="main-container-left-section"
      className="w-full h-auto flex flex-col justify-center items-start pt-[12%]
                 md:pt-[60vh]
                 lg:w-[25%] lg:pt-[2vh] lg:h-screen lg:fixed"
    >
      <div
        id="main-content"
        className="font-JetBrains-Mono text-[#28282B] 
                   xl:ml-[-10%] xl:mt-[90%]"
        style={{
          transform: `
            translate3d(0px, 0px, 0px)
            scale3d(1, 1, 1)
            rotateX(0deg)
            rotateY(0deg)
            rotateZ(0deg)
            skew(0deg, 0deg)
          `,
        }}
      >
        <div
          id="header-content"
          className="mb-[1vh] xl:mb-[2vh] overflow-hidden"
        >
          <p className="tracking-[3px] uppercase xl:text-sm font-extrabold">
            Leonel Rivas
          </p>
        </div>

        <div id="technologies" className="block overflow-hidden">
          <p className="max-w-[80%] mx-0 text-xs font-light leading-[1.9em] relative">
            Computer Engineering | C# | TypeScript | NodeJS | SQLServer | MySQL
          </p>
        </div>

        <div id="current-job" className="block overflow-hidden mt-[10px]">
          <p className="max-w-[80%] mx-0 text-xs font-light leading-[1.9em] relative">
            Currently working full-time as Engineering Developer at{" "}
            <a
              href="https://cikume.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#35A77C]"
            >
              Cikume Software
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainerLeftSection;
