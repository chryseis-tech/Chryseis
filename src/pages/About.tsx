import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getPersonSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const About = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const teamMembers = [
    {
      name: "Frances Morris",
      title: "Founder and Chief Agility Officer",
      bio: [
        `As Founder and Chief Agility Officer, Frances is passionate about empowering startups and small businesses to build better products, faster. She addresses the core challenges many founders face: the high cost of development and a lack of in-house product management expertise. By strategically integrating AI into agile frameworks, Frances provides a clear path for companies to innovate efficiently and affordably.`,
        `With a rich background evolving from Business Analyst to a dedicated Agile Coach, she combines deep industry experience with a friendly, hands-on training style. Her expertise is backed by world-class certifications, including Certified Team Coach (CTC) and ICAgile Certified Expert in Agile Coaching (ICE-AC), and she is an ICAgile Authorized Instructor. Frances is the expert guide you need to turn your vision into a successful product.`
      ],
      imageSrc: "/lovable-uploads/me2.jpg"
    },
    {
      name: "Jason King",
      title: "Head of AI and Technical Training",
      bio: [
        `As Head of AI and Technical Training, Jason brings over 25 years of hands-on programming experience across diverse sectors including insurance and government. From developer to team lead to technical architect, his journey reflects a deep understanding of the full software development lifecycle and the real-world challenges teams face at every level.`,
        `With 6 years dedicated to curriculum development, teacher training, and course delivery, Jason excels at making complex technical concepts accessible and actionable. His mentoring approach is rooted in practical guidance aligned with product development roadmaps, combined with strong empathy for beginner developers. Jason's unique blend of technical depth and teaching expertise makes him an invaluable partner in building confident, capable development teams ready to leverage AI effectively.`
      ],
      imageSrc: "/lovable-uploads/biopic.jpg"
    }
  ];

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'About Chryseis Technologies - AI Transformation Experts',
      'Meet our team of AI specialists, product strategists, and digital transformation consultants.',
      currentUrl,
      baseUrl
    ),
    getPersonSchema(
      'Frances Morris',
      'Founder and Chief Agility Officer',
      'Expert in agile coaching, product management, and AI-driven development with ICAgile Certified Expert credentials.',
      baseUrl,
      '/lovable-uploads/me2.jpg'
    ),
    getPersonSchema(
      'Jason King',
      'Head of AI and Technical Training',
      'Technical architect with 25+ years of programming experience specializing in AI integration and curriculum development.',
      baseUrl,
      '/lovable-uploads/biopic.jpg'
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'About', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.about} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <p className="text-secondary font-bold text-lg tracking-wide">
                EMPOWERING SOFTWARE WITH AI
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Chryseis Technologies
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your Partners in AI Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Chryseis Technologies Ltd, our mission is to empower organisations to embrace and excel with Artificial Intelligence. We bridge the gap between complex AI concepts and practical, impactful applications, fostering innovation and efficiency that drives real-world results. We believe in mentoring and hands-on guidance to ensure your team is confident and capable in navigating the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Our Experts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team comprises seasoned AI specialists, product strategists, and digital transformation consultants dedicated to your success. We combine deep technical expertise with a practical, results-oriented approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center border-accent/20 hover:shadow-gold transition-shadow duration-300">
                  <CardHeader>
                    {member.imageSrc ? (
                      <img
                        src={member.imageSrc}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        width="128"
                        height="128"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground">{member.placeholder}</span>
                      </div>
                    )}
                    <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                    <p className="text-accent font-semibold">{member.title}</p>
                  </CardHeader>
                  <CardContent>
                    {member.bio.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to connect with our experts and discuss your organisation's AI needs?
            </h2>
            <BookConsultationModal>
              <Button variant="hero" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookConsultationModal>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default About;