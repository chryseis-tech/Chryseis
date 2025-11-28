
import { AlertCircle, CheckCircle, Lightbulb } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The Challenges You Face. Our AI Solution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Problem */}
            <div className="bg-muted/50 p-8 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <AlertCircle className="h-8 w-8 text-destructive mr-3" />
                <h3 className="text-2xl font-bold text-primary">The Problem</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As a startup founder or small business owner, you're constantly fighting against time and limited resources. You need to move fast to get your product to market and stay ahead of the competition. But complex development cycles, slow decision-making, and the high cost of hiring specialized talent can put the brakes on your momentum and even put your future at risk.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-accent/20">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-primary">The Solution</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
               Our hands-on AI workshops are designed to give you a powerful competitive advantage. We provide you with the practical strategies and tools to get your ideas from concept to customer faster than you ever thought possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Launch Products Faster:</strong>
                    <span className="text-muted-foreground ml-1">Use AI to rapidly validate product ideas, prioritize features that customers actually want, and build your minimum viable product (MVP) in a fraction of the time.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Create Your Online Presence in a Day:</strong>
                    <span className="text-muted-foreground ml-1">Build powerful, professional websites and applications without the need for extensive coding or design expertise, allowing you to get your business online immediately.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Make Smarter Decisions:</strong>
                    <span className="text-muted-foreground ml-1">Leverage AI-powered insights to analyze market trends and customer feedback, helping you make informed choices that accelerate your growth and secure your success.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
