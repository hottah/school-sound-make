import { createContext, useContext, useState } from "react";

import Testimonials from "@/section/Testimonials";
import Lightbox from "@/components/Lightbox";
import svgPaths from "@/assets/svg-7t2252g7ca";
import imgFixedWidth from "@/assets/99ecee9404ba3acb0bc1d369aebfdd732e26545a.png";
import imgFixedWidth1 from "@/assets/49a87c763c73dd52172aae4f8fd131799805ac11.png";
import imgFixedWidth2 from "@/assets/26bcd3374ee1cde079f04555acc010c67f60927a.png";
import imgFixedWidth3 from "@/assets/c3b166cce1284b46e0af4167a231582ba78de9ae.png";

const TestimonialsModalContext = createContext<(() => void) | null>(null);

function useTestimonialsModal() {
  const openTestimonials = useContext(TestimonialsModalContext);

  if (!openTestimonials) {
    throw new Error(
      "useTestimonialsModal must be used inside TestimonialsModalContext.Provider",
    );
  }

  return openTestimonials;
}

function MainContent() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 tracking-[0.2px] w-[691px] whitespace-nowrap"
      data-name="main-content"
    >
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px]">
        Practice Advice
      </p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[50px] relative shrink-0 text-[#252b42] text-[40px]">
        Approdable Packages
      </p>
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px]">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
        <p className="leading-[20px] whitespace-pre">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1044px]"
      data-name="row"
    >
      <MainContent />
    </div>
  );
}

function IcnFavorite() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path
            d={svgPaths.p2b083300}
            fill="#BDBDBD"
            id="Vector"
            stroke="#252B42"
            strokeWidth="0.625"
          />
        </g>
      </svg>
    </div>
  );
}

function Like() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite />
    </div>
  );
}

function IcnFavorite1() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p3b369d00} fill="#252B42" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Basket() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="basket"
    >
      <IcnFavorite1 />
    </div>
  );
}

function IcnFavorite2() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p961c600} fill="black" id="Vector" />
          <path d={svgPaths.p25b7d40} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Like1() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite2 />
    </div>
  );
}

function ProductActionsSec() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] overflow-clip"
      data-name="product-actions sec-"
    >
      <Like />
      <Basket />
      <Like1 />
    </div>
  );
}

function TagSec() {
  return (
    <div
      className="absolute bg-[#e74040] content-stretch flex items-center left-[20px] overflow-clip px-[10px] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px]"
      data-name="tag sec-"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        Sale
      </p>
    </div>
  );
}

function FixedWidth() {
  return (
    <div
      className="h-full overflow-clip relative shrink-0 w-[209px]"
      data-name="fixed-width"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgFixedWidth}
      />
      <ProductActionsSec />
      <TagSec />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
        Training Courses
      </p>
    </div>
  );
}

function IconEmojioneStar() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon emojione-star"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g clipPath="url(#clip0_0_53)" id="icon emojione-star">
          <path d={svgPaths.p1dd8c280} fill="#FFCE31" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#2d4059] content-stretch flex gap-[5px] items-center overflow-clip p-[5px] relative rounded-[20px] shrink-0">
      <IconEmojioneStar />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.2px] whitespace-nowrap">
        4.9
      </p>
    </div>
  );
}

function Frame1Sec() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Frame">
          <path d={svgPaths.pb51c100} fill="#737373" id="Vector" />
          <path d={svgPaths.p24134980} fill="#737373" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SalesSec() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="sales sec-"
    >
      <Frame6 />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        15 Sales
      </p>
    </div>
  );
}

function PricesSec() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-nowrap"
      data-name="prices sec-"
    >
      <p className="relative shrink-0 text-[#bdbdbd]">$16.48</p>
      <p className="relative shrink-0 text-[#ffab71]">$6.48</p>
    </div>
  );
}

function IconCoolIcon() {
  return (
    <div
      className="absolute left-0 size-[16px] top-0"
      data-name="icon cool-icon-1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon cool-icon-1">
          <path d={svgPaths.p3e7c880} fill="#96BB7C" id="coolicon" />
        </g>
      </svg>
    </div>
  );
}

