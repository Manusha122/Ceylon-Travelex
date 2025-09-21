import { Header } from "@/components/Header";
import { DestinationCard } from "@/components/DestinationCard";
import anuradhapuraImage from "@/assets/anuradhapura.jpg";
import arugamBayImage from "@/assets/arugam-bay.jpg";

export default function Destinations() {
  const destinations = [
    {
      title: "Anuradhapura",
      location: "Cultural Triangle",
      description: "Ancient Buddhist temples, sacred dagobas, and archaeological wonders dating back over 2,000 years in this UNESCO World Heritage site.",
      image: anuradhapuraImage,
      href: "/destinations/anuradhapura",
    },
    {
      title: "Arugam Bay", 
      location: "Eastern Coast",
      description: "A tropical haven where golden sands meet world-class waves. Perfect for surfing enthusiasts and beach lovers seeking pristine beauty.",
      image: arugamBayImage,
      href: "/destinations/arugam-bay",
    },
    {
      title: "Kandy",
      location: "Hill Country", 
      description: "The cultural capital featuring the Temple of the Tooth, royal botanical gardens, and traditional Kandyan architecture.",
      image: anuradhapuraImage, // Placeholder - would generate specific image
      href: "/destinations/kandy",
    },
    {
      title: "Galle",
      location: "Southern Coast",
      description: "A fortified city showcasing Dutch colonial heritage, boutique hotels, and stunning coastal views along the Indian Ocean.",
      image: arugamBayImage, // Placeholder - would generate specific image  
      href: "/destinations/galle",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Discover
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Sri Lanka
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
              From ancient temples to pristine beaches, explore the diverse beauty 
              and rich heritage of the Pearl of the Indian Ocean.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.title}
                  {...destination}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}