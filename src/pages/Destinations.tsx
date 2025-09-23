import { Header } from "@/components/Header";
import { DestinationCard } from "@/components/DestinationCard";
import anuradhapuraImage from "@/assets/anuradhapura.jpg";
import arugamBayImage from "@/assets/arugam-bay.jpg";
import teaPlantationImage from "@/assets/tea-plantation.jpg";
import templeImage from "@/assets/temple-buddha.jpg";
import safariImage from "@/assets/safari-elephants.jpg";
import luxuryResortImage from "@/assets/luxury-resort.jpg";
import waterfallImage from "@/assets/hero-waterfall.jpg";
import spaNwellnessImage from "@/assets/luxury-spa.jpg";

export default function Destinations() {
  const destinations = [
    {
      title: "Anuradhapura",
      location: "Cultural Triangle",
      description: "Ancient Buddhist temples, sacred dagobas, and archaeological wonders dating back over 2,000 years in this UNESCO World Heritage site.",
      fullDescription: "Explore the ancient city of Anuradhapura, Sri Lanka's first capital and a treasure trove of archaeological wonders. This UNESCO World Heritage site features magnificent dagobas, ancient monasteries, and sacred Bodhi trees that have witnessed over 2,000 years of Buddhist heritage.",
      images: [anuradhapuraImage, templeImage, safariImage],
      highlights: [
        "Sri Maha Bodhi - Sacred Fig Tree (over 2,300 years old)",
        "Ruwanwelisaya Dagoba - Ancient Buddhist stupa", 
        "Abhayagiri Monastery Complex",
        "Twin Ponds (Kuttam Pokuna) - Ancient bathing pools"
      ],
      duration: "2-3 Days",
      bestTime: "December - March",
      activities: ["Archaeological Tours", "Temple Visits", "Cultural Photography", "Meditation"],
      href: "/destinations/anuradhapura",
    },
    {
      title: "Arugam Bay", 
      location: "Eastern Coast",
      description: "A tropical haven where golden sands meet world-class waves. Perfect for surfing enthusiasts and beach lovers seeking pristine beauty.",
      fullDescription: "Discover Arugam Bay, one of the world's top surfing destinations with consistent waves and pristine beaches. This laid-back coastal town offers perfect conditions for both beginners and professional surfers, combined with stunning sunrises and vibrant local culture.",
      images: [arugamBayImage, luxuryResortImage, waterfallImage],
      highlights: [
        "Main Point - World-class right-hand point break",
        "Whiskey Point - Perfect for intermediate surfers",
        "Peanut Farm - Scenic lagoon and wildlife watching",
        "Muhudu Maha Viharaya - Coastal ancient temple"
      ],
      duration: "3-5 Days", 
      bestTime: "April - September",
      activities: ["Surfing", "Beach Relaxation", "Wildlife Safari", "Yoga Retreats"],
      href: "/destinations/arugam-bay",
    },
    {
      title: "Kandy",
      location: "Hill Country", 
      description: "The cultural capital featuring the Temple of the Tooth, royal botanical gardens, and traditional Kandyan architecture.",
      fullDescription: "Experience the cultural heart of Sri Lanka in Kandy, a UNESCO World Heritage city nestled among misty hills. Home to the sacred Temple of the Tooth Relic and surrounded by lush botanical gardens, Kandy offers a perfect blend of spirituality, culture, and natural beauty.",
      images: [teaPlantationImage, templeImage, spaNwellnessImage],
      highlights: [
        "Temple of the Sacred Tooth Relic",
        "Royal Botanical Gardens - Peradeniya",
        "Kandy Lake - Scenic city center lake",
        "Traditional Kandyan Cultural Shows"
      ],
      duration: "2-3 Days",
      bestTime: "December - April",
      activities: ["Temple Visits", "Cultural Shows", "Garden Tours", "Tea Plantation Visits"],
      href: "/destinations/kandy",
    },
    {
      title: "Galle",
      location: "Southern Coast",
      description: "A fortified city showcasing Dutch colonial heritage, boutique hotels, and stunning coastal views along the Indian Ocean.",
      fullDescription: "Step into history at Galle Fort, a perfectly preserved Dutch colonial fortress overlooking the Indian Ocean. This UNESCO World Heritage site combines European architecture with South Asian traditions, creating a unique cultural landscape filled with boutique hotels, art galleries, and charming cafes.",
      images: [luxuryResortImage, arugamBayImage, waterfallImage],
      highlights: [
        "Galle Fort - UNESCO World Heritage Dutch fortress",
        "Lighthouse - Iconic colonial architecture", 
        "Dutch Reformed Church - Historic religious site",
        "Galle International Cricket Stadium"
      ],
      duration: "2-3 Days",
      bestTime: "November - April", 
      activities: ["Historical Tours", "Art Gallery Visits", "Beach Activities", "Boutique Shopping"],
      href: "/destinations/galle",
    },
    {
      title: "Ella",
      location: "Hill Country",
      description: "A mountain retreat offering breathtaking train journeys, hiking trails, and panoramic views of tea-covered hills and dramatic landscapes.",
      fullDescription: "Escape to the cool mountains of Ella, where rolling tea plantations meet dramatic cliff faces and cascading waterfalls. This charming hill station offers some of Sri Lanka's most spectacular scenery and hiking opportunities.",
      images: [teaPlantationImage, waterfallImage, safariImage],
      highlights: [
        "Nine Arch Bridge - Iconic railway viaduct",
        "Little Adam's Peak - Scenic hiking trail", 
        "Ella Rock - Challenging hike with panoramic views",
        "Ravana Falls - Spectacular waterfall"
      ],
      duration: "2-4 Days",
      bestTime: "December - March",
      activities: ["Hiking", "Train Journeys", "Tea Factory Tours", "Photography"],
      href: "/destinations/ella",
    },
    {
      title: "Yala National Park",
      location: "Southern Province", 
      description: "Sri Lanka's premier wildlife destination, home to leopards, elephants, and diverse ecosystems ranging from forests to coastal lagoons.",
      fullDescription: "Embark on an unforgettable safari adventure in Yala National Park, home to the world's highest density of leopards. This diverse ecosystem also supports elephants, sloth bears, crocodiles, and over 200 bird species across varied landscapes.",
      images: [safariImage, luxuryResortImage, waterfallImage],
      highlights: [
        "Leopard Spotting - Highest density globally",
        "Elephant Herds - Large family groups",
        "Patanangala Beach - Coastal wildlife viewing",
        "Sithulpawwa Temple - Ancient rock monastery"
      ],
      duration: "2-3 Days",
      bestTime: "February - July",
      activities: ["Wildlife Safaris", "Bird Watching", "Photography", "Beach Visits"],
      href: "/destinations/yala",
    }
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
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-up">
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={destination.title}
                  {...destination}
                  featured={index === 0 || index === 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}