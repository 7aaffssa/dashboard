import React from 'react';
import { PropertyGrid } from '../property/PropertyGrid';
import { properties } from '../../data/properties';

export const FeaturedProperties: React.FC = () => {
  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Properties</h2>
          <p className="mt-4 text-xl text-gray-600">Explore our hand-picked selection of properties</p>
        </div>
        <PropertyGrid properties={properties.slice(0, 3)} showGallery={true} />
      </div>
    </section>
  );
};