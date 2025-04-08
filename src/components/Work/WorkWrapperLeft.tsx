const WorkWrapperLeft = () => {
  return (
    <div
      id="work-wrapper-left"
      className="w-[25%] h-screen flex flex-col justify-center items-start"
    >
      <div
        id="work-content"
        className="ml-[-10%] mt-[90%] pl-[20px] py-[12px] border-3  font-JetBrains-Mono text-[#FFE7DE]"
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
        <div id="work-header" className="mb-[2vh] overflow-hidden">
          <p className="tracking-[2px] uppercase text-sm font-extrabold">
            WORK
          </p>
        </div>

        <div id="technologies" className="block overflow-hidden">
          <p className="max-w-[80%] mx-0 text-xs font-light leading-[1.9em] relative">
            This is a sample of my best work, spanning various areas of software
            development, including backend and frontend development.
          </p>
          <p className="max-w-[80%] mt-2.5 mx-0 text-xs font-light leading-[1.9em] relative">
            The world of software development is constantly evolving, so I've
            held different roles over the past six years. This journey isn't
            over, and I continue to learn and acquire new skills every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkWrapperLeft;
