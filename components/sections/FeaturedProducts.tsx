// components/sections/Products.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

// import images from public folder
import nonWovenBags from '/public/asset/NonWovenFabricWcutBag/W Cut Bag Non Woven Fabric 2.jpg';
import canvasBags from '/public/asset/CanvasToteBag/Canvas Tote Bag 3.jpg';
import loktaBags from '/public/asset/LoktaPaperProducts/Nepali Lokta Products 2.jpg';
import paperBags from '/public/asset/PaperBag/Paper Bag 3.jpg';

// --- Keep only gallery icons (for the product range section) ---
const IconBoxBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  </svg>
);

const IconDCut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M12 6v4"></path>
  </svg>
);

const IconWCut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M8 6c0 2 4 4 4 4s4-2 4-4"></path>
  </svg>
);

const IconLoop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 6l-4-4-4 4"></path>
    <path d="M12 2v14"></path>
    <rect x="3" y="18" width="18" height="4" rx="1"></rect>
  </svg>
);

const IconCoat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
  </svg>
);

const IconLehenga = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
    <path d="M12 2v10l-5 8"></path>
    <path d="M12 12l5 8"></path>
  </svg>
);

const IconBlanket = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const IconToteBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 11V7a4 4 0 0 0-8 0v4"></path>
    <path d="M5 9h14l-1.5 12H6.5z"></path>
  </svg>
);

const productCategories = [
  {
    id: 'non-woven',
    title: 'Non-Woven Shopping Bags',
    description: 'Our non-woven shopping bags are the perfect blend of strength, style, and sustainability. Made from high-quality polypropylene fabric, these bags are designed for everyday use. Water resistant, tear resistant, and available in a wide variety of patterns and colors, these bags can be fully customized to reflect your brand identity.',
    features: ['Water Resistant', 'Tear Resistant', 'Fully Customizable'],
    types: ['D-Cut Bag', 'Box Bag', 'Handle Loop Bag', 'W-Cut Bag'],
    imageSrc: nonWovenBags,
    imageAlt: 'Non-Woven Shopping Bags',
    color: 'emerald',
  },
  {
    id: 'canvas',
    title: 'Canvas Shopping Bags',
    description: 'Our canvas shopping bags represent the perfect union of traditional craftsmanship and modern functionality. Woven from high-quality cotton fibers, these bags offer exceptional strength, natural breathability, and a classic aesthetic. As a natural fabric, canvas is biodegradable, renewable, and one of the most environmentally responsible packaging choices available today.',
    features: ['Biodegradable', 'Renewable Cotton', 'Custom Sizes'],
    types: ['Customized Size & Design'],
    imageSrc: canvasBags,
    imageAlt: 'Canvas Shopping Bags',
    color: 'blue',
  },
  {
    id: 'lokta',
    title: 'Lokta Paper Shopping Bags',
    description: 'Our Lokta paper bags are crafted by Nepali artisans using a 1,000-year-old tradition. Made from the bark of the regenerating Daphne shrub, Lokta paper is naturally textured, exceptionally strong, and completely tree-free. Perfect for boutiques, corporate gifting, and weddings.',
    features: ['Tree-Free', '1,000-Year Tradition', 'Handcrafted'],
    types: ['Screen Printed', 'Custom Size', 'With Tissue Lining'],
    imageSrc: loktaBags,
    imageAlt: 'Lokta Paper Shopping Bags',
    color: 'amber',
  },
  {
    id: 'paper',
    title: 'Paper Shopping Bags',
    description: 'We offer two distinct paper solutions: our Brown Kraft Paper Bags offer a timeless, natural aesthetic made from unbleached, eco-friendly kraft paper. For premium needs, our Art Board Paper Bags deliver exceptional sophistication with smooth, high-quality materials like gloss and matte art paper.',
    features: ['Eco-Friendly Kraft', 'Premium Art Board', 'Custom Prints'],
    types: ['Brown Kraft Bag', 'Art Board Bag'],
    imageSrc: paperBags,
    imageAlt: 'Paper Shopping Bags',
    color: 'purple',
  },
];

const productGallery = [
  { name: 'Box Bag', iconComponent: <IconBoxBag /> },
  { name: 'D-Cut Bag', iconComponent: <IconDCut /> },
  { name: 'W-Cut Bag', iconComponent: <IconWCut /> },
  { name: 'Handle Loop Bag', iconComponent: <IconLoop /> },
  { name: 'Coat Cover', iconComponent: <IconCoat /> },
  { name: 'Lehenga Cover', iconComponent: <IconLehenga /> },
  { name: 'Blanket Cover', iconComponent: <IconBlanket /> },
  { name: 'Tote Bag', iconComponent: <IconToteBag /> },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="section-padding pt-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            SUSTAINABLE PACKAGING
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Our Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            From non-woven fabrics to traditional Lokta paper, we manufacture bags that protect your products and the planet.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-4 md:space-y-5">
          {productCategories.map((category) => (
            <div 
              key={category.id}
              className="product-card"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Visual Side - Now with Image */}
                <div className={`lg:col-span-4 bg-gray-50 p-5 md:p-6 flex items-center justify-center`}>
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src={category.imageSrc}
                      alt={category.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-8 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium border border-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Product Types Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {category.types.map((type, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-center hover:bg-green-50 hover:border-green-200 transition-colors cursor-pointer group"
                      >
                        <span className="text-xs font-semibold text-gray-700 group-hover:text-green-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Gallery Display */}
        <div className="mt-10 md:mt-12">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-black text-gray-900">
              Product <span className="text-green-600">Range</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">Explore our diverse range of eco-friendly solutions</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
            {productGallery.map((product, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center"
              >
                <div className="text-gray-400 group-hover:text-green-600 transition-colors mb-1">
                  {product.iconComponent}
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-gray-700">{product.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 md:mt-12 bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl p-6 md:p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0h100v100H0z" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold mb-2">Order to Support Sustainability</h3>
            <p className="text-green-100 text-sm mb-4 max-w-xl mx-auto">Every bag we produce is a step towards a greener Nepal. Request a quote today.</p>
            <Link 
              href="/contact#quote"
              className="btn-secondary inline-flex items-center text-sm py-2 px-4"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get a Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}