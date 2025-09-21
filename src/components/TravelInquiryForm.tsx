import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export const TravelInquiryForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination_interest: "",
    travel_dates: "",
    group_size: "",
    budget_range: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("travel_inquiries")
        .insert([{
          ...formData,
          group_size: formData.group_size ? parseInt(formData.group_size) : null,
        }]);

      if (error) throw error;

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "We'll get back to you within 24 hours with a personalized travel proposal.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination_interest: "",
        travel_dates: "",
        group_size: "",
        budget_range: "",
        message: "",
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

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <Card className="lg:col-span-1 shadow-elegant">
        <CardHeader>
          <CardTitle className="font-heading text-xl text-foreground">Get in Touch</CardTitle>
          <p className="font-body text-muted-foreground">
            Ready to embark on your luxury Ceylon adventure? Contact our travel specialists.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-emerald/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Phone</p>
              <p className="font-body text-sm text-muted-foreground">+94 773 555 553</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-emerald/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Email</p>
              <p className="font-body text-sm text-muted-foreground">info@ceylontravelex.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-emerald/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-brand-emerald" />
            </div>
            <div>
              <p className="font-body font-semibold text-foreground">Location</p>
              <p className="font-body text-sm text-muted-foreground">Colombo, Sri Lanka</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inquiry Form */}
      <Card className="lg:col-span-2 shadow-elegant">
        <CardHeader>
          <CardTitle className="font-heading text-2xl text-foreground">Plan Your Journey</CardTitle>
          <p className="font-body text-muted-foreground">
            Tell us about your dream trip and we'll create a bespoke experience just for you.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body font-medium">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="font-body"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="font-body"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="font-body"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination" className="font-body font-medium">Destination Interest</Label>
                <Select onValueChange={(value) => handleChange("destination_interest", value)}>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cultural-triangle">Cultural Triangle</SelectItem>
                    <SelectItem value="hill-country">Hill Country</SelectItem>
                    <SelectItem value="southern-coast">Southern Coast</SelectItem>
                    <SelectItem value="eastern-coast">Eastern Coast</SelectItem>
                    <SelectItem value="northern-regions">Northern Regions</SelectItem>
                    <SelectItem value="complete-island">Complete Island Tour</SelectItem>
                    <SelectItem value="custom">Custom Itinerary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dates" className="font-body font-medium">Travel Dates</Label>
                <Input
                  id="dates"
                  value={formData.travel_dates}
                  onChange={(e) => handleChange("travel_dates", e.target.value)}
                  placeholder="e.g., Dec 2024"
                  className="font-body"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="group_size" className="font-body font-medium">Group Size</Label>
                <Select onValueChange={(value) => handleChange("group_size", value)}>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Solo Traveler</SelectItem>
                    <SelectItem value="2">Couple</SelectItem>
                    <SelectItem value="3-5">Small Group (3-5)</SelectItem>
                    <SelectItem value="6-10">Medium Group (6-10)</SelectItem>
                    <SelectItem value="10+">Large Group (10+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="font-body font-medium">Budget Range (USD)</Label>
                <Select onValueChange={(value) => handleChange("budget_range", value)}>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-2000">Under $2,000</SelectItem>
                    <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20000+">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-body font-medium">Tell us about your dream trip *</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Describe your interests, special requirements, or any specific experiences you're looking for..."
                required
                className="font-body"
              />
            </div>

            <Button
              type="submit"
              variant="luxury"
              size="lg"
              disabled={loading}
              className="w-full font-body font-semibold"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
              {!loading && <Send className="ml-2 w-5 h-5" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};