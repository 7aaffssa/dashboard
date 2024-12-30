import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import {
  Home,
  Users,
  Building,
  Settings,
  User,
  MessageSquare,
  BarChart
} from 'lucide-react';

const DashboardHome = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Properties</h3>
        <p className="text-3xl font-bold">156</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Active Listings</h3>
        <p className="text-3xl font-bold">89</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Views</h3>
        <p className="text-3xl font-bold">2,345</p>
      </div>
    </div>
  </div>
);

const Profile = () => {
  const { user } = useAuthStore();
  const [formData, setFormData] = React.useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update:', formData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user?.avatar || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">{formData.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{formData.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border rounded dark:bg-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export const Dashboard = () => {
  const { user } = useAuthStore();

  const menuItems = [
    { icon: Home, label: 'Overview', path: '' },
    { icon: Building, label: 'Properties', path: 'properties' },
    { icon: MessageSquare, label: 'Messages', path: 'messages' },
    ...(user?.role === 'admin' ? [
      { icon: Users, label: 'Users', path: 'users' },
      { icon: BarChart, label: 'Analytics', path: 'analytics' }
    ] : []),
    { icon: User, label: 'Profile', path: 'profile' },
    { icon: Settings, label: 'Settings', path: 'settings' }
  ];

  return (
    <div className="flex h-screen pt-16">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <nav className="mt-8">
          <div className="px-4 mb-6">
            <h2 className="text-lg font-semibold">{user?.role.toUpperCase()} Dashboard</h2>
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </div>
  );
};