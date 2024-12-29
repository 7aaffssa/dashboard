import React from 'react';
import { SearchFilters } from '../SearchFilters';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury home"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Dream Home
          </h1>
          <p className="mt-6 max-w-md mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Discover the perfect property that matches your lifestyle and dreams.
          </p>
        </div>
        
        <div className="mt-10">
          <SearchFilters onSearch={(query) => console.log(query)} />
        </div>
      </div>
    </div>
  );
};