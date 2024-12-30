import React from 'react';
import { useThemeStore } from '../../store/themeStore';

export const AddProperty = () => {
  const { t } = useThemeStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{t('property.add.title')}</h2>
      <form className="max-w-2xl space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">{t('property.form.title')}</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('property.form.description')}</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('property.form.price')}</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('property.form.type')}</label>
            <select className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700">
              <option value="house">{t('property.type.house')}</option>
              <option value="apartment">{t('property.type.apartment')}</option>
              <option value="villa">{t('property.type.villa')}</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('property.form.bedrooms')}</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('property.form.bathrooms')}</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('property.form.area')}</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('property.form.images')}</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          {t('property.form.submit')}
        </button>
      </form>
    </div>
  );
};