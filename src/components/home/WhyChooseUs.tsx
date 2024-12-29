import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Over 10 years of experience in real estate market'
    },
    {
      icon: Award,
      title: 'Quality Listings',
      description: 'Carefully verified properties and trusted agents'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs'
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: 'Professional and certified real estate agents'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">We provide the best service in the industry</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};