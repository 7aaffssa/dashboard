import React from 'react';
import { Heart, MessageSquare, Clock } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { SavedProperties } from '../../components/dashboard/SavedProperties';
import { useThemeStore } from '../../store/themeStore';

export const ClientDashboard = () => {
  const { t } = useThemeStore();

  const stats = [
    {
      title: t('dashboard.client.stats.saved'),
      value: '12',
      icon: Heart,
      change: '+2'
    },
    {
      title: t('dashboard.client.stats.messages'),
      value: '34',
      icon: MessageSquare,
      change: '+5'
    },
    {
      title: t('dashboard.client.stats.viewed'),
      value: '89',
      icon: Clock,
      change: '+15'
    }
  ];

  const menuItems = [
    { icon: Heart, label: t('dashboard.menu.saved'), path: '' },
    { icon: MessageSquare, label: t('dashboard.menu.messages'), path: 'messages' }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">{t('dashboard.client.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        <SavedProperties />
      </div>
    </DashboardLayout>
  );
};