import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-luxury py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Stay Connected with Ceylon Travelex
          </h3>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive travel insights, luxury package updates, 
            and special offers from the pearl of the Indian Ocean.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/50"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">
                  <span className="bg-gradient-luxury bg-clip-text text-transparent">Ceylon Travelex</span>
                </h3>
                <p className="font-body text-sm text-white/70">
                  Setting the Standard for Luxury Travel
                </p>
              </div>
              
              <p className="font-body text-white/80 leading-relaxed mb-6">
                Since 2010, we've been crafting extraordinary luxury travel experiences 
                in Sri Lanka, combining authentic local insights with world-class service.
              </p>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", path: "/" },
                  { label: "Destinations", path: "/destinations" },
                  { label: "About Us", path: "/about" },
                  { label: "Contact", path: "/contact" },
                  { label: "Travel Packages", path: "/destinations" },
                  { label: "Luxury Experiences", path: "/destinations" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path}
                      className="font-body text-white/70 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Luxury Accommodations",
                  "Cultural Tours",
                  "Wildlife Safaris", 
                  "Beach Resorts",
                  "Adventure Activities",
                  "Wellness Retreats"
                ].map((service) => (
                  <li key={service}>
                    <span className="font-body text-white/70 flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-white/80 text-sm leading-relaxed">
                      123 Galle Road, Colombo 03<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <p className="font-body text-white/80 text-sm">+94 11 234 5678</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <p className="font-body text-white/80 text-sm">info@ceylontravelex.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-white/80 text-sm leading-relaxed">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-body text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Ceylon Travelex (Pvt) Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link to="#" className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="font-body text-white/60 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};