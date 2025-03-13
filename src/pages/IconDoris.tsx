import React from 'react';

const IconDoris = () => {
  return (
    <main id="main" className="product-page">
      <section className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/Shiplog.jpg" 
                alt="Ship Spares Logistics" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold uppercase mb-2">Icon Doris</h4>
              <span className="text-gray-600 text-sm tracking-[2.5px]">Ship Spares Logistics</span>
              
              <div className="mt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Ship Spares Logistics is an essential service ensuring ordered spares are onboard the ship on time, which always keeps your Ship moving. We offer a solution which enables Agents, Forwarders, Ship Owners and Management companies to manage the spares logistics "door-to-deck" globally. The solution brings transparency from Purchase Orders receipt up to final delivery onboard the ship.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our Solution is designed for global network logistics setup as well as standalone for Agents to manage day to day spares logistics movements. The solution is offered as a SaaS model and is built using modern technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
            <div>
              <h4 className="text-xl font-bold mb-6">FEATURES</h4>
              <ul className="space-y-2">
                {[
                  'Register & Track Expected PO',
                  'Track Expected Inbound Shipment',
                  'Receive PO\'s to Stock',
                  'Track Customs Clearance',
                  'Create Outbound Shipments',
                  'Generate Picklist',
                  'Track & Manage Outbound Shipments',
                  'Schedule & Track Delivery Onboard (LMD)',
                  'Generate Delivery Note',
                  'Upload/ View Documents',
                  'Upload/View Proof-Of-Delivery',
                  'Track all costs involved',
                  'Stock Report to Principles',
                  'Generate & Issue Invoices'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start line-h">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 block">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <img 
                src="/img/ship.png" 
                alt="Ship Management Interface" 
                className="w-full rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <div>
              <img 
                src="/img/ship_s.jpg" 
                alt="Ship Logistics" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">BENEFITS</h4>
              <ul className="space-y-3">
                {[
                  'Lowest initial cost.',
                  'All your data is stored electronically in one place.',
                  'Accessibility of information from anywhere in the world.',
                  'Reduced time to benefit, is already installed and configured.',
                  'Scalability and new releases (upgrades)',
                  'Able to send/receive standard reports',
                  'Pay as you Use billing, subscription and consumption-based model.',
                  'Enhanced security using digital ID (BYOI)',
                  'Follow global industry standard data'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
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

export default IconDoris;