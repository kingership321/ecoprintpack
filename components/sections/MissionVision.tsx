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
            Mission & <span className="italic font-serif text-brand-olive">Long-Term Vision</span>
          </h2>
          <p className="mt-3 text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
            The philosophical pillars that guide every cut, stitch, and partnership we forge in Nepal.
          </p>
        </div>

        {/* Dual Manifesto Split */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card: Warm Linen Craft */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-beige/90 shadow-xs flex flex-col justify-between relative overflow-hidden">
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

              <blockquote className="font-serif text-lg sm:text-xl text-stone-800 italic leading-relaxed pl-4 border-l-2 border-brand-olive">
                &ldquo;To equip Nepali retailers and enterprises with durable, accessible, and truly eco-friendly packaging solutions that actively curb single-use plastic pollution.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                {[
                  'Manufacture reliable, cost-effective alternatives to polythene shopping bags.',
                  'Maintain rigorous quality standards so bags are reused dozens of times.',
                  'Foster direct relationships with Nepali businesses with transparent factory pricing.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm font-sans text-stone-600">
                    <span className="text-brand-olive mr-2.5 mt-0.5 font-bold">✦</span>
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
            
            {/* Subtle Graffiti Texture */}
            <div className="absolute inset-0 opacity-[0.09] graffiti-texture pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-mint" />
                  <h3 className="font-serif text-2xl text-white font-bold">Our Vision</h3>
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-brand-mint">
                  Future Horizon
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-stone-100 italic leading-relaxed pl-4 border-l-2 border-brand-mint">
                &ldquo;A clean Nepal where every shopping bag is kept, reused, and celebrated — and where sustainable packaging is the default, proud standard for all commercial trade.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                {[
                  'Lead Nepal toward complete phase-out of plastic shopping bags by demonstration.',
                  'Safeguard and modernize indigenous Himalayan Lokta papermaking for global markets.',
                  'Inspire a conscious manufacturing ecosystem grounded in dignity of labor and quality.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start text-xs sm:text-sm font-sans text-stone-300">
                    <span className="text-brand-mint mr-2.5 mt-0.5">✦</span>
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

        {/* Himalayan Lokta Heritage Callout */}
        <div className="mt-10 relative rounded-3xl overflow-hidden border border-brand-beige bg-gradient-to-br from-[#F4FAF6] via-white to-[#D8F3DC]/40">
          <div className="absolute inset-0 paper-grain pointer-events-none opacity-60" />
          <div className="absolute inset-0 kraft-lines pointer-events-none" />
          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-forest flex items-center justify-center">
                {/* Leaf/mountain icon */}
                <svg className="w-6 h-6 text-brand-mint" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-sans font-black uppercase tracking-[0.22em] text-brand-olive mb-0.5">Himalayan Heritage</div>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-forest font-bold">The 1,000-Year Story of Lokta Paper</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x divide-brand-beige/60">
              {[
                {
                  year: '~1,000 AD',
                  title: 'Ancient Himalayan Origins',
                  desc: 'Lokta paper is hand-crafted from the bark of the Daphne plant — a shrub native to Nepal\'s highland forests between 5,000–13,000 ft elevation. The craft has been practiced in Nepal for over a millennium.',
                  icon: '🏔️',
                },
                {
                  year: 'Traditional Process',
                  title: 'Tree-Free, Hand-Made',
                  desc: 'The fibrous Daphne bark is boiled, beaten, and sun-dried on flat wooden frames. No trees are felled — the bark regenerates within 5–7 years. Every sheet is unique.',
                  icon: '🌿',
                },
                {
                  year: 'Eco Print & Pack Today',
                  title: 'Preserving the Craft',
                  desc: 'We source Lokta paper directly from Bhaktapur and Baglung artisans, employing traditional families who have practiced this craft for generations — keeping the heritage alive in every bag.',
                  icon: '🤝',
                },
              ].map((item) => (
                <div key={item.year} className="px-0 py-4 sm:px-6 sm:py-0 first:pl-0 last:pr-0">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-[9px] font-sans font-black uppercase tracking-[0.18em] text-brand-olive mb-1">{item.year}</div>
                  <div className="font-serif font-bold text-brand-forest text-sm mb-1.5">{item.title}</div>
                  <p className="text-[11px] sm:text-xs font-sans text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}