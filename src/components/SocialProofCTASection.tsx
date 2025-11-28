import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import BookConsultationModal from "@/components/BookConsultationModal";

const SocialProofCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 to-accent/5 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Proof */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-arkhip">
              Real Results, Real Fast
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-accent/20">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">Don't just take our word for it.</strong> We recently helped a client create a fully functional learning platform in just <span className="text-accent font-semibold">2 days</span>, a project that would have normally taken them weeks or even months.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our guidance, they were able to launch their business and start generating revenue <span className="text-accent font-semibold">far ahead of schedule</span>.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-arkhip">
              Ready to see how fast you can build?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's schedule a brief call to discuss your project and show you exactly how we can help you accelerate your timeline.
            </p>
            <BookConsultationModal>
              <Button 
                variant="hero" 
                className="group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookConsultationModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofCTASection;