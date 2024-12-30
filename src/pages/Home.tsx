import React from 'react';
import { Building, Search, Star, Phone } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { Footer } from '../components/Footer';
import { useThemeStore } from '../store/themeStore';

const featuredProperties = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    title: 'Modern Villa',
    price: '$850,000',
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    area: '2,500 sq ft'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: 'Luxury Apartment',
    price: '$450,000',
    location: 'Manhattan, NY',
    beds: 2,
    baths: 2,
    area: '1,200 sq ft'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    title: 'Seaside Cottage',
    price: '$650,000',
    location: 'Malibu, CA',
    beds: 3,
    baths: 2,
    area: '1,800 sq ft'
  }
];

export const Home = () => {
  const { t } = useThemeStore();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t('home.hero.title')}</h1>
            <p className="text-xl mb-8">{t('home.hero.subtitle')}</p>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
                <input
                  type="text"
                  placeholder={t('home.search.placeholder')}
                  className="px-4 py-2 w-96 rounded-md border text-gray-800"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  {t('home.search.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('home.featured')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.about.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{t('home.about.subtitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.about.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  {t('home.about.feature1')}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  {t('home.about.feature2')}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  {t('home.about.feature3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.contact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('home.contact.name')}
                    className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('home.contact.email')}
                    className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t('home.contact.message')}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:border-gray-600"
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  {t('home.contact.send')}
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{t('home.contact.subtitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.contact.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-blue-600 mr-2" />
                  <span>{t('home.contact.address')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};