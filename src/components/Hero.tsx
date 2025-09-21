import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-waterfall.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Stunning waterfall in Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Location Tag */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-body font-medium">Laxapana Falls, Maskeliya, Sri Lanka</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          Setting the Standard for
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            Luxury Travel
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center space-x-2 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-px bg-brand-gold w-8"></div>
          <p className="font-heading text-lg lg:text-xl text-white/90 font-medium">Since 2010</p>
          <div className="h-px bg-brand-gold w-8"></div>
        </div>

        <p className="font-body text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Discover the pearl of the Indian Ocean with bespoke luxury experiences, 
          curated exclusively for the discerning traveler.
        </p>

        {/* CTA Section */}
        <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <p className="font-heading text-2xl lg:text-3xl text-white font-medium">
            Where do you want to go?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="luxury" size="lg" className="font-body font-semibold" asChild>
              <Link to="/contact">
                Enquire Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button variant="outline-luxury" size="lg" className="font-body font-medium" asChild>
              <Link to="/destinations">
                Explore Destinations
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};