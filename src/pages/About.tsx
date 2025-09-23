import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in luxury travel experiences, ensuring every detail exceeds expectations.",
    },
    {
      icon: Users,
      title: "Personalized Service", 
      description: "Our dedicated team crafts bespoke itineraries tailored to each traveler's unique preferences and interests.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "With deep knowledge of Sri Lanka's hidden gems, we provide authentic experiences beyond typical tourist paths.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for Ceylon's beauty and heritage drives us to share its wonders with travelers from around the world.",
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
              About
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Ceylon Travelex
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Setting the standard for luxury travel in Sri Lanka since 2010
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none animate-slide-up">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-8">
                  <div className="h-px bg-brand-gold w-12"></div>
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <div className="h-px bg-brand-gold w-12"></div>
                </div>
              </div>

              <div className="space-y-8 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Ceylon Travelex emerged from a passion to showcase the 
                  unparalleled beauty and rich cultural heritage of Sri Lanka to discerning 
                  travelers from around the globe. What began as a boutique travel consultancy 
                  has evolved into the island's premier luxury travel specialist.
                </p>

                <p>
                  Our team of seasoned travel experts possesses an intimate knowledge of 
                  Sri Lanka's hidden treasures, from ancient temples nestled in misty mountains 
                  to pristine beaches kissed by the Indian Ocean. We believe that true luxury 
                  lies not just in premium accommodations, but in the depth of authentic 
                  experiences and genuine connections with local culture.
                </p>

                <p>
                  Over the years, we have curated exclusive experiences for thousands of 
                  travelers, each journey meticulously crafted to reflect individual preferences 
                  and dreams. Our commitment to excellence has earned us recognition as a leading 
                  travel specialist, trusted by luxury travelers seeking extraordinary adventures 
                  in the Pearl of the Indian Ocean.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every journey we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center shadow-elegant hover:shadow-luxury transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}