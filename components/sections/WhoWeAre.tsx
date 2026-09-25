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
            We don&apos;t just supply bags. <br />
            <span className="italic font-serif text-brand-olive">We craft them from the raw fiber.</span>
          </h2>
        </div>

        {/* Editorial Manifesto Card */}
        <div className="w-full bg-brand-forest text-white rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden border border-brand-moss shadow-xl">
          {/* Background Archival Texture */}
          <div className="absolute inset-0 opacity-[0.09] graffiti-texture pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Mission Statement & Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block border-b border-brand-mint/40 pb-2">
                <span className="font-serif italic text-brand-mint text-sm sm:text-base">
                  The Himalayan Standard
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-white">
                &ldquo;More than you anticipate... Packaging engineered for lasting impressions.&rdquo;
              </blockquote>

              <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed max-w-2xl">
                From traditional retail stores across New Road and Thamel to boutique embassies, 
                destination luxury weddings in Pokhara, and organic food exporters — we tailor every stitch, 
                gsm weight, and handle reinforcement to your exact brand demands.
              </p>
            </div>

            {/* Right Col: 3 Core Pillars */}
            <div className="lg:col-span-5 space-y-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xs">
              <div className="text-[10px] font-sans font-black uppercase tracking-[0.18em] text-brand-mint mb-2">
                Manufacturing Commitments
              </div>
              <div className="space-y-3 text-xs sm:text-sm font-sans text-stone-200">
                <div className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 flex-shrink-0" />
                  <span>In-House Multi-Color Screen &amp; Flexo Printing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 flex-shrink-0" />
                  <span>Rigorous Tensile &amp; Tear Weight-Bearing Quality Control</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mint mt-1.5 flex-shrink-0" />
                  <span>Preservation of Ancient Himalayan Daphne Lokta Artisans</span>
                </div>
              </div>
            </div>

            {/* Bottom Atelier Seal spanning full width */}
            <div className="lg:col-span-12 pt-6 mt-2 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-serif font-bold text-white text-base">ECO PRINT &amp; PACK</div>
                <div className="text-[10px] text-stone-400 font-sans tracking-wider uppercase">
                  Eco Promotional Industries Pvt Ltd • Thashikhel, Lalitpur Metropolitan City Ward No. 13
                </div>
              </div>
              <div className="px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-wider text-brand-mint font-semibold">
                Kathmandu Valley Atelier
              </div>
            </div>

          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-beige/90 shadow-xs text-center">
            <div className="font-serif text-3xl sm:text-4xl text-brand-forest font-bold">1,000+</div>
            <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">Happy Clients</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-beige/90 shadow-xs text-center">
            <div className="font-serif text-3xl sm:text-4xl text-brand-forest font-bold">8+</div>
            <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">Years Crafting</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-beige/90 shadow-xs text-center">
            <div className="font-serif text-3xl sm:text-4xl text-brand-forest font-bold">50K+</div>
            <div className="text-[11px] font-sans text-stone-500 uppercase tracking-wider font-semibold mt-1">Bags Monthly</div>
          </div>
        </div>

        {/* Factory Address Card */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-brand-forest text-white rounded-2xl p-5 flex items-start gap-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.07] graffiti-texture pointer-events-none" />
            <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-sans font-black uppercase tracking-[0.18em] text-brand-mint mb-1">Factory Location</div>
              <div className="font-serif font-bold text-white text-sm">Thashikhel Chowk, Lalitpur</div>
              <div className="text-[11px] text-stone-300 font-sans mt-0.5">Lalitpur Metropolitan City Ward No. 13, Nepal 🇳🇵</div>
            </div>
          </div>

          <a
            href="https://wa.me/9779869268248?text=Hello%20Eco%20Print%20%26%20Pack!%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.143 1.547 5.878L.057 23.5l5.797-1.522A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.389l-.361-.214-3.44.903.918-3.352-.235-.375A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-sans font-black uppercase tracking-[0.18em] text-white/80 mb-0.5">Quick Inquiry on</div>
              <div className="font-serif font-bold text-white text-sm group-hover:underline">WhatsApp: +977 9869268248</div>
              <div className="text-[11px] text-white/80 font-sans mt-0.5">Chat with us directly — fast response</div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}