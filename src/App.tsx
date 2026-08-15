import { Route, Routes } from "react-router";

import SiteLayout from "@/components/SiteLayout";

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CoursesPage from "@/pages/CoursesPage";
import NewsletterPage from "@/pages/NewsletterPage";

import Packages from "@/section/Packages";
import Video from "@/section/Video";
import Testimonials from "@/section/Testimonials";
import Team from "@/section/Team";

export default function App() {
  return (
    <main className="bg-white w-full">
      <div className="w-[1440px] mx-auto">
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<CoursesPage />} />
            <Route path="/contact" element={<NewsletterPage />} />

            <Route path="/packages" element={<Packages />} />
            <Route path="/video" element={<Video />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}
