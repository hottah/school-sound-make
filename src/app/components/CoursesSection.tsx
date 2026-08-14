import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";
import imgFixedWidth from "@/imports/SchoolSound/99ecee9404ba3acb0bc1d369aebfdd732e26545a.png";
import imgFixedWidth1 from "@/imports/SchoolSound/49a87c763c73dd52172aae4f8fd131799805ac11.png";
import imgFixedWidth2 from "@/imports/SchoolSound/26bcd3374ee1cde079f04555acc010c67f60927a.png";
import imgFixedWidth3 from "@/imports/SchoolSound/c3b166cce1284b46e0af4167a231582ba78de9ae.png";

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip_course_star)">
          <path d={svgPaths.p1dd8c280} fill="#FFCE31" />
        </g>
        <defs>
          <clipPath id="clip_course_star">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FrameIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <path d={svgPaths.pb51c100} fill="#737373" />
        <path d={svgPaths.p24134980} fill="#737373" />
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute left-0 size-[16px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p3e7c880} fill="#96BB7C" />
        </svg>
      </div>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <path d={svgPaths.p2ae7eb80} fill="#E77C40" />
      </svg>
    </div>
  );
}

function AreaChartIcon() {
  return (
    <div className="h-[14.667px] relative shrink-0 w-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.6667" preserveAspectRatio="none" viewBox="0 0 16 14.6667" width="16">
        <g clipPath="url(#clip_area_chart)">
          <path d={svgPaths.p20164100} fill="#FFAB71" />
        </g>
        <defs>
          <clipPath id="clip_area_chart">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9.143px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 9.14286 16" width="9.14286">
        <g clipPath="url(#clip_course_arrow)">
          <path d={svgPaths.p3d9e5b00} fill="#96BB7C" />
        </g>
        <defs>
          <clipPath id="clip_course_arrow">
            <rect fill="white" height="16" width="9.14286" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeartOutlineIcon() {
  return (
    <div className="absolute right-[10px] size-[20px] top-[10px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <path d={svgPaths.p2b083300} fill="#BDBDBD" stroke="#252B42" strokeWidth="0.625" />
      </svg>
    </div>
  );
}

function HeartFilledIcon() {
  return (
    <div className="absolute right-[10px] size-[20px] top-[10px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <path d={svgPaths.p3b369d00} fill="#252B42" />
      </svg>
    </div>
  );
}

function ShareIcon() {
  return (
    <div className="absolute right-[10px] size-[20px] top-[10px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <path d={svgPaths.p961c600} fill="black" />
        <path d={svgPaths.p25b7d40} fill="black" />
      </svg>
    </div>
  );
}

interface ProductCardProps {
  image: string;
  category: string;
  rating: string;
  title: string;
  description: string;
}

function ProductCard({ image, category, rating, title, description }: ProductCardProps) {
  return (
    <div className="bg-white content-stretch flex h-full items-start overflow-clip relative shrink-0">
      {/* Card image */}
      <div className="h-full overflow-clip relative shrink-0 w-[209px]">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image} />
        <div className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] overflow-clip">
          <button className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px] cursor-pointer border-0 p-0">
            <HeartOutlineIcon />
          </button>
          <button className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px] cursor-pointer border-0 p-0">
            <HeartFilledIcon />
          </button>
          <button className="bg-white overflow-clip relative rounded-[44.786px] shrink-0 size-[40px] cursor-pointer border-0 p-0">
            <ShareIcon />
          </button>
        </div>
        <div className="absolute bg-[#e74040] content-stretch flex items-center left-[20px] overflow-clip px-[10px] rounded-[3px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px]">
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">Sale</p>
        </div>
      </div>
      {/* Card content */}
      <div className="h-full relative shrink-0">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start pb-[35px] pt-[25px] px-[25px] relative size-full">
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0">
                <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">{category}</p>
              </div>
              <div className="bg-[#2d4059] content-stretch flex gap-[5px] items-center overflow-clip p-[5px] relative rounded-[20px] shrink-0">
                <StarIcon />
                <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.2px] whitespace-nowrap">{rating}</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] w-[131px]">{title}</p>
            <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] w-[242px] whitespace-pre-wrap">
              <p className="leading-[20px] mb-0">{`We focus on ergonomics and `}</p>
              <p className="leading-[20px] mb-0">{`meeting you where you work. It's `}</p>
              <p className="leading-[20px]">only a keystroke away.</p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <FrameIcon />
              <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">15 Sales</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#bdbdbd]">$16.48</p>
              <p className="relative shrink-0 text-[#ffab71]">$6.48</p>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip py-[15px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
                <CalendarIcon />
                <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">22h...</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
                <ChartIcon />
                <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">64 Lessons</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
                <AreaChartIcon />
                <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] tracking-[0.2px] whitespace-nowrap">Progress</p>
              </div>
            </div>
            <button className="relative rounded-[37px] shrink-0 cursor-pointer border-0 bg-transparent p-0">
              <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
                <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px] whitespace-nowrap">Learn More</span>
                <ArrowRightIcon />
              </div>
              <div aria-hidden className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[37px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section id="products" className="bg-white h-[952px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[96px] items-center left-1/2 overflow-clip py-[160px] top-0 w-[1050px]">
        {/* Section heading */}
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1044px]">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 tracking-[0.2px] w-[691px] whitespace-nowrap">
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px]">Practice Advice</p>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[50px] relative shrink-0 text-[#252b42] text-[40px]">Approdable Packages</p>
            <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px]">
              <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
              <p className="leading-[20px] whitespace-pre">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        {/* Cards carousel */}
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="content-stretch flex gap-[15px] h-[402px] items-start relative shrink-0">
            <ProductCard image={imgFixedWidth} category="Training Courses" rating="4.9" title="Every Client Matters" description="" />
            <ProductCard image={imgFixedWidth1} category="2,769 online courses" rating="4.9" title="Watch our Courses" description="" />
            <ProductCard image={imgFixedWidth2} category="Lifetime access" rating="4.9" title="Our Experts Teacher" description="" />
            <ProductCard image={imgFixedWidth3} category="training Courses" rating="4.9" title="Every Client Matters" description="" />
          </div>
        </div>
      </div>
    </section>
  );
}
