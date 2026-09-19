// components/sections/Hero.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-brand-forest text-white overflow-hidden">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 opacity-[0.08] graffiti-texture pointer-events-none" />
      
      {/* Subtle organic radial glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-moss/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Manifesto & Typography (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Archival Heritage Stamp */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-sans font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span>Est. 2018 • Kathmandu, Nepal</span>
              <span className="text-white/30">•</span>
              <span className="text-brand-gold">Direct Factory Manufacturer</span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white leading-[1.15]">
                Packaging Crafted with <span className="italic font-serif text-brand-gold font-normal">Integrity.</span>
              </h1>
              <p className="text-lg sm:text-xl font-serif italic text-stone-300 font-normal">
                Manufactured locally. Built for conscious brands.
              </p>
            </div>

            {/* Story copy */}
            <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              From Kathmandu’s heritage ateliers to wholesale retail chains nationwide — we engineer durable, 
              eco-friendly bags in Non-Woven, Cotton Canvas, 1,000-year Himalayan Lokta, and Kraft Paper. 
              Zero guilt. Uncompromising strength. Direct from our Lalitpur manufacturing facility.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-forest font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore Collections</span>
                <span className="transform transition-transform group-hover:translate-x-1 font-bold">→</span>
              </Link>
              
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full border border-white/20 transition-all duration-300"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

            {/* Key Spec Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="font-serif text-xl sm:text-2xl text-white font-bold">1,000+</div>
                <div className="text-[11px] text-stone-400 uppercase tracking-wider font-sans mt-0.5">Retailers Served</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl text-white font-bold">50K+</div>
                <div className="text-[11px] text-stone-400 uppercase tracking-wider font-sans mt-0.5">Bags Monthly</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl text-white font-bold">100%</div>
                <div className="text-[11px] text-stone-400 uppercase tracking-wider font-sans mt-0.5">Nepal Made</div>
              </div>
            </div>

          </div>

          {/* Right Column: Passe-Partout Framed Bag Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Archival Museum Mount Card */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]">
                
                {/* Visual Label Tag */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200/80 text-[10px] font-sans uppercase tracking-widest text-stone-600 font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-forest" />
                    Our 5 Core Varieties
                  </span>
                  <span className="text-brand-gold font-serif italic text-xs capitalize">Atelier Collection</span>
                </div>

                {/* Banner Image */}
                <Link href="/products" className="block group overflow-hidden rounded-xl bg-brand-linen relative">
                  <Image
                    src="/asset/hero-product-banner.png"
                    alt="Eco Print & Pack Bag Varieties: Tote Bag, Non-woven Fabric Bag, Lokta Craft Bags, Brown Krafted Bag, Paper Bag"
                    width={1200}
                    height={567}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                </Link>

                {/* Material Index Strip */}
                <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-sans text-stone-700">
                  <div className="flex items-center space-x-1">
                    <span className="text-brand-forest font-bold">Materials:</span>
                    <span className="text-stone-500 text-[10px]">Non-Woven • Canvas • Lokta • Kraft</span>
                  </div>
                  <Link 
                    href="/products" 
                    className="font-bold text-brand-forest hover:text-brand-gold transition-colors inline-flex items-center text-xs"
                  >
                    <span>View All</span>
                    <span className="ml-1">→</span>
                  </Link>
                </div>

              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-brand-gold/30 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>

      {/* Marquee Ticker - Editorial Archival Band */}
      <div className="relative z-20 bg-brand-moss/80 border-t border-white/10 py-3 overflow-hidden backdrop-blur-sm">
        <div className="animate-marquee space-x-8 text-[11px] font-sans font-semibold text-stone-300 tracking-widest uppercase items-center">
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> D-Cut & W-Cut Non-Woven Bags</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> 100% Pure Cotton Canvas Totes</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> 1,000-Year Heritage Nepali Lokta Craft</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Heavy Duty Brown Kraft Paper Bags</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Garment, Lehenga & Blanket Protective Covers</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Custom Screen & Flexographic Printing</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> D-Cut & W-Cut Non-Woven Bags</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> 100% Pure Cotton Canvas Totes</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> 1,000-Year Heritage Nepali Lokta Craft</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Heavy Duty Brown Kraft Paper Bags</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Garment, Lehenga & Blanket Protective Covers</span>
          <span className="flex items-center whitespace-nowrap"><span className="text-brand-gold mr-3">✦</span> Custom Screen & Flexographic Printing</span>
        </div>
      </div>
    </section>
  );
}