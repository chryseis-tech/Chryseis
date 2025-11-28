
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Wrench, Globe, HeartHandshake } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Understand Your Needs",
      description: "We start by assessing your organisation's unique challenges and goals. We provide outline requirements for you to prepare for our workshop",
      icon: Search,
    },
    {
      number: "2",
      title: "Immersive Workshop",
      description: "Participate in our intensive, hands-on sessions, where you'll learn to apply AI to product management and website creation.",
      icon: Wrench,
    },
    {
      number: "3",
      title: "Build a Working Website",
      description: "You'll leave with a tangible output – a fully functional website developed during the workshop.",
      icon: Globe,
    },
    {
      number: "4",
      title: "Optional Ongoing Support",
      description: "Opt for our continuous consultancy to ensure sustained success and further AI integration.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Approach: Expert Guidance, Hands-On Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in empowering your team with practical skills. Our workshops are structured to ensure you gain real-world capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center border-accent/20 hover:shadow-gold transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
