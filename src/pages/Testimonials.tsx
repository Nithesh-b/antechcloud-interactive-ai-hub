
import React from 'react';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-ant-light">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-ant-darkblue">Client Testimonials</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Discover what our clients have to say about our services and the impact of our technology solutions on their businesses.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
