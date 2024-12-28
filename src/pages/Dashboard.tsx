import React from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { PropertyManagement } from '../components/dashboard/admin/PropertyManagement';
import { AgentDashboard } from '../components/dashboard/agent/AgentDashboard';
import { ClientDashboard } from '../components/dashboard/client/ClientDashboard';
import { properties } from '../data/properties';

// Mock data - In a real app, this would come from an API
const mockAgentStats = {
  activeListings: 12,
  totalClients: 25,
  monthlyCommission: 15000,
  pendingInquiries: 8,
};

const mockRecentSearches = [
  'Beachfront properties in Miami',
  'Condos in Downtown',
  'Houses with pool',
  'Luxury apartments',
];

export const Dashboard: React.FC = () => {
  const [role, setRole] = React.useState<'admin' | 'agent' | 'client'>('admin');

  const handleNavigate = (path: string) => {
    console.log('Navigating to:', path);
  };

  const renderDashboard = () => {
    switch (role) {
      case 'admin':
        return (
          <PropertyManagement
            properties={properties}
            onEdit={(id) => console.log('Edit property:', id)}
            onDelete={(id) => console.log('Delete property:', id)}
          />
        );
      case 'agent':
        return (
          <AgentDashboard
            stats={mockAgentStats}
            recentListings={properties}
          />
        );
      case 'client':
        return (
          <ClientDashboard
            favorites={properties}
            recentSearches={mockRecentSearches}
            savedProperties={properties}
          />
        );
    }
  };

  // Temporary role switcher for demo purposes
  const RoleSwitcher = () => (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as 'admin' | 'agent' | 'client')}
        className="border rounded-lg px-4 py-2"
      >
        <option value="admin">Admin View</option>
        <option value="agent">Agent View</option>
        <option value="client">Client View</option>
      </select>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={role} onNavigate={handleNavigate} />
      <div className="flex-1 overflow-auto p-8">
        <RoleSwitcher />
        {renderDashboard()}
      </div>
    </div>
  );
};