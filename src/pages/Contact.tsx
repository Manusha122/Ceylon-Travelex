import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TravelInquiryForm } from "@/components/TravelInquiryForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Let's Plan Your
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Perfect Journey
              </span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Our travel specialists are ready to craft a bespoke Ceylon experience 
              tailored to your preferences and desires.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <TravelInquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}