import React from 'react';
import { Property } from '../../../types';
import { PropertyGrid } from '../../property/PropertyGrid';

interface ClientDashboardProps {
  favorites: Property[];
  recentSearches: string[];
  savedProperties: Property[];
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({
  favorites,
  recentSearches,
  savedProperties,
}) => {
  const handleFavorite = (id: string) => {
    console.log('Toggle favorite:', id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Favorite Properties</h2>
        <PropertyGrid 
          properties={favorites} 
          onFavorite={handleFavorite}
          showGallery={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                {search}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Saved Properties</h2>
          <div className="space-y-4">
            {savedProperties.map(property => (
              <div
                key={property.id}
                className="flex items-center space-x-4 p-3 border rounded-lg"
              >
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};