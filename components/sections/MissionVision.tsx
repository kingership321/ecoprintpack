// components/sections/MissionVision.tsx
'use client';

export function MissionVision() {
  return (
    <section className="section-padding bg-brand-linen pt-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="editorial-tag mb-3">
            <span>Our Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest">
            Mission & <span className="italic font-serif text-brand-gold">Long-Term Vision</span>
          </h2>
          <p className="mt-3 text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
            The philosophical pillars that guide every cut, stitch, and partnership we forge in Nepal.
          </p>
        </div>

        {/* Dual Manifesto Split */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card: Warm Linen Craft */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-150">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-forest" />
                  <h3 className="font-serif text-2xl text-brand-forest font-bold">Our Mission</h3>
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-stone-400">
                  Everyday Action
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-stone-800 italic leading-relaxed pl-4 border-l-2 border-brand-gold">
                &ldquo;To equip Nepali retailers and enterprises with durable, accessible, and truly eco-friendly packaging solutions that actively curb single-use plastic pollution.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                {[
                  'Manufacture reliable, cost-effective alternatives to polythene shopping bags.',
                  'Maintain rigorous quality standards so bags are reused dozens of times.',
                  'Foster direct relationships with Nepali businesses with transparent factory pricing.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm font-sans text-stone-600">
                    <span className="text-brand-forest mr-2.5 mt-0.5 font-bold">✦</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-6 mt-8 border-t border-stone-100 text-[11px] font-sans text-stone-400 uppercase tracking-widest">
              Actionable Sustainability
            </div>
          </div>

          {/* Vision Card: Deep Botanical Forest */}
          <div className="bg-brand-forest text-white rounded-3xl p-8 sm:p-10 border border-brand-moss shadow-lg flex flex-col justify-between relative overflow-hidden">
            
            {/* Subtle Dotted Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                  <h3 className="font-serif text-2xl text-white font-bold">Our Vision</h3>
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-brand-gold">
                  Future Horizon
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-stone-100 italic leading-relaxed pl-4 border-l-2 border-brand-gold">
                &ldquo;A clean Nepal where every shopping bag is kept, reused, and celebrated — and where sustainable packaging is the default, proud standard for all commercial trade.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                {[
                  'Lead Nepal toward complete phase-out of plastic shopping bags by demonstration.',
                  'Safeguard and modernize indigenous Himalayan Lokta papermaking for global markets.',
                  'Inspire a conscious manufacturing ecosystem grounded in dignity of labor and quality.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm font-sans text-stone-300">
                    <span className="text-brand-gold mr-2.5 mt-0.5">✦</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="relative z-10 pt-6 mt-8 border-t border-white/15 text-[11px] font-sans text-stone-400 uppercase tracking-widest">
              Himalayan Legacy & Future
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}