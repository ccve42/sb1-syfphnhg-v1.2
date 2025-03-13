import React, { useEffect, useState } from 'react';
import { Anchor, Ship, Package, BarChart, Compass, Globe, Truck, Users } from 'lucide-react';

const Consultancy = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          if (!isNaN(id) && !inView.includes(id)) {
            setInView(prev => [...prev, id]);
          }
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [inView]);

  return (
    <main className="consultancy-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/img/chartering2.jpg"
            alt="Chartering Services"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.2}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-800/70"
            style={{
              opacity: Math.min(1, 0.7 + scrollY * 0.001)
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="ml-auto w-full lg:w-3/5">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 opacity-0 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Maritime Chartering
              </span>
              <span className="block mt-2">Excellence</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 rounded-full opacity-0 animate-fade-in animation-delay-300"></div>
            
            <div className="prose prose-lg prose-invert max-w-2xl">
              <p className="text-xl text-white/90 leading-relaxed mb-8 tracking-wide opacity-0 animate-fade-in animation-delay-500">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Icon</span> provides bespoke shipbroking services and advice on dry bulk, 
                project/heavy-lift, IMO and tanker chartering across all markets with emphasis on 
                small to mid-sized institutional clientele.
              </p>
              <p className="text-xl text-white/90 leading-relaxed tracking-wide opacity-0 animate-fade-in animation-delay-700">
                With decades of global experience, our team also works with clientele on turnkey 
                maritime infrastructure, warehousing, distribution and logistics projects including 
                ports, inland waterways and complex cold chain systems.
              </p>
            </div>
            
            <div className="mt-12 opacity-0 animate-fade-in animation-delay-900">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 mr-4">
                Our Services
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-full font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 w-full flex justify-center">
          <div className="animate-bounce flex flex-col items-center text-white/70">
            <p className="mb-2 text-sm font-light tracking-widest uppercase">Scroll Down</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600" data-id="1" 
              className={`text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 transition-all duration-700 ${inView.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our Chartering Services
            </h2>
            <div 
              data-id="2"
              className={`h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8 transition-all duration-700 delay-100 ${inView.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
            <p 
              data-id="3"
              className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Comprehensive maritime solutions tailored to meet the unique requirements of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Anchor className="w-7 h-7" />,
                title: 'Dry Bulk Chartering',
                description: 'Expert services for all dry bulk cargo requirements with global network coverage'
              },
              {
                icon: <Ship className="w-7 h-7" />,
                title: 'Project & Heavy-Lift',
                description: 'Specialized solutions for complex cargo transport and oversized equipment'
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: 'International Trade',
                description: 'Facilitating global trade with comprehensive shipping solutions'
              },
              {
                icon: <BarChart className="w-7 h-7" />,
                title: 'Market Analysis',
                description: 'In-depth market research and strategic consulting for informed decisions'
              },
              {
                icon: <Package className="w-7 h-7" />,
                title: 'Turnkey Solutions',
                description: 'Complete maritime infrastructure and logistics projects from concept to completion'
              },
              {
                icon: <Truck className="w-7 h-7" />,
                title: 'Multimodal Transport',
                description: 'Seamlessly integrated transportation solutions across different modes'
              },
              {
                icon: <Compass className="w-7 h-7" />,
                title: 'Route Optimization',
                description: 'Efficiency-focused route planning to minimize costs and environmental impact'
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Expert Consultation',
                description: 'Personalized advisory services from industry veterans with decades of experience'
              }
            ].map((service, index) => (
              <div 
                key={index}
                data-id={index + 4}
                className={`group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm 
                         hover:shadow-xl transition-all duration-500 hover:-translate-y-2
                         ${inView.includes(index + 4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center 
                              text-blue-600 mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                data-id="20"
                className={`text-4xl font-bold text-white mb-8 leading-tight transition-all duration-700 ${inView.includes(20) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Global Maritime Expertise You Can Trust
              </h2>
              <div 
                data-id="21"
                className={`h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-300 mb-8 rounded-full transition-all duration-700 delay-100 ${inView.includes(21) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}></div>
              
              <div 
                data-id="22"
                className={`space-y-6 text-white/90 transition-all duration-700 delay-200 ${inView.includes(22) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <p className="text-lg leading-relaxed">
                  Our international team of experts brings decades of experience in maritime chartering and logistics, providing you with the knowledge and connections to navigate complex global shipping challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  From specialized cargo to infrastructure projects, we deliver tailored solutions that optimize your operations and drive strategic growth in today's competitive maritime landscape.
                </p>
              </div>
              
              <button 
                data-id="23"
                className={`mt-8 px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:shadow-lg transition-all duration-500 hover:scale-105 transition-all duration-700 delay-300 ${inView.includes(23) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Work With Our Team
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Global Projects", value: "500+" },
                { title: "Years Experience", value: "30+" },
                { title: "Client Retention", value: "95%" },
                { title: "Industry Partners", value: "100+" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  data-id={24 + index}
                  className={`p-8 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 hover:scale-105 transform transition-all duration-700 ${inView.includes(24 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-blue-100">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-10 -z-10"></div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            data-id="30"
            className={`p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-lg relative overflow-hidden transition-all duration-700 ${inView.includes(30) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-gradient-to-tr from-blue-100 to-cyan-200 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-gradient-to-bl from-blue-200 to-blue-100 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ready to transform your maritime operations?</h2>
                  <p className="text-lg text-blue-700">
                    Contact our team today for a personalized consultation on how our chartering services can optimize your shipping strategy.
                  </p>
                </div>
                <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4 lg:text-right">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105">
                    Schedule a Consultation
                  </button>
                  <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-medium border border-blue-200 hover:shadow-sm hover:bg-blue-50 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Consultancy;