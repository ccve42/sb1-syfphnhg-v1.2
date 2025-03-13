import React from 'react';

const IconMaris = () => {
  return (
    <main id="main" className="product-page">
      <section className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h4 className="text-2xl font-bold uppercase mb-2">Icon Maris</h4>
              <span className="text-gray-600 text-sm tracking-[2.5px]">Ship Guard</span>

              <h4 className="mt-6 mb-4 uppercase text-lg font-semibold">
                Guarding your asset, even more carefully with the help of RFID technology
              </h4>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Cold laid-up ships are manned round the clock by trained watchmen; the ships are boarded
                  regularly by maintenance teams who check conditions on board and perform minor maintenance as necessary.
                  Watchmen then communicate by Radio to the base and report the status.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The shore based staff has to manually collate all the data and generate various reports
                  for the ship owners. This process is time consuming, open to errors, and has no checks to ensure that
                  the watchmen are indeed doing timely rounds.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  To increase the efficiency, reliability, quality and safety of lay up services we
                  developed ShipGuard.
                </p>
              </div>
            </div>

            <div>
              <img 
                src="/img/ShipGuard.jpg" 
                alt="Ship Guard System" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-4">
                <img 
                  src="/img/image004.png" 
                  alt="Ship Guard Interface 1" 
                  className="w-1/2 rounded-lg shadow-lg"
                />
                <img 
                  src="/img/image003.png" 
                  alt="Ship Guard Interface 2" 
                  className="w-1/2 rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase mb-6">
                To increase the efficiency, reliability, quality and safety of lay up
                services we developed ShipGuard.
              </h4>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 block">
                    It ensures that the watchmen on board the laid-up vessel are doing timely rounds and data is being
                    reported accurately.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 block">
                    ShipGuard utilizes state of the art RFID technology to further enhance the monitoring and response
                    capability of your Ship Care Team.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 block">
                    On the shore side it enables instantaneous generation of reports using this data.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 block">
                    The system comprises of 2 components, the mobile app installed on smartphones to be used on board,
                    and, the cloud based app for office use.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IconMaris;