function IconAkarIconsCalendar() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="icon akar-icons-calendar"
    >
      <IconCoolIcon />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAkarIconsCalendar />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        22h...
      </p>
    </div>
  );
}

function IconCarbonChartAreaSmooth() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon carbon-chart-area-smooth"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon carbon-chart-area-smooth">
          <path d={svgPaths.p2ae7eb80} fill="#E77C40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconCarbonChartAreaSmooth />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        64 Lessons
      </p>
    </div>
  );
}

function IconAntDesignAreaChartOutlined() {
  return (
    <div
      className="h-[14.667px] relative shrink-0 w-[16px]"
      data-name="icon ant-design-area-chart-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="14.6667"
        preserveAspectRatio="none"
        viewBox="0 0 16 14.6667"
        width="16"
      >
        <g clipPath="url(#clip0_0_58)" id="icon ant-design-area-chart-outlined">
          <path d={svgPaths.p20164100} fill="#FFAB71" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAntDesignAreaChartOutlined />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        Progress
      </p>
    </div>
  );
}

function Frame1Sec1() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip py-[15px] relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function IcnArrowRightIcnXs1() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[9.143px]"
      data-name="icn arrow-right .icn-xs"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 9.14286 16"
        width="9.14286"
      >
        <g clipPath="url(#clip0_0_13)" id="icn arrow-right .icn-xs">
          <path d={svgPaths.p3d9e5b00} fill="#96BB7C" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="16" width="9.14286" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmSec() {
  const openTestimonials = useTestimonialsModal();

  return (
    <div
      className="relative rounded-[37px] shrink-0"
      data-name="button Sm sec-"
    >
      <button
        type="button"
        onClick={openTestimonials}
        className="content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full cursor-pointer border-0 bg-transparent"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
          Learn More
        </p>

        <IcnArrowRightIcnXs1 />
      </button>

      <div
        aria-hidden
        className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[37px]"
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-full relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[35px] pt-[25px] px-[25px] relative size-full">
          <Frame1Sec />
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] w-[131px]">
            Every Client Matters
          </p>
          <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] w-[242px] whitespace-pre-wrap">
            <p className="leading-[20px] mb-0">{`We focus on ergonomics and `}</p>
            <p className="leading-[20px] mb-0">{`meeting you where you work. It's `}</p>
            <p className="leading-[20px]">only a keystroke away.</p>
          </div>
          <SalesSec />
          <PricesSec />
          <Frame1Sec1 />
          <ButtonSmSec />
        </div>
      </div>
    </div>
  );
}

function HorizentalProductCard() {
  return (
    <div
      className="bg-white content-stretch flex h-full items-start overflow-clip relative shrink-0"
      data-name="Horizental Product card"
    >
      <FixedWidth />
      <Frame3 />
    </div>
  );
}

function IcnFavorite3() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path
            d={svgPaths.p2b083300}
            fill="#BDBDBD"
            id="Vector"
            stroke="#252B42"
            strokeWidth="0.625"
          />
        </g>
      </svg>
    </div>
  );
}

function Like2() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite3 />
    </div>
  );
}

function IcnFavorite4() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p3b369d00} fill="#252B42" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Basket1() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="basket"
    >
      <IcnFavorite4 />
    </div>
  );
}

function IcnFavorite5() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p961c600} fill="black" id="Vector" />
          <path d={svgPaths.p25b7d40} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Like3() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite5 />
    </div>
  );
}

function ProductActionsSec1() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] overflow-clip"
      data-name="product-actions sec-"
    >
      <Like2 />
      <Basket1 />
      <Like3 />
    </div>
  );
}

function TagSec1() {
  return (
    <div
      className="absolute bg-[#e74040] content-stretch flex items-center left-[20px] overflow-clip px-[10px] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px]"
      data-name="tag sec-"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        Sale
      </p>
    </div>
  );
}

function FixedWidth1() {
  return (
    <div
      className="h-full overflow-clip relative shrink-0 w-[209px]"
      data-name="fixed-width"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgFixedWidth1}
      />
      <ProductActionsSec1 />
      <TagSec1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">{`2,769 online courses        `}</p>
    </div>
  );
}

