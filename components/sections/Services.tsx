// components/sections/Services.tsx
'use client';

const services = [
  {
    title: 'Eco Friendly Packaging',
    description: '100% biodegradable and sustainable packaging solutions',
    icon: '🌱',
  },
  {
    title: 'Customized Printing',
    description: 'Full-color custom printing with your logo and branding',
    icon: '🎨',
  },
  {
    title: 'Bulk Manufacturing',
    description: 'Large-scale production with MOQ starting from 20KG',
    icon: '🏭',
  },
  {
    title: 'Quality Products',
    description: 'Rigorous quality checks on every batch we produce',
    icon: '⭐',
  },
  {
    title: 'Fast Delivery',
    description: 'Timely production and shipping across Nepal',
    icon: '🚚',
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            WHAT WE OFFER
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive eco-friendly packaging solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}