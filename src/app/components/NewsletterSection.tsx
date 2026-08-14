export default function NewsletterSection() {
  return (
    <section id="newsletter" className="bg-[#fff2f3] h-[594px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[80px] items-center left-1/2 overflow-clip py-[160px] top-0 w-[1050px]">
        {/* Heading */}
        <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[692px]">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center overflow-clip relative shrink-0 text-center w-[691px] whitespace-nowrap">
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px]">Newsletter</p>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#252b42] text-[24px] tracking-[0.1px]">Watch our Courses</p>
            <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]">
              <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
              <p className="leading-[20px] whitespace-pre">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        {/* Subscribe form */}
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-[688px]">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[688px]">
            <div className="h-[58px] relative shrink-0 w-[688px]">
              <div className="absolute h-[58px] left-0 overflow-clip right-0 top-0">
                {/* Email input field */}
                <div className="absolute bg-[#f9f9f9] border border-[#e6e6e6] border-solid inset-0 overflow-clip rounded-[5px]">
                  <p className="[word-break:break-word] absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-[19px] text-[#737373] text-[14px] top-[calc(50%-14px)] tracking-[0.2px] whitespace-nowrap">Your Email</p>
                </div>
                {/* Subscribe button */}
                <div className="absolute bottom-0 overflow-clip right-0 top-0 w-[117px]">
                  <button className="absolute bg-[#96bb7c] border border-[#e6e6e6] border-solid inset-0 overflow-clip rounded-br-[5px] rounded-tr-[5px] cursor-pointer w-full">
                    <span className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-1/2 text-[14px] text-center text-white top-[calc(50%-14px)] tracking-[0.2px] whitespace-nowrap">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
