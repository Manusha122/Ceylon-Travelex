import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo1 from "@/assets/hero-video-1.jpg";
import heroVideo2 from "@/assets/hero-video-2.jpg";
import heroVideo3 from "@/assets/hero-video-3.jpg";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroVideos = [
    {
      image: heroVideo1,
      location: "Luxury Resort, Southern Coast",
      alt: "Luxury resort with infinity pool overlooking ocean"
    },
    {
      image: heroVideo2,
      location: "Ancient Temple, Anuradhapura",
      alt: "Ancient temple ruins in jungle mist"
    },
    {
      image: heroVideo3,
      location: "Yala National Park Safari",
      alt: "Elephants in national park at sunset"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroVideos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full h-full"
        >
          <CarouselContent className="-ml-0">
            {heroVideos.map((video, index) => (
              <CarouselItem key={index} className="pl-0 basis-full">
                <div className="relative w-full h-screen">
                  <img
                    src={video.image}
                    alt={video.alt}
                    className="w-full h-full object-cover transition-transform duration-[7000ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Location Tag */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-body font-medium">{heroVideos[currentSlide]?.location || "Sri Lanka"}</span>
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

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-gold' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button
            onClick={() => document.getElementById('trending-packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors cursor-pointer"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
};