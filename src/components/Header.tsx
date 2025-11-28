
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import BookConsultationModal from "@/components/BookConsultationModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-primary backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="Chryseis Technologies home">
            <img
              src="/lovable-uploads/27b0e288-c7f1-4d47-a9d0-e6a470a04dad.png"
              alt="CTL Logo"
              className="h-12 w-12 object-contain"
              width="48"
              height="48"
              fetchpriority="high"
            />
            <span className="font-arkhip text-xl md:text-2xl font-bold text-accent">
              CHRYSEIS TECHNOLOGIES LTD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="text-accent hover:text-accent/80 transition-colors font-medium px-4 py-2">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="text-accent hover:text-accent/80 transition-colors font-medium px-4 py-2">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-accent hover:text-accent/80 transition-colors font-medium bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/workshops"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Workshops</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Hands-on AI workshops for rapid skill development
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/application-development"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Application Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom AI-powered application development services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/product-management-training"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Product Management Training & Consulting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expert guidance for product strategy and management
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/agile-training"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Agile Training & Consulting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Agile methodology training and implementation support
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/user-research"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">User Research</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            User-centered research and design methodologies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services/technical-training"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Technical Training</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Curriculum Development, implementation and delivery for any size team or organisation.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <BookConsultationModal>
              <Button variant="gold" className="ml-4">
                Book Free Consultation
              </Button>
            </BookConsultationModal>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-accent/20" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-accent hover:text-accent/80 transition-colors font-medium" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="text-accent hover:text-accent/80 transition-colors font-medium" onClick={closeMenu}>About</Link>
              <div className="space-y-2">
                <p className="text-accent font-semibold">Services</p>
                <div className="pl-4 space-y-2">
                  <Link to="/services/workshops" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>Workshops</Link>
                  <Link to="/services/application-development" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>Application Development</Link>
                  <Link to="/services/product-management-training" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>Product Management Training & Consulting</Link>
                  <Link to="/services/agile-training" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>Agile Training & Consulting</Link>
                  <Link to="/services/user-research" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>User Research</Link>
                  <Link to="/services/technical-training" className="block text-accent/80 hover:text-accent transition-colors" onClick={closeMenu}>Technical Training</Link>
                </div>
              </div>
              <BookConsultationModal>
                <Button variant="gold" className="mt-4 w-full">
                  Book Free Consultation
                </Button>
              </BookConsultationModal>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
