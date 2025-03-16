
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-ant-light">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-ant-darkblue">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to our team using any of the contact methods below.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <ContactSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-md h-96">
                <iframe
                  title="AN Technologies Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1137309200795!2d76.9924562!3d11.023658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b0975ca88d%3A0x83e3cb4926aa7035!2sCheran%20Ma%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641035!5e0!3m2!1sen!2sin!4v1627295282045!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
