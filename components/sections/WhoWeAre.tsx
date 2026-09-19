// components/sections/WhoWeAre.tsx
'use client';

export function WhoWeAre() {
  return (
    <section id="about" className="section-padding bg-brand-linen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="editorial-tag mb-3">
            <span>Direct Manufacturing Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest leading-tight">
            We don’t just supply bags. <br />
            <span className="italic font-serif text-brand-gold">We craft them from the raw fiber.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Story & Stats Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4 text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-brand-forest font-semibold">Eco Promotional Industries</strong>, 
                we believe high-grade packaging should never come at the expense of our Himalayan ecosystem. 
                That conviction led us to build a full-fledged local manufacturing facility in Lalitpur, Nepal.
              </p>
              
              <p>
                When you collaborate with us, you eliminate third-party markups and communicate directly 
                with the specialists who supervise raw material sourcing, automated ultrasonic cutting, 
                heavy-duty stitching, and precision multi-color screen printing.
              </p>
              
              <p>
                Our production lines cover the full spectrum of sustainable materials: lightweight yet 
                durable <strong className="text-brand-forest font-semibold">Non-Woven Fabric</strong>, 
                heavyweight organic <strong className="text-brand-forest font-semibold">Cotton Canvas</strong>, 
                biodegradable <strong className="text-brand-forest font-semibold">Brown Kraft Paper</strong>, 
                and Nepal&apos;s proud heritage — <strong className="text-brand-forest font-semibold">Indigenous Lokta Paper</strong>, 
                harvested sustainably at 6,000+ ft in the Himalayas.
              </p>
            </div>

            {/* Architectural Stat Dividers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-300/80">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-xs">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-bold">1,000+</div>
                <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">
                  Happy Clients
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-xs">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-bold">8+</div>
                <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">
                  Years Crafting
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-xs">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest font-bold">50K+</div>
                <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">
                  Bags Monthly
                </div>
              </div>
            </div>

          </div>

          {/* Right Editorial Manifesto Column (5 cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-brand-forest text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden border border-brand-moss shadow-xl">
              
              {/* Background Archival Texture */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="inline-block border-b border-brand-gold/40 pb-2">
                  <span className="font-serif italic text-brand-gold text-sm sm:text-base">
                    The Himalayan Standard
                  </span>
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl font-normal leading-snug text-white">
                  &ldquo;More than you anticipate... Packaging engineered for lasting impressions.&rdquo;
                </blockquote>

                <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed">
                  From traditional retail stores across New Road and Thamel to boutique embassies, 
                  destination luxury weddings in Pokhara, and organic food exporters — we tailor every stitch, 
                  gsm weight, and handle reinforcement to your exact brand demands.
                </p>

                {/* 3 Core Production Pillars */}
                <div className="space-y-3 pt-2 text-xs font-sans text-stone-200">
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>In-House Multi-Color Screen & Flexo Printing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Rigorous Tensile & Tear Weight-Bearing Quality Control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Preservation of Ancient Himalayan Daphne Lokta Artisans</span>
                  </div>
                </div>

              </div>

              {/* Bottom Atelier Seal */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-white text-sm">ECO PRINT & PACK</div>
                  <div className="text-[10px] text-stone-400 font-sans tracking-wider uppercase">
                    Eco Promotional Industries Pvt Ltd
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-wider text-brand-gold">
                  Kathmandu
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}