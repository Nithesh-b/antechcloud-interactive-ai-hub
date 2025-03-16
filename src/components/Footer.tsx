
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ant-darkblue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-ant-teal">ANT</span>echCloud
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative cloud solutions, AI development, and custom software.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ant-teal">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ant-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ant-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ant-teal">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cloud" className="text-gray-300 hover:text-ant-teal">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="text-gray-300 hover:text-ant-teal">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services/software" className="text-gray-300 hover:text-ant-teal">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/ai-agents" className="text-gray-300 hover:text-ant-teal">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-gray-300 hover:text-ant-teal">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-ant-teal">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ant-teal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-ant-teal flex-shrink-0" />
                <span className="text-gray-300">
                  2/3, Sree Kanchi Nagar, Cheran Maa Nagar, Coimbatore, Tamil Nadu, India 641035
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-ant-teal" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-ant-teal">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-ant-teal" />
                <a href="mailto:info@antechcloud.in" className="text-gray-300 hover:text-ant-teal">
                  info@antechcloud.in
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AN Technologies. All rights reserved. ANTechCloud.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
