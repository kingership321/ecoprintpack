// components/sections/WhyChooseUs.tsx
'use client';

const reasons = [
  {
    index: '01',
    title: 'Direct Manufacturing',
    subtitle: 'From Factory Floor to Door',
    description: 'Work directly with our Lalitpur craftsmen. No import delays, no middleman markups, and complete flexibility on custom dimensions.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Nepali Craft & Heritage',
    subtitle: 'Preserving 1,000 Years of Tradition',
    description: 'Specialists in indigenous Daphne Lokta paper, natural cotton canvas, and durable retail shopping bags crafted for Nepal businesses.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Tensile Quality Assurance',
    subtitle: 'Tested for Heavy Loads & Wear',
    description: 'Strict ultrasonic welds and reinforced cross-stitch seams ensure every bag carries weight reliably without tearing or handle failure.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Zero Plastic Mission',
    subtitle: 'Tangible Environmental Impact',
    description: 'Every reusable bag we deliver replaces hundreds of single-use polythene bags, directly curbing Nepal’s plastic landfill crisis.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-linen pt-0 pb-10 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Concise & Elegant */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="editorial-tag mb-2">
            <span>Our Distinction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-brand-forest">
            Why Discerning Brands <span className="italic font-serif text-brand-olive">Choose Us</span>
          </h2>
          <p className="mt-2 text-stone-600 font-sans text-xs sm:text-sm leading-relaxed">
            We engineer dependable, eco-conscious brand packaging directly manufactured for your business.
          </p>
        </div>

        {/* Compact 4-Card Responsive Grid (Single line on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {reasons.map((reason) => (
            <div 
              key={reason.index}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-beige/90 shadow-2xs hover:shadow-sm hover:border-brand-olive/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with Index number and icon */}
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-stone-100">
                  <span className="font-serif text-lg sm:text-xl text-brand-olive font-bold tracking-tight">
                    {reason.index}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-brand-linen flex items-center justify-center text-brand-forest group-hover:bg-brand-forest group-hover:text-brand-mint transition-colors duration-200 border border-brand-beige">
                    {reason.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-sm sm:text-base text-brand-forest font-bold leading-snug group-hover:text-brand-moss transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[9px] font-sans uppercase tracking-wider font-semibold text-brand-olive">
                    {reason.subtitle}
                  </p>
                  <p className="text-stone-600 font-sans text-xs leading-relaxed pt-1">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GSM Specification Callout Strip - Compact */}
        <div className="mt-6 rounded-2xl border border-brand-beige bg-white overflow-hidden shadow-2xs">
          <div className="bg-brand-forest px-4 sm:px-6 py-2.5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.18em] text-white">
                Material Specifications &amp; Minimums
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#25D366]/20 border border-[#25D366]/30 rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[9px] font-sans font-bold text-[#25D366] uppercase tracking-wider">Ready to Ship — Lalitpur 🇳🇵</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-brand-beige/80">
            {[
              { material: 'Non-Woven PP', gsm: '60–90 GSM', moq: 'MOQ: 500 pcs', handle: 'Loop / D-Cut' },
              { material: 'Cotton Canvas', gsm: '10–12 OZ', moq: 'MOQ: 100 pcs', handle: 'Webbing Strap' },
              { material: 'Lokta Paper', gsm: '40–80 GSM', moq: 'MOQ: 50 pcs', handle: 'Twisted Rope' },
              { material: 'Kraft Paper', gsm: '90–120 GSM', moq: 'MOQ: 100 pcs', handle: 'Twisted / Flat' },
              { material: 'Garment Cover', gsm: '30–60 GSM', moq: 'MOQ: 200 pcs', handle: 'Full-zip Hanger' },
            ].map((spec) => (
              <div key={spec.material} className="p-3 sm:p-4 flex flex-col gap-0.5">
                <span className="text-[8.5px] font-sans font-black uppercase tracking-[0.15em] text-brand-olive">{spec.material}</span>
                <span className="font-serif text-base font-bold text-brand-forest leading-none">{spec.gsm}</span>
                <span className="text-[9.5px] font-sans text-stone-500 mt-0.5">{spec.handle}</span>
                <span className="text-[8.5px] font-sans font-semibold text-brand-moss uppercase tracking-wider mt-0.5 inline-flex items-center gap-1">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {spec.moq}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}