import { DestinationCard } from "@/components/DestinationCard";
import anuradhapuraImage from "@/assets/anuradhapura.jpg";
import arugamBayImage from "@/assets/arugam-bay.jpg";

export const TrendingPackages = () => {
  const destinations = [
    {
      title: "Anuradhapura",
      location: "Sri Lanka", 
      description: "Step back in time to explore ancient Buddhist temples, sacred dagobas, and archaeological wonders that date back over 2,000 years in this UNESCO World Heritage site.",
      image: anuradhapuraImage,
      href: "/destinations/anuradhapura",
      featured: true,
    },
    {
      title: "Arugam Bay",
      location: "Sri Lanka",
      description: "A tropical haven on Sri Lanka's eastern coast, where golden sands meet world-class waves. Perfect for surfing enthusiasts and beach lovers alike.",
      image: arugamBayImage,
      href: "/destinations/arugam-bay",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-emerald px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-body font-medium">CTX Trending Packages</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-muted-foreground">Of The</span>
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Month</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium travel experiences, 
            chosen for their exceptional beauty and cultural significance.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              featured={destination.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};