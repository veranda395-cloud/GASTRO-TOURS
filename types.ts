export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  image: string;
}

export interface Highlight {
  id: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  className?: string; // For grid spanning logic
}