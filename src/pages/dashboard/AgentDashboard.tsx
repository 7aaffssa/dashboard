import React from 'react';
import { Building, MessageSquare, BarChart, Plus } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { PropertyList } from '../../components/dashboard/PropertyList';
import { useThemeStore } from '../../store/themeStore';

export const AgentDashboard = () => {
  const { t } = useThemeStore();

  const stats = [
    {
      title: t('dashboard.agent.stats.listings'),
      value: '23',
      icon: Building,
      change: '+3'
    },
    {
      title: t('dashboard.agent.stats.views'),
      value: '1,234',
      icon: BarChart,
      change: '+45%'
    },
    {
      title: t('dashboard.agent.stats.inquiries'),
      value: '56',
      icon: MessageSquare,
      change: '+12'
    }
  ];

  const menuItems = [
    { icon: Building, label: t('dashboard.menu.myListings'), path: '' },
    { icon: Plus, label: t('dashboard.menu.addProperty'), path: 'add-property' },
    { icon: MessageSquare, label: t('dashboard.menu.messages'), path: 'messages' }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">{t('dashboard.agent.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        <PropertyList />
      </div>
    </DashboardLayout>
  );
};