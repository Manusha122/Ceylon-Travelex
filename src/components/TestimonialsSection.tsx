import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      text: "Ceylon Travelex transformed our honeymoon into an unforgettable luxury experience. Every detail was perfectly orchestrated, from the private beach villa to the exclusive temple tours.",
      rating: 5,
      experience: "Honeymoon Package"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      text: "The tea plantation tour exceeded all expectations. Our guide's knowledge was exceptional, and the luxury accommodation in the hills was breathtaking.",
      rating: 5,
      experience: "Cultural Journey"
    },
    {
      name: "Emma Williams",
      location: "Melbourne, Australia",
      text: "Absolutely magical! The wildlife safari was incredible, and the level of service throughout our stay was world-class. We'll definitely be returning.",
      rating: 5,
      experience: "Wildlife Adventure"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-emerald px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-body font-medium">Client Stories</span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-muted-foreground">What Our</span>
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Guests Say</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover why discerning travelers choose Ceylon Travelex for their luxury Sri Lankan adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="group bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-body text-base text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Decorative Divider */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
                  <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                  <div className="h-px bg-brand-gold w-8 group-hover:w-12 transition-all duration-300"></div>
                </div>

                {/* Client Info */}
                <div className="space-y-1">
                  <h4 className="font-heading text-lg font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="font-body text-xs text-primary font-medium">{testimonial.experience}</p>
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">500+</div>
            <div className="font-body text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">15+</div>
            <div className="font-body text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="font-body text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">100%</div>
            <div className="font-body text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};