import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export const Footer = () => {
  const { t } = useThemeStore();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-gray-400 hover:text-white">{t('nav.properties')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">{t('nav.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {t('footer.address')}
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +1 234 567 890
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@realestate.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter')}</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-3 py-2 bg-gray-800 rounded text-white"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};