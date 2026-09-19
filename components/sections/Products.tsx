// components/sections/Products.tsx
'use client';
import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Product images from public folder
const nonWovenBagsW = '/asset/NonWovenFabricWcutBag/wcut2.jpg';
const nonWovenBagsD = '/asset/NonWovenFabricDcut/DcutBag3.jpg';
const nonWovenBoxBags = '/asset/NonWovenFabricBoxBag/BoxBagNonwovenFabric4.jpg';
const handleLoopBags = '/asset/HandleLoopNonWovenBag/HandleLoopBag4.jpg';
const canvasBags = '/asset/CanvasToteBag/CanvasToteBag3.jpg';
const canvasPouch = '/asset/CanvasToteBag/Canvas Tote Bag 4.jpg';
const canvasHeavy = '/asset/CanvasToteBag/Canvas Tote Bag 5.jpg';
const loktaBags = '/asset/LoktaPaperProducts/NepaliLoktaProducts2.jpg';
const loktaWine = '/asset/LoktaPaperProducts/Nepali Lokta Products 1.jpg';
const loktashopBags = '/asset/LoktaPaperProducts/NepaliLoktaProducts9.jpg';
const paperBrownBags = '/asset/BrownPaperKraftBagPhoto/BrownKraftPaperBag6.jpg';
const paperBoutique = '/asset/PaperBag/PaperBag3.jpg';
const paperGloss = '/asset/PaperBag/Paper Bag 1.jpg';
const coatCover = '/asset/product4.jpg';
const lehengaCover = '/asset/product5.jpg';
const blanketCover = '/asset/product6.jpg';

// Icons
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const IconInquire = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13"></path>
    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
  </svg>
);

interface Product {
  id: number;
  name: string;
  category: string;
  categoryKey: string;
  description: string;
  color: string;
  minQty: string;
  image: string;
  alt: string;
}

interface CategoryGroup {
  key: string;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string;
  products: Product[];
}

