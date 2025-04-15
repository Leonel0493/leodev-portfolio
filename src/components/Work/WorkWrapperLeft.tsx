const WorkWrapperLeft = () => {
  return (
    <div id="work-wrapper-left" className="w-full h-auto pt-[10%] static">
      <div
        id="work-content"
        className="w-full ml-[0%] pt-[0%] font-JetBrains-Mono text-[#FFE7DE] leading-[20px]"
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
        <div id="work-header" className="mb-[1vh] overflow-hidden">
          <p className="tracking-[2px] uppercase text-sm font-extrabold">
            WORK
          </p>
        </div>

        <div id="technologies" className="block overflow-hidden">
          <p className="text-sm block overflow-hidden">
            This is a sample of my best work, spanning various areas of software
            development, including backend and frontend Software Engineer.
          </p>
          <p className="mt-2.5 text-sm block overflow-hidden">
            The world of software engineer is constantly evolving, so I've held
            different roles over the past six years. This journey isn't over,
            and I continue to learn and acquire new skills every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkWrapperLeft;
