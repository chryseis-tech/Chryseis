import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Copy } from "lucide-react";
import { trackConsultationBooking, trackCTAClick } from "@/utils/analytics";

interface BookConsultationModalProps {
  children: React.ReactNode;
}

const BookConsultationModal = ({ children }: BookConsultationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      trackCTAClick("Book Consultation Modal", "opened");
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("admin@chryseis.co.uk");
      toast({
        title: "Email Copied",
        description: "Email address copied to clipboard",
      });
      trackConsultationBooking("email_copy");
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy email address. Please copy manually.",
        variant: "destructive",
      });
    }
  };

  const handleEmailClick = () => {
    trackConsultationBooking("email_click");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px]"
        aria-describedby="dialog-description"
      >
        <p id="dialog-description" className="sr-only">
          Contact information for booking a consultation
        </p>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            Contact Us
          </DialogTitle>
        </DialogHeader>

        <div className="py-8">
          <div className="text-center space-y-6">
            <Mail className="h-16 w-16 text-accent mx-auto" />

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Please contact us at
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border border-accent/20">
                <a
                  href="mailto:admin@chryseis.co.uk"
                  onClick={handleEmailClick}
                  className="text-xl font-mono text-primary hover:text-accent transition-colors block mb-4"
                >
                  admin@chryseis.co.uk
                </a>
                <Button
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 mx-auto"
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy Email</span>
                </Button>
              </div>

              <p className="text-muted-foreground">
                We aim to respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultationModal;
