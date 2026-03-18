// components/sections/OurOutlets.tsx
'use client';

// --- Uniform Icon Components ---
const IconPrinter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

const IconScissors = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconPalette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"></circle>
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"></circle>
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"></circle>
    <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

const machines = [
  {
    name: 'Printing Machine',
    description: 'High-quality custom printing for all bag types',
    iconComponent: <IconPrinter />,
  },
  {
    name: 'Stitching Machine',
    description: 'Precision stitching for durable handles and seams',
    iconComponent: <IconScissors />,
  },
  {
    name: 'D-Cut Making Machine',
    description: 'Efficient D-cut bag production',
    iconComponent: <IconSettings />,
  },
  {
    name: 'Screen Print Machine',
    description: 'Eco-friendly screen printing on Lokta and canvas',
    iconComponent: <IconPalette />,
  },
];

export function OurOutlets() {
  return (
    <section className="section-padding pt-0 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            OUR FACILITY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Our <span className="text-green-600">Workplace</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Company Info Card */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white min-h-[300px] flex items-center justify-center relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md border border-white/10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Eco Promotional Industries</h3>
              <p className="text-green-100 text-sm md:text-base">Thashikhel Chowk, Lalitpur, Nepal</p>
            </div>
          </div>

          {/* Machines Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {machines.map((machine, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="text-gray-400 group-hover:text-green-600 transition-colors mb-2">
                  {machine.iconComponent}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{machine.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{machine.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}