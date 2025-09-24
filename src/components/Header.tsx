import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg lg:text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg lg:text-xl text-foreground">Ceylon</span>
              <span className="text-xs lg:text-sm text-muted-foreground -mt-1">Travelex</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+94 773 555 553</span>
              </div>
              {/* <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@ceylontravelex.com</span>
              </div> */}
            </div>
            <Button variant="luxury" size="sm" asChild>
              <Link to="/contact">Enquire</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 font-body font-medium transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+94 773 555 553</span>
              </div>
              <Button variant="luxury" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Enquire Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};