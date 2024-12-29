import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardHeader } from '../components/dashboard/Header';
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
  const { user } = useAuth();
  
  const handleNavigate = (path: string) => {
    console.log('Navigating to:', path);
  };

  const renderDashboard = () => {
    switch (user?.role) {
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
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={user?.role || 'client'} onNavigate={handleNavigate} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};