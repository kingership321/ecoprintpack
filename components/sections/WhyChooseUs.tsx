// components/sections/WhyChooseUs.tsx
'use client';

const reasons = [
  {
    index: '01',
    title: 'Direct Manufacturing, No Middlemen',
    subtitle: 'From Factory Floor to Your Door',
    description: 'When you work with us, you work directly with the craftsmen and technicians who cut, stitch, and print. No import delays, no hidden markups, and total flexibility on custom dimensions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Authentic Nepali Craft & Heritage',
    subtitle: 'Preserving 1,000 Years of Tradition',
    description: 'We understand local marketplace realities — from luxury wedding packaging in Pokhara to daily retail shopping bags in Patan. We proudly champion indigenous Himalayan Daphne Lokta paper.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Uncompromising Tensile Quality',
    subtitle: 'Tested for Weight, Tear & Wear',
    description: 'Your brand name travels on that bag. If a handle rips or ink rubs off, your reputation suffers. We enforce strict ultrasonic weld and reinforced cross-stitch quality benchmarks on every run.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'A Tangible Ecological Mission',
    subtitle: 'Zero Plastic Waste, One Bag at a Time',
    description: 'Single-use plastic remains Nepal’s most critical visual pollution problem. Every reusable non-woven bag, canvas tote, and biodegradable paper carrier we manufacture eliminates hundreds of plastics from landfills.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-linen pt-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="editorial-tag mb-3">
            <span>Our Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest">
            Why Discerning Brands <span className="italic font-serif text-brand-gold">Choose Us</span>
          </h2>
          <p className="mt-3 text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
            We don&apos;t just produce packaging; we engineer dependable, eco-conscious brand ambassadors for your business.
          </p>
        </div>

        {/* 4 Architectural Indexed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.index}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-brand-moss/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with Index number and icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                  <span className="font-serif text-3xl sm:text-4xl text-brand-gold/70 font-bold tracking-tight">
                    {reason.index}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-brand-linen flex items-center justify-center text-brand-forest group-hover:bg-brand-forest group-hover:text-brand-gold transition-colors duration-300 border border-stone-200/60">
                    {reason.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-forest font-bold group-hover:text-brand-moss transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs font-sans uppercase tracking-wider font-semibold text-brand-gold">
                    {reason.subtitle}
                  </p>
                  <p className="text-stone-600 font-sans text-sm leading-relaxed pt-2">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Bottom Hairline Progress Indicator */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] font-sans font-semibold text-stone-400">
                <span className="uppercase tracking-widest text-stone-500">Eco Print & Pack Standard</span>
                <span className="text-brand-forest font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Learn More <span className="ml-1 text-brand-gold">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}