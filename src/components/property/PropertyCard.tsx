import React from 'react';
import { Property } from '../../types';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface PropertyCardProps {
  property: Property;
  onFavorite?: (id: string) => void;
  showGallery?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onFavorite,
  showGallery = false 
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      {showGallery ? (
        <ImageGallery images={property.images} title={property.title} />
      ) : (
        <div className="relative h-48">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </div>
          {onFavorite && (
            <button 
              onClick={() => onFavorite(property.id)}
              className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <Heart size={20} className="text-red-500" />
            </button>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.description}</p>
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
        <div className="mt-4 flex flex-wrap gap-2">
          {property.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};