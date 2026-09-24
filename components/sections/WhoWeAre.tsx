// components/sections/WhoWeAre.tsx
'use client';
import Image from 'next/image';

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

        {/* Authentic Factory & Showroom Snapshot Grid (Tile of 4 pictures a row on bigger screens) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {[
            {
              src: '/asset/atelier/office-showroom-wall.jpg',
              title: 'Lalitpur Showroom Wall',
              badge: 'Office Setup',
            },
            {
              src: '/asset/atelier/screen-printing-studio.jpg',
              title: 'Screen Printing Studio',
              badge: 'Master Craft',
            },
            {
              src: '/asset/atelier/artisan-sewing-bags.jpg',
              title: 'Stitching & Tailoring',
              badge: 'Precision Seams',
            },
            {
              src: '/asset/atelier/factory-signboard-exterior.jpg',
              title: 'Eco Promotional Industries',
              badge: 'Lalitpur Facility',
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 border border-brand-beige/90 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand-mint block mb-0.5">
                  {item.badge}
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold truncate block">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-6 sm:mt-8">
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

        {/* 5-Step Manufacturing Process Strip */}
        <div className="mt-10 bg-white rounded-3xl border border-brand-beige/90 shadow-xs p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 fiber-bg opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-olive animate-pulse" />
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.2em] text-brand-forest">
                Our Manufacturing Process — Thashikhel, Lalitpur
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { step: '01', label: 'Raw Material', sub: 'PP Fabric / Cotton / Lokta / Kraft', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" /></svg>
                )},
                { step: '02', label: 'Cut & Stitch', sub: 'Die-cut, ultrasonic weld & cross-stitch', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
                )},
                { step: '03', label: 'Screen Print', sub: 'Multi-color flexo & screen printing', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                )},
                { step: '04', label: 'Quality Check', sub: 'Tensile, tear & weight-bearing QC', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                )},
                { step: '05', label: 'Dispatch', sub: 'Nationwide delivery from Lalitpur', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                )},
              ].map((s, i, arr) => (
                <div key={s.step} className="flex flex-col items-center text-center relative">
                  {/* Connector line */}
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-px bg-brand-beige border-t border-dashed border-brand-olive/30 z-0" />
                  )}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-brand-linen border-2 border-brand-olive/40 flex items-center justify-center text-brand-forest mb-2.5">
                    {s.icon}
                  </div>
                  <span className="text-[9px] font-sans font-black text-brand-olive uppercase tracking-widest mb-0.5">{s.step}</span>
                  <span className="text-[11px] sm:text-xs font-serif font-bold text-brand-forest leading-tight">{s.label}</span>
                  <span className="text-[9px] font-sans text-stone-500 mt-0.5 leading-tight hidden sm:block">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factory Address Card */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
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