
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AIAgentsSection from '@/components/AIAgentsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServiceSection />
        <AIAgentsSection />
        <TestimonialsSection limit={3} />
        <TeamSection limit={3} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
