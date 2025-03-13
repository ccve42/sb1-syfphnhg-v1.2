import React from 'react';

const products = [
  {
    title: 'Icon Horado',
    subtitle: 'Work-Rest Hours',
    image: '/img/work.jpg',
    description: 'Monitoring of Work-Rest Hours onboard the ship is vital as it has a direct impact on the safety of the ship, cargo, and crew.',
    link: '/products/work-rest-hours'
  },
  {
    title: 'Icon Argus',
    subtitle: 'Surveys & Inspections',
    image: '/img/surveys-and-inspections2.jpeg',
    description: 'A specialized mobile application assisting the user to collect and collate data as per different surveying/ inspection requirements.',
    link: '/products/surveys-inspections'
  },
  {
    title: 'Icon Maris',
    subtitle: 'Ship Guard',
    image: '/img/ship-watch.jpg',
    description: 'Guarding your asset, even more carefully with the help of RFID technology. Cold laid-up ships are manned round the clock by trained watchmen.',
    link: '/products/ship-guard'
  },
  {
    title: 'Icon Doris',
    subtitle: 'Ship Spares Logistics',
    image: '/img/Shiplog2.jpg',
    description: 'Ship Spares Logistics is an essential service ensuring ordered spares are onboard the ship on time, which always keeps your Ship moving.',
    link: '/products/ship-spares-logistics'
  }
];

const Products = () => {
  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 relative">
          <h4 className="text-uppercase mb-5 f-w-700 relative z-10">Products</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="box17"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <h3 className="hover-img text-base sm:text-lg md:text-xl">{product.subtitle}</h3>
              <div className="box-content">
                <h3 className="title">
                  {product.title}
                  <span className="badge badge-pill badge-light text-secondary f-10 p-2">
                    {product.subtitle}
                  </span>
                </h3>
                <p className="post">{product.description}</p>
                <a
                  href={product.link}
                  className="bg-blue btn rounded-0 btn-sm text-light"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;