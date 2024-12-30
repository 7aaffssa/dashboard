import React from 'react';
import { BarChart, Users, Building, Settings } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { useThemeStore } from '../../store/themeStore';

export const AdminDashboard = () => {
  const { t } = useThemeStore();

  const stats = [
    { 
      title: t('dashboard.admin.stats.users'),
      value: '1,234',
      icon: Users,
      change: '+12%'
    },
    {
      title: t('dashboard.admin.stats.properties'),
      value: '567',
      icon: Building,
      change: '+23%'
    },
    {
      title: t('dashboard.admin.stats.agents'),
      value: '89',
      icon: Users,
      change: '+5%'
    },
    {
      title: t('dashboard.admin.stats.revenue'),
      value: '$123.4k',
      icon: BarChart,
      change: '+18%'
    }
  ];

  const menuItems = [
    { icon: BarChart, label: t('dashboard.menu.overview'), path: '' },
    { icon: Users, label: t('dashboard.menu.users'), path: 'users' },
    { icon: Building, label: t('dashboard.menu.properties'), path: 'properties' },
    { icon: Settings, label: t('dashboard.menu.settings'), path: 'settings' }
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">{t('dashboard.admin.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};