import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    price: 1250000,
    location: 'Miami Beach, FL',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'house',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
    description: 'Stunning waterfront villa with modern amenities and breathtaking views.',
    features: ['Pool', 'Garden', 'Smart Home', 'Security System'],
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1600'
    ]
  },
  {
    id: '2',
    title: 'Downtown Luxury Apartment',
    price: 750000,
    location: 'New York, NY',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    type: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    description: 'High-end apartment in the heart of downtown with city views.',
    features: ['Doorman', 'Gym', 'Parking', 'Rooftop Terrace'],
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c01?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c02?auto=format&fit=crop&q=80&w=1600'
    ]
  },
  {
    id: '3',
    title: 'Beachfront Paradise',
    price: 2100000,
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'house',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    description: 'Luxurious beachfront property with panoramic ocean views.',
    features: ['Private Beach', 'Infinity Pool', 'Wine Cellar', 'Home Theater'],
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600'
    ]
  }
];