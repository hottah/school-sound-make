import svgPaths from "../../imports/SchoolSound/svg-7t2252g7ca";

function NavbarBrand() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-[calc(50%-431.5px)] overflow-clip top-[calc(50%+0.5px)] w-[187px]"
      data-name="navbar-brand sec-"
    >
      <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#252b42] text-[24px] top-[13px] tracking-[0.1px] whitespace-nowrap">
        Brandname
      </p>
    </div>
  );
}

function NavbarTogglerIcon() {
  return (
    <div
      className="-translate-x-1/2 absolute h-[13.714px] left-1/2 top-0 w-[24px]"
      data-name="navbar-toggler-icon"
    />
  );
}

function NavbarToggler() {
  return (
    <div
      className="absolute h-[13.714px] left-[1298px] overflow-clip top-[39px] w-[24px]"
      data-name="navbar-toggler"
    >
      <NavbarTogglerIcon />
    </div>
  );
}

function HomeItem() {
  return (
    <div
      className="h-[24px] overflow-clip relative shrink-0 w-[43px]"
      data-name="li sec-"
    >
      <div
        className="absolute h-[24px] left-0 overflow-clip top-0 w-[43px]"
        data-name="a"
      >
        <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
          Home
        </p>
      </div>
    </div>
  );
}

function ProductItem() {
  return (
    <div
      className="h-[24px] overflow-clip relative shrink-0 w-[59px]"
      data-name="li sec-"
    >
      <div
        className="absolute h-[24px] left-0 overflow-clip top-0 w-[59px]"
        data-name="a"
      >
        <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
          Product
        </p>
      </div>
    </div>
  );
}

function PricingItem() {
  return (
    <div
      className="h-[24px] overflow-clip relative shrink-0 w-[52px]"
      data-name="li sec-"
    >
      <div
        className="absolute h-[24px] left-0 overflow-clip top-0 w-[52px]"
        data-name="a"
      >
        <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
          Pricing
        </p>
      </div>
    </div>
  );
}

function ContactItem() {
  return (
    <div
      className="h-[24px] overflow-clip relative shrink-0 w-[58px]"
      data-name="li sec-"
    >
      <div
        className="absolute h-[24px] left-0 overflow-clip top-0 w-[58px]"
        data-name="a"
      >
        <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[24px] text-[#737373] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
          Contact
        </p>
      </div>
    </div>
  );
}

function MainMenu() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex gap-[21px] items-center left-0 overflow-clip top-1/2"
      data-name="navbar-nav"
    >
      <HomeItem />
      <ProductItem />
      <PricingItem />
      <ContactItem />
    </div>
  );
}

function LoginItem() {
  return (
    <div
      className="h-[22px] overflow-clip relative shrink-0 w-[41px]"
      data-name="nav-item sec-"
    >
      <div
        className="absolute h-[22px] left-0 overflow-clip top-0 w-[41px]"
        data-name="a"
      >
        <p className="-translate-x-full [word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%+20.5px)] text-[#96bb7c] text-[14px] text-right top-[calc(50%-11px)] tracking-[0.2px] whitespace-nowrap">
          Login
        </p>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <div
      className="h-[10px] relative shrink-0 w-[12px]"
      data-name="icn arrow-right .icn-xs"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="10"
        preserveAspectRatio="none"
        viewBox="0 0 12 10"
        width="12"
      >
        <g clipPath="url(#clip-navigation-arrow)">
          <path
            clipRule="evenodd"
            d={svgPaths.p37851d00}
            fill="white"
            fillRule="evenodd"
          />
        </g>

        <defs>
          <clipPath id="clip-navigation-arrow">
            <rect fill="white" height="10" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function JoinUsItem() {
  return (
    <div
      className="h-[52px] overflow-clip relative shrink-0 w-[214px]"
      data-name="nav-item sec-"
    >
      <div
        className="absolute bg-[#96bb7c] content-stretch flex gap-[15px] items-center left-0 overflow-clip px-[25px] py-[15px] rounded-[5px] top-0"
        data-name="button.btn.primary-color"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white tracking-[0.2px] whitespace-nowrap">
          JOIN US
        </p>

        <ArrowRightIcon />
      </div>
    </div>
  );
}

function AccountMenu() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex gap-[45px] items-center right-0 top-1/2"
      data-name="navbar-nav"
    >
      <LoginItem />
      <JoinUsItem />
    </div>
  );
}

function NavigationContent() {
  return (
    <div
      className="-translate-x-1/2 absolute h-[58px] left-[calc(50%+110.5px)] overflow-clip top-[16px] w-[815px]"
      data-name="collapse navbar-collapse"
    >
      <MainMenu />
      <AccountMenu />
    </div>
  );
}

export default function Navigation() {
  return (
    <div
      className="-translate-x-1/2 absolute h-[91px] left-1/2 overflow-clip top-0 w-[1322px]"
      data-name="navbar-style-2 navbar-light"
    >
      <NavbarBrand />
      <NavbarToggler />
      <NavigationContent />
    </div>
  );
}
