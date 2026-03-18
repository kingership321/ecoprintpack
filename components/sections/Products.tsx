// pages/products.js
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import images from public folder
const nonWovenBagsW = '/asset/NonWovenFabricWcutBag/W Cut Bag Non Woven Fabric 2.jpg';
const nonWovenBagsD = '/asset/NonWovenFabricDcut/D cut Bag 3.jpg';
const nonWovebBoxBags = '/asset/NonWovenFabricBoxBag/Box Bag Non woven Fabric 4.jpg';
const handleLoopBags = '/asset/HandleLoopNonWovenBag/Handle Loop Bag 4.jpg'
const canvasBags = '/asset/CanvasToteBag/Canvas Tote Bag 3.jpg';
const loktaBags = '/asset/LoktaPaperProducts/Nepali Lokta Products 2.jpg';
const paperBrownBags = '/asset/BrownPaperKraftBagPhoto/Brown Kraft Paper Bag 6.jpg';


// --- Icons (Uniform Set) ---
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const IconBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const IconInquire = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13"></path>
    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
  </svg>
);

const IconChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- Data with Images (unchanged) ---
const allProducts = [
  { 
    id: 1, 
    name: 'D-Cut Non-Woven Bag', 
    category: 'Non-Woven', 
    description: 'Durable and cost-effective D-cut bags for daily retail use.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovenBagsD,
    alt: 'D-Cut Non-Woven Shopping Bag'
  },
  { 
    id: 2, 
    name: 'W-Cut Non-Woven Bag', 
    category: 'Non-Woven', 
    description: 'Sturdy W-cut design for heavier items.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovenBagsW,
    alt: 'W-Cut Non-Woven Shopping Bag'
  },
  { 
    id: 3, 
    name: 'Box Bag Non-Woven', 
    category: 'Non-Woven', 
    description: 'Gusseted box style for spacious packaging.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: nonWovebBoxBags,
    alt: 'Box Style Non-Woven Bag'
  },
  { 
    id: 4, 
    name: 'Handle Loop Bag', 
    category: 'Non-Woven', 
    description: 'Soft handle loops for comfortable carrying.', 
    color: 'emerald', 
    minQty: '20 KG',
    image: handleLoopBags,
    alt: 'Loop Handle Non-Woven Bag'
  },
  { 
    id: 5, 
    name: 'Canvas Tote Bag', 
    category: 'Canvas', 
    description: 'Classic cotton tote bag for boutiques.', 
    color: 'blue', 
    minQty: '50 Pcs',
    image: canvasBags,
    alt: 'Canvas Tote Bag'
  },
  { 
    id: 6, 
    name: 'Drawstring Canvas Pouch', 
    category: 'Canvas', 
    description: 'Natural cotton drawstring bags.', 
    color: 'blue', 
    minQty: '100 Pcs',
    image: canvasBags,
    alt: 'Drawstring Canvas Pouch'
  },
  { 
    id: 7, 
    name: 'Heavy Duty Canvas Bag', 
    category: 'Canvas', 
    description: 'Thick canvas material for heavy use.', 
    color: 'blue', 
    minQty: '50 Pcs',
    image: canvasBags,
    alt: 'Heavy Duty Canvas Bag'
  },
  { 
    id: 8, 
    name: 'Lokta Gift Bag', 
    category: 'Lokta', 
    description: 'Handcrafted Lokta paper gift bag.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: loktaBags,
    alt: 'Lokta Paper Gift Bag'
  },
  { 
    id: 9, 
    name: 'Lokta Wine Bag', 
    category: 'Lokta', 
    description: 'Specialized paper wine bag.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: '/images/products/lokta-wine.jpg',
    alt: 'Lokta Paper Wine Bag'
  },
  { 
    id: 10, 
    name: 'Lokta Shopping Bag', 
    category: 'Lokta', 
    description: 'Eco-friendly shopping bag from Daphne bark.', 
    color: 'amber', 
    minQty: '50 Pcs',
    image: '/images/products/lokta-shopping.jpg',
    alt: 'Lokta Paper Shopping Bag'
  },
  { 
    id: 11, 
    name: 'Brown Kraft Paper Bag', 
    category: 'Paper', 
    description: 'Unbleached kraft bag for bakeries.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: paperBrownBags,
    alt: 'Brown Kraft Paper Bag'
  },
  { 
    id: 12, 
    name: 'Art Board Boutique Bag', 
    category: 'Paper', 
    description: 'High-gloss finish for luxury packaging.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: '/images/products/paper-artboard.jpg',
    alt: 'Art Board Boutique Bag'
  },
  { 
    id: 13, 
    name: 'Custom Printed Paper Bag', 
    category: 'Paper', 
    description: 'Full-color printed paper bags.', 
    color: 'purple', 
    minQty: '100 Pcs',
    image: '/images/products/paper-printed.jpg',
    alt: 'Custom Printed Paper Bag'
  },
  { 
    id: 14, 
    name: 'Coat Cover', 
    category: 'Covers', 
    description: 'Breathable garment cover.', 
    color: 'gray', 
    minQty: '50 Pcs',
    image: '/images/products/cover-coat.jpg',
    alt: 'Coat Garment Cover'
  },
  { 
    id: 15, 
    name: 'Lehenga Cover', 
    category: 'Covers', 
    description: 'Long garment cover with window.', 
    color: 'gray', 
    minQty: '50 Pcs',
    image: '/images/products/cover-lehenga.jpg',
    alt: 'Lehenga Garment Cover'
  },
  { 
    id: 16, 
    name: 'Blanket Cover', 
    category: 'Covers', 
    description: 'Large capacity cover for bedding.', 
    color: 'gray', 
    minQty: '50 Pcs',
    image: '/images/products/cover-blanket.jpg',
    alt: 'Blanket Storage Cover'
  },
];

