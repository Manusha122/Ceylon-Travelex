-- Update travel_inquiries table to match the new form design
ALTER TABLE public.travel_inquiries 
ADD COLUMN IF NOT EXISTS country_of_residence TEXT,
ADD COLUMN IF NOT EXISTS preferred_accommodation TEXT,
ADD COLUMN IF NOT EXISTS travel_preferences TEXT,
ADD COLUMN IF NOT EXISTS start_date DATE,
ADD COLUMN IF NOT EXISTS start_month TEXT,
ADD COLUMN IF NOT EXISTS start_year TEXT,
ADD COLUMN IF NOT EXISTS trip_duration TEXT,
ADD COLUMN IF NOT EXISTS adults_count INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS kids_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_budget TEXT,
ADD COLUMN IF NOT EXISTS currency TEXT DEFAULT 'USD',
ADD COLUMN IF NOT EXISTS air_tickets BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS visa_assistance BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS travel_insurance BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS enquiry_details TEXT;

-- Update existing columns to match new structure
ALTER TABLE public.travel_inquiries
ALTER COLUMN travel_dates TYPE TEXT,
ALTER COLUMN budget_range TYPE TEXT;