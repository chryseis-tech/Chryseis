
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofCTASection from "@/components/SocialProofCTASection";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const Index = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'AI Consulting & Development Services',
      'Transform your organization with AI-powered solutions. Expert workshops, application development, and consulting services.',
      currentUrl,
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.home} />
      <StructuredData data={schemas} />
      <SkipToContent />
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content">
          <HeroSection />
          <ProblemSolutionSection />
          <HowItWorksSection />
          <SocialProofCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
