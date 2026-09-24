// components/sections/Gallery.tsx
'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryItems, GalleryItem } from '@/data/galleryData';

interface GalleryProps {
  isHomePage?: boolean;
}

export default function GallerySection({ isHomePage = false }: GalleryProps) {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [modalList, setModalList] = useState<GalleryItem[]>([]);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const [activeNonWovenSub, setActiveNonWovenSub] = useState<string>('All');
  const [activePaperSub, setActivePaperSub] = useState<string>('All');
  const [activeFactorySub, setActiveFactorySub] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Group items by category
  const factoryItems = useMemo(() => {
    const all = galleryItems.filter(i => i.category === 'Factory & Showroom');
    if (activeFactorySub === 'All') return all;
    return all.filter(i => i.subCategory === activeFactorySub);
  }, [activeFactorySub]);

  const canvasItems = useMemo(
    () => galleryItems.filter(i => i.category === 'Canvas'),
    []
  );

  const loktaItems = useMemo(
    () => galleryItems.filter(i => i.category === 'Lokta Paper'),
    []
  );

  const nonWovenItems = useMemo(() => {
    const all = galleryItems.filter(i => i.category === 'Non-Woven');
    if (activeNonWovenSub === 'All') return all;
    return all.filter(i => i.subCategory === activeNonWovenSub);
  }, [activeNonWovenSub]);

  const paperItems = useMemo(() => {
    const all = galleryItems.filter(i => i.category === 'Kraft & Paper');
    if (activePaperSub === 'All') return all;
    return all.filter(i => i.subCategory === activePaperSub);
  }, [activePaperSub]);

  // Lightbox handlers
  const openModal = (item: GalleryItem, list: GalleryItem[]) => {
    const idx = list.findIndex(i => i.id === item.id);
    setModalList(list);
    setModalIndex(idx >= 0 ? idx : 0);
    setActiveModalItem(item);
  };

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  const nextImage = useCallback(() => {
    if (modalList.length === 0) return;
    const nextIdx = (modalIndex + 1) % modalList.length;
    setModalIndex(nextIdx);
    setActiveModalItem(modalList[nextIdx]);
  }, [modalList, modalIndex]);

  const prevImage = useCallback(() => {
    if (modalList.length === 0) return;
    const prevIdx = (modalIndex - 1 + modalList.length) % modalList.length;
    setModalIndex(prevIdx);
    setActiveModalItem(modalList[prevIdx]);
  }, [modalList, modalIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, closeModal, nextImage, prevImage]);

  // If used on HomePage as an editorial preview
  if (isHomePage) {
    const previewItems = [
      ...canvasItems.slice(0, 2),
      ...loktaItems.slice(0, 2),
      ...nonWovenItems.slice(0, 2),
      ...paperItems.slice(0, 2),
    ];

    return (
      <section className="section-padding bg-brand-linen pt-0 font-sans relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="editorial-tag mb-3">
              <span>Visual Atelier Lookbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-forest">
              Manufactured <span className="italic font-serif text-brand-olive">Portfolio</span>
            </h2>
            <p className="mt-3 text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              Real manufactured packaging specimens photographed in our Kathmandu atelier.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {previewItems.map(item => (
              <div
                key={item.id}
                onClick={() => openModal(item, previewItems)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-brand-beige/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-forest/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="text-white text-[11px] font-sans font-semibold tracking-wider uppercase bg-brand-forest/80 px-3 py-1.5 rounded-full border border-white/20">
                      Enlarge View
                    </span>
                  </div>
                </div>
                
                <div className="p-3.5 bg-white border-t border-stone-100">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-olive block">
                    {item.badge}
                  </span>
                  <h3 className="text-xs font-serif font-bold text-brand-forest truncate mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 bg-brand-forest hover:bg-brand-moss text-white font-sans text-xs font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full border border-brand-forest shadow-xs hover:shadow-md transition-all duration-300"
            >
              <span>Explore Complete Lookbook</span>
              <span className="text-brand-mint font-bold">→</span>
            </Link>
          </div>
        </div>

        {/* Modal */}
        {renderModal(activeModalItem, modalList, modalIndex, closeModal, nextImage, prevImage)}
      </section>
    );
  }

  // Full Gallery Page Showcase (/gallery)
  return (
    <div className="font-sans bg-brand-linen">
      
      {/* Sticky Quick-Jump Category Navigation */}
      <div className="sticky top-[56px] md:top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-3 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400 whitespace-nowrap hidden sm:inline">
            Collections:
          </span>
          <div className="flex items-center gap-2">
            <a
              href="#factory-section"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-brand-forest bg-brand-beige hover:bg-stone-200 transition-all border border-brand-olive/30 whitespace-nowrap flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-pulse"></span>
              Factory &amp; Showroom ({galleryItems.filter(i => i.category === 'Factory & Showroom').length})
            </a>
            <a
              href="#non-woven-section"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-stone-700 hover:text-brand-forest hover:bg-stone-100 transition-all border border-stone-200 whitespace-nowrap"
            >
              Non-Woven Bags ({galleryItems.filter(i => i.category === 'Non-Woven').length})
            </a>
            <a
              href="#canvas-section"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-stone-700 hover:text-brand-forest hover:bg-stone-100 transition-all border border-stone-200 whitespace-nowrap"
            >
              Canvas Totes ({canvasItems.length})
            </a>
            <a
              href="#lokta-section"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-stone-700 hover:text-brand-forest hover:bg-stone-100 transition-all border border-stone-200 whitespace-nowrap"
            >
              Lokta Paper ({loktaItems.length})
            </a>
            <a
              href="#kraft-paper-section"
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-stone-700 hover:text-brand-forest hover:bg-stone-100 transition-all border border-stone-200 whitespace-nowrap"
            >
              Kraft & Paper ({galleryItems.filter(i => i.category === 'Kraft & Paper').length})
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* SECTION 1: NON-WOVEN BAGS */}
        <section id="non-woven-section" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
            <div>
              <div className="editorial-tag mb-2">
                <span>Collection 01 • Manufactured Precision</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
                Non-Woven Fabric Bags Collection
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
                Versatile, water-resistant polypropylene fabric bags manufactured in distinct cuts: Box Gusset, D-Cut punch handles, W-Cut side gussets, and soft loop handles.
              </p>
            </div>

            {/* Sub-category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'Box Bag Non-Woven', 'D-Cut Bag Non-Woven', 'W-Cut Bag Non-Woven', 'Handle Loop Bag'].map(sub => {
                const label = sub === 'All' ? 'All Cuts' : sub.replace(' Bag Non-Woven', '').replace(' Non-Woven', '');
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveNonWovenSub(sub)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      activeNonWovenSub === sub
                        ? 'bg-brand-forest text-white shadow-xs'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
            {nonWovenItems.map(item => (
              <PhotoCard
                key={item.id}
                item={item}
                onClick={() => openModal(item, nonWovenItems)}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
              />
            ))}
          </div>
        </section>

        {/* SECTION 2: CANVAS TOTE BAGS */}
        <section id="canvas-section" className="scroll-mt-28">
          <div className="mb-8 pb-4 border-b border-stone-200">
            <div className="editorial-tag mb-2">
              <span>Collection 02 • Pure Woven Textile</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
              Premium Canvas Tote Bags Collection
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
              100% natural organic woven cotton canvas bags crafted for everyday elegance, cafe boutiques, creative events, and long-lasting reusable lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
            {canvasItems.map(item => (
              <PhotoCard
                key={item.id}
                item={item}
                onClick={() => openModal(item, canvasItems)}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: LOKTA PAPER BAGS */}
        <section id="lokta-section" className="scroll-mt-28">
          <div className="mb-8 pb-4 border-b border-stone-200">
            <div className="editorial-tag mb-2">
              <span>Collection 03 • 1,000-Year Heritage Handmade</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
              Handcrafted Nepali Lokta Paper Products
            </h2>
            <p className="text-xs md:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
              Authentic handmade packaging created from the regenerating Daphne bush in the Himalayas. Tree-free, naturally textured, and culturally revered for weddings and gifts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
            {loktaItems.map(item => (
              <PhotoCard
                key={item.id}
                item={item}
                onClick={() => openModal(item, loktaItems)}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
              />
            ))}
          </div>
        </section>

        {/* SECTION 4: KRAFT & PAPER BAGS */}
        <section id="kraft-paper-section" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
            <div>
              <div className="editorial-tag mb-2">
                <span>Collection 04 • Biodegradable Retail</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
                Kraft & Paper Shopping Bags Collection
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
                Heavy duty unbleached brown kraft paper bags and luxury laminated paper boutique carriers for retail stores, bakeries, and gourmet gifts.
              </p>
            </div>

            {/* Sub-category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'Brown Paper Bag', 'Paper Bag'].map(sub => {
                const label = sub === 'All' ? 'All Paper Styles' : sub === 'Brown Paper Bag' ? 'Kraft Paper' : 'Art Board Boutique';
                return (
                  <button
                    key={sub}
                    onClick={() => setActivePaperSub(sub)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      activePaperSub === sub
                        ? 'bg-brand-forest text-white shadow-xs'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
            {paperItems.map(item => (
              <PhotoCard
                key={item.id}
                item={item}
                onClick={() => openModal(item, paperItems)}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
              />
            ))}
          </div>
        </section>

        {/* SECTION 5: FACTORY & OFFICE SHOWROOM SETUP */}
        <section id="factory-section" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
            <div>
              <div className="editorial-tag mb-2">
                <span>Authentic Workplace • Lalitpur Metropolitan City Ward 13</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
                Factory Tour &amp; Office Showroom Setup
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
                Real photographs from our active Lalitpur facility: client sample showroom display wall, hand screen printing studio, automated bag production lines, and industrial tailoring stations.
              </p>
            </div>

            {/* Sub-category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'Office Setup', 'Screen Printing', 'Production Floor', 'Stitching & Tailoring', 'Facility Exterior'].map(sub => {
                const label = sub === 'All' ? 'All Views' : sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveFactorySub(sub)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      activeFactorySub === sub
                        ? 'bg-brand-forest text-white shadow-xs'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5">
            {factoryItems.map(item => (
              <PhotoCard
                key={item.id}
                item={item}
                onClick={() => openModal(item, factoryItems)}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox Exhibition Modal */}
      {renderModal(activeModalItem, modalList, modalIndex, closeModal, nextImage, prevImage)}
    </div>
  );
}

// Minimal Photo Card Component
function PhotoCard({
  item,
  onClick,
  failedImages,
  setFailedImages,
}: {
  item: GalleryItem;
  onClick: () => void;
  failedImages: Record<number, boolean>;
  setFailedImages: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) {
  const isFailed = failedImages[item.id];

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
        {!isFailed ? (
          <Image
            src={item.image}
            alt={item.alt}
            fill
            unoptimized
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setFailedImages(prev => ({ ...prev, [item.id]: true }))}
          />
        ) : (
          <div className="text-center p-4 text-stone-400">
            <span className="text-xs">Photo Specimen</span>
          </div>
        )}

        {/* Floating Style Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="text-[10px] font-sans font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-stone-700 shadow-xs border border-stone-200">
            {item.badge}
          </span>
        </div>

        {/* Hover View Overlay */}
        <div className="absolute inset-0 bg-brand-forest/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <div className="text-white text-xs font-sans font-medium flex items-center gap-1.5">
            <span>Enlarge Specimen</span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="p-3 bg-white border-t border-stone-100 flex items-center justify-between">
        <h3 className="text-xs font-serif font-bold text-brand-forest group-hover:text-brand-moss transition-colors truncate">
          {item.title}
        </h3>
        <span className="text-[10px] text-stone-400 font-sans ml-2 flex-shrink-0">
          View &rarr;
        </span>
      </div>
    </div>
  );
}

// Distraction-Free Photo Exhibition Lightbox
function renderModal(
  item: GalleryItem | null,
  list: GalleryItem[],
  currentIndex: number,
  onClose: () => void,
  onNext: () => void,
  onPrev: () => void
) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 sm:-top-12 right-0 sm:right-2 text-white/80 hover:text-white flex items-center gap-1.5 text-xs font-semibold p-1 transition-colors font-sans tracking-wider uppercase"
          aria-label="Close"
        >
          <span>Close</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Center Main Image Frame */}
        <div className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            unoptimized
            sizes="95vw"
            className="object-contain p-2"
            priority
          />

          {/* Previous Button */}
          <button
            onClick={e => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white hover:text-black text-white w-11 h-11 rounded-full flex items-center justify-center transition-all border border-white/20 shadow-lg"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={e => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white hover:text-black text-white w-11 h-11 rounded-full flex items-center justify-center transition-all border border-white/20 shadow-lg"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Minimalist Bottom Caption Bar */}
        <div className="w-full mt-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-between gap-2 border border-white/10 font-sans">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-mint/30 text-brand-mint border border-brand-mint/40">
              {item.category}
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold">{item.title}</span>
            <span className="text-white/40 text-xs hidden sm:inline">·</span>
            <span className="text-white/70 text-xs hidden sm:inline">{item.subCategory}</span>
          </div>

          <div className="text-xs text-white/50 tracking-wider">
            {currentIndex + 1} of {list.length} specimens
          </div>
        </div>
      </div>
    </div>
  );
}
