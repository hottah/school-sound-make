import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";
import imgRectangle from "@/imports/SchoolSound/874994f87698a2617e19fb602a3ea12664a833db.png";
import imgPlaceholder from "@/imports/SchoolSound/66a7055e20f48fbd3eb37d06c1502bec13378492.png";

const scrollTo = (id: string) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

function NavArrow() {
  return (
    <div className="h-[10px] relative shrink-0 w-[12px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 12 10" width="12">
        <g clipPath="url(#clip_hdr_nav_arrow)">
          <path clipRule="evenodd" d={svgPaths.p37851d00} fill="white" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip_hdr_nav_arrow">
            <rect fill="white" height="10" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroFrame() {
  return (
    <div className="absolute inset-[34.15%_65.82%_62.14%_31.12%]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.4904" preserveAspectRatio="none" viewBox="0 0 24.4825 24.4904" width="24.4825">
        <g clipPath="url(#clip_hero_frame)">
          <path d={svgPaths.p31582600} fill="#FF6F28" />
          <path d={svgPaths.p2e452270} fill="#FF6F28" />
        </g>
        <defs>
          <clipPath id="clip_hero_frame">
            <rect fill="white" height="24.4904" width="24.4825" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroDecorations() {
  return (
    <div className="absolute inset-[3.23%_-13.67%_0_0.07%] overflow-clip">
      <div className="absolute inset-[57.12%_50.35%_4.97%_11.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="250.184" preserveAspectRatio="none" viewBox="0 0 301.268 250.184" width="301.268">
          <path d={svgPaths.p268f0bc0} fill="#00CB9D" />
        </svg>
      </div>
      <div className="absolute inset-[20.27%_9.47%_16.85%_3.66%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="415.036" preserveAspectRatio="none" viewBox="0 0 694.838 415.036" width="694.838">
          <path d={svgPaths.p14e2e80} fill="#2872FF" />
        </svg>
      </div>
      <div className="absolute inset-[10.88%_17.45%_54.51%_44.39%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="228.396" preserveAspectRatio="none" viewBox="0 0 305.248 228.396" width="305.248">
          <path d={svgPaths.p225ad9c0} fill="#FFC8AC" />
        </svg>
      </div>
      <div className="absolute inset-[44.56%_22.19%_26.95%_55.73%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="188.064" preserveAspectRatio="none" viewBox="0 0 176.619 188.064" width="176.619">
          <path d={svgPaths.p1b80ec0} fill="#03C7A0" />
        </svg>
      </div>
      <div className="absolute inset-[57.11%_50.33%_4.97%_11.98%]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[57.88%_19.55%_14.27%_41.36%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="183.859" preserveAspectRatio="none" viewBox="0 0 312.66 183.859" width="312.66">
          <path d={svgPaths.p251c2e00} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute inset-[29.31%_18.97%_47.54%_48.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="152.792" preserveAspectRatio="none" viewBox="0 0 256.263 152.792" width="256.263">
          <path d={svgPaths.p3b840300} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute inset-[16.74%_30.3%_55.79%_11.1%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="181.253" preserveAspectRatio="none" viewBox="0 0 468.61 181.253" width="468.61">
          <path d={svgPaths.p5983400} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_9.81%]">
        <img alt="Student with books" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholder} />
      </div>
      <div className="absolute inset-[76.23%_31.28%_5.36%_46.7%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="121.488" preserveAspectRatio="none" viewBox="0 0 176.155 121.488" width="176.155">
          <path d={svgPaths.p3b437b00} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute inset-[30.43%_81.83%_58.77%_0]">
        <svg className="absolute block inset-0 size-full" fill="none" height="71.2819" preserveAspectRatio="none" viewBox="0 0 145.347 71.2819" width="145.347">
          <path d={svgPaths.p1fd34d00} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute inset-[57.81%_70.36%_11.36%_6.94%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="203.533" preserveAspectRatio="none" viewBox="0 0 181.531 203.533" width="181.531">
          <path d={svgPaths.p3b30b980} fill="#FF6F28" />
        </svg>
      </div>
      <div className="absolute flex inset-[17.74%_15.61%_72.32%_76.19%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(2.462cqw,2.462cqh)] w-[hypot(97.538cqw,-97.538cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.2846" preserveAspectRatio="none" viewBox="0 0 90.5099 2.2846" width="90.5099">
              <path d={svgPaths.p3a336500} fill="#FF6F28" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[13.01%_15.61%_74.63%_74.19%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(1.97929cqw,1.97929cqh)] w-[hypot(98.0207cqw,-98.0207cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.2846" preserveAspectRatio="none" viewBox="0 0 113.14 2.2846" width="113.14">
              <path d="M113.14 0H0V2.2846H113.14V0Z" fill="#FF6F28" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[53.71%_93.87%_40.06%_0.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="41.1475" preserveAspectRatio="none" viewBox="0 0 41.1487 41.1475" width="41.1487">
          <path d={svgPaths.p26120000} fill="#FF6F28" />
        </svg>
      </div>
      <HeroFrame />
      <div className="absolute flex inset-[75.92%_83.34%_12.75%_7.31%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(2.1609cqw,2.1609cqh)] w-[hypot(97.8391cqw,-97.8391cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.28461" preserveAspectRatio="none" viewBox="0 0 103.44 2.28461" width="103.44">
              <path d={svgPaths.p14952200} fill="#FF6F28" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[77.77%_80.91%_14.72%_12.89%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(3.25592cqw,3.25592cqh)] w-[hypot(96.7441cqw,-96.7441cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.28462" preserveAspectRatio="none" viewBox="0 0 67.8835 2.28462" width="67.8835">
              <path d={svgPaths.p188c4a00} fill="#FF6F28" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[73.84%_85.05%_20.72%_10.46%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(4.49964cqw,4.49964cqh)] w-[hypot(95.5004cqw,-95.5004cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.28456" preserveAspectRatio="none" viewBox="0 0 48.4876 2.28456" width="48.4876">
              <path d={svgPaths.p34713300} fill="#FF6F28" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  return (
    <div id="home" className="bg-[#fff2f3] h-[777px] overflow-clip relative shrink-0 w-[1440px]">
      {/* ── Navbar ── */}
      <div className="-translate-x-1/2 absolute h-[91px] left-1/2 overflow-clip top-0 w-[1322px]">
        {/* Brand */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-[calc(50%-431.5px)] overflow-clip top-[calc(50%+0.5px)] w-[187px]">
          <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#252b42] text-[24px] top-[13px] tracking-[0.1px] whitespace-nowrap">Brandname</p>
        </div>
        {/* Hamburger toggle (visual only) */}
        <div className="absolute h-[13.714px] left-[1298px] overflow-clip top-[39px] w-[24px]">
          <div className="-translate-x-1/2 absolute h-[13.714px] left-1/2 top-0 w-[24px]" />
        </div>
        {/* Collapse nav */}
        <div className="-translate-x-1/2 absolute h-[58px] left-[calc(50%+110.5px)] overflow-clip top-[16px] w-[815px]">
          {/* Left nav links */}
          <nav className="-translate-y-1/2 absolute content-stretch flex gap-[21px] items-center left-0 overflow-clip top-1/2">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); scrollTo("home"); }}
              className="h-[24px] overflow-clip relative shrink-0 w-[43px] cursor-pointer no-underline"
            >
              <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Home</p>
            </a>
            <a
              href="#products"
              onClick={e => { e.preventDefault(); scrollTo("products"); }}
              className="h-[24px] overflow-clip relative shrink-0 w-[59px] cursor-pointer no-underline"
            >
              <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Product</p>
            </a>
            <a
              href="#pricing"
              onClick={e => { e.preventDefault(); scrollTo("pricing"); }}
              className="h-[24px] overflow-clip relative shrink-0 w-[52px] cursor-pointer no-underline"
            >
              <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Pricing</p>
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo("contact"); }}
              className="h-[24px] overflow-clip relative shrink-0 w-[58px] cursor-pointer no-underline"
            >
              <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Contact</p>
            </a>
          </nav>
          {/* Right: Login + Join Us */}
          <div className="-translate-y-1/2 absolute content-stretch flex gap-[45px] items-center right-0 top-1/2">
            <div className="h-[22px] overflow-clip relative shrink-0 w-[41px]">
              <a
                href="#"
                className="absolute h-[22px] left-0 overflow-clip top-0 w-[41px] no-underline cursor-pointer"
              >
                <p className="-translate-x-full [word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+20.5px)] text-[#96bb7c] text-[14px] text-right top-[calc(50%-11px)] tracking-[0.2px] whitespace-nowrap">Login</p>
              </a>
            </div>
            <div className="h-[52px] overflow-clip relative shrink-0 w-[214px]">
              <button
                onClick={() => scrollTo("products")}
                className="absolute bg-[#96bb7c] content-stretch flex gap-[15px] items-center left-0 overflow-clip px-[25px] py-[15px] rounded-[5px] top-0 cursor-pointer border-0"
              >
                <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white tracking-[0.2px] whitespace-nowrap">JOIN US</span>
                <NavArrow />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="-translate-x-1/2 absolute h-[682px] left-1/2 overflow-clip top-[95px] w-[1440px]">
        <div className="absolute content-stretch flex gap-[30px] items-center justify-end left-0 overflow-clip top-0 w-[1439px]">
          {/* Hero text */}
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-center overflow-clip relative shrink-0 w-[573px]">
            <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[16px] tracking-[0.1px] whitespace-nowrap">Welcome</p>
            <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[80px] relative shrink-0 text-[#252b42] text-[58px] tracking-[0.2px] w-[542px]">Best Learning Opportunities</p>
            <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#737373] text-[20px] tracking-[0.2px] w-[338px]">Our goal is to make online education work for everyone</p>
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
              <button
                onClick={() => scrollTo("products")}
                className="bg-[#96bb7c] content-stretch flex flex-col items-center overflow-clip px-[40px] py-[15px] relative rounded-[5px] shrink-0 cursor-pointer border-0"
              >
                <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-center text-white tracking-[0.2px] whitespace-nowrap">Join Us</span>
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="relative rounded-[5px] shrink-0 cursor-pointer border-0 bg-transparent p-0"
              >
                <div className="content-stretch flex flex-col items-center overflow-clip px-[40px] py-[15px] relative rounded-[inherit]">
                  <span className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#96bb7c] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">Learn More</span>
                </div>
                <div aria-hidden className="absolute border border-[#96bb7c] border-solid inset-0 pointer-events-none rounded-[5px]" />
              </button>
            </div>
          </div>
          {/* Hero decorative image */}
          <div className="h-[682px] relative shrink-0 w-[704px]">
            <div className="absolute inset-0 overflow-clip">
              <HeroDecorations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
