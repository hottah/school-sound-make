import svgPaths from "@/assets/svg-7t2252g7ca";

function Div1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]"
      data-name="div"
    >
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">Carrier</p>
      <p className="relative shrink-0">We are hiring</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function ColMd() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[148px] whitespace-nowrap"
      data-name="col-md-2"
    >
      <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">
        Company Info
      </p>
      <Div1 />
    </div>
  );
}

function Div2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]"
      data-name="div"
    >
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">Carrier</p>
      <p className="relative shrink-0">We are hiring</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function ColMd16() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[152px] whitespace-nowrap"
      data-name="col-md-2"
    >
      <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">
        Legal
      </p>
      <Div2 />
    </div>
  );
}

function Div3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]"
      data-name="div"
    >
      <p className="relative shrink-0">Business Marketing</p>
      <p className="relative shrink-0">User Analytic</p>
      <p className="relative shrink-0">Live Chat</p>
      <p className="relative shrink-0">Unlimited Support</p>
    </div>
  );
}

function ColMd17() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[148px] whitespace-nowrap"
      data-name="col-md-2"
    >
      <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">
        Features
      </p>
      <Div3 />
    </div>
  );
}

function Div4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]"
      data-name="div"
    >
      <p className="relative shrink-0">{`IOS & Android`}</p>
      <p className="relative shrink-0">Watch a Demo</p>
      <p className="relative shrink-0">Customers</p>
      <p className="relative shrink-0">API</p>
    </div>
  );
}

function ColMd18() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[152px] whitespace-nowrap"
      data-name="col-md-2"
    >
      <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">
        Resources
      </p>
      <Div4 />
    </div>
  );
}

function BxBxPhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bx:bx-phone">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="24"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        width="24"
      >
        <g id="bx:bx-phone">
          <path d={svgPaths.p151e89b0} fill="#96BB7C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
      data-name="feature-item"
    >
      <BxBxPhone />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        (480) 555-0103
      </p>
    </div>
  );
}

function BxBxMap() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="bx:bx-map">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="29.9997"
        preserveAspectRatio="none"
        viewBox="0 0 24 29.9997"
        width="24"
      >
        <g clipPath="url(#clip0_0_56)" id="bx:bx-map">
          <g id="Vector">
            <path d={svgPaths.p2c265700} fill="#96BB7C" />
            <path d={svgPaths.p2c265700} fill="#96BB7C" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_56">
            <rect fill="white" height="29.9997" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
      data-name="feature-item"
    >
      <BxBxMap />
      <div className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[24px] mb-0 whitespace-pre">{`4517 Washington Ave. Manchester, `}</p>
        <p className="leading-[24px] whitespace-pre">Kentucky 39495</p>
      </div>
    </div>
  );
}

function CarbonSendAlt() {
  return (
    <div
      className="h-[26px] relative shrink-0 w-[24px]"
      data-name="carbon:send-alt"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="26"
        preserveAspectRatio="none"
        viewBox="0 0 24 26"
        width="24"
      >
        <g clipPath="url(#clip0_0_4)" id="carbon:send-alt">
          <path
            clipRule="evenodd"
            d={svgPaths.p10c5f700}
            fill="#96BB7C"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="26" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
      data-name="feature-item"
    >
      <CarbonSendAlt />
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
        debra.holt@example.com
      </p>
    </div>
  );
}

function Div5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0"
      data-name="div"
    >
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
    </div>
  );
}

function ColMd19() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[321px]"
      data-name="col-md-4"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] whitespace-nowrap">
        Get In Touch
      </p>
      <Div5 />
    </div>
  );
}

function Row10() {
  return (
    <div
      className="content-stretch flex gap-[30px] items-start overflow-clip relative shrink-0"
      data-name="row"
    >
      <ColMd />
      <ColMd16 />
      <ColMd17 />
      <ColMd18 />
      <ColMd19 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip py-[50px] top-0 w-[1050px]"
      data-name="container"
    >
      <Row10 />
    </div>
  );
}

function Div() {
  return (
    <div
      className="absolute bg-white h-[272px] left-0 overflow-clip top-0 w-[1440px]"
      data-name="div"
    >
      <Container6 />
    </div>
  );
}

function ColMd20() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[600px]"
      data-name="col-md-7"
    >
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">{`Made With Love By Figmaland All Right Reserved `}</p>
    </div>
  );
}

function AntDesignFacebookFilled4() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="ant-design:facebook-filled"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="24"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        width="24"
      >
        <g id="ant-design:facebook-filled">
          <path
            clipRule="evenodd"
            d={svgPaths.p12de7400}
            fill="#96BB7C"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Facebook4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="facebook"
    >
      <AntDesignFacebookFilled4 />
    </div>
  );
}

function AntDesignInstagramOutlined4() {
  return (
    <div
      className="absolute left-0 size-[24px] top-0"
      data-name="ant-design:instagram-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="24"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        width="24"
      >
        <g id="ant-design:instagram-outlined">
          <path d={svgPaths.pd70b300} fill="#96BB7C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="instagram"
    >
      <AntDesignInstagramOutlined4 />
    </div>
  );
}

function AntDesignTwitterOutlined4() {
  return (
    <div
      className="absolute h-[19.765px] left-0 top-0 w-[24px]"
      data-name="ant-design:twitter-outlined"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="19.7647"
        preserveAspectRatio="none"
        viewBox="0 0 24 19.7647"
        width="24"
      >
        <g id="ant-design:twitter-outlined">
          <path d={svgPaths.pc378300} fill="#96BB7C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Twitter4() {
  return (
    <div
      className="h-[19.765px] overflow-clip relative shrink-0 w-[24px]"
      data-name="twitter"
    >
      <AntDesignTwitterOutlined4 />
    </div>
  );
}

function SocialMedia() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0"
      data-name="social media"
    >
      <Facebook4 />
      <Instagram4 />
      <Twitter4 />
    </div>
  );
}

function ColMd21() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[236px]"
      data-name="col-md-6"
    >
      <SocialMedia />
    </div>
  );
}

function Row11() {
  return (
    <div
      className="content-stretch flex gap-[213px] items-center overflow-clip relative shrink-0"
      data-name="row"
    >
      <ColMd20 />
      <ColMd21 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip py-[25px] top-0 w-[1050px]"
      data-name="container"
    >
      <Row11 />
    </div>
  );
}

function Div6() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[#fafafa] h-[74px] left-1/2 overflow-clip top-[272px] w-[1440px]"
      data-name="div"
    >
      <Container7 />
    </div>
  );
}

export default function Footer() {
  return (
    <div
      className="bg-[#fafafa] h-[346px] overflow-clip relative shrink-0 w-[1440px]"
      data-name="Footer"
    >
      <Div />
      <Div6 />
    </div>
  );
}

