import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          {formatPrice(property.price)}
        </p>
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};