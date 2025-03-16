
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, Car, Navigation, Wallet, MessageSquare, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Mukt",
      icon: <Wallet className="h-12 w-12 text-ant-purple" />,
      tagline: "Personal Finance AI Agent",
      description: "Mukt is an intelligent AI agent for personal finance management, helping users optimize their budget, track expenses, and make smart investment decisions.",
      features: [
        "Personalized financial insights and recommendations",
        "Budget optimization and expense tracking",
        "Investment portfolio analysis and recommendations",
        "Financial goal setting and tracking",
        "Bill payment reminders and automation"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "Financial Data APIs"],
      link: "https://mukt-harmony-grove.lovable.app/",
      color: "bg-gradient-to-br from-ant-purple/20 to-ant-purple/5"
    },
    {
      id: 2,
      name: "Ajna",
      icon: <Navigation className="h-12 w-12 text-ant-blue" />,
      tagline: "AR Navigation Application",
      description: "Developed for AagnyaSoft, Ajna is an augmented reality navigation system that provides immersive and intuitive directions in real-time.",
      features: [
        "Augmented reality navigation interface",
        "Real-time directions and route optimization",
        "Point of interest discovery and information",
        "Indoor navigation capabilities",
        "Integration with mapping services"
      ],
      technologies: ["Augmented Reality", "Computer Vision", "Geospatial Processing"],
      link: "https://aagnyasoft.com/",
      color: "bg-gradient-to-br from-ant-blue/20 to-ant-blue/5"
    },
    {
      id: 3,
      name: "AutoConcierge",
      icon: <Car className="h-12 w-12 text-ant-teal" />,
      tagline: "Automotive Selection AI",
      description: "AutoConcierge helps users find their ideal vehicle based on preferences, budget, and lifestyle needs through intelligent recommendations.",
      features: [
        "Personalized car recommendations based on user preferences",
        "Detailed vehicle feature comparisons",
        "Price analysis and financial planning tools",
        "Maintenance cost predictions",
        "Test drive scheduling assistance"
      ],
      technologies: ["Predictive Analytics", "Recommendation Algorithms", "Automotive Database Integration"],
      link: "#",
      color: "bg-gradient-to-br from-ant-teal/20 to-ant-teal/5"
    },
    {
      id: 4,
      name: "WorkflowAI",
      icon: <MessageSquare className="h-12 w-12 text-green-600" />,
      tagline: "Business Process Automation",
      description: "WorkflowAI delivers custom workflow automation for small businesses, integrating with popular messaging platforms for seamless communication.",
      features: [
        "WhatsApp business integration for automated customer service",
        "Instagram chat automation and content scheduling",
        "Custom workflow design and implementation",
        "Sales funnel automation and lead qualification",
        "Customer support ticket management"
      ],
      technologies: ["Conversational AI", "Process Automation", "Social Media API Integration"],
      link: "#",
      color: "bg-gradient-to-br from-green-500/20 to-green-500/5"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 bg-ant-light">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-ant-darkblue">
            Our <span className="text-ant-purple">AI Agents</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Discover our specialized AI agents designed to solve specific business challenges across various industries.
          </p>
        </div>
      </div>
      
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-ant-darkblue">How Our AI Agents Transform Businesses</h2>
              <p className="text-lg text-gray-600">
                Our AI agents combine cutting-edge artificial intelligence with domain expertise to deliver tailored solutions 
                that automate complex workflows, enhance decision-making, and provide actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <Brain className="h-10 w-10 text-ant-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Intelligent Decision-Making</h3>
                <p className="text-gray-600">
                  Our AI agents leverage advanced algorithms to analyze data and provide intelligent recommendations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <Code className="h-10 w-10 text-ant-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Integration</h3>
                <p className="text-gray-600">
                  Each AI agent is designed to integrate seamlessly with your existing systems and workflows.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <Bot className="h-10 w-10 text-ant-teal mb-4" />
                <h3 className="text-xl font-bold mb-2">Domain Expertise</h3>
                <p className="text-gray-600">
                  Our specialized agents combine AI capabilities with deep domain knowledge in various industries.
                </p>
              </div>
            </div>
            
            <div className="space-y-16">
              {agents.map((agent, index) => (
                <div key={agent.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`rounded-xl overflow-hidden shadow-lg ${agent.color} p-8 flex flex-col items-center justify-center min-h-[400px]`}>
                    <div className="bg-white/90 p-6 rounded-full shadow-md mb-6">
                      {agent.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-4">{agent.name}</h3>
                    <p className="text-lg font-medium text-center text-ant-purple mb-6">{agent.tagline}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {agent.technologies.map((tech, i) => (
                        <span key={i} className="bg-white/80 text-ant-darkblue px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{agent.name}</h3>
                    <p className="text-gray-600 mb-6">{agent.description}</p>
                    
                    <h4 className="font-bold text-lg mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {agent.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Bot className="mr-2 h-5 w-5 text-ant-purple flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={agent.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-ant-purple hover:text-ant-purple/80"
                    >
                      <Button className="bg-ant-purple hover:bg-ant-purple/90">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-ant-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom AI Agent for Your Business?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our team can develop tailored AI agents to address your specific business challenges and integrate with your existing workflows.
            </p>
            <Button className="bg-ant-purple hover:bg-ant-purple/90">
              <Link to="/contact" className="flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAgents;
