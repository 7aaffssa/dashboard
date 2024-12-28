import React from 'react';
import { Property } from '../../../types';
import { User, DollarSign, Home, Users as UsersIcon } from 'lucide-react';

interface AgentStats {
  activeListings: number;
  totalClients: number;
  monthlyCommission: number;
  pendingInquiries: number;
}

interface AgentDashboardProps {
  stats: AgentStats;
  recentListings: Property[];
}

export const AgentDashboard: React.FC<AgentDashboardProps> = ({ stats, recentListings }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Home}
          label="Active Listings"
          value={stats.activeListings}
          color="blue"
        />
        <StatCard
          icon={UsersIcon}
          label="Total Clients"
          value={stats.totalClients}
          color="green"
        />
        <StatCard
          icon={DollarSign}
          label="Monthly Commission"
          value={`$${stats.monthlyCommission.toLocaleString()}`}
          color="yellow"
        />
        <StatCard
          icon={User}
          label="Pending Inquiries"
          value={stats.pendingInquiries}
          color="purple"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentListings.map(listing => (
            <div key={listing.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{listing.title}</h3>
                <p className="text-gray-600">{listing.location}</p>
                <p className="text-blue-600 font-bold">${listing.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: 'blue' | 'green' | 'yellow' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-gray-600">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};