const categories = ['All', 'Non-Woven', 'Canvas', 'Lokta', 'Paper', 'Covers'];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageErrors, setImageErrors] = useState({});
  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    if (selectedCategory !== 'All') {
      products = products.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'name-asc') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      products.sort((a, b) => b.name.localeCompare(a.name));
    }

    return products;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-3">Our Products</h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        {/* Toolbar */}
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                <IconSearch />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                <span className="text-xs font-semibold text-gray-500 whitespace-nowrap flex items-center">
                  <IconFilter /> <span className="ml-1">Filter:</span>
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-green-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option value="default">Sort by: Default</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className={`relative h-40 ${
                  product.color === 'emerald' ? 'bg-emerald-50' :
                  product.color === 'blue' ? 'bg-blue-50' :
                  product.color === 'amber' ? 'bg-amber-50' :
                  product.color === 'purple' ? 'bg-purple-50' :
                  'bg-gray-50'
                } flex items-center justify-center overflow-hidden`}>
                  
                  {/* Product Image - MODIFIED: Changed object-cover to object-contain and added padding */}
                  {!imageErrors[product.id] ? (
                    <Image
                      src={product.image}
                      alt={product.alt || product.name}
                      width={240}
                      height={160}
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(product.id)}
                      priority={product.id <= 3}
                    />
                  ) : (
                    /* Fallback Icon when image fails to load */
                    <div className={`transform group-hover:scale-110 transition-transform duration-300 ${
                      product.color === 'emerald' ? 'text-emerald-400' :
                      product.color === 'blue' ? 'text-blue-400' :
                      product.color === 'amber' ? 'text-amber-400' :
                      product.color === 'purple' ? 'text-purple-400' :
                      'text-gray-400'
                    }`}>
                      <IconBag />
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    product.color === 'emerald' ? 'bg-emerald-200 text-emerald-800' :
                    product.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                    product.color === 'amber' ? 'bg-amber-200 text-amber-800' :
                    product.color === 'purple' ? 'bg-purple-200 text-purple-800' :
                    'bg-gray-200 text-gray-800'
                  }`}>
                    {product.category}
                  </span>
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-3 flex-grow">{product.description}</p>
                  
                  <div className="border-t border-gray-100 pt-3 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-gray-500">Min. Order</span>
                      <span className="text-xs font-bold text-green-700">{product.minQty}</span>
                    </div>
                    <Link 
                      href="/contact#quote" 
                      className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-lg transition-colors text-xs"
                    >
                      <span className="flex items-center justify-center">
                        <IconInquire /> <span className="ml-1.5">Inquire Now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-bold text-gray-700 mb-1">No products found</h3>
            <p className="text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-1.5">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronLeft />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                  currentPage === index + 1 
                    ? 'bg-green-600 text-white shadow-sm' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronRight />
            </button>
          </div>
        )}

      </main>
    </div>
  );
}