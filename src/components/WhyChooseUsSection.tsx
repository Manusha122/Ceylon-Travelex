import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Users, Award, MapPin, HeartHandshake } from "lucide-react";

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Crown,
      title: "Luxury Standards",
      description: "Handpicked accommodations and experiences that meet the highest standards of luxury and comfort."
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Local experts with deep knowledge of Sri Lanka's culture, history, and hidden gems."
    },
    {
      icon: Shield,
      title: "Complete Safety",
      description: "Comprehensive travel insurance and 24/7 support ensuring your peace of mind throughout."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description: "Tailor-made itineraries crafted specifically for your preferences and travel style."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in luxury travel services and customer satisfaction since 2010."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Born and raised in Sri Lanka, we know every secret spot and authentic experience."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-body font-medium">Why Ceylon Travelex</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-muted-foreground">Setting the</span>
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Standard</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With over 15 years of expertise in luxury travel, we've perfected the art of creating 
            unforgettable Sri Lankan experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="group bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-luxury rounded-full mx-auto opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex items-center justify-center space-x-2">
                    <div className="h-px bg-brand-gold w-8 group-hover:w-16 transition-all duration-300"></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="h-px bg-brand-gold w-8 group-hover:w-16 transition-all duration-300"></div>
                  </div>

                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-luxury rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Ready for Your Sri Lankan Adventure?
              </h3>
              <p className="font-body text-lg opacity-90 mb-6">
                Join hundreds of satisfied travelers who have experienced the magic of Sri Lanka with Ceylon Travelex.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="h-px bg-white/30 w-12"></div>
                <div className="font-body text-sm opacity-80">Since 2010</div>
                <div className="h-px bg-white/30 w-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};