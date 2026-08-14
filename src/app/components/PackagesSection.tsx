import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function ArrowNextIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 9 16" width="9">
        <g clipPath="url(#clip_pkg_arrow)">
          <path clipRule="evenodd" d={svgPaths.p192f8700} fill="#96BB7C" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip_pkg_arrow">
            <rect fill="white" height="16" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BlackboardIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip_blackboard)">
          <path d={svgPaths.p38423c00} fill="white" />
          <path d={svgPaths.pbf53740} fill="white" />
          <path d={svgPaths.p10de8280} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_blackboard">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TelescopeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip_telescope)">
          <path d={svgPaths.p1f253770} fill="white" />
          <path d={svgPaths.pc5b6680} fill="white" />
          <path d={svgPaths.p6c407c0} fill="white" />
          <path d={svgPaths.p1a344500} fill="white" />
          <path d={svgPaths.p26b5c000} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_telescope">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[40px] py-[35px] relative shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] shrink-0 w-[249px]">
      <div className="bg-[#96bb7c] content-stretch flex flex-col items-start overflow-clip px-[19px] py-[22px] relative rounded-[10px] shrink-0">
        {icon}
      </div>
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] w-[157px]">{title}</p>
      <div className="bg-[#e74040] h-[2px] relative shrink-0 w-[50px]" />
      <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`The gradual `}</p>
        <p className="leading-[20px] mb-0 whitespace-pre">{`accumulation of `}</p>
        <p className="leading-[20px] whitespace-pre">{`information about `}</p>
      </div>
    </div>
  );
}

export default function PackagesSection() {
  return (
    <section id="pricing" className="bg-white h-[671px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip py-[160px] top-0 w-[1050px]">
        <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
          {/* Left: text content */}
          <div className="content-stretch flex flex-col gap-[35px] items-start overflow-clip relative shrink-0 w-[507px]">
            <div className="bg-[#e74040] h-[7px] relative shrink-0 w-[94px]" />
            <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[50px] relative shrink-0 text-[#252b42] text-[40px] tracking-[0.2px] whitespace-nowrap">Approdable Packages</p>
            <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
              <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
              <p className="leading-[20px] mb-0 whitespace-pre">{`the two major realms of Classical physics: `}</p>
              <p className="leading-[20px] whitespace-pre">{`Newtonian mechanics `}</p>
            </div>
            <button
              onClick={() => scrollTo("video")}
              className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 cursor-pointer border-0 bg-transparent p-0"
            >
              <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">Learn More</span>
              <ArrowNextIcon />
            </button>
          </div>
          {/* Right: two feature cards */}
          <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[508px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
              <FeatureCard icon={<BlackboardIcon />} title="Certified Teacher" />
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[239px]">
              <FeatureCard icon={<TelescopeIcon />} title="Expert instruction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
