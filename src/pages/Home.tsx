import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};