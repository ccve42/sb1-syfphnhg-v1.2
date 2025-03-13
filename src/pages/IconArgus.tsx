import React from 'react';

const IconArgus = () => {
  return (
    <main id="main" className="product-page">
      <section className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <img 
                src="/img/surveys-and-inspections.jpeg" 
                alt="Surveys and Inspections" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase mb-2">Icon Argus</h4>
              <span className="text-gray-600 text-sm tracking-[2.5px]">Surveys & Inspections</span>
              
              <p className="mt-6 text-gray-700 leading-relaxed">
                A specialized mobile application assisting the user to collect and collate data as per different 
                surveying/ inspection requirements, on-board the ship. The Application can be configured for a 
                range of activities such as vessel manager inspections, draft survey, IHM survey, SIRE, Right 
                Ship, etc., based on the checklists for each type of inspection.
                <br /><br />
                This app enables increased efficiency, by greatly reducing the time taken for inspection to 
                report generation.
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-xl font-bold mb-4">PRODUCT DETAILS</h4>
              <p className="text-gray-700 leading-relaxed">
                This application can be configured on intrinsically safe devices thereby enabling it to be
                used onboard hazardous cargo ships such as oil and gas tankers. Furthermore, it can
                also be used in offline mode where internet connectivity is not available, especially
                places like the engine room, cargo holds, or even when sailing on the high seas or in
                anchorage. Application enables multiple users to conduct the survey of the same
                vessel simultaneously by different users covering different areas of the ship, and later
                the data can be merged for generating a consolidated report.<br /><br />
                The product alerts the inspector of issues noted at a particular check-point in
                the previous inspection, thereby ensuring that such issues have been rectified.
              </p>
            </div>
            <div className="flex gap-4">
              <img 
                src="/img/su1.png" 
                alt="Survey Interface 1" 
                className="w-1/2 rounded-lg shadow-lg"
              />
              <img 
                src="/img/su2.png" 
                alt="Survey Interface 2" 
                className="w-1/2 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features and Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-6">FEATURES</h4>
              <ul className="space-y-4">
                {[
                  'Collect various types of data (pre-configured values, photographs, GPS Coordinates, comments)',
                  'Configurable to different checklists and templates to perform various surveys and inspections.',
                  'Ability to generate class specific compliance reports such as IHM survey report.',
                  'Built in instructions and guidelines available during the course of the inspection.',
                  'Configurable and customisable survey/ inspection reports.',
                  'Ability to convert voice notes to text thereby ensuring fast and easy data entry.',
                  'Compare data of previous inspection with current inspection.',
                  'Data secured on cloud, including history.'
                ].map((feature, index) => (
                  <li key={index}>
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 block">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">BENEFITS</h4>
              <ul className="space-y-4">
                {[
                  'Can be configured for different types of inspections and surveys.',
                  'Prompts for extra caution at checkpoints where an observation was noted in previous inspection (if previous inspection data is available).',
                  'Reduces the time taken from inspection to report generation.',
                  'Enables vessel wise, fleet wise data analytics based on historic data.',
                  'Ability to split the survey to more than one user by assigning different areas of the ship to each, thereby enabling faster survey.',
                  'Ability to define your own guidelines and checkpoints.'
                ].map((benefit, index) => (
                  <li key={index}>
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 block">{benefit}</span>
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

export default IconArgus;