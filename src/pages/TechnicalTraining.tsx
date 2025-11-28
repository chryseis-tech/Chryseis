import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, GraduationCap } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const TechnicalTraining = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Technical Training & Curriculum Development',
      'Comprehensive technical training programs and curriculum development for teams of any size.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'Technical Training & Curriculum Development',
      'Custom-built technical training programs covering AI integration, software engineering, and modern development practices.',
      'Training',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'Technical Training', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.technicalTraining} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />

      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <GraduationCap className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                COMPREHENSIVE LEARNING SOLUTIONS
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Technical Training
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Custom-built and delivered comprehensive training programs designed to transform your workforce.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Empower Your Team: Curriculum Development & Delivery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The success of your software engineering hinges on the skills of your team. We don't just teach AI;
                we custom-build and deliver comprehensive training programs designed to transform your workforce,
                ensuring they are proficient and confident in applying AI technologies and software engineering best
                practices to achieve your organization's strategic goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We handle the entire learning lifecycle—from initial concept to full-scale delivery—for teams of any
                size, from small dedicated units to large enterprise-wide deployments.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-accent/20 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Learning Solutions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-primary">Custom Curriculum Design:</strong> Developing targeted, role-specific
                  content (e.g., for developers, data scientists, product managers, or executives) that aligns with your
                  specific tools and projects.
                </li>
                <li>
                  <strong className="text-primary">Implementation Strategy:</strong> Planning and integrating the new
                  learning program within your existing organizational structures and learning management systems (LMS).
                </li>
                <li>
                  <strong className="text-primary">Flexible Delivery Methods:</strong> Offering a mix of in-person workshops,
                  live virtual training, self-paced e-learning modules, and blended approaches to maximize accessibility and retention.
                </li>
                <li>
                  <strong className="text-primary">Hands-on, Project-Based Learning:</strong> Ensuring high engagement and
                  practical skill acquisition through real-world scenarios and code-along sessions relevant to your industry.
                </li>
                <li>
                  <strong className="text-primary">Post-Training Support & Evaluation:</strong> Providing continuous support,
                  program evaluation, and updates to ensure long-term skill retention and measurable impact on your business outcomes.
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Upskill Your Organization?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Invest in your team's future and accelerate your AI strategy. Let's schedule a consultation to discuss
                your specific training needs and outline a powerful, customized curriculum development and delivery plan.
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

export default TechnicalTraining;
