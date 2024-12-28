import React from 'react';
import { Property } from '../../types';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onFavorite?: (id: string) => void;
  showGallery?: boolean;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties,
  onFavorite,
  showGallery = false
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          onFavorite={onFavorite}
          showGallery={showGallery}
        />
      ))}
    </div>
  );
};