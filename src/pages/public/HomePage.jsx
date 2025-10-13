import Header from "../../components/common/Header.jsx";
import {
  HeroSection,
  FeatureHighlightsSection,
  FeaturedCoursesSection,
  MetricsSection,
  CallToActionSection,
  ContactSection,
  heroContent,
  featureItems,
  metricItems,
  callToActionContent,
  contactItems,
  courseSectionContent,
} from "../../components/pages/home";
import { COURSES } from "../../data/courses.js";
import BannerImage from "../../assets/LandingBannerImg.svg";

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FFF8E7]">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <HeroSection {...heroContent} bannerImage={BannerImage} />

        <FeatureHighlightsSection items={featureItems} />

        <FeaturedCoursesSection {...courseSectionContent} courses={COURSES} />

        <MetricsSection id="empresas" items={metricItems} />

        <CallToActionSection {...callToActionContent} />
      </main>

      <ContactSection id="contactos" items={contactItems} />
    </div>
  );
}
