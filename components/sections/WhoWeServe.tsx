// components/sections/WhoWeServe.tsx
'use client';

// --- Uniform Icon Components ---
const IconStore = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconCake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
    <path d="M2 21h20"></path>
    <path d="M7 8v2"></path>
    <path d="M12 8v2"></path>
    <path d="M17 8v2"></path>
    <path d="M7 4h.01"></path>
    <path d="M12 4h.01"></path>
    <path d="M17 4h.01"></path>
  </svg>
);

const IconHotel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
    <path d="m9 16 .348 1.741A2.25 2.25 0 0 0 11.564 20h.872a2.25 2.25 0 0 0 2.216-1.259L15 16"></path>
    <path d="M9 12h.01"></path><path d="M15 12h.01"></path>
    <path d="M9 8h.01"></path><path d="M15 8h.01"></path>
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const industries = [
  {
    title: 'Retailers',
    description: 'We make bags that carry your brand home with every customer.',
    iconComponent: <IconStore />,
    example: 'Kirana pasal, Boutiques',
  },
  {
    title: 'Restaurants & Bakeries',
    description: 'We create packaging that keeps food fresh and presentation perfect.',
    iconComponent: <IconCake />,
    example: 'Food delivery, Takeaway',
  },
  {
    title: 'Hotels & Spas',
    description: 'We provide elegant solutions that enhance the guest experience.',
    iconComponent: <IconHotel />,
    example: 'Guest amenities, Laundry',
  },
  {
    title: 'Weddings & Events',
    description: 'We offer protective covers and gift bags that add a touch of care.',
    iconComponent: <IconHeart />,
    example: 'Destination weddings, Corporate events',
  },
];

export function WhoWeServe() {
  return (
    <section className="section-padding pt-0 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            OUR CLIENTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Who We <span className="text-green-600">Serve</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            What industry are you in? We have solutions tailored for every business need.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-gray-400 group-hover:text-green-600 transition-colors mb-3">
                  {industry.iconComponent}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{industry.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{industry.description}</p>
                <div className="text-[10px] text-green-700 font-semibold bg-green-50 border border-green-200 px-2 py-0.5 rounded-full inline-block">
                  {industry.example}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nepal Coverage Banner */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl p-5 md:p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-1/4 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">Serving Across Nepal</h3>
            <p className="text-green-100 max-w-3xl mx-auto leading-relaxed text-xs md:text-sm mb-4">
              Whether you need sturdy carriers for your <strong className="text-white">Kirana pasal</strong>, elegant bags for a <strong className="text-white">Pashmina boutique</strong>, 
              or protective covers for a traditional <strong className="text-white">Lehenga or Daura Suruwal</strong>, we understand the local landscape 
              and have the expertise to deliver.
            </p>
            
            <div className="flex flex-wrap justify-center gap-1.5">
              {['New Road', 'Lalitpur', 'Pokhara', 'Thamel', 'Bhaktapur', 'Patan'].map((place, idx) => (
                <span key={idx} className="bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium hover:bg-white/30 transition-colors cursor-default">
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}