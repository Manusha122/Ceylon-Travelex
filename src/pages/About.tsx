import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, MapPin, Heart, Eye, Target, Star, Search, MessageCircle, Calendar, Plane } from "lucide-react";
import footerBg from "@/assets/footer.jpg";

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
        <section
          className="relative px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat text-white min-h-[60vh] md:min-h-[70vh] flex items-center"
          style={{
            backgroundImage: `url(${footerBg})`
          }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Ceylon Travelex
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Setting the standard for luxury travel in Sri Lanka since 2010
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Vision & Mission
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                The compass that guides every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-md shadow-elegant hover:shadow-luxury transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">Our Vision</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    To be Sri Lanka’s most trusted luxury travel curator, crafting meaningful
                    journeys that connect discerning travelers with the island’s authentic
                    beauty, people, and culture—responsibly and sustainably.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-md shadow-elegant hover:shadow-luxury transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">Our Mission</h3>
                  <ul className="font-body text-muted-foreground space-y-2 leading-relaxed list-disc pl-5">
                    <li>Design bespoke itineraries that reflect each traveler’s unique style.</li>
                    <li>Partner with exceptional local experts and sustainable experiences.</li>
                    <li>Deliver white-glove service from first contact to journey’s end.</li>
                    <li>Give back through community and conservation initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>
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

        {/* Stats Bar */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 text-center shadow-elegant">
                <div className="mx-auto mb-2 w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground">15+</div>
                <div className="font-body text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 text-center shadow-elegant">
                <div className="mx-auto mb-2 w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground">2000+</div>
                <div className="font-body text-sm text-muted-foreground">Tailored Journeys</div>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 text-center shadow-elegant">
                <div className="mx-auto mb-2 w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground">150+</div>
                <div className="font-body text-sm text-muted-foreground">Partner Hotels</div>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 text-center shadow-elegant">
                <div className="mx-auto mb-2 w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground">4.9/5</div>
                <div className="font-body text-sm text-muted-foreground">Guest Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">How We Work</h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">A refined process for effortless, unforgettable travel</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 shadow-elegant">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Discover</h3>
                <p className="font-body text-sm text-muted-foreground">We listen deeply to understand your travel style and aspirations.</p>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 shadow-elegant">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Design</h3>
                <p className="font-body text-sm text-muted-foreground">Your dedicated specialist crafts a bespoke itinerary with options.</p>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 shadow-elegant">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Arrange</h3>
                <p className="font-body text-sm text-muted-foreground">We confirm handpicked stays, guides, and experiences seamlessly.</p>
              </div>
              <div className="rounded-2xl border bg-card/60 backdrop-blur-md p-6 shadow-elegant">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Journey</h3>
                <p className="font-body text-sm text-muted-foreground">Travel with confidence—our concierge team supports you 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border bg-card/60 backdrop-blur-md p-10 shadow-elegant">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Ready to design your journey?</h3>
              <p className="font-body text-muted-foreground mb-6">Speak with a Ceylon Travelex specialist and receive a personalized proposal.</p>
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-luxury-charcoal font-semibold">
                <Link to="/contact">Get in touch</Link>
              </Button>
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