import SiteHeader from "./components/SiteHeader";
import PackagesSection from "./components/PackagesSection";
import VideoSection from "./components/VideoSection";
import CoursesSection from "./components/CoursesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import NewsletterSection from "./components/NewsletterSection";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1440px]">
        <SiteHeader />
        <PackagesSection />
        <VideoSection />
        <CoursesSection />
        <TestimonialsSection />
        <TeamSection />
        <NewsletterSection />
        <SiteFooter />
      </div>
    </div>
  );
}
