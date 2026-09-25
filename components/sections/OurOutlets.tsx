// components/sections/OurOutlets.tsx
'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface FacilityPhoto {
  id: string;
  title: string;
  category: 'Printing & Offset' | 'Cutting & Tailoring' | 'Automated Production' | 'Materials & Products';
  badge: string;
  description: string;
  image: string;
  alt: string;
}

const facilityPhotos: FacilityPhoto[] = [
  {
    id: 'heidelberg-console',
    title: 'Heidelberg MO Press Console',
    category: 'Printing & Offset',
    badge: 'Offset Printing',
    description: 'Heidelberg MO multi-color offset press control desk, micrometer dials, and precision speed regulators.',
    image: '/asset/atelier/atelier-heidelberg-press-control-console.jpg',
    alt: 'Heidelberg MO Offset Press Control Desk - Eco Promotional Industries Lalitpur'
  },
  {
    id: 'sheet-feeder',
    title: 'Sheet-Fed Offset Feeder',
    category: 'Printing & Offset',
    badge: 'Industrial Feed',
    description: 'High-speed automated paper feeding mechanism with vacuum suction cups for crisp color registration.',
    image: '/asset/atelier/atelier-offset-press-sheet-feeder.jpg',
    alt: 'Industrial Sheet-Fed High-Speed Printing Press - Eco Print & Pack Nepal'
  },
  {
    id: 'screen-printing-studio',
    title: 'Screen Printing Studio',
    category: 'Printing & Offset',
    badge: 'Hand Screen Print',
    description: 'Master screen printer pulling high-pigment squeegee onto natural organic cotton tote bags.',
    image: '/asset/atelier/screen-printing-studio.jpg',
    alt: 'Screen Printing Craftsman in Workshop - Eco Print & Pack Nepal'
  },
  {
    id: 'rotary-cutting',
    title: 'Precision Rotary Cutting',
    category: 'Cutting & Tailoring',
    badge: 'Material Prep',
    description: 'Electric round-knife industrial cutter slicing multi-layered fabric stacks to exact custom dimensions.',
    image: '/asset/atelier/atelier-precision-rotary-fabric-cutting.jpg',
    alt: 'High-Precision Rotary Electric Fabric Cutting - Eco Promotional Industries'
  },
  {
    id: 'master-stitching',
    title: 'Master Tailoring Station',
    category: 'Cutting & Tailoring',
    badge: 'Precision Stitching',
    description: 'Senior craftsman at industrial lockstitch machine surrounded by multi-color thread spools.',
    image: '/asset/atelier/atelier-artisan-tailor-stitching.jpg',
    alt: 'Master Artisan at Industrial Sewing Machine - Eco Print & Pack Nepal'
  },
  {
    id: 'artisan-portrait',
    title: 'Artisan Bag Assembly',
    category: 'Cutting & Tailoring',
    badge: 'Local Craft',
    description: 'Meticulous cross-stitching on bag handles and seam reinforcement for heavy weight-bearing durability.',
    image: '/asset/atelier/atelier-artisan-craftsman-portrait.jpg',
    alt: 'Artisan Craftsman at Sewing Station - Eco Promotional Industries Lalitpur'
  },
  {
    id: 'ultrasonic-welding',
    title: 'Ultrasonic Bag Welding',
    category: 'Automated Production',
    badge: 'Heat-Sealing',
    description: 'Automated ultrasonic heat-bonding machine sealing side seams on non-woven bags with high tensile strength.',
    image: '/asset/atelier/atelier-automated-ultrasonic-bag-welding.jpg',
    alt: 'High-Speed Ultrasonic Bag Assembly and Heat Sealing - Eco Print & Pack'
  },
  {
    id: 'machine-console',
    title: 'Automated Production Console',
    category: 'Automated Production',
    badge: 'CNC Interface',
    description: 'Digital computerized control interface monitoring roll tension, bag length, and cutting speed.',
    image: '/asset/atelier/atelier-automated-bag-machine-console.jpg',
    alt: 'Automated Bag Machine Digital Interface and Production Workspace'
  },
  {
    id: 'raw-material-storage',
    title: 'Virgin Fabric Roll Inventory',
    category: 'Materials & Products',
    badge: 'Raw Material',
    description: 'Heavy non-woven polypropylene and cotton fabric rolls ready for batch cutting and production.',
    image: '/asset/atelier/atelier-fabric-raw-material-storage.jpg',
    alt: 'Raw Non-Woven Fabric Rolls in Material Storage - Eco Promotional Industries'
  },
  {
    id: 'printed-black-bags',
    title: 'Custom Screen-Printed Bags',
    category: 'Materials & Products',
    badge: 'Finished Goods',
    description: 'Finished boutique black non-woven shopping bags featuring precision metallic silver screen printing.',
    image: '/asset/atelier/atelier-custom-printed-black-bags.jpg',
    alt: 'Custom Screen-Printed Boutique Shopping Bags - Eco Print & Pack Nepal'
  },
  {
    id: 'paper-bag-specimen',
    title: 'Rope-Handle Paper Bag',
    category: 'Materials & Products',
    badge: 'Paper Packaging',
    description: 'Studio specimen of boutique luxury white paper bag with hand-twisted cotton rope handles.',
    image: '/asset/atelier/atelier-handcrafted-paper-bag-specimen.jpg',
    alt: 'Handcrafted Rope-Handle White Paper Bag Specimen - Eco Promotional Industries'
  },
  {
    id: 'factory-entrance',
    title: 'Official Factory Entrance',
    category: 'Materials & Products',
    badge: 'Lalitpur Facility',
    description: 'Eco Promotional Industries official entrance and signboard at Thashikhel Chowk, Lalitpur Ward 13.',
    image: '/asset/atelier/factory-signboard-exterior.jpg',
    alt: 'Eco Promotional Industries Factory Entrance & Signboard - Lalitpur Ward 13'
  }
];

