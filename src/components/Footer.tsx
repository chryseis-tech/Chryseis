import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-accent/20" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/27b0e288-c7f1-4d47-a9d0-e6a470a04dad.png"
                alt="CTL Logo"
                className="h-8 w-8 object-contain"
                width="32"
                height="32"
                loading="lazy"
              />
              <span className="font-arkhip text-lg font-bold text-accent">
                CHRYSEIS TECHNOLOGIES LTD
              </span>
            </div>
            <p className="text-accent font-semibold text-sm tracking-wide mb-2 font-arkhip">
              EMPOWERING SOFTWARE WITH AI
            </p>
            <p className="text-primary-foreground/80">
              Empowering organisations digital transformation through expert workshops and hands-on mentoring.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold mb-4 text-accent font-arkhip">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services/workshops" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="/services/application-development" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Application Development
                </a>
              </li>
              <li>
                <a href="/services/product-management-training" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Product Management Training
                </a>
              </li>
              <li>
                <a href="/services/agile-training" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Agile Training
                </a>
              </li>
              <li>
                <a href="/services/user-research" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  User Research
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent font-arkhip">Contact</h3>
            <p className="text-primary-foreground/80 mb-2">
              Ready to transform your digital capabilities?
            </p>
            <p className="text-primary-foreground/80">
              Book a free consultation to get started.
              Email: admin@chryseis.co.uk
            </p>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Chryseis Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
