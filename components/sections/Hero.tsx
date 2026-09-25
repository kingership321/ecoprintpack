// components/sections/Hero.tsx
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NepalFlag from '../NepalFlag';

const heroProducts = [
  {
    id: 'canvas',
    name: 'Cotton Canvas Tote Bag',
    shortName: 'Canvas',
    badge: 'Cotton & Canvas',
    material: 'Pure Woven Cotton',
    image: '/asset/products-studio/canvas-tote.jpg',
    link: '/products#canvas',
    desc: 'Heavy-duty natural canvas with reinforced shoulder straps',
  },
  {
    id: 'wcut',
    name: 'W-Cut Non-Woven Bag',
    shortName: 'W-Cut',
    badge: 'Non-Woven',
    material: 'Water-Resistant PP',
    image: '/asset/products-studio/wcut-bag.jpg',
    link: '/products#non-woven',
    desc: 'Expandable side gussets with flexible shopping carry',
  },
  {
    id: 'coat',
    name: 'Coat & Suit Garment Cover',
    shortName: 'Suit Cover',
    badge: 'Garment Cover',
    material: 'Breathable Fabric',
    image: '/asset/products-studio/coat-cover.jpg',
    link: '/products#covers',
    desc: 'Full-length zipper with hanger opening for wardrobe care',
  },
  {
    id: 'lokta',
    name: 'Himalayan Lokta Paper Bag',
    shortName: 'Lokta Paper',
    badge: 'Handmade Lokta',
    material: 'Artisanal Daphne Bark',
    image: '/asset/products-studio/lokta-bag.jpg',
    link: '/products#lokta',
    desc: 'Tree-free paper embedded with natural mountain petals',
  },
  {
    id: 'kraft',
    name: 'Brown Kraft Paper Bag',
    shortName: 'Kraft Paper',
    badge: 'Kraft Paper',
    material: '100% Recycled Kraft',
    image: '/asset/products-studio/kraft-bag.jpg',
    link: '/products#paper',
    desc: 'Unbleached natural kraft with sturdy twisted paper handle',
  },
  {
    id: 'lehenga',
    name: 'Lehenga & Bridal Cover',
    shortName: 'Bridal Cover',
    badge: 'Garment Cover',
    material: 'Heavy-Duty Fabric',
    image: '/asset/products-studio/lehenga-cover.jpg',
    link: '/products#covers',
    desc: 'Wide gusset protective carrier for sarees, bridal gowns & lehengas',
  },
  {
    id: 'boutique',
    name: 'Luxury Boutique Paper Bag',
    shortName: 'Boutique',
    badge: 'Boutique Paper',
    material: 'Art Board Laminated',
    image: '/asset/products-studio/paper-boutique.jpg',
    link: '/products#paper',
    desc: 'Vibrant offset print with luxury turnover and braided rope',
  },
  {
    id: 'box',
    name: 'Non-Woven Box Bag',
    shortName: 'Box Bag',
    badge: 'Non-Woven',
    material: 'Rigid 3D Gusset',
    image: '/asset/products-studio/box-bag.jpg',
    link: '/products#non-woven',
    desc: 'Self-standing box structure for grocery and retail boxes',
  },
  {
    id: 'quilt',
    name: 'Quilt & Bedding Storage Bag',
    shortName: 'Quilt Bag',
    badge: 'Storage Cover',
    material: 'Transparent Window',
    image: '/asset/products-studio/quilt-bag.jpg',
    link: '/products#covers',
    desc: 'Spacious zipped storage for blankets, duvets, and linens',
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive mobile viewport detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroProducts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Clean up resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Smoothly scroll active thumbnail pill into view without affecting viewport/page
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container) return;
    const activeBtn = container.children[activeIndex] as HTMLElement | undefined;
    if (activeBtn) {
      const targetScrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
      container.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: 'smooth' });
    }
  }, [activeIndex]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroProducts.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  }, []);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 35) {
        goToNext();
      } else if (distance < -35) {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // Only pause on hover if device has true hover capability (desktop cursor)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsPaused(false);
    }
  };

  const activeProduct = heroProducts[activeIndex];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#F4FAF6] to-[#D8F3DC] text-stone-800 overflow-hidden w-full max-w-full">
      {/* Subtle organic light radial ambiance */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#74C69D]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#D8F3DC]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] graffiti-texture pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pt-8 sm:pb-14 md:pt-20 md:pb-24 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
          
          {/* Left Column: Editorial Manifesto & Typography (7 cols) - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block w-full min-w-0 lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Archival Heritage Stamp */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1B4332]/5 backdrop-blur-md border border-[#1B4332]/15 text-brand-forest text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider sm:tracking-widest uppercase max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-pulse flex-shrink-0" />
              <span>Est. 2018 • Kathmandu, Nepal</span>
              <span className="text-brand-forest/30 hidden xs:inline">•</span>
              <span className="text-brand-olive font-bold">Direct Factory Manufacturer</span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-brand-forest leading-[1.15] break-words">
                Packaging Crafted with <span className="italic font-serif text-brand-olive font-normal">Integrity.</span>
              </h1>
              <p className="text-base sm:text-xl font-serif italic text-stone-600 font-normal">
                Manufactured locally. Built for conscious brands.
              </p>
            </div>

            {/* Story copy */}
            <p className="text-stone-700 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              From Kathmandu’s heritage ateliers to wholesale retail chains nationwide — we engineer durable, 
              eco-friendly bags in Non-Woven, Cotton Canvas, 1,000-year Himalayan Lokta, and Kraft Paper. 
              Zero guilt. Uncompromising strength. Direct from our Lalitpur manufacturing facility.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full max-w-md mx-auto lg:mx-0">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-forest hover:bg-brand-moss text-white font-sans text-xs font-bold uppercase tracking-widest px-6 sm:px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore Collections</span>
                <span className="transform transition-transform group-hover:translate-x-1 font-bold text-brand-mint">→</span>
              </Link>
              
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-brand-forest font-sans text-xs font-semibold uppercase tracking-widest px-5 sm:px-6 py-3.5 rounded-full border border-brand-forest/20 hover:border-brand-olive shadow-xs transition-all duration-300"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

            {/* Key Spec Badges */}
            <div className="pt-6 border-t border-[#1B4332]/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left w-full min-w-0">
              <div>
                <div className="font-serif text-lg sm:text-2xl text-brand-forest font-bold">1,000+</div>
                <div className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-sans mt-0.5">Retailers Served</div>
              </div>
              <div>
                <div className="font-serif text-lg sm:text-2xl text-brand-forest font-bold">50K+</div>
                <div className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-sans mt-0.5">Bags Monthly</div>
              </div>
              <div>
                <div className="font-serif text-lg sm:text-2xl text-brand-forest font-bold">100%</div>
                <div className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-sans mt-0.5">Nepal Made</div>
              </div>
            </div>

            {/* Trust / Authenticity Badge Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-4">
              {/* Made in Nepal badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-forest/20 bg-white/80 text-[10px] font-sans font-bold uppercase tracking-wider text-brand-forest">
                <NepalFlag className="w-3.5 h-4 inline-block" />
                <span>Made in Nepal</span>
              </div>
              {/* Factory Direct badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-olive/30 bg-brand-beige/50 text-[10px] font-sans font-bold uppercase tracking-wider text-brand-moss">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Factory Direct</span>
              </div>
              {/* Eco-Certified badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-mint/40 bg-white/80 text-[10px] font-sans font-bold uppercase tracking-wider text-brand-olive">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Eco-Friendly</span>
              </div>
              {/* 8+ Years Experience */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300/60 bg-white/80 text-[10px] font-sans font-bold uppercase tracking-wider text-stone-600">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8+ Yrs Experience</span>
              </div>
            </div>

          </div>

          {/* Right Column: Seamless Framed Bag Showcase (5 cols) */}
          <div className="w-full min-w-0 lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full min-w-0">
              
              {/* Refined Harmonious Mount Card */}
              <div 
                className="relative bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-5 border border-brand-beige shadow-[0_20px_45px_-12px_rgba(27,67,50,0.14)] w-full min-w-0 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >

                
                {/* Visual Label Tag */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 sm:pb-3 sm:mb-3 border-b border-stone-200/80 text-[10px] font-sans uppercase tracking-widest text-stone-600 font-bold">
                  <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-olive animate-pulse" />
                    Manufactured Varieties
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-mono text-[9px] sm:text-[10px]">{activeIndex + 1} / {heroProducts.length}</span>
                    <span className="text-brand-olive font-serif italic text-[11px] sm:text-xs capitalize">Atelier Showcase</span>
                  </div>
                </div>

                {/* Auto-Sliding Coverflow Stage with Touch Swipe & Responsive Sizing */}
                <div 
                  className="relative h-60 sm:h-72 w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-stone-200/80 flex items-center justify-center select-none touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  
                  {/* Left Navigation Arrow */}
                  <button
                    onClick={goToPrev}
                    className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 sm:bg-white/90 hover:bg-white text-stone-700 hover:text-brand-forest shadow-sm border border-stone-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    aria-label="Previous product"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={goToNext}
                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 sm:bg-white/90 hover:bg-white text-stone-700 hover:text-brand-forest shadow-sm border border-stone-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    aria-label="Next product"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Products Render Loop with Responsive Transforms */}
                  {heroProducts.map((product, idx) => {
                    const n = heroProducts.length;
                    let offset = (idx - activeIndex + n) % n;
                    if (offset > n / 2) offset -= n;

                    const isCenter = offset === 0;
                    const isLeft = offset === -1;
                    const isRight = offset === 1;
                    const isVisible = Math.abs(offset) <= 1;

                    let translateX = '0%';
                    let scale = isMobile ? 1.08 : 1.15;
                    let opacity = 1;
                    let zIndex = 20;

                    if (isCenter) {
                      translateX = '0%';
                      scale = isMobile ? 1.08 : 1.15;
                      opacity = 1;
                      zIndex = 20;
                    } else if (isLeft) {
                      translateX = isMobile ? '-82%' : '-62%';
                      scale = isMobile ? 0.68 : 0.78;
                      opacity = isMobile ? 0.35 : 0.50;
                      zIndex = 10;
                    } else if (isRight) {
                      translateX = isMobile ? '82%' : '62%';
                      scale = isMobile ? 0.68 : 0.78;
                      opacity = isMobile ? 0.35 : 0.50;
                      zIndex = 10;
                    } else if (offset < -1) {
                      translateX = isMobile ? '-140%' : '-125%';
                      scale = 0.50;
                      opacity = 0;
                      zIndex = 0;
                    } else {
                      translateX = isMobile ? '140%' : '125%';
                      scale = 0.50;
                      opacity = 0;
                      zIndex = 0;
                    }

                    return (
                      <div
                        key={product.id}
                        onClick={() => {
                          if (isLeft) goToPrev();
                          if (isRight) goToNext();
                        }}
                        className="absolute top-1/2 left-1/2 w-40 h-40 xs:w-44 xs:h-44 sm:w-56 sm:h-56 -mt-20 -ml-20 xs:-mt-22 xs:-ml-22 sm:-mt-28 sm:-ml-28 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center cursor-pointer"
                        style={{
                          transform: `translate3d(${translateX}, 0, 0) scale(${scale})`,
                          opacity,
                          zIndex,
                          pointerEvents: isVisible ? 'auto' : 'none',
                        }}
                      >
                        {isCenter ? (
                          <Link href={product.link} className="block w-full h-full p-2 relative group/center">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              unoptimized
                              priority={idx === 0}
                              className="object-contain transition-transform duration-500 group-hover/center:scale-105"
                            />
                          </Link>
                        ) : (
                          <div className="w-full h-full p-2 relative">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              unoptimized
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Dots Indicator for Easy Navigation & Visual Feedback */}
                <div className="flex items-center justify-center gap-1.5 pt-2 pb-0.5">
                  {heroProducts.map((p, dotIdx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === activeIndex
                          ? 'w-5 bg-brand-forest'
                          : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}: ${p.name}`}
                    />
                  ))}
                </div>

                {/* Active Product Details Strip */}
                <div className="mt-2 sm:mt-3 pt-2.5 sm:pt-3 border-t border-stone-200/80 flex items-center justify-between gap-2.5 sm:gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                      <span className="editorial-tag text-[9px] py-0.5 px-2 bg-brand-beige text-brand-forest border border-brand-mint/40 font-bold uppercase tracking-wider">
                        {activeProduct.badge}
                      </span>
                      <span className="text-[10px] text-stone-400 font-sans">•</span>
                      <span className="text-[10px] sm:text-[11px] text-stone-500 font-sans truncate">
                        {activeProduct.material}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-xs sm:text-base text-brand-forest truncate">
                      {activeProduct.name}
                    </h4>
                  </div>

                  <Link 
                    href={activeProduct.link}
                    className="inline-flex items-center gap-1 sm:gap-1.5 bg-brand-forest hover:bg-brand-moss text-white text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs hover:shadow-sm transition-all flex-shrink-0"
                  >
                    <span>Explore</span>
                    <span className="text-brand-mint font-bold">→</span>
                  </Link>
                </div>

                {/* Bottom Interactive Variety Selector Strip */}
                <div 
                  ref={thumbnailContainerRef}
                  className="flex items-center gap-1.5 sm:gap-2 pt-2.5 mt-2.5 border-t border-stone-100 overflow-x-auto scrollbar-none pb-1 touch-pan-x"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {heroProducts.map((v, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`flex-shrink-0 flex flex-col items-center p-1 sm:p-1.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-brand-beige/70 ring-2 ring-brand-olive border border-brand-olive shadow-xs scale-100 sm:scale-105'
                            : 'bg-stone-50/80 hover:bg-[#FAF8F5] border border-stone-200/60 opacity-65 hover:opacity-100'
                        }`}
                        title={`${v.name} - ${v.badge}`}
                      >
                        <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-[#FAF8F5] mb-1 border border-stone-200/50">
                          <Image
                            src={v.image}
                            alt={v.name}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <span className={`text-[8px] sm:text-[9px] font-sans truncate max-w-[44px] sm:max-w-[58px] ${
                          isActive ? 'font-bold text-brand-forest' : 'font-medium text-stone-600'
                        }`}>
                          {v.shortName}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 -z-10 rounded-3xl border border-brand-olive/20 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>

      {/* Marquee Ticker - Editorial Archival Band */}
      <div className="relative z-20 w-full max-w-full bg-[#1B4332]/5 border-t border-[#1B4332]/10 py-3 overflow-hidden backdrop-blur-sm">
        <div className="animate-marquee space-x-8 text-[11px] font-sans font-semibold text-brand-forest tracking-widest uppercase items-center">
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            D-Cut &amp; W-Cut Non-Woven Bags
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            100% Pure Cotton Canvas Totes
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            1,000-Year Heritage Nepali Lokta Craft
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Heavy Duty Brown Kraft Paper Bags
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Garment, Lehenga &amp; Quilt Storage Covers
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Custom Screen &amp; Flexographic Printing
          </span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            D-Cut &amp; W-Cut Non-Woven Bags
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            100% Pure Cotton Canvas Totes
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            1,000-Year Heritage Nepali Lokta Craft
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Heavy Duty Brown Kraft Paper Bags
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Garment, Lehenga &amp; Quilt Storage Covers
          </span>
          <span className="flex items-center whitespace-nowrap gap-2">
            <svg className="w-3 h-3 text-brand-olive flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 19c3.56-3.07 7.21-2.85 9.18-1.98C14 19.42 14.5 21 15.5 21c1.5 0 2.5-1 2.5-2.5 0-.64-.2-1.28-.5-1.86.48-.87.82-1.86.9-2.77C20.5 14 22 15 22 16v-4c0-3-2-4-5-4z"/></svg>
            Custom Screen &amp; Flexographic Printing
          </span>
        </div>
      </div>
    </section>
  );
}