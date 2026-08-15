import { useState } from "react";

import svgPaths from "@/assets/svg-7t2252g7ca";
import imgRectangle1 from "@/assets/385e9690cd1fe3807f49979a0bf1a5ad2372419c.png";
import imgPlaceholder1 from "@/assets/de3bfb1e514b72fd38fe8293ebaa3ea3050b8ab9.png";

import Team from "@/section/Team";
import Lightbox from "@/components/Lightbox";

function Frame2() {
  return (
    <div className="absolute inset-[83.59%_4.37%_0_2.88%]" data-name="Frame" />
  );
}

function Frame1() {
  return (
    <div
      className="absolute inset-[28.6%_4.04%_5.83%_0] overflow-clip"
      data-name="Frame"
    >
      <Frame2 />

      <div className="absolute inset-[0_0_25.06%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={imgRectangle1}
          />
        </div>
      </div>
    </div>
  );
}

function ThumbConcept() {
  return (
    <div
      className="h-[549px] overflow-clip relative shrink-0 w-[520px]"
      data-name="thumb-concept"
    >
      <Frame1 />

      <div
        className="absolute inset-[21.49%_5.19%_19.31%_1.15%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="325"
          preserveAspectRatio="none"
          viewBox="0 0 487 325"
          width="487"
        >
          <path d={svgPaths.p213b0200} fill="#6A1AB7" id="Vector" />
        </svg>
      </div>

      <div className="absolute inset-[0_0_0_9.81%]" data-name="Placeholder">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPlaceholder1}
        />
      </div>
    </div>
  );
}

function VideoVisual() {
  return (
    <div
      className="content-stretch flex items-start overflow-clip relative shrink-0"
      data-name="col-md-6"
    >
      <ThumbConcept />
    </div>
  );
}

function ArrowNextIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 9 16"
        width="9"
      >
        <g clipPath="url(#clip_pkg_arrow)">
          <path
            clipRule="evenodd"
            d={svgPaths.p192f8700}
            fill="#96BB7C"
            fillRule="evenodd"
          />
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

function VideoContent({ onTeamOpen }: { onTeamOpen: () => void }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[35px] items-start overflow-clip relative shrink-0 w-[381px]"
      data-name="col-md-5"
    >
      <div
        className="bg-[#e74040] h-[7px] relative shrink-0 w-[94px]"
        data-name="fixed-width fixed-height sec-"
      />

      <div className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#252b42] text-[40px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[50px] mb-0 whitespace-pre">{`Video in Live `}</p>

        <p className="leading-[50px] whitespace-pre">Action</p>
      </div>

      <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">
          {`Problems trying to resolve the conflict between `}
        </p>

        <p className="leading-[20px] mb-0 whitespace-pre">
          {`the two major realms of Classical physics: `}
        </p>

        <p className="leading-[20px] whitespace-pre">
          {`Newtonian mechanics `}
        </p>
      </div>

      <button
        type="button"
        onClick={onTeamOpen}
        className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 cursor-pointer border-0 bg-transparent p-0"
      >
        <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
          Learn More
        </span>

        <ArrowNextIcon />
      </button>
    </div>
  );
}

export default function Video() {
  const [teamOpen, setTeamOpen] = useState(false);

  return (
    <>
      <section
        className="bg-white relative shrink-0 w-[1440px]"
        data-name="1/1 Layout 2"
      >
        <div
          className="content-stretch flex flex-col items-center pb-[160px] w-[1050px] mx-auto"
          data-name="container"
        >
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-[1045px]"
            data-name="row"
          >
            <VideoVisual />

            <VideoContent onTeamOpen={() => setTeamOpen(true)} />
          </div>
        </div>
      </section>

      <Lightbox open={teamOpen} onClose={() => setTeamOpen(false)}>
        <Team />
      </Lightbox>
    </>
  );
}