const categoryTabs = [
  'All Views',
  'Printing & Offset',
  'Cutting & Tailoring',
  'Automated Production',
  'Materials & Products'
] as const;

export function OurOutlets() {
  const [activeTab, setActiveTab] = useState<string>('All Views');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeTab === 'All Views') return facilityPhotos;
    return facilityPhotos.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  return (
    <section id="workplace" className="section-padding bg-white relative font-sans overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-beige/50 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-beige text-brand-forest px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-brand-mint/40">
            <span className="w-2 h-2 rounded-full bg-brand-olive animate-pulse" />
            <span className="tracking-widest uppercase">OUR LALITPUR FACILITY &amp; SHOWROOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest leading-tight">
            Inside Our <span className="italic font-serif text-brand-olive">Factory &amp; Office Setup</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
            Real snapshots from our active manufacturing atelier at Thashikhel Chowk, Lalitpur Metropolitan City Ward No. 13 — from high-speed Heidelberg offset printing to precision rotary cutting, ultrasonic welding, and master hand stitching.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 flex-wrap">
          {categoryTabs.map((tab) => {
            const count = tab === 'All Views' 
              ? facilityPhotos.length 
              : facilityPhotos.filter(p => p.category === tab).length;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActivePhotoIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-brand-forest text-white shadow-md'
                    : 'bg-[#FAF8F5] text-stone-600 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Real Factory Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-stone-900 border border-brand-beige/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border border-white/10">
                    {photo.badge}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-white text-xs font-serif font-bold leading-tight mb-1">
                    {photo.title}
                  </span>
                  <span className="text-white/80 text-[11px] font-sans line-clamp-2 leading-snug hidden sm:block">
                    {photo.description}
                  </span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-brand-mint">
                      Click to Enlarge
                    </span>
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                      🔍
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Category Bar */}
              <div className="p-3 bg-white border-t border-brand-beige/50">
                <h3 className="font-serif text-xs sm:text-sm font-bold text-brand-forest truncate">
                  {photo.title}
                </h3>
                <p className="text-[10px] font-sans uppercase tracking-wider text-brand-olive mt-0.5">
                  {photo.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Manufacturing Process Strip */}
        <div className="mt-10 md:mt-12 bg-brand-forest text-white rounded-3xl border border-brand-moss shadow-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] graffiti-texture pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.2em] text-brand-mint">
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
                <div key={s.step} className="flex flex-col items-center text-center relative group">
                  {/* Connector line */}
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-[calc(50%+22px)] w-[calc(100%-44px)] h-px border-t border-dashed border-white/20 z-0" />
                  )}
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-brand-mint/40 flex items-center justify-center text-brand-mint mb-2.5 shadow-sm group-hover:scale-110 group-hover:bg-brand-mint group-hover:text-brand-forest transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-sans font-black text-brand-mint uppercase tracking-widest mb-0.5">{s.step}</span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-white leading-tight">{s.label}</span>
                  <span className="text-[10px] font-sans text-stone-300 mt-1 leading-snug hidden sm:block max-w-[140px]">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Facility Features Strip */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-brand-beige text-center">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">50,000+</div>
            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 mt-1">Monthly Production</div>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-brand-beige text-center">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">100% In-House</div>
            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 mt-1">Screen &amp; Flexo Printing</div>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-brand-beige text-center">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">Full Showroom</div>
            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 mt-1">Physical Bag Samples</div>
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-brand-beige text-center">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">Ward No. 13</div>
            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-500 mt-1">Lalitpur Metropolitan City</div>
          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal with Next / Prev */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950/80 border-b border-stone-800 text-white z-20">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-forest text-brand-mint border border-brand-moss">
                  {activePhoto.badge}
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-stone-100 truncate">
                  {activePhoto.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-stone-400">
                  {activePhotoIndex! + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Image Container with Prev / Next */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-stone-950 flex-1 min-h-[300px] sm:min-h-[460px]">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Previous photo"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="px-5 py-3 bg-stone-950/90 border-t border-stone-800 text-stone-300 text-xs sm:text-sm font-sans flex items-center justify-between">
              <span>{activePhoto.description}</span>
              <span className="text-[10px] text-stone-500 hidden sm:inline uppercase tracking-widest ml-4 whitespace-nowrap">
                Thashikhel, Lalitpur Atelier
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}