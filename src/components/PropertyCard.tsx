import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
}

export const PropertyCard = ({ image, title, price, location, beds, baths, area }: PropertyCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">{price}</p>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};