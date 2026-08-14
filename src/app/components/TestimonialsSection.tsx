import svgPaths from "@/imports/SchoolSound/svg-7t2252g7ca";
import imgTestimonialUserCover1 from "@/imports/SchoolSound/a0cb5ac673461df16e658c9906c9fcab54731708.png";
import imgTestimonialUserCover2 from "@/imports/SchoolSound/b7980d6f6dfb3f6c6ec9b6e9414e4ea754b2d1fd.png";

const starPaths = [
  svgPaths.p28da2e00,
  svgPaths.p21870e80,
  svgPaths.p1a51af00,
  svgPaths.pfb8300,
];
const emptyStarPath = svgPaths.p22850680;

function Stars() {
  return (
    <div className="content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0">
      {starPaths.map((d, i) => (
        <div key={i} className="relative shrink-0 size-[22.014px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22.0136" preserveAspectRatio="none" viewBox="0 0 22.0136 22.0136" width="22.0136">
            <path d={d} fill="#F3CD03" />
          </svg>
        </div>
      ))}
      <div className="relative shrink-0 size-[22.014px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.0136" preserveAspectRatio="none" viewBox="0 0 22.0136 22.0136" width="22.0136">
          <path d={emptyStarPath} fill="#F3CD03" />
        </svg>
      </div>
    </div>
  );
}

function TestimonialCard({ image, width }: { image: string; width: string }) {
  return (
    <div className={`content-stretch flex flex-col items-center relative shrink-0 ${width}`}>
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center pt-[25px] px-[25px] relative size-full">
            <div className="overflow-clip relative rounded-[200px] shrink-0 size-[128px]">
              <div className="absolute h-[128px] left-0 right-0 top-0">
                <img alt="Testimonial user" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image} />
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[15px] items-center p-[30px] relative size-full">
                  <div className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center tracking-[0.2px] w-[320px] whitespace-pre-wrap">
                    <p className="leading-[20px] mb-0">{`Slate helps you see how many more days `}</p>
                    <p className="leading-[20px] mb-0">{`you need to work to reach your financial `}</p>
                    <p className="leading-[20px]">goal for the month and year.</p>
                  </div>
                  <Stars />
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-center leading-[24px] overflow-clip px-[25px] relative shrink-0 text-center whitespace-nowrap">
                    <p className="relative shrink-0 text-[#252b42] text-[16px] tracking-[0.1px]">Regina Miles</p>
                    <p className="relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white h-[865px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[96px] items-center left-1/2 overflow-clip py-[160px] top-0 w-[1050px]">
        {/* Heading */}
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1044px]">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 tracking-[0.2px] w-[691px] whitespace-nowrap">
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px]">Testimonials</p>
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[50px] relative shrink-0 text-[#252b42] text-[40px]">Watch our Courses</p>
            <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px]">
              <p className="leading-[20px] mb-0 whitespace-pre">{`Problems trying to resolve the conflict between `}</p>
              <p className="leading-[20px] whitespace-pre">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
          <TestimonialCard image={imgTestimonialUserCover1} width="w-[508px]" />
          <TestimonialCard image={imgTestimonialUserCover2} width="w-[512px]" />
        </div>
      </div>
    </section>
  );
}
