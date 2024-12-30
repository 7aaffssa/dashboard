import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

export const PropertyList = () => {
  const { t } = useThemeStore();

  const properties = [
    {
      id: 1,
      title: 'Modern Villa',
      price: '$850,000',
      status: 'active',
      views: 234,
      inquiries: 12
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      price: '$450,000',
      status: 'pending',
      views: 156,
      inquiries: 8
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{t('property.list.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b dark:border-gray-700">
                <th className="pb-3">{t('property.list.property')}</th>
                <th className="pb-3">{t('property.list.price')}</th>
                <th className="pb-3">{t('property.list.status')}</th>
                <th className="pb-3">{t('property.list.views')}</th>
                <th className="pb-3">{t('property.list.inquiries')}</th>
                <th className="pb-3">{t('property.list.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b dark:border-gray-700">
                  <td className="py-4">{property.title}</td>
                  <td>{property.price}</td>
                  <td>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      property.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {property.status}
                    </span>
                  </td>
                  <td>{property.views}</td>
                  <td>{property.inquiries}</td>
                  <td>
                    <div className="flex space-x-2">
                      <button className="p-1 hover:text-blue-600">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-1 hover:text-green-600">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-1 hover:text-red-600">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};