const allProducts: Product[] = [
  // Non-Woven
  { 
    id: 1, 
    name: 'D-Cut Non-Woven Bag', 
    category: 'Non-Woven',
    categoryKey: 'non-woven', 
    description: 'Durable and versatile D-cut bags for daily retail use with punch-cut handles.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovenBagsD,
    alt: 'D-Cut Non-Woven Shopping Bag'
  },
  { 
    id: 2, 
    name: 'W-Cut Non-Woven Bag', 
    category: 'Non-Woven', 
    categoryKey: 'non-woven',
    description: 'Sturdy grocery style W-cut design with high weight-bearing capacity.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovenBagsW,
    alt: 'W-Cut Non-Woven Shopping Bag'
  },
  { 
    id: 3, 
    name: 'Box Bag Non-Woven', 
    category: 'Non-Woven', 
    categoryKey: 'non-woven',
    description: 'Spacious gusseted box bag for department stores, footwear, and apparel.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovenBoxBags,
    alt: 'Box Style Non-Woven Bag'
  },
  { 
    id: 4, 
    name: 'Handle Loop Bag', 
    category: 'Non-Woven', 
    categoryKey: 'non-woven',
    description: 'Soft welded handle loops for comfortable carrying and premium aesthetic.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: handleLoopBags,
    alt: 'Loop Handle Non-Woven Bag'
  },

  // Canvas
  { 
    id: 5, 
    name: 'Canvas Tote Bag', 
    category: 'Canvas', 
    categoryKey: 'canvas',
    description: 'Classic cotton tote bag for organic boutiques, events, and everyday use.', 
    color: 'blue', 
    minQty: '50 Pcs',
    image: canvasBags,
    alt: 'Canvas Tote Bag'
  },
  { 
    id: 6, 
    name: 'Drawstring Canvas Pouch', 
    category: 'Canvas', 
    categoryKey: 'canvas',
    description: 'Natural cotton drawstring bag for jewelry, gifts, and cosmetic packaging.', 
    color: 'blue', 
    minQty: '100 Pcs',
    image: canvasPouch,
    alt: 'Drawstring Canvas Pouch'
  },
  { 
    id: 7, 
    name: 'Heavy Duty Canvas Bag', 
    category: 'Canvas', 
    categoryKey: 'canvas',
    description: 'High-density canvas material engineered for heavy cargo and long durability.', 
    color: 'blue', 
    minQty: '50 Pcs',
    image: canvasHeavy,
    alt: 'Heavy Duty Canvas Bag'
  },

  // Lokta
  { 
    id: 8, 
    name: 'Lokta Gift Bag', 
    category: 'Lokta', 
    categoryKey: 'lokta',
    description: 'Handcrafted from Himalayan Daphne shrub bark with artisan textures.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: loktaBags,
    alt: 'Lokta Paper Gift Bag'
  },
  { 
    id: 9, 
    name: 'Lokta Wine Bag', 
    category: 'Lokta', 
    categoryKey: 'lokta',
    description: 'Specialized tall Lokta paper bag designed for wine bottles and gifting.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: loktaWine,
    alt: 'Lokta Paper Wine Bag'
  },
  { 
    id: 10, 
    name: 'Lokta Boutique Shopping Bag', 
    category: 'Lokta', 
    categoryKey: 'lokta',
    description: 'Traditional 1,000-year heritage paper bag with twisted rope handles.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: loktashopBags,
    alt: 'Lokta Paper Shopping Bag'
  },

  // Paper
  { 
    id: 11, 
    name: 'Brown Kraft Paper Bag', 
    category: 'Paper', 
    categoryKey: 'paper',
    description: '100% recyclable, biodegradable unbleached kraft paper with twisted handles.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: paperBrownBags,
    alt: 'Brown Kraft Paper Bag'
  },
  { 
    id: 12, 
    name: 'Art Board Boutique Bag', 
    category: 'Paper', 
    categoryKey: 'paper',
    description: 'Smooth luxury paper bag with glossy lamination and custom brand print.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: paperBoutique,
    alt: 'Art Board Boutique Bag'
  },
  { 
    id: 13, 
    name: 'Custom Printed Paper Bag', 
    category: 'Paper', 
    categoryKey: 'paper',
    description: 'Vibrant full-color offset printed bags with reinforced base for retail.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: paperGloss,
    alt: 'Custom Printed Paper Bag'
  },

  // Covers
  { 
    id: 14, 
    name: 'Coat & Suit Cover', 
    category: 'Covers', 
    categoryKey: 'covers',
    description: 'Breathable non-woven garment bag with full-length zipper and hanger hole.', 
    color: 'teal', 
    minQty: '50 Pcs',
    image: coatCover,
    alt: 'Coat Garment Cover'
  },
  { 
    id: 15, 
    name: 'Lehenga & Bridal Cover', 
    category: 'Covers', 
    categoryKey: 'covers',
    description: 'Generous volume garment cover with transparent display window.', 
    color: 'teal', 
    minQty: '50 Pcs',
    image: lehengaCover,
    alt: 'Lehenga Garment Cover'
  },
  { 
    id: 16, 
    name: 'Blanket & Bedding Cover', 
    category: 'Covers', 
    categoryKey: 'covers',
    description: 'High-capacity zippered storage bag for blankets, quilts, and linens.', 
    color: 'teal', 
    minQty: '50 Pcs',
    image: blanketCover,
    alt: 'Blanket Storage Cover'
  },
];

