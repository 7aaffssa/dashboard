export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo';
  imageUrl: string;
  images: string[];
  description: string;
  features: string[];
  status: 'for-sale' | 'for-rent';
}