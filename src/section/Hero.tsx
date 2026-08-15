import { Link } from "react-router";
import heroCover from "@/assets/hero-cover.png";

function JoinUsButton() {
  return (
    <Link
      to="/contact"
      className="bg-[#96bb7c] content-stretch flex flex-col items-center overflow-clip px-[40px] py-[15px] relative rounded-[5px] shrink-0 no-underline"
      data-name="button Md sec-"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        Join Us
      </p>
    </Link>
  );
}

function LearnMoreButton() {
  return (
    <div className="relative rounded-[5px] shrink-0" data-name="button Md sec-">
      <Link
        to="/product"
        className="content-stretch flex flex-col items-center overflow-clip px-[40px] py-[15px] relative rounded-[inherit] size-full no-underline"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#96bb7c] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
          Learn More
        </p>
      </Link>

      <div
        aria-hidden
        className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function HeroActions() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-start relative shrink-0"
      data-name="cta"
    >
      <JoinUsButton />
      <LearnMoreButton />
    </div>
  );
}

function HeroContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[30px] items-start justify-center overflow-clip relative shrink-0 w-[573px]"
      data-name="col-md-6"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[16px] tracking-[0.1px] whitespace-nowrap">
        Welcome
      </p>
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[80px] relative shrink-0 text-[#252b42] text-[58px] tracking-[0.2px] w-[542px]">
        Best Learning Opportunities
      </p>
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#737373] text-[20px] tracking-[0.2px] w-[338px]">
        Our goal is to make online education work for everyone
      </p>
      <HeroActions />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="h-[682px] relative shrink-0 w-[704px]" data-name="col-md-6">
      <img
        src={heroCover}
        alt=""
        className="absolute inset-0 size-full object-contain"
      />
    </div>
  );
}

function HeroRow() {
  return (
    <div
      className="absolute content-stretch flex gap-[30px] items-center justify-end left-0 overflow-clip top-0 w-[1439px]"
      data-name="row"
    >
      <HeroContent />
      <HeroVisual />
    </div>
  );
}

export default function Hero() {
  return (
    <div
      className="-translate-x-1/2 absolute h-[682px] left-1/2 overflow-clip top-0 w-[1440px]"
      data-name="container-fluid"
    >
      <HeroRow />
    </div>
  );
}
