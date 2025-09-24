import Button from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import anuradhapuraImage from "@/assets/anuradhapura.jpg";
import arugamBayImage from "@/assets/arugam-bay.jpg";
import teaPlantationImage from "@/assets/tea-plantation.jpg";

export const TrendingPackages = () => {
  const destinations = [
    {
      title: "Arugam Bay",
      location: "Sri Lanka",
      description: "A tropical haven on Sri Lanka's eastern coast, where golden sands meet world-class waves. Perfect for surfing enthusiasts and beach lovers alike.",
      image: arugamBayImage,
      href: "/destinations/arugam-bay",
    },
    {
      title: "Anuradhapura",
      location: "Sri Lanka", 
      description: "Step back in time to explore ancient Buddhist temples, sacred dagobas, and archaeological wonders that date back over 2,000 years in this UNESCO World Heritage site.",
      image: anuradhapuraImage,
      href: "/destinations/anuradhapura",
    },
    {
      title: "Tea Plantations",
      location: "Sri Lanka",
      description: "Experience the emerald hills of Ceylon's tea country, where misty mountains meet endless green carpets of the world's finest tea gardens.",
      image: teaPlantationImage,
      href: "/destinations/tea-plantations",
    },
  ];

  return (
    <section id="trending-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-2xl lg:text-3xl text-muted-foreground mb-2 tracking-wider">
            CTX TRENDING
          </h2>
          <h3 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-2">
            PACKAGES
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-px bg-brand-gold w-8"></div>
            <p className="font-heading text-lg lg:text-xl text-muted-foreground font-medium">OF THE MONTH</p>
            <div className="h-px bg-brand-gold w-8"></div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Carousel className="w-full">
            <CarouselContent>
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.title}>
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-card shadow-elegant">
                      <img
                        src={destination.image}
                        alt={`${destination.title}, ${destination.location}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                        <div className="max-w-2xl">
                          <h4 className="font-heading text-4xl lg:text-5xl font-bold mb-2">
                            {destination.title.toUpperCase()}
                          </h4>
                          <h5 className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-white/90">
                            {destination.location.toUpperCase()}
                          </h5>
                          <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                            {destination.description}
                          </p>
                          <Button 
                            variant="outline-luxury" 
                            size="lg" 
                            className="font-body font-medium border-white/50 text-white hover:bg-white hover:text-foreground"
                          >
                            MORE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};