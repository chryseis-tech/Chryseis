import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Zap } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const AgileTraining = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Agile Training & Coaching Services',
      'Professional agile methodology training and implementation support with AI-enhanced workflows.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'Agile Training & Coaching',
      'Certified agile training including Scrum Master certification, sprint planning, and team performance optimization.',
      'Training',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'Agile Training', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.agileTraining} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Zap className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                AGILILTY FOR ALL
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Agile Training & Consulting
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your organization with AI-enhanced Agile methodologies that accelerate delivery and improve team performance.
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
                Agile Excellence with AI Integration
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Agile training programs combine proven methodologies with AI-powered tools and insights. 
                Learn to build high-performing teams, streamline processes, and deliver value faster than ever before.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-accent/20 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Training & Consulting Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Scrum Master and Product Owner certification training</li>
                <li>• AI-enhanced sprint planning and retrospectives</li>
                <li>• Team performance analytics and optimization</li>
                <li>• Agile transformation and change management</li>
                <li>• DevOps integration with Agile practices</li>
                <li>• Scaled Agile Framework (SAFe) implementation</li>
                <li>• Continuous improvement and lean methodologies</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Transform Your Team?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss how we can help your organization adopt Agile practices that drive results and foster innovation.
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

export default AgileTraining;