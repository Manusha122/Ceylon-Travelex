import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Clock, Calendar, Star } from "lucide-react";
import { useState } from "react";

interface DestinationCardProps {
  title: string;
  location: string;
  description: string;
  fullDescription: string;
  images: string[];
  highlights: string[];
  duration: string;
  bestTime: string;
  activities: string[];
  href: string;
  featured?: boolean;
}

export const DestinationCard = ({
  title,
  location,
  description,
  fullDescription,
  images,
  highlights,
  duration,
  bestTime,
  activities,
  href,
  featured = false,
}: DestinationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`group overflow-hidden bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 ${
      featured ? "row-span-2" : ""
    }`}>
      {/* Image Carousel */}
      <div className="relative overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      featured ? "h-72 lg:h-96" : "h-56 lg:h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 border-0 text-luxury-charcoal hover:bg-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 border-0 text-luxury-charcoal hover:bg-white" />
        </Carousel>
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-luxury-charcoal px-3 py-1 rounded-full text-sm font-body font-medium">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-brand-emerald/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-body font-medium">
          <Clock className="w-3 h-3" />
          <span>{duration}</span>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className={`font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300 ${
              featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
            }`}>
              {title}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <MapPin className="w-3 h-3" />
                <span className="font-body">{location}</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <Calendar className="w-3 h-3" />
                <span className="font-body">Best: {bestTime}</span>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center space-x-2">
            <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
            <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
            <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
          </div>

          {/* Description */}
          <p className={`font-body text-muted-foreground leading-relaxed ${
            featured ? "text-base" : "text-sm"
          }`}>
            {isExpanded ? fullDescription : description}
          </p>

          {/* Activities Tags */}
          <div className="flex flex-wrap gap-2">
            {activities.slice(0, isExpanded ? activities.length : 3).map((activity) => (
              <Badge key={activity} variant="secondary" className="text-xs font-body">
                {activity}
              </Badge>
            ))}
            {!isExpanded && activities.length > 3 && (
              <Badge variant="outline" className="text-xs font-body">
                +{activities.length - 3} more
              </Badge>
            )}
          </div>

          {/* Highlights (when expanded) */}
          {isExpanded && (
            <div className="space-y-3 animate-fade-in">
              <h4 className="font-heading font-semibold text-foreground text-base">Key Highlights</h4>
              <ul className="space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start space-x-2 text-sm font-body text-muted-foreground">
                    <Star className="w-3 h-3 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <Button 
              variant="ghost" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto font-body font-medium text-primary hover:text-primary/80"
            >
              {isExpanded ? "Show Less" : "Learn More"}
              <ArrowRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
            </Button>
            
            <Button variant="outline" size="sm" className="font-body">
              Explore Destination
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};