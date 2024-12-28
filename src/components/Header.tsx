import React from 'react';
import { Home } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DreamHome</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Buy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Rent</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Sell</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};