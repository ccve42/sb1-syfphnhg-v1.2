import React, { useEffect, useState } from 'react';
import { 
  Lightbulb, 
  Palette, 
  Megaphone, 
  Rocket,
  ChevronRight
} from 'lucide-react';

const services = {
  STRATEGY: {
    icon: <Lightbulb className="w-6 h-6" />,
    items: [
      'Growth Strategy',
      'Brand Strategy',
      'Innovation Strategy',
      'Customer Experience Strategy'
    ]
  },
  DESIGN: {
    icon: <Palette className="w-6 h-6" />,
    items: [
      'Experience Design',
      'Design Language Systems',
      'Brand Identity and Naming',
      'Responsive Web',
      'Native Applications'
    ]
  },
  MARKETING: {
    icon: <Megaphone className="w-6 h-6" />,
    items: [
      'Digital Marketing',
      'Social and Influencer Marketing',
      'Campaign Development',
      'Communications Strategy',
      'Media Planning',
      'Content Strategy',
      'Reporting',
      'Testing and Optimization'
    ]
  },
  IMPLEMENTATION: {
    icon: <Rocket className="w-6 h-6" />,
    items: [
      'Content Production',
      'Interactive Production',
      'Experiential and Event Production',
      'Film and Photo Studio',
      'Post-Production',
      'Full Stack Development',
      'Prototyping'
    ]
  }
};

const Marketing = () => {
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
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/img/mar.jpg"
            alt="Marketing Background"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/85 to-blue-900/75"
            style={{
              opacity: Math.min(1, 0.7 + scrollY * 0.001)
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h1 
              data-id="1"
              className={`text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wider transition-all duration-700 ${
                inView.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Embracing Constructive
              <br />
              Disruption in Marketing
            </h1>

            <div 
              data-id="2"
              className={`h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 transition-all duration-700 delay-100 ${
                inView.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            />

            <div className="space-y-6">
              {[
                'At Icon Maritech we take a strategic and tactical marketing approach focused on creating and distributing valuable, relevant, and consistent efforts to attract and retain a clearly defined audience — and, ultimately, to drive profitability.',
                'Through our love of technology, our hunger for innovation and our close relationships with our clients we develop smart, creative and technology-led solutions to successfully connect users with brands. With more than 2 decades of experience and expertise in maritime we know how to develop strategies that achieve results.',
                'We understand this ever-evolving digital world. And work closely with our clients to develop smart solutions that solve problems, using the latest technology and design innovations.'
              ].map((text, index) => (
                <p
                  key={index}
                  data-id={index + 3}
                  className={`text-white/90 leading-relaxed transition-all duration-700 ${
                    inView.includes(index + 3) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center">
          <div className="animate-bounce flex flex-col items-center text-white/70">
            <p className="mb-2 text-sm font-light tracking-widest uppercase">Explore Our Services</p>
            <ChevronRight className="w-6 h-6 rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            data-id="6"
            className={`text-3xl font-semibold uppercase tracking-wider mb-16 transition-all duration-700 ${
              inView.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(services).map(([category, { icon, items }], index) => (
              <div
                key={category}
                data-id={index + 7}
                className={`transition-all duration-700 ${
                  inView.includes(index + 7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 
                                flex items-center justify-center text-blue-600">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-wider uppercase border-b-2 border-gray-200 pb-2">
                    {category}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400 transition-colors" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Marketing;