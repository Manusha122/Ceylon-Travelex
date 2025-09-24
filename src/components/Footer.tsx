import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/uploads/footer.jpg')`
      }}
    >
      {/* Quote Section */}
      <div className="relative py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top Quote Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-brand-gold/20 backdrop-blur-sm rounded-full px-6 py-3 border border-brand-gold/30">
              <Award className="w-5 h-5 text-brand-gold mr-2" />
              <span className="text-brand-gold font-semibold">$10 SMILE</span>
            </div>
            <p className="text-white/80 text-sm mt-4 max-w-2xl mx-auto">
              Give back while traveling. Through our new GIVE-GoodFoundation,<br />
              travelers plan, and support the critical operational programs. For<br />
              every trip booked, we donate $10 toward children education<br />
              projects to fulfill dreams that you make reality!
            </p>
          </div>

          {/* Get A Quote Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-16 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">GET A QUOTE</h2>
            <p className="text-white/80 text-center mb-8">
              Complete our travel form and we will create an itinerary <br />
              according to your specific wants and needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="colombo">Colombo</SelectItem>
                    <SelectItem value="kandy">Kandy</SelectItem>
                    <SelectItem value="galle">Galle</SelectItem>
                    <SelectItem value="ella">Ella</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 Days</SelectItem>
                    <SelectItem value="6-10">6-10 Days</SelectItem>
                    <SelectItem value="11-15">11-15 Days</SelectItem>
                    <SelectItem value="15+">15+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-luxury-charcoal font-semibold">
                GET A QUOTE
              </Button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Ceylon Travelex Logo */}
            <div className="md:col-span-1 text-center md:text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-brand-gold">Ceylon</span><br />
                  <span className="text-white">Travelex</span>
                </h3>
                <div className="text-xs text-white/60">
                  <p>Sri Lanka Tourism</p>
                  <p>Ceylon Chamber of Commerce</p>
                  <p>Board of Investment of SL</p>
                  <p>Hotel School Graduates</p>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">PACKAGES</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Overland</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Individual</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Special Interest</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Hill Country</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Cultural Triangle</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Beach</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Adventure Tours</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Wildlife</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Ayurveda</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Leisure</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Luxury Wellness</Link></li>
                <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Pilgrimage</Link></li>
              </ul>
            </div>

            {/* Blog & About */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">BLOG</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Our Stories</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Travel Tips</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">ABOUT US</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">Board of Directors</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">Our Team</Link></li>
              </ul>
            </div>

            {/* Contact & FAQ */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">CONTACT US</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Why We Are</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Our Guarantee</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Get In Touch</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">FAQ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Travel</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Booking</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Accommodation</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Payment</Link></li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Star className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Award className="w-8 h-8 text-brand-gold" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-brand-gold">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-brand-gold">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-brand-gold">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 text-white/70 hover:text-brand-gold">
              <Youtube className="w-5 h-5" />
            </Button>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">
              © {currentYear} Travelex™ • All Rights Reserved • Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};