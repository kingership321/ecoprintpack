// components/sections/WhyChooseUs.tsx
'use client';

// --- Uniform Icons in White (all using same stroke width and design language) ---
const IconFactory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
  </svg>
);

const IconNepal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconLeafHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M12 20v-9" />
    <path d="M9 12l3-3 3 3" />
  </svg>
);

const reasons = [
  {
    title: 'We Are Manufacturers, Not Just Suppliers',
    description: 'There is a difference between buying a bag and having a bag made for you. When you work with us, you work directly with the people who cut, stitch, and print.',
    iconComponent: <IconFactory />,
    color: 'emerald',
  },
  {
    title: 'We Understand Nepal Because We Are Nepal Made',
    description: 'We know that a bakery in Patan needs different packaging than a wedding in Dhulikhel. We tailor our approach to the Nepali marketplace.',
    iconComponent: <IconNepal />,
    color: 'blue',
  },
  {
    title: 'We Care About Quality as Much as You Do',
    description: 'Your brand is on that bag. If the handle breaks, if the print fades, that reflects on you. We ensure every bag meets our high standards before it ships.',
    iconComponent: <IconStar />,
    color: 'amber',
  },
  {
    title: 'We Are on a Mission',
    description: 'Nepal has a plastic problem. We see it on our streets, in our rivers. Every eco-friendly bag we produce is a small step toward solving that problem.',
    iconComponent: <IconLeafHeart />,
    color: 'green',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding pt-0 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mb-4 tracking-wider">
            <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            OUR COMMITMENT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-green-600">Us?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We don't just make bags — we build partnerships based on quality, integrity, and shared values.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* Elegant gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${
                reason.color === 'emerald' ? 'from-emerald-50 to-green-50' :
                reason.color === 'blue' ? 'from-blue-50 to-indigo-50' :
                reason.color === 'amber' ? 'from-amber-50 to-orange-50' :
                'from-green-50 to-teal-50'
              }`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                reason.color === 'emerald' ? 'from-emerald-400 to-green-500' :
                reason.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                reason.color === 'amber' ? 'from-amber-400 to-orange-500' :
                'from-green-400 to-teal-500'
              }`}></div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                {/* Icon Container - White icons on colored gradient background */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                  reason.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-green-600' :
                  reason.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                  reason.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-orange-600' :
                  'bg-gradient-to-br from-green-500 to-teal-600'
                }`}>
                  {reason.iconComponent}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors">
                    {reason.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className={`mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r ${
                    reason.color === 'emerald' ? 'from-emerald-400 to-green-500' :
                    reason.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                    reason.color === 'amber' ? 'from-amber-400 to-orange-500' :
                    'from-green-400 to-teal-500'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}