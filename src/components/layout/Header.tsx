import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Home } from 'lucide-react';

export const Header: React.FC = () => {
  const { user } = useAuth();

  const handleDashboardClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      window.location.href = '/login';
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DreamHome</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#properties" className="text-gray-600 hover:text-blue-600">Properties</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          <div>
            <a
              href={user ? '/dashboard' : '/login'}
              onClick={handleDashboardClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {user ? 'Dashboard' : 'Sign In'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};