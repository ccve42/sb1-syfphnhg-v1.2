import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Chartering Consultancy',
    image: '/img/chartering2.jpg',
    description: 'Icon provides bespoke shipbroking services and advice on dry bulk, project/heavy-lift, IMO and tanker chartering across all markets with emphasis on small to mid-sized institutional clientele.',
    link: '/chartering-consultancy'
  },
  {
    title: 'Marketing',
    image: '/img/mar.jpg',
    description: 'Constructive disruption creates growth but also value. When done well and paired with transparency, data-driven insights, and consumer personalization, it strengthens the bonds between a brand and its target audience.',
    link: '/marketing'
  },
  {
    title: 'Technology & AI',
    image: '/img/ai.jpg',
    description: 'We at Icon Maritech dedicate to empower companies to untap and implement the potential of artificial intelligence, machine learning and latest tech solutions in their business.',
    link: '/technology-and-ai',
    fullWidth: true
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 relative">
          <h4 className="text-uppercase mb-5 f-w-700 relative z-10">Services</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={index}
              className={`box17 ${service.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[237px] md:h-full object-cover"
              />
              <h3 className="hover-img">{service.title}</h3>
              <div className={service.fullWidth ? 'box-content-wide' : 'box-content'}>
                <h3 className="title">{service.title}</h3>
                <p className="post">{service.description}</p>
                <Link
                  to={service.link}
                  className="bg-blue btn rounded-0 btn-sm text-light"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;