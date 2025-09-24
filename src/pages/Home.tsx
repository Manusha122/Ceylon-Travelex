import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrendingPackages } from "@/components/TrendingPackages";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import WhoWeAreSection from "../components/WhoWeAreSection";
import LuxeProvisionsSection from "../components/LuxeProvisionsSection";
import PartnersSection from "../components/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrendingPackages />
        <ExperiencesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </main>
  <WhoWeAreSection />
  <LuxeProvisionsSection />
  <PartnersSection />
  <Footer />
    </div>
  );
}