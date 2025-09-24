import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import teaPlantationImage from "@/assets/tea-plantation.jpg";
import luxuryResortImage from "@/assets/luxury-resort.jpg";
import templeBuddhaImage from "@/assets/temple-buddha.jpg";
import safariElephantsImage from "@/assets/safari-elephants.jpg";
import wellnessYogaImage from "@/assets/wellness-yoga.jpg";
import luxurySpaImage from "@/assets/luxury-spa.jpg";
import meditationPavilionImage from "@/assets/meditation-pavilion.jpg";
import ayurvedicWellnessImage from "@/assets/ayurvedic-wellness.jpg";
import yogaInfinityPoolImage from "@/assets/yoga-infinity-pool.jpg";

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

  const wellnessExperiences = [
    {
      title: "Wellness & Yoga Retreats",
      description: "Find inner peace with yoga sessions by serene lakes and rivers, connecting mind, body, and nature in perfect harmony.",
      image: wellnessYogaImage,
      category: "Wellness"
    },
    {
      title: "Luxury Spa Treatments",
      description: "Indulge in traditional Ayurvedic treatments and modern spa therapies in stunning tropical settings.",
      image: luxurySpaImage,
      category: "Spa"
    },
    {
      title: "Meditation Pavilions",
      description: "Experience tranquility in purpose-built meditation spaces overlooking breathtaking ocean vistas.",
      image: meditationPavilionImage,
      category: "Mindfulness"
    },
    {
      title: "Ayurvedic Wellness",
      description: "Discover ancient healing wisdom through authentic Ayurvedic treatments in serene garden sanctuaries.",
      image: ayurvedicWellnessImage,
      category: "Healing"
    },
    {
      title: "Infinity Pool Yoga",
      description: "Practice yoga on floating decks over infinity pools with stunning coastal views at sunrise.",
      image: yogaInfinityPoolImage,
      category: "Luxury Wellness"
    }
  ];

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up delay-[200ms]">
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

        {/* Wellness Experiences Carousel */}
  <div className="mt-20 animate-fade-in delay-[600ms]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#6a7c3a]/10 text-[#6a7c3a] px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-body font-medium">Wellness Journeys</span>
            </div>
            
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-luxury bg-clip-text text-transparent">Rejuvenate Your Soul</span>
            </h3>
            
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover inner peace and physical wellness through our curated collection of transformative experiences.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {wellnessExperiences.map((experience, index) => (
                <CarouselItem key={experience.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 h-full">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-luxury-charcoal px-3 py-1 rounded-full text-sm font-body font-medium">
                        {experience.category}
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="font-heading text-xl font-semibold mb-2">
                          {experience.title}
                        </h4>
                        <p className="font-body text-sm text-white/90 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        {/* Decorative Element */}
                        <div className="flex items-center space-x-2 mt-4">
                          <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
                          <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                          <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in delay-[800ms]">
          <Button variant="luxury" size="lg" className="font-body font-medium">
            View All Experiences
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};