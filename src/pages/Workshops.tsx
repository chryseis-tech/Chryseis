import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Target, Users, Rocket, Wrench, Code, Download } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const Workshops = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'AI Development Workshops - No Coding Required',
      'Learn to build professional websites and applications with AI in our hands-on workshops.',
      currentUrl,
      baseUrl
    ),
    getServiceSchema(
      'AI Development Workshops',
      'Complete product management lifecycle training with AI-powered development. Learn to build professional applications without coding experience.',
      'Training',
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: 'Workshops', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.workshops} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Wrench className="h-16 w-16 text-secondary mx-auto mb-4" />
              <p className="text-secondary font-bold text-lg tracking-wide">
                TAKE BACK CONTROL
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-arkhip">
              Ready to Take Control of Your Digital Future?
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Stop waiting for others to build your vision. Join our workshop and learn to create professional websites and applications with AI—no coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For too long, start-ups and small businesses have been stuck. You have the vision, but you're held hostage by high fees and slow timelines. Worse, you're often paying developers to build features without a clear strategy, risking precious time and capital on a product your customers may not even want. Every small update comes with another invoice, and your growth is stalled waiting for someone else.
              </p>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-accent/20 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-primary">With Chryseis Technologies, you take back control of both your technology and your strategy. Our workshop is a launchpad that teaches you the complete product management lifecycle. You'll learn how to shape your vision, define your target customer with personas, and build a strategic roadmap for a Minimum Viable Product (MVP). Then, we empower you with the AI skills to bring that carefully planned vision to life—no coding experience needed.</strong>
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
                  <p className="text-lg text-primary font-semibold mb-2">
                    Proof of Concept:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To prove it, we built a trial e-commerce site, complete with secure Stripe payments, in just one business day. We'll show you the exact methods to achieve this level of speed, allowing you to test your strategic ideas, gather real customer feedback, and iterate faster than your competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Complete Journey from Idea to Launch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is more than just a course; it's a guided process to bring your vision to life. We'll work through every critical stage:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <div className="bg-white p-8 rounded-lg border border-accent/20 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Phase 1</h3>
                    <p className="text-accent font-semibold">Strategy & Planning</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Crafting a Product Vision</li>
                  <li>• Creating Customer Personas</li>
                  <li>• Defining a Full Feature List & Architecture</li>
                  <li>• Identifying your Minimum Viable Product (MVP)</li>
                  <li>• Building a strategic Roadmap</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-white p-8 rounded-lg border border-accent/20 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Phase 2</h3>
                    <p className="text-accent font-semibold">Building & Testing</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Building your application with powerful AI tools</li>
                  <li>• Creating a comprehensive Test Plan</li>
                  <li>• Designing effective Customer Testing Surveys</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="bg-white p-8 rounded-lg border border-accent/20 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Phase 3</h3>
                    <p className="text-accent font-semibold">Launch & Growth</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Conducting live User Testing for real feedback</li>
                  <li>• Confidently Launching your product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Take Control of Your Digital Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Stop waiting for others to build your vision. Join our workshop and learn to create professional websites and applications with AI—no coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookConsultationModal>
                <Button variant="hero" className="group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Workshop Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </BookConsultationModal>
              <Button variant="outline" className="group" asChild>
                <a href="/Flyer - Unlock Your Potential with AI-Driven Development.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View Flyer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Workshops;