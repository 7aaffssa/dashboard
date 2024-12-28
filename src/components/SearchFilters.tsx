import React from 'react';
import { Search } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by location or property type..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Price Range</option>
          <option value="0-500000">$0 - $500,000</option>
          <option value="500000-1000000">$500,000 - $1,000,000</option>
          <option value="1000000+">$1,000,000+</option>
        </select>
      </div>
    </div>
  );
};