const categoryMetadata = [
  {
    key: 'non-woven',
    title: 'Non-Woven Shopping Bags',
    subtitle: 'Water-resistant, tear-proof polypropylene bags in customizable shapes',
    badge: 'Popular Retail Choice',
    accentColor: 'emerald',
  },
  {
    key: 'canvas',
    title: 'Pure Cotton Canvas Bags',
    subtitle: 'Biodegradable, renewable cotton bags for long-term reusable branding',
    badge: 'Eco-Chic & Reusable',
    accentColor: 'blue',
  },
  {
    key: 'lokta',
    title: 'Himalayan Lokta Paper Bags',
    subtitle: '1,000-year heritage artisanal tree-free paper crafted from Daphne bark',
    badge: 'Nepali Heritage',
    accentColor: 'amber',
  },
  {
    key: 'paper',
    title: 'Kraft & Luxury Paper Bags',
    subtitle: 'Unbleached natural kraft and high-end gloss art board packaging',
    badge: 'Timeless Aesthetic',
    accentColor: 'purple',
  },
  {
    key: 'covers',
    title: 'Garment & Storage Covers',
    subtitle: 'Protective non-woven covers for suits, bridal lehengas, and bedding',
    badge: 'Protective Storage',
    accentColor: 'teal',
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainers = useRef<Record<string, HTMLDivElement | null>>({});

  const filterCategories = ['All', 'Non-Woven', 'Canvas', 'Lokta', 'Paper', 'Covers'];

  const categoryGroups: CategoryGroup[] = useMemo(() => {
    return categoryMetadata
      .map(meta => {
        let prods = allProducts.filter(p => p.categoryKey === meta.key);
        if (selectedCategory !== 'All') {
          prods = prods.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
        }
        if (searchQuery) {
          prods = prods.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        return {
          ...meta,
          products: prods
        };
      })
      .filter(group => group.products.length > 0);
  }, [searchQuery, selectedCategory]);

  const handleScroll = (key: string, direction: 'left' | 'right') => {
    const el = scrollContainers.current[key];
    if (el) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-linen min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="bg-brand-forest text-white py-14 md:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-sans font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Manufactured in Kathmandu & Lalitpur, Nepal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Our Product <span className="italic font-serif text-brand-gold">Collections</span>
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Explore our diverse range of sustainable packaging solutions. From non-woven retail bags to 1,000-year-old Lokta paper craft, find the perfect packaging for your brand.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        
        {/* Toolbar: Search and Filter Tabs */}
        <div className="bg-white p-3 md:p-4 rounded-3xl shadow-xs border border-stone-200/90 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <IconSearch />
            </div>
            <input
              type="text"
              placeholder="Search by name or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-brand-forest text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:text-brand-forest hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Slideshows / Rows */}
        {categoryGroups.length > 0 ? (
          <div className="space-y-14 md:space-y-18">
            {categoryGroups.map((group) => (
              <section 
                key={group.key}
                id={group.key}
                className="scroll-mt-24"
              >
                {/* Category Header with Slideshow Controls */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pb-3 border-b border-stone-200 gap-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="editorial-tag">
                        {group.badge}
                      </span>
                      <span className="text-xs text-stone-300">•</span>
                      <span className="text-xs font-sans text-stone-500 font-medium">
                        {group.products.length} Specimens
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
                      {group.title}
                    </h3>
                    <p className="text-xs md:text-sm text-stone-600 mt-1 font-sans">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleScroll(group.key, 'left')}
                      className="p-2 rounded-full bg-white border border-stone-200 shadow-xs text-stone-600 hover:text-brand-forest hover:border-brand-forest transition-colors"
                      aria-label="Scroll left"
                    >
                      <IconChevronLeft />
                    </button>
                    <button
                      onClick={() => handleScroll(group.key, 'right')}
                      className="p-2 rounded-full bg-white border border-stone-200 shadow-xs text-stone-600 hover:text-brand-forest hover:border-brand-forest transition-colors"
                      aria-label="Scroll right"
                    >
                      <IconChevronRight />
                    </button>
                  </div>
                </div>

                {/* Horizontal Product Strip / Slideshow */}
                <div 
                  ref={el => { scrollContainers.current[group.key] = el; }}
                  className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {group.products.map((product) => (
                    <div 
                      key={product.id}
                      className="flex-none w-72 sm:w-80 snap-start bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md border border-stone-200/90 hover:border-brand-moss/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      {/* Product Image Stage */}
                      <div className="relative h-48 sm:h-52 bg-[#F7F4EE] flex items-center justify-center p-4 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.alt || product.name}
                          width={320}
                          height={240}
                          className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-stone-700 text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs border border-stone-200">
                          {product.category}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-serif font-bold text-brand-forest group-hover:text-brand-moss transition-colors mb-1.5">
                            {product.name}
                          </h4>
                          <p className="text-xs font-sans text-stone-600 leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                          <div>
                            <span className="block text-[10px] font-sans uppercase tracking-wider font-semibold text-stone-400">
                              Min. Order
                            </span>
                            <span className="text-xs font-serif font-bold text-brand-forest">
                              {product.minQty}
                            </span>
                          </div>

                          <Link
                            href="/contact#quote"
                            className="inline-flex items-center gap-1.5 bg-brand-forest hover:bg-brand-moss text-white text-xs font-semibold tracking-wider uppercase py-2 px-4 rounded-full border border-brand-forest shadow-xs hover:shadow-sm transition-all group-hover:scale-[1.02]"
                          >
                            <span>Inquire</span>
                            <span className="text-brand-gold font-bold">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200">
            <h3 className="text-lg font-serif font-bold text-brand-forest mb-1">No products match your search</h3>
            <p className="text-sm font-sans text-stone-500 mb-4">Try clearing filters or searching for different keywords.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-5 py-2.5 bg-brand-forest text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-brand-moss transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>
    </div>
  );
}