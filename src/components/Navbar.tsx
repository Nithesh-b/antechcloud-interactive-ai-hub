
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-ant-darkblue">
                <span className="text-ant-purple">ANT</span>echCloud
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/services/cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud Solutions
                  </Link>
                  <Link to="/services/ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Development
                  </Link>
                  <Link to="/services/software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Software Development
                  </Link>
                </div>
              </div>
              <Link to="/ai-agents" className="nav-link">
                AI Agents
              </Link>
              <Link to="/testimonials" className="nav-link">
                Testimonials
              </Link>
              <Link to="/team" className="nav-link">
                Our Team
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-ant-purple hover:bg-ant-purple/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              >
                Services
              </button>
              <div className="pl-4 space-y-1">
                <Link
                  to="/services/cloud"
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cloud Solutions
                </Link>
                <Link
                  to="/services/ai"
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Development
                </Link>
                <Link
                  to="/services/software"
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Development
                </Link>
              </div>
            </div>
            <Link
              to="/ai-agents"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              to="/testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-ant-purple text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
