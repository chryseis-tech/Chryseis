import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Target } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const ProductManagementTraining = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Product Management Training & Consulting',
      'Expert product management training and consulting services combining traditional PM practices with AI.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'Product Management Training',
      'Strategic product management training including AI-powered roadmapping, user research, and product lifecycle management.',
      'Training',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'Product Management Training', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.productManagement} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Target className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                STRATEGIC EXCELLENCE
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Product Management Training & Consulting
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Master AI-enhanced product management strategies that drive innovation and accelerate time-to-market.
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
                Strategic Product Leadership with AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our product management training combines traditional PM best practices with cutting-edge AI tools 
                and methodologies. Learn to make data-driven decisions, accelerate product development, and deliver 
                exceptional user experiences.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-accent/20 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Training & Consulting Areas</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI-powered product strategy and roadmapping</li>
                <li>• Data-driven user research and validation</li>
                <li>• Rapid prototyping and MVP development</li>
                <li>• Product analytics and performance optimization</li>
                <li>• Cross-functional team leadership and collaboration</li>
                <li>• Product lifecycle management and scaling</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Elevate Your Product Management Skills
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a new PM or looking to enhance your existing skills with AI, we'll create a customized training program for you or work alongside your Product speciaclists to coach them on their journey to excellence.
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

export default ProductManagementTraining;