function IconEmojioneStar1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon emojione-star"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g clipPath="url(#clip0_0_53)" id="icon emojione-star">
          <path d={svgPaths.p1dd8c280} fill="#FFCE31" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#2d4059] content-stretch flex gap-[5px] items-center overflow-clip p-[5px] relative rounded-[20px] shrink-0">
      <IconEmojioneStar1 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.2px] whitespace-nowrap">
        4.9
      </p>
    </div>
  );
}

function Frame1Sec2() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Frame">
          <path d={svgPaths.pb51c100} fill="#737373" id="Vector" />
          <path d={svgPaths.p24134980} fill="#737373" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SalesSec1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="sales sec-"
    >
      <Frame13 />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        15 Sales
      </p>
    </div>
  );
}

function PricesSec1() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-nowrap"
      data-name="prices sec-"
    >
      <p className="relative shrink-0 text-[#bdbdbd]">$16.48</p>
      <p className="relative shrink-0 text-[#ffab71]">$6.48</p>
    </div>
  );
}

function IconCoolIcon1() {
  return (
    <div
      className="absolute left-0 size-[16px] top-0"
      data-name="icon cool-icon-1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon cool-icon-1">
          <path d={svgPaths.p3e7c880} fill="#96BB7C" id="coolicon" />
        </g>
      </svg>
    </div>
  );
}

function IconAkarIconsCalendar1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="icon akar-icons-calendar"
    >
      <IconCoolIcon1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAkarIconsCalendar1 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        22h...
      </p>
    </div>
  );
}

function IconCarbonChartAreaSmooth1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon carbon-chart-area-smooth"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon carbon-chart-area-smooth">
          <path d={svgPaths.p2ae7eb80} fill="#E77C40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconCarbonChartAreaSmooth1 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        64 Lessons
      </p>
    </div>
  );
}

function IconAntDesignAreaChartOutlined1() {
  return (
    <div
      className="h-[14.667px] relative shrink-0 w-[16px]"
      data-name="icon ant-design-area-chart-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="14.6667"
        preserveAspectRatio="none"
        viewBox="0 0 16 14.6667"
        width="16"
      >
        <g clipPath="url(#clip0_0_58)" id="icon ant-design-area-chart-outlined">
          <path d={svgPaths.p20164100} fill="#FFAB71" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAntDesignAreaChartOutlined1 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        Progress
      </p>
    </div>
  );
}

function Frame1Sec3() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip py-[15px] relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function IcnArrowRightIcnXs2() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[9.143px]"
      data-name="icn arrow-right .icn-xs"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 9.14286 16"
        width="9.14286"
      >
        <g clipPath="url(#clip0_0_13)" id="icn arrow-right .icn-xs">
          <path d={svgPaths.p3d9e5b00} fill="#96BB7C" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="16" width="9.14286" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmSec1() {
  const openTestimonials = useTestimonialsModal();

  return (
    <div
      className="relative rounded-[37px] shrink-0"
      data-name="button Sm sec-"
    >
      <button
        type="button"
        onClick={openTestimonials}
        className="content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full cursor-pointer border-0 bg-transparent"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
          Learn More
        </p>

        <IcnArrowRightIcnXs2 />
      </button>

      <div
        aria-hidden
        className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[37px]"
      />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-full relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[35px] pt-[25px] px-[25px] relative size-full">
          <Frame1Sec2 />
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] whitespace-nowrap">
            Watch our Courses
          </p>
          <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] w-[242px] whitespace-pre-wrap">
            <p className="leading-[20px] mb-0">{`We focus on ergonomics and `}</p>
            <p className="leading-[20px] mb-0">{`meeting you where you work. It's `}</p>
            <p className="leading-[20px]">only a keystroke away.</p>
          </div>
          <SalesSec1 />
          <PricesSec1 />
          <Frame1Sec3 />
          <ButtonSmSec1 />
        </div>
      </div>
    </div>
  );
}

function HorizentalProductCard1() {
  return (
    <div
      className="bg-white content-stretch flex h-full items-start overflow-clip relative shrink-0"
      data-name="Horizental Product card"
    >
      <FixedWidth1 />
      <Frame10 />
    </div>
  );
}

function IcnFavorite6() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path
            d={svgPaths.p2b083300}
            fill="#BDBDBD"
            id="Vector"
            stroke="#252B42"
            strokeWidth="0.625"
          />
        </g>
      </svg>
    </div>
  );
}

