import React, { useState } from 'react';
import { Users, Brain, Clock, Award } from 'lucide-react';

const sections = [
  {
    title: 'EXPERIENCED',
    image: '/img/experience.jpeg',
    content: 'As experienced business owners ourselves focusing on growth, the bottom line and compliance, we understand and have responded to the needs of the shipping industry and their concerns that their tech service providers lacked the depth and knowledge of the shipping world.'
  },
  {
    title: 'PROFESSIONAL',
    image: '/img/professionals.jpeg',
    content: 'IconMaritech was conceived as the result of a planned collaborative effort of highly experienced professionals with proven track records in the Maritime, Information Technology and Management Consulting worlds. Our management team collectively has over 70 years of independent international experience in their respective fields.'
  },
  {
    title: 'KNOWLEDGEABLE',
    image: '/img/knowledgeable.jpeg',
    content: 'Efficiently supported by a capable and award-winning team of Master Mariners, Chief Engineers, Chartered Surveyors and industry experts, our development teams have worked in close co-operation with our clientele to develop a suite of Digital Maritime Applications that have evolved to become essential indispensable requirements in the maritime industry.'
  }
];

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="/img/about.jpg"
          alt="Enable Your Tomorrow, Today"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Enable Your
              <br />
              Tomorrow, Today
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              <span className="font-semibold">Icon Maritech</span> is a designer and developer of smart mobile and cloud based digital applications and 
              solutions primarily for use by the Maritime, Logistics and Aviation industry. The company draws on our 
              management team's heritage of several decades of active international shipping and experience and long standing 
              relationships globally with first class principals.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Sections */}
      <section className="relative" id="main">
        {/* Navigation */}
        <div className="tab-sec" id="b-about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row" role="tablist">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  role="tab"
                  className={`flex-1 text-center ${
                    index === activeSection ? 'bg-[#045a80]' : ''
                  }`}
                >
                  <h4>{section.title}</h4>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <img
                  src={sections[activeSection].image}
                  alt={sections[activeSection].title}
                  className="w-full h-[400px] object-cover shadow-lg"
                />
              </div>
              <div>
                <p>{sections[activeSection].content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default About;