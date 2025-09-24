import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Phone, Mail, MapPin, Download } from "lucide-react";
import jsPDF from "jspdf";

export const TravelInquiryForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country_of_residence: "",
    destination_interest: "",
    preferred_accommodation: "",
    travel_preferences: "",
    start_month: "",
    start_year: "",
    trip_duration: "",
    adults_count: "2",
    kids_count: "0",
    total_budget: "",
    air_tickets: false,
    visa_assistance: false,
    travel_insurance: false,
    enquiry_details: "",
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text("Ceylon Travelex - Travel Inquiry", pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, 30, { align: 'center' });
    
    // Personal Information
    let yPos = 50;
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Personal Information", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.text(`Name: ${formData.name}`, 20, yPos);
    yPos += 8;
    doc.text(`Email: ${formData.email}`, 20, yPos);
    yPos += 8;
    doc.text(`Phone: ${formData.phone}`, 20, yPos);
    yPos += 8;
    doc.text(`Country: ${formData.country_of_residence}`, 20, yPos);
    
    // Travel Details
    yPos += 20;
    doc.setFontSize(14);
    doc.text("Travel Details", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.text(`Destination: ${formData.destination_interest}`, 20, yPos);
    yPos += 8;
    doc.text(`Accommodation: ${formData.preferred_accommodation}`, 20, yPos);
    yPos += 8;
    doc.text(`Travel Preferences: ${formData.travel_preferences}`, 20, yPos);
    yPos += 8;
    doc.text(`Start Date: ${formData.start_month} ${formData.start_year}`, 20, yPos);
    yPos += 8;
    doc.text(`Duration: ${formData.trip_duration}`, 20, yPos);
    yPos += 8;
    doc.text(`Travelers: ${formData.adults_count} Adults, ${formData.kids_count} Kids`, 20, yPos);
    yPos += 8;
    doc.text(`Budget: ${formData.total_budget}`, 20, yPos);
    
    // Additional Services
    yPos += 20;
    doc.setFontSize(14);
    doc.text("Additional Services", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(11);
    doc.text(`Air Tickets: ${formData.air_tickets ? 'Yes' : 'No'}`, 20, yPos);
    yPos += 8;
    doc.text(`Visa Assistance: ${formData.visa_assistance ? 'Yes' : 'No'}`, 20, yPos);
    yPos += 8;
    doc.text(`Travel Insurance: ${formData.travel_insurance ? 'Yes' : 'No'}`, 20, yPos);
    
    // Enquiry Details
    if (formData.enquiry_details.trim()) {
      yPos += 20;
      doc.setFontSize(14);
      doc.text("Enquiry Details", 20, yPos);
      
      yPos += 10;
      doc.setFontSize(11);
      const splitText = doc.splitTextToSize(formData.enquiry_details, pageWidth - 40);
      doc.text(splitText, 20, yPos);
    }
    
    doc.save(`Ceylon_Travelex_Inquiry_${formData.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("travel_inquiries")
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country_of_residence: formData.country_of_residence,
          destination_interest: formData.destination_interest,
          preferred_accommodation: formData.preferred_accommodation,
          travel_preferences: formData.travel_preferences,
          start_month: formData.start_month,
          start_year: formData.start_year,
          trip_duration: formData.trip_duration,
          adults_count: parseInt(formData.adults_count),
          kids_count: parseInt(formData.kids_count),
          total_budget: formData.total_budget,
          air_tickets: formData.air_tickets,
          visa_assistance: formData.visa_assistance,
          travel_insurance: formData.travel_insurance,
          enquiry_details: formData.enquiry_details,
          message: formData.enquiry_details, // Keep compatibility
        }]);

      if (error) throw error;

      // Generate and download PDF
      generatePDF();

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Your PDF has been downloaded. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country_of_residence: "",
        destination_interest: "",
        preferred_accommodation: "",
        travel_preferences: "",
        start_month: "",
        start_year: "",
        trip_duration: "",
        adults_count: "2",
        kids_count: "0",
        total_budget: "",
        air_tickets: false,
        visa_assistance: false,
        travel_insurance: false,
        enquiry_details: "",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="shadow-elegant max-w-6xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-3xl text-foreground">Plan Your Journey</CardTitle>
        <p className="font-body text-muted-foreground">
          Tell us about your dream trip and we'll create a bespoke experience just for you.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-body font-medium text-muted-foreground">First Name *</Label>
              <Input
                id="firstName"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Richard Trevino"
                required
                className="font-body bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body font-medium text-muted-foreground">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="richard.trevino@gmail.com"
                required
                className="font-body bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body font-medium text-muted-foreground">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+94 773 533 533"
                required
                className="font-body bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="font-body font-medium text-muted-foreground">Country of Residence *</Label>
              <Select onValueChange={(value) => handleChange("country_of_residence", value)} required>
                <SelectTrigger className="font-body bg-muted/50">
                  <SelectValue placeholder="United States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="united-states">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destinations" className="font-body font-medium text-muted-foreground">Desired Destinations *</Label>
              <Select onValueChange={(value) => handleChange("destination_interest", value)} required>
                <SelectTrigger className="font-body bg-muted/50">
                  <SelectValue placeholder="Sri Lanka" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="cultural-triangle">Cultural Triangle</SelectItem>
                  <SelectItem value="hill-country">Hill Country</SelectItem>
                  <SelectItem value="southern-coast">Southern Coast</SelectItem>
                  <SelectItem value="eastern-coast">Eastern Coast</SelectItem>
                  <SelectItem value="complete-island">Complete Island Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accommodation" className="font-body font-medium text-muted-foreground">Preferred Accommodation *</Label>
              <Select onValueChange={(value) => handleChange("preferred_accommodation", value)} required>
                <SelectTrigger className="font-body bg-muted/50">
                  <SelectValue placeholder="4-5 Star Hotels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxury-resorts">Luxury Resorts</SelectItem>
                  <SelectItem value="4-5-star-hotels">4-5 Star Hotels</SelectItem>
                  <SelectItem value="boutique-hotels">Boutique Hotels</SelectItem>
                  <SelectItem value="eco-lodges">Eco Lodges</SelectItem>
                  <SelectItem value="heritage-hotels">Heritage Hotels</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enquiryDetails" className="font-body font-medium text-muted-foreground">Enquiry Details</Label>
              <Textarea
                id="enquiryDetails"
                rows={6}
                value={formData.enquiry_details}
                onChange={(e) => handleChange("enquiry_details", e.target.value)}
                placeholder="Any other information we need to know about your travel preferences, special requirements, or specific experiences you're looking for..."
                className="font-body bg-muted/50"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="travelPreferences" className="font-body font-medium text-muted-foreground">Travel Preferences</Label>
              <Select onValueChange={(value) => handleChange("travel_preferences", value)}>
                <SelectTrigger className="font-body bg-muted/50">
                  <SelectValue placeholder="What are you looking for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cultural-heritage">Cultural & Heritage</SelectItem>
                  <SelectItem value="wildlife-safari">Wildlife & Safari</SelectItem>
                  <SelectItem value="beach-relaxation">Beach & Relaxation</SelectItem>
                  <SelectItem value="adventure-trekking">Adventure & Trekking</SelectItem>
                  <SelectItem value="wellness-spa">Wellness & Spa</SelectItem>
                  <SelectItem value="culinary-experience">Culinary Experience</SelectItem>
                  <SelectItem value="romantic-honeymoon">Romantic & Honeymoon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-body font-medium text-muted-foreground">Start Date</Label>
                <Select onValueChange={(value) => handleChange("start_month", value)}>
                  <SelectTrigger className="font-body bg-muted/50">
                    <SelectValue placeholder="September" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="june">June</SelectItem>
                    <SelectItem value="july">July</SelectItem>
                    <SelectItem value="august">August</SelectItem>
                    <SelectItem value="september">September</SelectItem>
                    <SelectItem value="october">October</SelectItem>
                    <SelectItem value="november">November</SelectItem>
                    <SelectItem value="december">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="font-body font-medium text-muted-foreground">&nbsp;</Label>
                <Select onValueChange={(value) => handleChange("start_year", value)}>
                  <SelectTrigger className="font-body bg-muted/50">
                    <SelectValue placeholder="2025" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-body font-medium text-muted-foreground">Duration (in nights)</Label>
              <Input
                value={formData.trip_duration}
                onChange={(e) => handleChange("trip_duration", e.target.value)}
                placeholder="Trip Length"
                className="font-body bg-muted/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-body font-medium text-muted-foreground">Total No. of Travellers</Label>
                <Select onValueChange={(value) => handleChange("adults_count", value)} defaultValue="2">
                  <SelectTrigger className="font-body bg-muted/50">
                    <SelectValue placeholder="Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="5">5 Adults</SelectItem>
                    <SelectItem value="6">6+ Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="font-body font-medium text-muted-foreground">&nbsp;</Label>
                <Select onValueChange={(value) => handleChange("kids_count", value)} defaultValue="0">
                  <SelectTrigger className="font-body bg-muted/50">
                    <SelectValue placeholder="Kids" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 Kids</SelectItem>
                    <SelectItem value="1">1 Kid</SelectItem>
                    <SelectItem value="2">2 Kids</SelectItem>
                    <SelectItem value="3">3 Kids</SelectItem>
                    <SelectItem value="4">4+ Kids</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-body font-medium text-muted-foreground">Total Budget for All *</Label>
              <Select onValueChange={(value) => handleChange("total_budget", value)} required>
                <SelectTrigger className="font-body bg-muted/50">
                  <SelectValue placeholder="All Prices in USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-2000">Under $2,000</SelectItem>
                  <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                  <SelectItem value="20000-50000">$20,000 - $50,000</SelectItem>
                  <SelectItem value="50000+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="airTickets"
                  checked={formData.air_tickets}
                  onCheckedChange={(checked) => handleChange("air_tickets", checked as boolean)}
                />
                <Label htmlFor="airTickets" className="font-body font-medium text-muted-foreground">Air Tickets</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="visa"
                  checked={formData.visa_assistance}
                  onCheckedChange={(checked) => handleChange("visa_assistance", checked as boolean)}
                />
                <Label htmlFor="visa" className="font-body font-medium text-muted-foreground">Visa</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="travelInsurance"
                  checked={formData.travel_insurance}
                  onCheckedChange={(checked) => handleChange("travel_insurance", checked as boolean)}
                />
                <Label htmlFor="travelInsurance" className="font-body font-medium text-muted-foreground">Travel Insurance</Label>
              </div>
            </div>
          </div>

          {/* Submit Button - Full Width */}
          <div className="lg:col-span-2 pt-6 border-t">
            <Button
              type="submit"
              disabled={loading}
              className="w-full lg:w-auto mx-auto block bg-brand-olive hover:bg-brand-olive/90 text-white font-body font-semibold px-12 py-3"
            >
              {loading ? "Processing..." : "ENQUIRE NOW"}
              {!loading && <Download className="ml-2 w-5 h-5" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};