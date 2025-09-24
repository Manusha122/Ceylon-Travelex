const slides = [
    {
      image: heroVideo3,
      title: 'WELLNESS',
      description: 'Everyone deserves well-prepared relaxation in order to relax your senses and all around you. Wellness connects not only physical diversity but your mental and spiritual well-being. From spa energy, features such as sports, coaching, fitness and yoga, this is where each traveler finds their personal peace & journey to dwell within your inner peace.',
      button: 'VIEW OFFERS',
    },
    {
      image: templeBuddha,
      title: 'Thrilling THAILAND',
      description: 'Known as the land of smiles, their capital, Bangkok is famous for its night markets, street life and shopping districts. Tourists find their cultural moments such as the Wat Arun temple, arts, the craftsmanship and the architecture found incomparable. Visit various landmarks in Thailand and experience an exhilarating adventure as you enjoy their local cuisine and warm hospitality.',
      button: 'VIEW OFFERS',
    },
    {
      image: yogaInfinityPool,
      title: 'ARUGAM BAY SRI LANKA',
      description: 'A tropical haven on Sri Lanka’s eastern coast. Arugam Bay is a laid-back paradise where golden sands meet world-class waves.',
      button: 'MORE',
    },
  ];
import heroVideo3 from '@/assets/hero-video-3.jpg';
import yogaInfinityPool from '@/assets/yoga-infinity-pool.jpg';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import footerBg from "@/assets/footer.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import anuradhapura from "@/assets/anuradhapura.jpg";
import arugamBay from "@/assets/arugam-bay.jpg";
import teaPlantation from "@/assets/tea-plantation.jpg";
import templeBuddha from "@/assets/temple-buddha.jpg";
import safariElephants from "@/assets/safari-elephants.jpg";
import { useState, useEffect } from "react";
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

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat text-white min-h-[60vh] md:min-h-[70vh] flex items-center"
          style={{
            backgroundImage: `url(${footerBg})`
          }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Discover
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Sri Lanka
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              From ancient temples to pristine beaches, explore the diverse beauty 
              and rich heritage of the Pearl of the Indian Ocean.
            </p>
          </div>
        </section>
        {/* Modern Animated Image Slider */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-center tracking-tight text-brand-olive animate-fade-in">
              Our Destinations
              <span className="block text-lg font-normal text-muted-foreground mt-2">Explore the World</span>
            </h2>
            <Carousel opts={{ loop: true, align: 'center' }} className="w-full">
              <CarouselContent>
                {slides.map((slide, idx) => (
                  <CarouselItem key={idx} className={`flex justify-center items-center ${currentSlide === idx ? '' : 'hidden'}`}>
                    <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl group animate-slide-up">
                      <img src={slide.image} alt={slide.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute left-0 bottom-0 p-8 w-3/4 bg-background/80 rounded-tr-2xl backdrop-blur-lg shadow-lg animate-fade-in">
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">{slide.title}</h3>
                        <p className="text-white/90 mb-6 text-base leading-relaxed drop-shadow-md">{slide.description}</p>
                        <Button className="bg-gradient-to-r from-brand-olive to-brand-gold text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                          {slide.button}
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center items-center gap-4 mt-6">
                <CarouselPrevious className="bg-brand-olive text-white hover:bg-brand-gold" />
                <CarouselNext className="bg-brand-olive text-white hover:bg-brand-gold" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Featured Destinations Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    title: "Ancient Anuradhapura",
                    image: anuradhapura,
                    description: "Explore the sacred ancient city with its magnificent stupas and ruins.",
                    duration: "2-3 Days",
                    groupSize: "Any",
                    location: "North Central Province"
                  },
                  {
                    title: "Arugam Bay Paradise",
                    image: arugamBay,
                    description: "World-class surfing destination with pristine beaches and laid-back vibes.",
                    duration: "3-5 Days",
                    groupSize: "2-6",
                    location: "Eastern Province"
                  },
                  {
                    title: "Nuwara Eliya Tea Country",
                    image: teaPlantation,
                    description: "Visit stunning tea plantations in the heart of Sri Lanka's hill country.",
                    duration: "2-4 Days",
                    groupSize: "2-8",
                    location: "Central Province"
                  },
                  {
                    title: "Temple of the Sacred Tooth",
                    image: templeBuddha,
                    description: "Discover the most venerated Buddhist temple in Sri Lanka.",
                    duration: "1-2 Days",
                    groupSize: "Any",
                    location: "Kandy"
                  },
                  {
                    title: "Yala Safari Adventure",
                    image: safariElephants,
                    description: "Encounter wildlife in their natural habitat at Sri Lanka's premier national park.",
                    duration: "2-3 Days",
                    groupSize: "2-6",
                    location: "Southern Province"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden group">
                      <div className="relative h-[300px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-white/80 text-sm line-clamp-2 mb-4">{item.description}</p>
                          <div className="flex flex-wrap gap-3 text-white/90 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{item.groupSize}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Destination Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore by
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Category
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cultural Heritage",
                  description: "Ancient temples, historical sites, and traditional experiences",
                  image: templeBuddha,
                  destinations: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla"]
                },
                {
                  title: "Beach Escapes",
                  description: "Pristine beaches, water sports, and coastal adventures",
                  image: arugamBay,
                  destinations: ["Arugam Bay", "Mirissa", "Unawatuna", "Trincomalee"]
                },
                {
                  title: "Wildlife & Nature",
                  description: "National parks, safaris, and natural wonders",
                  image: safariElephants,
                  destinations: ["Yala", "Udawalawe", "Wilpattu", "Sinharaja"]
                }
              ].map((category, index) => (
                <Card key={index} className="group overflow-hidden">
                  <div className="relative h-[400px]">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-white/90 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.destinations.map((dest, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                            {dest}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-fit text-white hover:text-white group-hover:bg-white/20">
                        Explore More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Destinations Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              All
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
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
      <Footer />
    </div>
  );
}