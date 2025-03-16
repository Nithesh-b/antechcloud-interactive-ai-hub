
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Cloud Solutions", "AI Development", "Software Engineering", "AI Agents"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-ant-blue via-ant-purple to-ant-teal opacity-10"></div>
      
      <div className="hero-particles absolute inset-0">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ant-teal rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-ant-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-ant-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-ant-darkblue">
              Powering Innovation with <span className="text-ant-purple">Next-Gen</span> Technology
            </h1>
            
            <div className="h-12 mb-6">
              <p className="text-xl sm:text-2xl text-ant-blue font-medium">
                Expertise in{' '}
                <span className="text-ant-purple transition-all duration-700">
                  {texts[currentText]}
                </span>
              </p>
            </div>
            
            <p className="text-lg text-gray-600 mb-10">
              At AN Technologies, we transform businesses with cutting-edge cloud infrastructure, 
              artificial intelligence solutions, and enterprise-grade software development. Our 
              specialized AI agents deliver tailored solutions for diverse industries.
            </p>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 animate-float">
              <svg viewBox="0 0 200 200" className="w-full max-w-xl mx-auto" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1A4D8C" d="M45.3,-58.9C60.8,-50.8,76.5,-39.6,83.7,-24.1C90.9,-8.6,89.6,11.3,81.2,27.5C72.8,43.7,57.3,56.3,40.4,63.1C23.6,69.9,5.4,70.9,-10.9,67.2C-27.2,63.6,-41.6,55.4,-55.4,43.2C-69.2,31,-82.3,15.5,-84.2,-0.9C-86,-17.4,-76.5,-34.8,-63.3,-43.9C-50.1,-52.9,-33.1,-53.7,-18.3,-62.3C-3.5,-70.9,9.9,-87.3,23.2,-87.8C36.5,-88.3,49.6,-73,45.3,-58.9Z" transform="translate(100 100)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block mb-2 p-4 rounded-full bg-white/90 shadow-xl">
                    <svg className="h-20 w-20 text-ant-purple" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V7.5C21 7.22 20.78 7 20.5 7H9.33L3.5 2l-1 1 5 5H3.5C3.22 7 3 7.22 3 7.5v9C3 17.33 3.67 18 4.5 18h15c.83 0 1.5-.67 1.5-1.5zM15 16H5V9h10v7zm5-1.5c0 .28-.22.5-.5.5h-3v-7h3c.28 0 .5.22.5.5v6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white bg-ant-purple inline-block px-3 py-1 rounded-md">Innovation Hub</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
