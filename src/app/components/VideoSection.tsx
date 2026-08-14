import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";
import imgRectangle1 from "@/imports/SchoolSound/385e9690cd1fe3807f49979a0bf1a5ad2372419c.png";
import imgPlaceholder1 from "@/imports/SchoolSound/de3bfb1e514b72fd38fe8293ebaa3ea3050b8ab9.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function ArrowNextIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 9 16" width="9">
        <g clipPath="url(#clip_vid_arrow)">
          <path clipRule="evenodd" d={svgPaths.p192f8700} fill="#96BB7C" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip_vid_arrow">
            <rect fill="white" height="16" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThumbConcept() {
  return (
    <div className="h-[549px] overflow-clip relative shrink-0 w-[520px]">
      <div className="absolute inset-[28.6%_4.04%_5.83%_0] overflow-clip">
        <div className="absolute inset-[83.59%_4.37%_0_2.88%]" />
        <div className="absolute inset-[0_0_25.06%_0]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[21.49%_5.19%_19.31%_1.15%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="325" preserveAspectRatio="none" viewBox="0 0 487 325" width="487">
          <path d={svgPaths.p213b0200} fill="#6A1AB7" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_9.81%]">
        <img alt="Video in action" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholder1} />
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section id="video" className="bg-white h-[817px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 overflow-clip py-[160px] top-0 w-[1050px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1045px]">
          {/* Left: image */}
          <div className="content-stretch flex items-start overflow-clip relative shrink-0">
            <ThumbConcept />
          </div>
          {/* Right: text */}
          <div className="content-stretch flex flex-col gap-[35px] items-start overflow-clip relative shrink-0 w-[381px]">
            <div className="bg-[#e74040] h-[7px] relative shrink-0 w-[94px]" />
            <div className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#252b42] text-[40px] tracking-[0.2px] whitespace-nowrap">
              <p className="leading-[50px] mb-0 whitespace-pre">{`Video in Live `}</p>
              <p className="leading-[50px] whitespace-pre">Action</p>
            </div>
            <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
              <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
              <p className="leading-[20px] mb-0 whitespace-pre">{`the two major realms of Classical physics: `}</p>
              <p className="leading-[20px] whitespace-pre">{`Newtonian mechanics `}</p>
            </div>
            <button
              onClick={() => scrollTo("products")}
              className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 cursor-pointer border-0 bg-transparent p-0"
            >
              <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">Learn More</span>
              <ArrowNextIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
