import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { pageSEO } from "@/utils/seo";
import { getOrganizationSchema, getWebPageSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const PrivacyPolicy = () => {
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  const schemas = [
    getOrganizationSchema(baseUrl),
    getWebPageSchema(
      'Privacy Policy',
      'Read our privacy policy to understand how Chryseis Technologies protects your personal information.',
      currentUrl,
      baseUrl
    ),
    getBreadcrumbSchema([
      { name: 'Home', url: baseUrl },
      { name: 'Privacy Policy', url: currentUrl }
    ])
  ];

  return (
    <>
      <SEO metadata={pageSEO.privacyPolicy} />
      <StructuredData data={schemas} />
      <div className="min-h-screen bg-background">
        <Header />

      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Chryseis Technologies Ltd
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-muted-foreground">

              <div>
                <p className="leading-relaxed">
                  At Chryseis Technologies Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you interact with our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. What Data We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect the following types of personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and any other information you provide when contacting us or signing up for our services.</li>
                  <li><strong>Website Usage Data:</strong> Information about how you use our website, including IP addresses, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience on our website. For more information, see our Cookies section below.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Collect Your Data</h2>
                <p className="leading-relaxed mb-4">
                  We collect data in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Direct Interactions:</strong> When you fill out forms on our website, subscribe to our newsletter, book a consultation, or contact us via email or phone.</li>
                  <li><strong>Automated Technologies:</strong> As you navigate our website, we may automatically collect technical data about your device, browsing actions, and patterns through cookies and similar technologies.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
                <p className="leading-relaxed mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>To Provide Our Services:</strong> To respond to your inquiries, deliver our training programmes, workshops, and consulting services.</li>
                  <li><strong>To Communicate with You:</strong> To send you updates and information about our services.</li>
                  <li><strong>To Improve Our Website:</strong> To analyse website usage and improve our content, functionality, and user experience.</li>
                  <li><strong>To Comply with Legal Obligations:</strong> To meet legal, regulatory, and compliance requirements.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. How We Store Your Data</h2>
                <p className="leading-relaxed mb-4">
                  We take data security seriously and implement appropriate technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Data Retention:</strong> We will only retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.</li>
                  <li><strong>Data Security:</strong> Your data is stored on secure servers, and we use encryption and other security technologies to protect it.</li>
                </ul>
              </div>


              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Your Data Protection Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under the UK General Data Protection Regulation (UK GDPR), you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
                  <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organisation, or directly to you, under certain conditions.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:admin@chryseis.co.uk" className="text-accent hover:underline">admin@chryseis.co.uk</a>. We will respond to your request within one month.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies and Analytics</h2>
                <p className="leading-relaxed mb-4">
                  Our website uses cookies and analytics technologies to enhance your browsing experience and help us improve our services. Cookies are small text files placed on your device to collect standard internet log information and visitor behaviour information.
                </p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">What Cookies We Use:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly, including storing your cookie preferences.</li>
                    <li><strong>Analytics Cookies:</strong> With your consent, we use analytics tools to understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">Managing Your Cookie Preferences:</h3>
                  <p className="leading-relaxed mb-2">
                    When you first visit our website, you will be presented with a cookie consent banner. You can choose to accept or decline analytics cookies at any time. Your preference is stored in local storage on your device.
                  </p>
                  <p className="leading-relaxed">
                    You can also set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">Analytics Data We Track:</h3>
                  <p className="leading-relaxed mb-2">
                    With your consent, we may track the following information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Page views and navigation patterns</li>
                    <li>Button clicks and form interactions</li>
                    <li>Consultation booking attempts</li>
                    <li>Time spent on pages</li>
                    <li>Device and browser information</li>
                  </ul>
                  <p className="leading-relaxed mt-2">
                    All analytics data is collected in a privacy-compliant manner and is used solely to improve our services and user experience.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border border-accent/20">
                  <p className="leading-relaxed mb-2"><strong>Chryseis Technologies Ltd</strong></p>
                  <p className="leading-relaxed mb-2">Email: <a href="mailto:admin@chryseis.co.uk" className="text-accent hover:underline">admin@chryseis.co.uk</a></p>
                  <p className="leading-relaxed">Website: <a href="https://www.chryseis.co.uk" className="text-accent hover:underline">www.chryseis.co.uk</a></p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Complaints</h2>
                <p className="leading-relaxed mb-4">
                  If you believe that your data protection rights have been violated, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues.
                </p>
                <div className="bg-muted/50 p-6 rounded-lg border border-accent/20">
                  <p className="leading-relaxed mb-2"><strong>Information Commissioner's Office (ICO)</strong></p>
                  <p className="leading-relaxed mb-2">Website: <a href="https://ico.org.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://ico.org.uk</a></p>
                  <p className="leading-relaxed mb-2">Phone: 0303 123 1113</p>
                  <p className="leading-relaxed">Address: Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                </div>
              </div>

              <div className="pt-8 border-t border-accent/20">
                <p className="text-sm text-muted-foreground italic">
                  Last Updated: November 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
