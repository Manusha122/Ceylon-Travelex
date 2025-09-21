import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import teaPlantationImage from "@/assets/tea-plantation.jpg";
import luxuryResortImage from "@/assets/luxury-resort.jpg";
import templeBuddhaImage from "@/assets/temple-buddha.jpg";
import safariElephantsImage from "@/assets/safari-elephants.jpg";

export const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Tea Plantation Tours",
      description: "Journey through emerald hillsides where Ceylon's finest teas are cultivated, with expert-guided tastings.",
      image: teaPlantationImage,
      duration: "Half Day",
      groupSize: "6-12 People",
      rating: 4.9,
      category: "Cultural"
    },
    {
      title: "Luxury Beach Resorts",
      description: "Unwind in world-class beachfront properties with pristine beaches and five-star amenities.",
      image: luxuryResortImage,
      duration: "Multi-Day",
      groupSize: "Private",
      rating: 5.0,
      category: "Luxury"
    },
    {
      title: "Sacred Temple Journeys",
      description: "Explore ancient Buddhist temples and connect with Sri Lanka's profound spiritual heritage.",
      image: templeBuddhaImage,
      duration: "Full Day",
      groupSize: "8-15 People",
      rating: 4.8,
      category: "Spiritual"
    },
    {
      title: "Wildlife Safari Adventures",
      description: "Encounter majestic elephants and exotic wildlife in their natural habitat with expert naturalists.",
      image: safariElephantsImage,
      duration: "Full Day",
      groupSize: "4-8 People", 
      rating: 4.9,
      category: "Adventure"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-body font-medium">Curated Experiences</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-muted-foreground">Luxury</span>
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Experiences</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in carefully crafted journeys that showcase the very best of Sri Lanka's 
            natural beauty, culture, and luxury hospitality.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {experiences.map((experience, index) => (
            <Card key={experience.title} className="group overflow-hidden bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-luxury-charcoal px-3 py-1 rounded-full text-sm font-body font-medium">
                  {experience.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  <span className="font-body font-medium">{experience.rating}</span>
                </div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="luxury" size="sm" className="ml-auto">
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Experience Details */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-body">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span className="font-body">{experience.groupSize}</span>
                    </div>
                  </div>

                  {/* Decorative Divider */}
                  <div className="flex items-center space-x-2">
                    <div className="h-px bg-brand-gold w-6 group-hover:w-10 transition-all duration-300"></div>
                    <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                    <div className="h-px bg-brand-gold w-6 group-hover:w-10 transition-all duration-300"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline-luxury" size="lg" className="font-body font-medium">
            View All Experiences
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};