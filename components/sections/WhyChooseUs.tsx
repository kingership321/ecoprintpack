// components/sections/WhyChooseUs.tsx
'use client';

// --- Uniform Icons ---
const IconFactory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
    <path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path>
  </svg>
);

const IconNepal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconLeafHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M12 20v-9"></path>
    <path d="M9 12l3-3 3 3"></path>
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
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            OUR COMMITMENT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Why Choose <span className="text-green-600">Us?</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                reason.color === 'emerald' ? 'from-emerald-400 to-green-500' :
                reason.color === 'blue' ? 'from-blue-400 to-indigo-500' :
                reason.color === 'amber' ? 'from-amber-400 to-orange-500' :
                'from-green-400 to-teal-500'
              }`}></div>

              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transform group-hover:scale-110 transition-transform duration-300 text-white ${
                  reason.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-green-500' :
                  reason.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                  reason.color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                  'bg-gradient-to-br from-green-400 to-teal-500'
                }`}>
                  {reason.iconComponent}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}