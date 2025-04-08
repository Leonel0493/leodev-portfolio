const MainContainerLeftSection = () => {
  return (
    <div
      id="main-container-left-section"
      className="w-[25%] h-screen flex flex-col justify-center items-start"
    >
      <div
        id="main-content"
        className="ml-[-10%] mt-[90%] pl-[20px] py-[12px] border-3 border-[#3A94C5] rounded-xl font-JetBrains-Mono text-[#5C6A72]"
        style={{
          boxShadow: "8px 12px 30px rgba(0, 0, 0, 0.75)",
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
        <div id="header-content" className="mb-[2vh] overflow-hidden">
          <p className="tracking-[2px] uppercase text-sm font-extrabold">
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
