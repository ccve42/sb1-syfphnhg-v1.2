import React from 'react';
import { useLanguage } from '/src/contexts/LanguageContext';

const IconHorado = () => {
  const { language, t } = useLanguage();

  return (
    <main id="main" className="py-20">
      <section className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/work2.jpg" 
                alt="Work Rest Hours Management" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase mb-2">{t('horado.title')}</h4>
              <span className="text-gray-600 text-sm tracking-[2.5px]">{t(`horado.subtitle${language === 'ja' ? '.ja' : ''}`)}</span>
              
              <p className="mt-6 text-gray-700 leading-relaxed">{t(`horado.description${language === 'ja' ? '.ja' : ''}`)}</p>

              <h4 className="text-xl font-bold mt-8 mb-4">{t(`product.details${language === 'ja' ? '.ja' : ''}`)}</h4>
              <p className="text-gray-700 leading-relaxed">{t(`horado.details${language === 'ja' ? '.ja' : ''}`)}</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-xl font-bold mb-6">{t(`product.features${language === 'ja' ? '.ja' : ''}`)}</h4>
              <ul className="space-y-3">
                {[
                  'Violation of rules and regulations identified.',
                  'Registration of Regular and Overtime Work.',
                  'Advanced planning of crew schedule.',
                  'ILO report format, allows user defined periods.',
                  '3 Levels of users and biometric scanning.',
                  'Fleet-Wise Analysis with Dashboard and reports.',
                  'International Date Line Crossing.'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="/img/features.png" 
                alt="Icon Horado Features" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/benefits.png" 
                alt="Icon Horado Benefits" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">BENEFITS</h4>
              <ul className="space-y-3">
                {[
                  'Demonstrable Compliance of regulations onboard the ship.',
                  'Remove Manual process and Minimizes data entry time.',
                  'Ensures authenticity and correctness of the records.',
                  'Analysis of violations enabling improvement potentials.',
                  'Availability of records onshore.'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IconHorado;