
import React from 'react';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-ant-light">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-ant-darkblue">Our Team</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Meet the talented professionals behind AN Technologies. Our diverse team brings expertise across cloud, AI, and software development.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
