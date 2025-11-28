import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Code } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const ApplicationDevelopment = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Custom AI Application Development Services',
      'Professional AI-powered application development for startups and enterprises.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'Custom Application Development',
      'AI-powered web and mobile application development, from MVP to scalable enterprise solutions.',
      'Software Development',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'Application Development', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.applicationDevelopment} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Code className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                CUSTOM SOLUTIONS
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Application Development
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Custom AI-powered applications built to accelerate your business goals and streamline your operations, perfect for launching new ventures or scaling established platforms.
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
                Build Smarter, Launch Faster
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We develop custom applications that leverage the latest AI technologies to solve your specific business challenges. Whether you're a startup looking to build your Minimum Viable Product (MVP) with intelligent features or an enterprise seeking to optimize operations, we deliver results that drive growth. From web applications to mobile solutions, we focus on efficiency, scalability, and getting your product to market quickly.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-accent/20 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Development Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI-powered web applications and platforms (Including rapid MVP development)</li>
                <li>• Custom business automation solutions</li>
                <li>• Data analytics and visualization dashboards (Critical for early-stage decision-making)</li>
                <li>• API development and integration services</li>
                <li>• Mobile application development</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Build Your Solution?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss your project requirements—whether it's validating a new concept or scaling existing infrastructure—and create a custom development plan that fits your timeline and budget.
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

export default ApplicationDevelopment;