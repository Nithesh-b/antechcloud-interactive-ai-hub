
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Car, Navigation, Wallet, MessageSquare } from "lucide-react";

const AIAgentsSection = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  
  const agents = [
    {
      id: 1,
      name: "Mukt",
      icon: <Wallet className="h-12 w-12 text-ant-purple" />,
      description: "AI agent for personal finance management and optimization",
      features: ["Personalized financial insights", "Budget optimization", "Investment recommendations"],
      link: "https://mukt-harmony-grove.lovable.app/",
      color: "bg-gradient-to-br from-ant-purple/20 to-ant-purple/5"
    },
    {
      id: 2,
      name: "Ajna",
      icon: <Navigation className="h-12 w-12 text-ant-blue" />,
      description: "AR navigation application for AagnyaSoft",
      features: ["Augmented reality navigation", "Real-time directions", "Point of interest discovery"],
      link: "https://aagnyasoft.com/",
      color: "bg-gradient-to-br from-ant-blue/20 to-ant-blue/5"
    },
    {
      id: 3,
      name: "AutoConcierge",
      icon: <Car className="h-12 w-12 text-ant-teal" />,
      description: "AI agent to help you choose your next car",
      features: ["Personalized car recommendations", "Feature comparisons", "Price analysis"],
      link: "",
      color: "bg-gradient-to-br from-ant-teal/20 to-ant-teal/5"
    },
    {
      id: 4,
      name: "WorkflowAI",
      icon: <MessageSquare className="h-12 w-12 text-green-600" />,
      description: "Custom workflow AI automation for small businesses",
      features: ["WhatsApp integration", "Instagram chat integration", "Automated customer service"],
      link: "",
      color: "bg-gradient-to-br from-green-500/20 to-green-500/5"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [agents.length]);

  return (
    <section className="section bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ant-darkblue">
              <span className="text-ant-purple">AI Agents</span> for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our specialized AI agents revolutionize how businesses operate by automating complex workflows and delivering intelligent solutions for specific industry needs.
            </p>
            <p className="text-gray-600 mb-10">
              Each AI agent is custom-built for its domain, combining cutting-edge natural language processing, machine learning, and integration capabilities to deliver tangible business outcomes.
            </p>
            <Button className="bg-ant-purple hover:bg-ant-purple/90">
              <Link to="/ai-agents" className="flex items-center">
                Explore All AI Agents <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent, index) => (
                <Card 
                  key={agent.id}
                  className={`card-hover border-0 shadow-md ${index === activeAgent ? 'ring-2 ring-ant-purple shadow-lg' : ''}`}
                >
                  <CardContent className={`p-6 ${agent.color} rounded-xl h-full`}>
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        {agent.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                      <p className="text-gray-600 mb-4">{agent.description}</p>
                      <ul className="mb-4 flex-grow">
                        {agent.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 mb-2">
                            <Bot className="mr-2 h-4 w-4 text-ant-purple" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {agent.link && (
                        <a 
                          href={agent.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-ant-purple font-medium hover:underline mt-auto inline-flex items-center"
                        >
                          View Demo <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
