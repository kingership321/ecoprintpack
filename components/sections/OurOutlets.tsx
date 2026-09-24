// components/sections/OurOutlets.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

interface FacilityPhoto {
  id: string;
  title: string;
  tag: string;
  badge: string;
  image: string;
  alt: string;
  description: string;
}

const facilityPhotos: FacilityPhoto[] = [
  {
    id: 'showroom-wall',
    title: 'Office Showroom & Sample Display Wall',
    tag: 'Office Setup & Showroom',
    badge: 'Lalitpur Showroom',
    image: '/asset/atelier/office-showroom-wall.jpg',
    alt: 'Office Showroom & Sample Display Wall - Eco Promotional Industries Lalitpur',
    description: 'Our client sample showroom in Lalitpur featuring hundreds of custom manufactured non-woven and boutique bag samples on display. Clients can inspect GSM weight, texture, stitch durability, and vibrant print finishes before placing bulk orders.'
  },
  {
    id: 'screen-printing',
    title: 'Precision Screen Printing Workshop',
    tag: 'Artisan Workshop',
    badge: 'Screen Printing Studio',
    image: '/asset/atelier/screen-printing-studio.jpg',
    alt: 'Screen Printing Craftsman in Workshop - Eco Print & Pack Nepal',
    description: 'Master craftsman in our printing workshop meticulously hand-pulling crisp, multi-color water-based ink impressions onto custom bags, ensuring sharp brand logos and long-lasting durability.'
  },
  {
    id: 'stitching-line',
    title: 'Artisan Stitching & Precision Sewing Station',
    tag: 'Precision Tailoring',
    badge: 'Industrial Stitching',
    image: '/asset/atelier/artisan-sewing-bags.jpg',
    alt: 'Artisan at Sewing Machine with Thread Spools - Eco Print & Pack Nepal',
    description: 'Skilled tailors operating industrial sewing machines with heavy-duty thread spools, crafting reinforced cross-stitched handles and durable seam finishes for high-load retail and promotional totes.'
  },
  {
    id: 'factory-entrance',
    title: 'Eco Promotional Industries Facility Entrance',
    tag: 'Registered Facility',
    badge: 'Lalitpur Ward No. 13',
    image: '/asset/atelier/factory-signboard-exterior.jpg',
    alt: 'Eco Promotional Industries Factory Entrance & Signboard - Lalitpur Metropolitan City Ward 13',
    description: 'Our official registered manufacturing facility and headquarters located at Thashikhel Chowk, Lalitpur Metropolitan City Ward No. 13. Dedicated to sustainable Nepali manufacturing and zero-plastic alternatives.'
  }
];

export function OurOutlets() {
  const [activePhoto, setActivePhoto] = useState<FacilityPhoto | null>(null);

  return (
    <section id="workplace" className="section-padding bg-white relative font-sans overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-beige/50 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-beige text-brand-forest px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-brand-mint/40">
            <span className="w-2 h-2 rounded-full bg-brand-olive animate-pulse" />
            <span className="tracking-widest uppercase">OUR LALITPUR FACILITY &amp; SHOWROOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest leading-tight">
            Inside Our <span className="italic font-serif text-brand-olive">Factory &amp; Office Setup</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
            Real snapshots from our active workspace at Thashikhel Chowk, Lalitpur Metropolitan City Ward No. 13. 
            From our client sample showroom display wall to master screen-printing and industrial tailoring stations.
          </p>
        </div>

        {/* 4 Spotlight Real Factory Photos Grid (Tile of 4 pictures a row on bigger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {facilityPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-brand-beige/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase bg-brand-forest/90 text-brand-mint backdrop-blur-md border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                    {photo.badge}
                  </span>
                </div>

                {/* Enlarge Hint */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-white/90 text-brand-forest shadow-md flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-mint/90 block">
                    {photo.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug drop-shadow-sm">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Description Card Body */}
              <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-grow">
                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                  {photo.description}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-sans">
                  <span className="text-brand-olive font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Click to inspect full view</span>
                    <span>→</span>
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">Thashikhel, Lalitpur</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Facility Features Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Lightbox Zoom Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-stone-900">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-white">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-brand-beige text-brand-forest mb-2">
                {activePhoto.badge}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest">
                {activePhoto.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                {activePhoto.description}
              </p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                <span>Eco Promotional Industries Pvt. Ltd.</span>
                <span>Thashikhel Chowk, Lalitpur Metropolitan City Ward No. 13</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}