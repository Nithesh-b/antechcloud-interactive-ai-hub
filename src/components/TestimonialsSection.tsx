
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialsSection = ({ limit = 3 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "AN Technologies' AI agent transformed our customer service operations. Response times decreased by 80% while customer satisfaction scores improved significantly.",
      author: "Raj Patel",
      position: "CTO, TechVentures Inc.",
      company: "TechVentures Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      id: 2,
      quote: "The cloud migration executed by AN Technologies was flawless. They maintained business continuity throughout the transition and delivered the project ahead of schedule.",
      author: "Priya Sharma",
      position: "Head of IT Infrastructure",
      company: "Global Retail Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      id: 3,
      quote: "We engaged AN Technologies to build our fintech platform from the ground up. Their technical expertise and attention to security compliance exceeded our expectations.",
      author: "Arjun Mehta",
      position: "CEO",
      company: "FinSecure Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      id: 4,
      quote: "Mukt, the personal finance AI agent developed by AN Technologies, has revolutionized how our clients manage their investments. The insights provided are truly game-changing.",
      author: "Vikram Singh",
      position: "Managing Director",
      company: "Wealth Advisors Group",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      id: 5,
      quote: "The AR navigation application developed for us has positioned our company at the forefront of innovation in the logistics industry. AN Technologies delivers cutting-edge solutions.",
      author: "Neha Reddy",
      position: "Innovation Officer",
      company: "LogiTech Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  return (
    <section className="section bg-gradient-to-b from-ant-light to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ant-darkblue">
            What Our <span className="text-ant-purple">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600">
            See how our technology solutions have helped businesses across various industries achieve their goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8">
            <div className="absolute -top-6 left-10 bg-ant-purple text-white p-4 rounded-full">
              <Quote className="h-6 w-6" />
            </div>
            
            <div className="mx-auto">
              <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                "{displayTestimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={displayTestimonials[activeIndex].image} 
                    alt={displayTestimonials[activeIndex].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{displayTestimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{displayTestimonials[activeIndex].position}</p>
                  <p className="text-ant-purple font-medium">{displayTestimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow hover:shadow-md transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-ant-purple" />
            </button>
            
            <div className="flex space-x-2">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-ant-purple' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow hover:shadow-md transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-ant-purple" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
