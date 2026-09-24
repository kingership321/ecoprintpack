// components/sections/OurOutlets.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

interface FacilityPhoto {
  id: string;
  image: string;
  alt: string;
}

const facilityPhotos: FacilityPhoto[] = [
  {
    id: 'showroom-wall',
    image: '/asset/atelier/office-showroom-wall.jpg',
    alt: 'Office Showroom & Sample Display Wall - Eco Promotional Industries Lalitpur'
  },
  {
    id: 'screen-printing',
    image: '/asset/atelier/screen-printing-studio.jpg',
    alt: 'Screen Printing Craftsman in Workshop - Eco Print & Pack Nepal'
  },
  {
    id: 'stitching-line',
    image: '/asset/atelier/artisan-sewing-bags.jpg',
    alt: 'Artisan at Sewing Machine with Thread Spools - Eco Print & Pack Nepal'
  },
  {
    id: 'factory-entrance',
    image: '/asset/atelier/factory-signboard-exterior.jpg',
    alt: 'Eco Promotional Industries Factory Entrance & Signboard - Lalitpur Metropolitan City Ward 13'
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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-beige text-brand-forest px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-brand-mint/40">
            <span className="w-2 h-2 rounded-full bg-brand-olive animate-pulse" />
            <span className="tracking-widest uppercase">OUR LALITPUR FACILITY &amp; SHOWROOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest leading-tight">
            Inside Our <span className="italic font-serif text-brand-olive">Factory &amp; Office Setup</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
            Real snapshots from our active workspace and manufacturing atelier at Thashikhel Chowk, Lalitpur Metropolitan City Ward No. 13.
          </p>
        </div>

        {/* Spotlight Real Factory Photos Grid (Pictures Only) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {facilityPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-stone-900 border border-brand-beige/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-brand-forest/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                <span className="text-white text-[11px] font-sans font-semibold tracking-wider uppercase bg-brand-forest/90 px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  Enlarge View
                </span>
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-stone-950">
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors z-10"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}