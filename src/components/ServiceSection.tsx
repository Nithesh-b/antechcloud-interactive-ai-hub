
import { Cloud, Code, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  const services = [
    {
      icon: <Cloud className="h-10 w-10 text-ant-blue" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and managed cloud operations for businesses of all sizes.',
      link: '/services/cloud'
    },
    {
      icon: <Brain className="h-10 w-10 text-ant-purple" />,
      title: 'AI Development',
      description: 'Custom AI solutions including machine learning models, natural language processing, and computer vision systems.',
      link: '/services/ai'
    },
    {
      icon: <Code className="h-10 w-10 text-ant-teal" />,
      title: 'Software Development',
      description: 'End-to-end custom software development with modern frameworks and agile methodologies.',
      link: '/services/software'
    }
  ];

  return (
    <section className="section bg-ant-light py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ant-darkblue">Our Services</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive technology solutions to help businesses innovate and grow in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 card-hover"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-opacity-10"
                style={{ backgroundColor: index === 0 ? 'rgba(26, 77, 140, 0.1)' : index === 1 ? 'rgba(110, 89, 165, 0.1)' : 'rgba(62, 201, 193, 0.1)' }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {/* <Button variant="link" className="p-0 text-ant-purple hover:text-ant-purple/80">
                <Link to={service.link}>Learn More &rarr;</Link>
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
