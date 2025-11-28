import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const UserResearch = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'User Research & UX Design Services',
      'User-centered research and design methodologies to build products customers love.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'User Research & UX Design',
      'AI-enhanced user research including interviews, usability testing, persona development, and behavioral analytics.',
      'Consulting',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'User Research', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.userResearch} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                USER-CENTERED DESIGN
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              User Research
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Leverage AI-powered user research methodologies to understand your users deeply and build products they love.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Data-Driven User Insights
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our user research services combine traditional research methods with AI-powered analytics to provide 
                deeper insights into user behavior, preferences, and needs. Make informed decisions that lead to 
                better user experiences and business outcomes.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-accent/20 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Research Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI-enhanced user interviews and surveys</li>
                <li>• Behavioral analytics and user journey mapping</li>
                <li>• Usability testing and accessibility audits</li>
                <li>• Persona development and user segmentation</li>
                <li>• A/B testing and conversion optimization</li>
                <li>• Competitive analysis and market research</li>
                <li>• Design thinking workshops and ideation sessions</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Understand Your Users Better
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's explore how user research can transform your product development process and drive user satisfaction.
              </p>
              <BookConsultationModal>
                <Button variant="hero" className="group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </BookConsultationModal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default UserResearch;