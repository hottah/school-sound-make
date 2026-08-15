import { Outlet, useLocation } from "react-router";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SiteLayout() {
  const { pathname } = useLocation();

  const pageClass =
    pathname === "/"
      ? "page-home"
      : `page-${pathname.slice(1).replace(/\//g, "-")}`;

  return (
    <div
      className={`bg-white content-stretch flex flex-col items-center relative size-full ${pageClass}`}
    >
      <div className="headerbar h-[95px] relative shrink-0 w-[1440px]">
        <Navigation />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}
