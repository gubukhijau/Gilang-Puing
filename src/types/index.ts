export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  recommendedFleet: string;
  features: string[];
  materialsHandled: string[];
  startingPrice?: string;
  unit?: string;
}

export interface FleetItem {
  id: string;
  name: string;
  capacity: string;
  volume: string;
  idealFor: string;
  dimensions: string;
  image: string;
  ratePerRit?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  projectType: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CoverageArea {
  region: string;
  cities: string[];
  deliveryTime: string;
}
