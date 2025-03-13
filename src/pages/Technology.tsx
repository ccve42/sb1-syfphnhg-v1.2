import React, { useState, useEffect } from 'react';
import { Code, Database, BarChart4, Brain, Coffee, Zap, Layers } from 'lucide-react';

const services = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'ERP implementations & Upgrades',
    description: 'Seamless integration and modernization of enterprise systems'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Global IT Deployments & Data Migrations',
    description: 'Strategic worldwide technology implementation'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Application Development',
    description: 'Custom software solutions for maritime challenges'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Business Transformation',
    description: 'Reshaping operations for digital-first strategies'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'IT Advisory',
    description: 'Expert guidance on technology investments'
  },
  {
    icon: <BarChart4 className="w-8 h-8" />,
    title: 'Outsourcing of IT & Business Process',
    description: 'Streamlined operations through strategic partnerships'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Vision Analytics & AI',
    description: 'Next-generation intelligence for maritime operations'
  }
];

const Technology = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          setAnimatedItems(prev => [...prev, index]);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const isInView = (index: number) => animatedItems.includes(index);

  return (
    <main className="tech-page">
      {/* Hero Section */}
      <section className="tech-hero relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: 'url(/img/future.jpg)',
            transform: `scale(${1 + scrollPosition * 0.0005}) translateY(${scrollPosition * 0.2}px)`,
            filter: `brightness(${0.5 - scrollPosition * 0.0002})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="glass-card w-full lg:w-3/5 xl:w-1/2 p-8 md:p-12 mt-20 ml-auto z-10">
            <div className="blur-bg absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl" />
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                <span className="block tech-gradient-text">Enter the Future Today</span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6 max-w-2xl">
                <p className="text-white/90 text-lg font-light leading-relaxed">
                  At Icon Maritech we take a strategic approach to marketing, focusing on creating valuable, relevant content to attract our defined audience and drive profitability through innovation.
                </p>
                <p className="text-white/90 text-lg font-light leading-relaxed">
                  With our passion for technology and decades of maritime expertise, we develop smart, creative solutions that solve real problems using the latest innovations.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 bg-white/10 text-white rounded-full font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Our Approach
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tech-heading leading-[1.1]">
              Our Technology Services
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions tailored for the maritime industry, powered by the latest advancements in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                data-index={index}
                className={`service-card animate-on-scroll`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="feature-section py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-95 z-0" />
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: 'url(/img/charting.jpg)',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1]">Transform Your Maritime Operations</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-white/90">
                <p className="text-lg">
                  Our technology solutions are designed to address the unique challenges of the maritime industry, providing you with the tools to optimize operations, reduce costs, and enhance safety.
                </p>
                <p className="text-lg">
                  With a combination of cutting-edge AI, cloud technologies, and industry expertise, we deliver solutions that give you a competitive edge in today's digital landscape.
                </p>
              </div>
              
              <button className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Discover Our Approach
              </button>
            </div>
            
            <div className="lg:ml-auto">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "AI Integration", value: "98%" },
                  { title: "Cloud Solutions", value: "100%" },
                  { title: "Data Security", value: "99.9%" },
                  { title: "Client Satisfaction", value: "97%" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="stat-card p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-white/80">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;