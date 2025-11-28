import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { analytics } from "@/utils/analytics";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    analytics.setConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    analytics.setConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <Card className="max-w-4xl mx-auto border-accent/30 shadow-2xl bg-background/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze site traffic, and understand where our visitors are coming from. By clicking "Accept", you consent to our use of cookies.{" "}
                    <Link to="/privacy-policy" className="text-accent hover:underline">
                      Learn more in our Privacy Policy
                    </Link>
                  </p>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Decline cookies"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                variant="default"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                Accept
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