function Like4() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite6 />
    </div>
  );
}

function IcnFavorite7() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p3b369d00} fill="#252B42" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Basket2() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="basket"
    >
      <IcnFavorite7 />
    </div>
  );
}

function IcnFavorite8() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p961c600} fill="black" id="Vector" />
          <path d={svgPaths.p25b7d40} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Like5() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite8 />
    </div>
  );
}

function ProductActionsSec2() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] overflow-clip"
      data-name="product-actions sec-"
    >
      <Like4 />
      <Basket2 />
      <Like5 />
    </div>
  );
}

function TagSec2() {
  return (
    <div
      className="absolute bg-[#e74040] content-stretch flex items-center left-[20px] overflow-clip px-[10px] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px]"
      data-name="tag sec-"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        Sale
      </p>
    </div>
  );
}

function FixedWidth2() {
  return (
    <div
      className="h-full overflow-clip relative shrink-0 w-[209px]"
      data-name="fixed-width"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgFixedWidth2}
      />
      <ProductActionsSec2 />
      <TagSec2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
        Lifetime access
      </p>
    </div>
  );
}

function IconEmojioneStar2() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon emojione-star"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g clipPath="url(#clip0_0_53)" id="icon emojione-star">
          <path d={svgPaths.p1dd8c280} fill="#FFCE31" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#2d4059] content-stretch flex gap-[5px] items-center overflow-clip p-[5px] relative rounded-[20px] shrink-0">
      <IconEmojioneStar2 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.2px] whitespace-nowrap">
        4.9
      </p>
    </div>
  );
}

function Frame1Sec4() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Frame">
          <path d={svgPaths.pb51c100} fill="#737373" id="Vector" />
          <path d={svgPaths.p24134980} fill="#737373" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SalesSec2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="sales sec-"
    >
      <Frame20 />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        15 Sales
      </p>
    </div>
  );
}

function PricesSec2() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-nowrap"
      data-name="prices sec-"
    >
      <p className="relative shrink-0 text-[#bdbdbd]">$16.48</p>
      <p className="relative shrink-0 text-[#ffab71]">$6.48</p>
    </div>
  );
}

function IconCoolIcon2() {
  return (
    <div
      className="absolute left-0 size-[16px] top-0"
      data-name="icon cool-icon-1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon cool-icon-1">
          <path d={svgPaths.p3e7c880} fill="#96BB7C" id="coolicon" />
        </g>
      </svg>
    </div>
  );
}

function IconAkarIconsCalendar2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="icon akar-icons-calendar"
    >
      <IconCoolIcon2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAkarIconsCalendar2 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        22h...
      </p>
    </div>
  );
}

function IconCarbonChartAreaSmooth2() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon carbon-chart-area-smooth"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon carbon-chart-area-smooth">
          <path d={svgPaths.p2ae7eb80} fill="#E77C40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconCarbonChartAreaSmooth2 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        64 Lessons
      </p>
    </div>
  );
}

function IconAntDesignAreaChartOutlined2() {
  return (
    <div
      className="h-[14.667px] relative shrink-0 w-[16px]"
      data-name="icon ant-design-area-chart-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="14.6667"
        preserveAspectRatio="none"
        viewBox="0 0 16 14.6667"
        width="16"
      >
        <g clipPath="url(#clip0_0_58)" id="icon ant-design-area-chart-outlined">
          <path d={svgPaths.p20164100} fill="#FFAB71" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAntDesignAreaChartOutlined2 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        Progress
      </p>
    </div>
  );
}

