import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TravelInquiryForm } from "@/components/TravelInquiryForm";
import footerBg from "@/assets/footer.jpg";
import luxuryResort from "@/assets/luxury-resort.jpg";
import ayurvedicWellness from "@/assets/ayurvedic-wellness.jpg";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
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
              Contact
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Ceylon Travelex
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Our travel specialists are ready to craft a bespoke Ceylon experience 
              tailored to your preferences and desires.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office Information */}
            <Card className="bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Main Office</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  42 Temple Road, Colombo 03<br />
                  Sri Lanka
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+94 11 234 5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@ceylontravelex.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-[300px]">
                <img 
                  src={luxuryResort} 
                  alt="Luxury Resort View" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-semibold mb-2">Luxury Experiences</h3>
                    <p>Discover handcrafted journeys tailored to your desires</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Quick Connect</h3>
                </div>
                <p className="mb-6">
                  Ready to start planning your luxury Ceylon adventure? Our travel specialists are here to assist you 24/7.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp: +94 77 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>support@ceylontravelex.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Image Banner Section */}
        <section className="relative h-[300px] overflow-hidden my-16">
          <img 
            src={ayurvedicWellness} 
            alt="Wellness Experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h2 className="text-3xl font-semibold mb-4">Begin Your Journey to Paradise</h2>
              <p className="text-lg">
                Let us create an unforgettable Sri Lankan experience that exceeds your expectations
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            <TravelInquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}