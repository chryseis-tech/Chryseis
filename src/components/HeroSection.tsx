
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center" aria-labelledby="hero-heading">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <p className="text-secondary font-bold text-lg tracking-wide font-arkhip" aria-label="Company tagline">
                EMPOWERING SOFTWARE WITH AI
              </p>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight font-arkhip">
              Transform your organisation
              <span className="text-secondary block mt-2">with AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Accelerate Product Development and Launch Dynamic Websites with Our Expert-Led Workshops.
            </p>

            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Ready to innovate? Discover how AI can empower your organisation to deliver more efficiently and stay ahead in a rapidly evolving digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BookConsultationModal>
                <Button 
                  variant="hero" 
                  className="group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </BookConsultationModal>
              <Link to="/services/workshops">
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Logo/Visual */}
          <div className="flex justify-center lg:justify-end animate-slide-up" role="img" aria-label="Decorative company logo illustration">
            <div className="relative">
              <img
                src="/lovable-uploads/4076979a-5c6a-42fc-bfad-95b3ac8af059.png"
                alt=""
                role="presentation"
                className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl animate-glow"
                width="384"
                height="384"
                fetchpriority="high"
              />
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full animate-pulse" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
