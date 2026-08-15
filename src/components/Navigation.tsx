import { Link } from "react-router";
import svgPaths from "@/assets/svg-7t2252g7ca";

function NavbarBrand() {
  return (
    <Link
      to="/"
      className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap"
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-[calc(50%-431.5px)] overflow-clip top-[calc(50%+0.5px)] w-[187px]"
        data-name="navbar-brand sec-"
      >
        <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#252b42] text-[24px] top-[13px] tracking-[0.1px] whitespace-nowrap">
          Brandname
        </p>
      </div>
    </Link>
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

function ProductItem() {
  return (
    <Link
      to="/product"
      className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap"
    >
      Product
    </Link>
  );
}

function PricingItem() {
  return (
    <Link
      to="/pricing"
      className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap"
    >
      Pricing
    </Link>
  );
}

function ContactItem() {
  return (
    <Link
      to="/contact"
      className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#737373] text-[14px] tracking-[0.2px] whitespace-nowrap"
    >
      Contact
    </Link>
  );
}

function MainMenu() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex gap-[21px] items-center left-0 overflow-clip top-1/2"
      data-name="navbar-nav"
    >
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
      <Link
        to="/contact"
        className="absolute bg-[#96bb7c] content-stretch flex gap-[15px] items-center left-0 overflow-clip px-[25px] py-[15px] rounded-[5px] top-0 no-underline"
        data-name="button.btn.primary-color"
      >
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[14px] text-white tracking-[0.2px] whitespace-nowrap">
          JOIN US
        </p>

        <ArrowRightIcon />
      </Link>
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
      className="bg-[#fff2f3] -translate-x-1/2 absolute h-[91px] left-1/2 overflow-clip top-0 w-[1322px] rounded-bl-[20px] rounded-br-[20px]"
      data-name="navbar-style-2 navbar-light"
    >
      <NavbarBrand />
      <NavbarToggler />
      <NavigationContent />
    </div>
  );
}
