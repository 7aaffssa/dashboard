import React from 'react';
import { UserRole } from '../../types/user';
import { 
  Home, 
  Users, 
  Building2, 
  MessageSquare, 
  Settings,
  Heart,
  History,
  PieChart,
  UserCheck
} from 'lucide-react';

interface SidebarProps {
  role: UserRole;
  onNavigate: (path: string) => void;
}

const menuItems = {
  admin: [
    { icon: PieChart, label: 'Overview', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Building2, label: 'Properties', path: '/admin/properties' },
    { icon: UserCheck, label: 'Agents', path: '/admin/agents' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ],
  agent: [
    { icon: PieChart, label: 'Dashboard', path: '/agent' },
    { icon: Building2, label: 'My Listings', path: '/agent/listings' },
    { icon: Users, label: 'My Clients', path: '/agent/clients' },
    { icon: MessageSquare, label: 'Inquiries', path: '/agent/inquiries' },
  ],
  client: [
    { icon: Home, label: 'Browse', path: '/browse' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: History, label: 'Search History', path: '/history' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
  ],
};

export const Sidebar: React.FC<SidebarProps> = ({ role, onNavigate }) => {
  const items = menuItems[role];

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Home className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">DreamHome</span>
        </div>
        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};