import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
  featured?: boolean;
}

export const DestinationCard = ({
  title,
  location,
  description,
  image,
  href,
  featured = false,
}: DestinationCardProps) => {
  return (
    <Card className={`group overflow-hidden bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 ${
      featured ? "lg:col-span-2 lg:row-span-2" : ""
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            featured ? "h-64 lg:h-96" : "h-48 lg:h-56"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-luxury-charcoal px-3 py-1 rounded-full text-sm font-body font-medium">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="luxury" size="sm" className="ml-auto">
            Explore
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className={`font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300 ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}>
              {title}
            </h3>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span className="font-body">{location}</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center space-x-2">
            <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
            <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
            <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
          </div>

          <p className={`font-body text-muted-foreground leading-relaxed ${
            featured ? "text-base" : "text-sm"
          }`}>
            {description}
          </p>

          <Button variant="ghost" className="p-0 h-auto font-body font-medium text-primary hover:text-primary/80">
            Learn More
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};