import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Link } from "react-router-dom";
import { getOrganizationSchema, getWebPageSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const Sitemap = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Sitemap - Chryseis Technologies',
      'Navigate all pages on the Chryseis Technologies website.',
      currentUrl,
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Sitemap', url: currentUrl }
    ])
  ];

  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'AI Consulting & Development Services' },
        { name: 'About', path: '/about', description: 'Meet our AI transformation experts' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Workshops', path: '/services/workshops', description: 'AI Development Workshops - No Coding Required' },
        { name: 'Application Development', path: '/services/application-development', description: 'Custom AI Application Development' },
        { name: 'Product Management Training', path: '/services/product-management-training', description: 'Strategic Product Leadership with AI' },
        { name: 'Agile Training', path: '/services/agile-training', description: 'Agile Excellence with AI Integration' },
        { name: 'User Research', path: '/services/user-research', description: 'Data-Driven User Insights' },
        { name: 'Technical Training', path: '/services/technical-training', description: 'Curriculum Development & Delivery' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Our privacy and data protection practices' },
      ]
    }
  ];

  return (
    <>
      <SEO metadata={{
        title: 'Sitemap | Chryseis Technologies',
        description: 'Navigate all pages on the Chryseis Technologies website. Find AI consulting services, training programs, and company information.',
        keywords: 'sitemap, site navigation, Chryseis Technologies pages'
      }} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Navigate all pages on our website
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {sitemapData.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="bg-muted/50 p-6 rounded-lg border border-accent/20 hover:shadow-gold transition-shadow duration-300">
                        <Link to={link.path} className="block">
                          <h3 className="text-xl font-semibold text-primary mb-2 hover:text-accent transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-muted-foreground">{link.description}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
