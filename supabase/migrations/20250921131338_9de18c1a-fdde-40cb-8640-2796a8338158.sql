-- Create table for travel inquiries
CREATE TABLE public.travel_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  destination_interest TEXT,
  travel_dates TEXT,
  group_size INTEGER,
  budget_range TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'booked', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.travel_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can submit inquiries)
CREATE POLICY "Anyone can submit travel inquiries" 
ON public.travel_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_travel_inquiries_updated_at
  BEFORE UPDATE ON public.travel_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();