function Frame1Sec5() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip py-[15px] relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function IcnArrowRightIcnXs3() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[9.143px]"
      data-name="icn arrow-right .icn-xs"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 9.14286 16"
        width="9.14286"
      >
        <g clipPath="url(#clip0_0_13)" id="icn arrow-right .icn-xs">
          <path d={svgPaths.p3d9e5b00} fill="#96BB7C" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="16" width="9.14286" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmSec2() {
  const openTestimonials = useTestimonialsModal();

  return (
    <div
      className="relative rounded-[37px] shrink-0"
      data-name="button Sm sec-"
    >
      <button
        type="button"
        onClick={openTestimonials}
        className="content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full cursor-pointer border-0 bg-transparent"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
          Learn More
        </p>

        <IcnArrowRightIcnXs3 />
      </button>

      <div
        aria-hidden
        className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[37px]"
      />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-full relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[35px] pt-[25px] px-[25px] relative size-full">
          <Frame1Sec4 />
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] whitespace-nowrap">
            Our Experts Teacher
          </p>
          <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] w-[242px] whitespace-pre-wrap">
            <p className="leading-[20px] mb-0">{`We focus on ergonomics and `}</p>
            <p className="leading-[20px] mb-0">{`meeting you where you work. It's `}</p>
            <p className="leading-[20px]">only a keystroke away.</p>
          </div>
          <SalesSec2 />
          <PricesSec2 />
          <Frame1Sec5 />
          <ButtonSmSec2 />
        </div>
      </div>
    </div>
  );
}

function HorizentalProductCard2() {
  return (
    <div
      className="bg-white content-stretch flex h-full items-start overflow-clip relative shrink-0"
      data-name="Horizental Product card"
    >
      <FixedWidth2 />
      <Frame17 />
    </div>
  );
}

function IcnFavorite9() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path
            d={svgPaths.p2b083300}
            fill="#BDBDBD"
            id="Vector"
            stroke="#252B42"
            strokeWidth="0.625"
          />
        </g>
      </svg>
    </div>
  );
}

function Like6() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite9 />
    </div>
  );
}

function IcnFavorite10() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p3b369d00} fill="#252B42" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Basket3() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="basket"
    >
      <IcnFavorite10 />
    </div>
  );
}

function IcnFavorite11() {
  return (
    <div
      className="absolute right-[10px] size-[20px] top-[10px]"
      data-name="icn favorite"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g id="icn favorite">
          <path d={svgPaths.p961c600} fill="black" id="Vector" />
          <path d={svgPaths.p25b7d40} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Like7() {
  return (
    <div
      className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px]"
      data-name="like"
    >
      <IcnFavorite11 />
    </div>
  );
}

function ProductActionsSec3() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] overflow-clip"
      data-name="product-actions sec-"
    >
      <Like6 />
      <Basket3 />
      <Like7 />
    </div>
  );
}

function TagSec3() {
  return (
    <div
      className="absolute bg-[#e74040] content-stretch flex items-center left-[20px] overflow-clip px-[10px] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px]"
      data-name="tag sec-"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">
        Sale
      </p>
    </div>
  );
}

function FixedWidth3() {
  return (
    <div
      className="h-full overflow-clip relative shrink-0 w-[209px]"
      data-name="fixed-width"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgFixedWidth3}
      />
      <ProductActionsSec3 />
      <TagSec3 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
        training Courses
      </p>
    </div>
  );
}

function IconEmojioneStar3() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon emojione-star"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g clipPath="url(#clip0_0_53)" id="icon emojione-star">
          <path d={svgPaths.p1dd8c280} fill="#FFCE31" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2d4059] content-stretch flex gap-[5px] items-center overflow-clip p-[5px] relative rounded-[20px] shrink-0">
      <IconEmojioneStar3 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.2px] whitespace-nowrap">
        4.9
      </p>
    </div>
  );
}

function Frame1Sec6() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="Frame">
          <path d={svgPaths.pb51c100} fill="#737373" id="Vector" />
          <path d={svgPaths.p24134980} fill="#737373" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SalesSec3() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="sales sec-"
    >
      <Frame27 />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        15 Sales
      </p>
    </div>
  );
}

function PricesSec3() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-nowrap"
      data-name="prices sec-"
    >
      <p className="relative shrink-0 text-[#bdbdbd]">$16.48</p>
      <p className="relative shrink-0 text-[#ffab71]">$6.48</p>
    </div>
  );
}

function IconCoolIcon3() {
  return (
    <div
      className="absolute left-0 size-[16px] top-0"
      data-name="icon cool-icon-1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon cool-icon-1">
          <path d={svgPaths.p3e7c880} fill="#96BB7C" id="coolicon" />
        </g>
      </svg>
    </div>
  );
}

