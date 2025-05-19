import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceProductSection from "@/components/ServiceProductSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Konfigurasi untuk mengaktifkan/menonaktifkan section
  const sectionConfig = {
    hero: true,
    problemSolution: true,
    serviceProduct: true,
    benefits: true,
    pricing: true,
    consultationCTA: true,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Render sections based on configuration */}
      {sectionConfig.hero && <HeroSection />}
      {sectionConfig.problemSolution && <ProblemSolutionSection />}
      {sectionConfig.serviceProduct && <ServiceProductSection />}
      {sectionConfig.benefits && <BenefitsSection />}
      {sectionConfig.pricing && <PricingSection />}
      {sectionConfig.consultationCTA && <ConsultationCTASection />}

      <Footer />
    </div>
  );
};

export default Index;