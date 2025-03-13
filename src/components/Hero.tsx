import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/img/slide-1.jpg',
    title: 'Disrupting the Maritime & Shipping Industry with Technology',
    description: 'Icon Maritech brings a suite of disruptive and innovative technologies to the market. This includes digital products, technically advanced systems, devices, and services.'
  },
  {
    image: '/img/slide-2.jpg',
    title: 'Advanced Maritime Solutions',
    description: 'Leveraging cutting-edge technology to transform maritime operations and enhance efficiency across the shipping industry.'
  },
  {
    image: '/img/slide-3.jpg',
    title: 'Global Maritime Excellence',
    description: 'Providing comprehensive maritime solutions that drive innovation and sustainable growth in the shipping sector.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(true);
      }, 200);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(true);
    }, 200);
  };

  return (
    <div className="relative min-h-screen">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className={`${isAnimating ? 'slide-in-right' : 'opacity-0'} px-4 sm:px-0`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
                {slides[currentSlide].title}
              </h1>
            </div>
            <div className={`${isAnimating ? 'slide-in-right delay-200' : 'opacity-0'} px-4 sm:px-0`}>
              <p className="text-base sm:text-lg text-white mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className={`${isAnimating ? 'slide-in-left delay-400' : 'opacity-0'} px-4 sm:px-0`}>
              <button className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 uppercase text-sm font-medium tracking-wider hover:bg-blue-50 transition-colors rounded-lg sm:rounded-none">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white uppercase text-sm tracking-wider mb-2">Scroll Down</p>
        <div className="w-1 h-8 bg-white/50 mx-auto">
          <div className="w-1 h-4 bg-white animate-scroll" />
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-opacity duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;