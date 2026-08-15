import svgPaths from "@/assets/svg-7t2252g7ca";
import imgUserCover1 from "@/assets/98dd6fddf1cbafa97cd4ea6d114669d49b45cd1d.png";
import imgUserCover2 from "@/assets/221b7e3a6874f6ad6cc31d849fce5c3489d88d9e.png";
import imgUserCover3 from "@/assets/3a771bafa5a1b06d59940a9c6c60ee827033e6d8.png";
import imgUserCover4 from "@/assets/00d9ea69788677fb8424863333e49c497e1680c6.png";

function FacebookIcon() {
  return (
    <svg
      className="absolute block inset-0 size-full"
      fill="none"
      height="24"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p12de7400}
        fill="#96BB7C"
        fillRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="absolute block inset-0 size-full"
      fill="none"
      height="24"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d={svgPaths.pd70b300} fill="#96BB7C" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="absolute block inset-0 size-full"
      fill="none"
      height="19.7647"
      preserveAspectRatio="none"
      viewBox="0 0 24 19.7647"
      width="24"
    >
      <path d={svgPaths.pc378300} fill="#96BB7C" />
    </svg>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0">
      <a
        href="#"
        className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </a>
      <a
        href="#"
        className="overflow-clip relative shrink-0 size-[24px] cursor-pointer"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="#"
        className="h-[19.765px] overflow-clip relative shrink-0 w-[24px] cursor-pointer"
        aria-label="Twitter"
      >
        <TwitterIcon />
      </a>
    </div>
  );
}

function UserCard({ image, width }: { image: string; width: string }) {
  return (
    <div
      className={`content-stretch flex flex-col items-center relative shrink-0 ${width}`}
    >
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] shrink-0 w-full">
        <div className="h-[231px] overflow-clip relative shrink-0 w-full">
          <div className="absolute h-[231px] left-0 right-0 top-0">
            <img
              alt="Team member"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={image}
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip p-[30px] relative shrink-0 w-[232px]">
          <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] text-center tracking-[0.1px] whitespace-nowrap">
            Julian Jameson
          </p>
          <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-center tracking-[0.2px] whitespace-nowrap">
            Profession
          </p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <section id="team" className="bg-white relative w-max p-[50px] box-border">
      <div className="content-stretch flex flex-col gap-[112px] items-center relative w-[1050px] min-w-[1050px]">
        {/* Heading */}
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1044px]">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[691px] whitespace-nowrap">
            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#96bb7c] text-[14px] tracking-[0.2px]">
              Team
            </p>

            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#252b42] text-[24px] tracking-[0.1px]">
              Get Quality Education
            </p>

            <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[14px] tracking-[0.2px]">
              <p className="leading-[20px] mb-0 whitespace-pre">
                {`Problems trying to resolve the conflict between `}
              </p>

              <p className="leading-[20px] whitespace-pre">
                {`the two major realms of Classical physics: Newtonian mechanics `}
              </p>
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
          <UserCard image={imgUserCover1} width="w-[238px]" />
          <UserCard image={imgUserCover2} width="w-[241px]" />
          <UserCard image={imgUserCover3} width="w-[240px]" />
          <UserCard image={imgUserCover4} width="w-[240px]" />
        </div>
      </div>
    </section>
  );
}
