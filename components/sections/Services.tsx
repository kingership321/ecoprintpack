// components/sections/Services.tsx
'use client';

const services = [
  {
    title: 'Eco Friendly Packaging',
    description: '100% biodegradable and sustainable packaging solutions',
    renderIcon: () => (
      <svg className="w-6 h-6 text-brand-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12c0-3.5 1.8-6.6 4.5-8.4" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#2D6A4F" />
        <path d="M9 9h.01M15 9h.01" strokeWidth="2.5" stroke="#C8933A" />
      </svg>
    ),
  },
  {
    title: 'Customized Printing',
    description: 'Full-color custom printing with your logo and branding',
    renderIcon: () => (
      <svg className="w-6 h-6 text-brand-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" stroke="#C8933A" />
      </svg>
    ),
  },
  {
    title: 'Bulk Manufacturing',
    description: 'Large-scale production with MOQ starting from 20KG',
    renderIcon: () => (
      <svg className="w-6 h-6 text-brand-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l5 4V8l5 4V4l5 4v12" />
        <line x1="8" y1="16" x2="8" y2="16.01" stroke="#C8933A" strokeWidth="2.5" />
        <line x1="12" y1="16" x2="12" y2="16.01" stroke="#C8933A" strokeWidth="2.5" />
        <line x1="16" y1="16" x2="16" y2="16.01" stroke="#C8933A" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Quality Products',
    description: 'Rigorous quality checks on every batch we produce',
    renderIcon: () => (
      <svg className="w-6 h-6 text-brand-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#C8933A" />
        <circle cx="12" cy="12" r="3" stroke="#2D6A4F" />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery',
    description: 'Timely production and shipping across Nepal',
    renderIcon: () => (
      <svg className="w-6 h-6 text-brand-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="#C8933A" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="#C8933A" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-beige/40 via-brand-linen to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-brand-beige text-brand-forest px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-brand-mint/30">
            <svg className="w-3 h-3 mr-1.5 text-brand-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            WHAT WE OFFER
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-forest mb-3">
            Our <span className="italic font-serif text-brand-olive">Services</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto font-sans">
            Comprehensive eco-friendly packaging solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-xs border border-brand-beige/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-brand-beige/70 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-brand-mint/30">
                {service.renderIcon()}
              </div>
              <h3 className="text-sm font-serif font-bold text-brand-forest mb-1.5">{service.title}</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}