function IconAkarIconsCalendar3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="icon akar-icons-calendar"
    >
      <IconCoolIcon3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAkarIconsCalendar3 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        22h...
      </p>
    </div>
  );
}

function IconCarbonChartAreaSmooth3() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="icon carbon-chart-area-smooth"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        width="16"
      >
        <g id="icon carbon-chart-area-smooth">
          <path d={svgPaths.p2ae7eb80} fill="#E77C40" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconCarbonChartAreaSmooth3 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        64 Lessons
      </p>
    </div>
  );
}

function IconAntDesignAreaChartOutlined3() {
  return (
    <div
      className="h-[14.667px] relative shrink-0 w-[16px]"
      data-name="icon ant-design-area-chart-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="14.6667"
        preserveAspectRatio="none"
        viewBox="0 0 16 14.6667"
        width="16"
      >
        <g clipPath="url(#clip0_0_58)" id="icon ant-design-area-chart-outlined">
          <path d={svgPaths.p20164100} fill="#FFAB71" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
      <IconAntDesignAreaChartOutlined3 />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">
        Progress
      </p>
    </div>
  );
}

function Frame1Sec7() {
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip py-[15px] relative shrink-0 w-full"
      data-name="Frame 1 sec-"
    >
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function IcnArrowRightIcnXs4() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[9.143px]"
      data-name="icn arrow-right .icn-xs"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16"
        preserveAspectRatio="none"
        viewBox="0 0 9.14286 16"
        width="9.14286"
      >
        <g clipPath="url(#clip0_0_13)" id="icn arrow-right .icn-xs">
          <path d={svgPaths.p3d9e5b00} fill="#96BB7C" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="16" width="9.14286" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSmSec3() {
  const openTestimonials = useTestimonialsModal();

  return (
    <div
      className="relative rounded-[37px] shrink-0"
      data-name="button Sm sec-"
    >
      <button
        type="button"
        onClick={openTestimonials}
        className="content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full cursor-pointer border-0 bg-transparent"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">
          Learn More
        </p>

        <IcnArrowRightIcnXs4 />
      </button>

      <div
        aria-hidden
        className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[37px]"
      />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-full relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[35px] pt-[25px] px-[25px] relative size-full">
          <Frame1Sec6 />
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] w-[131px]">
            Every Client Matters
          </p>
          <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] w-[242px] whitespace-pre-wrap">
            <p className="leading-[20px] mb-0">{`We focus on ergonomics and `}</p>
            <p className="leading-[20px] mb-0">{`meeting you where you work. It's `}</p>
            <p className="leading-[20px]">only a keystroke away.</p>
          </div>
          <SalesSec3 />
          <PricesSec3 />
          <Frame1Sec7 />
          <ButtonSmSec3 />
        </div>
      </div>
    </div>
  );
}

function HorizentalProductCard3() {
  return (
    <div
      className="bg-white content-stretch flex h-full items-start overflow-clip relative shrink-0"
      data-name="Horizental Product card"
    >
      <FixedWidth3 />
      <Frame24 />
    </div>
  );
}

function Carousel() {
  return (
    <div
      className="content-stretch flex gap-[15px] h-[402px] items-start relative shrink-0"
      data-name="carousel"
    >
      <HorizentalProductCard />
      <HorizentalProductCard1 />
      <HorizentalProductCard2 />
      <HorizentalProductCard3 />
    </div>
  );
}

function Row4() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="row"
    >
      <Carousel />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[96px] items-center left-1/2 overflow-clip py-[160px] top-0 w-[1050px]"
      data-name="container"
    >
      <Row3 />
      <Row4 />
    </div>
  );
}

export default function CoursesPage() {
  const [testimonialsOpen, setTestimonialsOpen] = useState(false);

  return (
    <TestimonialsModalContext.Provider value={() => setTestimonialsOpen(true)}>
      <div
        className="bg-white h-[952px] overflow-clip relative shrink-0 w-[1440px]"
        data-name="1/2 Layout 2"
      >
        <Container2 />
      </div>

      <Lightbox
        open={testimonialsOpen}
        onClose={() => setTestimonialsOpen(false)}
      >
        <Testimonials />
      </Lightbox>
    </TestimonialsModalContext.Provider>
  );
}
