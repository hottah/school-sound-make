import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";

function PhoneIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
      <path d={svgPaths.p151e89b0} fill="#96BB7C" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="29.9997" preserveAspectRatio="none" viewBox="0 0 24 29.9997" width="24">
      <g clipPath="url(#clip_map)">
        <path d={svgPaths.p2c265700} fill="#96BB7C" />
        <path d={svgPaths.p2c265700} fill="#96BB7C" />
      </g>
      <defs>
        <clipPath id="clip_map">
          <rect fill="white" height="29.9997" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 24 26" width="24">
      <g clipPath="url(#clip_send)">
        <path clipRule="evenodd" d={svgPaths.p10c5f700} fill="#96BB7C" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip_send">
          <rect fill="white" height="26" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
      <path clipRule="evenodd" d={svgPaths.p12de7400} fill="#96BB7C" fillRule="evenodd" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
      <path d={svgPaths.pd70b300} fill="#96BB7C" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="19.7647" preserveAspectRatio="none" viewBox="0 0 24 19.7647" width="24">
      <path d={svgPaths.pc378300} fill="#96BB7C" />
    </svg>
  );
}

function FooterLinkList({ links }: { links: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]">
      {links.map(link => (
        <a key={link} href="#" className="relative shrink-0 no-underline text-[#737373] cursor-pointer hover:text-[#252b42]" style={{ fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" }}>{link}</a>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#fafafa] h-[346px] overflow-clip relative shrink-0 w-[1440px]">
      {/* Main footer columns */}
      <div className="absolute bg-white h-[272px] left-0 overflow-clip top-0 w-[1440px]">
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip py-[50px] top-0 w-[1050px]">
          <div className="content-stretch flex gap-[30px] items-start overflow-clip relative shrink-0">
            {/* Company Info */}
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[148px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">Company Info</p>
              <FooterLinkList links={["About Us", "Carrier", "We are hiring", "Blog"]} />
            </div>
            {/* Legal */}
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[152px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">Legal</p>
              <FooterLinkList links={["About Us", "Carrier", "We are hiring", "Blog"]} />
            </div>
            {/* Features */}
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[148px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">Features</p>
              <FooterLinkList links={["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]} />
            </div>
            {/* Resources */}
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[20px] items-start leading-[24px] overflow-clip relative shrink-0 w-[152px] whitespace-nowrap">
              <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">Resources</p>
              <FooterLinkList links={["IOS & Android", "Watch a Demo", "Customers", "API"]} />
            </div>
            {/* Get In Touch */}
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[321px]">
              <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px] whitespace-nowrap">Get In Touch</p>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <PhoneIcon />
                  </div>
                  <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">(480) 555-0103</p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
                  <div className="h-[30px] relative shrink-0 w-[24px]">
                    <MapIcon />
                  </div>
                  <div className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">
                    <p className="leading-[24px] mb-0 whitespace-pre">{`4517 Washington Ave. Manchester, `}</p>
                    <p className="leading-[24px] whitespace-pre">Kentucky 39495</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
                  <div className="h-[26px] relative shrink-0 w-[24px]">
                    <SendIcon />
                  </div>
                  <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">debra.holt@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bar */}
      <div className="-translate-x-1/2 absolute bg-[#fafafa] h-[74px] left-1/2 overflow-clip top-[272px] w-[1440px]">
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip py-[25px] top-0 w-[1050px]">
          <div className="content-stretch flex gap-[213px] items-center overflow-clip relative shrink-0">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[600px]">
              <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap">{`Made With Love By Figmaland All Right Reserved `}</p>
            </div>
            <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[236px]">
              <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0">
                <a href="#" className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="h-[19.765px] overflow-clip relative shrink-0 w-[24px] cursor-pointer" aria-label="Twitter">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
