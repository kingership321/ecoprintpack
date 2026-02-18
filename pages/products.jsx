import { Layout } from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';

import product1 from '../public/asset/product1.jpg';
import product2 from '../public/asset/product2.jpg';
import product3 from '../public/asset/product3.jpg';
import product4 from '../public/asset/product4.jpg';
import product5 from '../public/asset/product5.jpg';
import product6 from '../public/asset/product6.jpg';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'non-woven', name: 'Non-Woven Bags', count: 1 },
    { id: 'loop-handle', name: 'Loop Handle Bags', count: 2 },
    { id: 'd-cut', name: 'D-Cut Bags', count: 3 },
    { id: 'paper-bags', name: 'Paper Bags', count: 4 },
    { id: 'suit-covers', name: 'Suit Covers', count: 5 }
  ];

  // Products data with images, prices, discounts - matching the reference style
  const products = [
    {
      id: 1,
      name: 'Custom Printed Non-Woven Shopping Bag',
      description: 'Eco-friendly reusable bag with custom logo printing. Perfect for retail stores and promotions.',
      price: 25000,
      mrp: 32000,
      discount: 22,
      image: product1,
      category: 'non-woven',
      features: ['70 GSM', 'Custom Print', 'Reusable'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 2,
      name: 'Premium Loop Handle Bag with Full Color Print',
      description: 'Comfortable loop handles with vibrant full-color printing. Best seller for supermarkets.',
      price: 35000,
      mrp: 42000,
      discount: 17,
      image: product2,
      category: 'loop-handle',
      features: ['80 GSM', 'Full Color', 'Reinforced'],
      moq: '20 KG',
      stock: 'In Stock',
      badge: 'BESTSELLER'
    },
    {
      id: 3,
      name: 'D-Cut Handle Bag - Luxury Finish',
      description: 'Modern D-cut design with premium finish. Ideal for fashion boutiques and luxury brands.',
      price: 42000,
      mrp: 50000,
      discount: 16,
      image: product3,
      category: 'd-cut',
      features: ['90 GSM', 'Premium Print', 'Luxury'],
      moq: '20 KG',
      stock: 'Limited Stock'
    },
    {
      id: 4,
      name: 'Heavy Duty Stitched Handle Bag',
      description: 'Extra strong with stitched handles for heavy items. Perfect for hardware and bulk items.',
      price: 48000,
      mrp: 58000,
      discount: 17,
      image: product4,
      category: 'non-woven',
      features: ['120 GSM', 'Double Stitch', 'Heavy Duty'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 5,
      name: 'Eco-Friendly Kraft Paper Bag with Handles',
      description: '100% recyclable paper bags with twisted paper handles. Natural kraft finish.',
      price: 18000,
      mrp: 22000,
      discount: 18,
      image: product5,
      category: 'paper-bags',
      features: ['120 GSM', 'Kraft Paper', 'Biodegradable'],
      moq: '20 KG',
      stock: 'Pre-order'
    },
    {
      id: 6,
      name: 'Non-Woven Wine/Spirit Carrier Bag',
      description: 'Specialty bag with compartments for bottles. Custom printing available.',
      price: 32000,
      mrp: 39000,
      discount: 18,
      image: product6,
      category: 'non-woven',
      features: ['Bottle Compartments', 'Reinforced', 'Custom Print'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 7,
      name: 'Garment Suit Cover - Transparent Window',
      description: 'Protective cover for suits and garments with clear window for easy identification.',
      price: 22000,
      mrp: 28000,
      discount: 21,
      image: product1,
      category: 'suit-covers',
      features: ['Transparent Window', 'Hanger Hole', 'Durable'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 8,
      name: 'Woven PP Bag with Lamination',
      description: 'Heavy-duty woven polypropylene bags for industrial and agricultural use.',
      price: 38000,
      mrp: 45000,
      discount: 16,
      image: product2,
      category: 'non-woven',
      features: ['Laminated', 'Heavy Duty', 'Water Resistant'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 9,
      name: 'Loop Handle Bag with Zipper Closure',
      description: 'Secure zipper closure with comfortable loop handles. Ideal for retail packaging.',
      price: 39000,
      mrp: 48000,
      discount: 19,
      image: product3,
      category: 'loop-handle',
      features: ['Zipper Closure', 'Loop Handle', 'Custom Print'],
      moq: '20 KG',
      stock: 'Limited Stock',
      badge: 'NEW'
    },
    {
      id: 10,
      name: 'D-Cut Bag with Matte Lamination',
      description: 'Premium matte finish for an elegant look. Perfect for high-end retail.',
      price: 45000,
      mrp: 55000,
      discount: 18,
      image: product5,
      category: 'd-cut',
      features: ['Matte Finish', 'Premium Feel', 'High Print Quality'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 11,
      name: 'Paper Carry Bag - Glossy Finish',
      description: 'Glossy laminated paper bags for gift packaging and premium retail.',
      price: 21000,
      mrp: 26000,
      discount: 19,
      image: product6,
      category: 'paper-bags',
      features: ['Glossy Finish', 'Ribbon Handles', 'Luxury Look'],
      moq: '20 KG',
      stock: 'In Stock'
    },
    {
      id: 12,
      name: 'Non-Woven Conference Bag with Pockets',
      description: 'Multi-purpose bag with internal pockets. Great for corporate events and conferences.',
      price: 52000,
      mrp: 65000,
      discount: 20,
      image: product1,
      category: 'non-woven',
      features: ['Multiple Pockets', 'Corporate Look', 'Custom Branding'],
      moq: '20 KG',
      stock: 'Pre-order'
    }
  ];

  // Filter products based on selected category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Format price in NPR with commas
  const formatPrice = (price) => {
    return '₦' + price.toLocaleString('en-IN');
  };

  return (
    <Layout 
      pageTitle="Products | Eco-Friendly Bags & Packaging"
      pageDescription="Shop our collection of eco-friendly bags: non-woven bags, loop handle bags, D-cut bags, paper bags, and suit covers. Custom printing available. Wholesale pricing."
    >
      {/* Hero Section - Minimal like reference */}
      <section className="bg-gradient-to-b from-white to-green-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Our <span className="text-green-600">Products</span>
              </h1>
              <p className="text-lg text-gray-600">
                Eco-friendly packaging solutions for every business need
              </p>
            </div>
            
            {/* View Toggle - Like reference */}
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg border ${viewMode === 'grid' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg border ${viewMode === 'list' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories like reference */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                          activeCategory === category.id
                            ? 'bg-green-50 text-green-700 font-semibold border-l-4 border-green-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          activeCategory === category.id ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                {/* MOQ Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-green-800 mb-1">Minimum Order</div>
                    <div className="text-lg font-bold text-green-700">20 KG</div>
                    <p className="text-xs text-gray-600 mt-2">Bulk orders only. Custom printing available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid - Matching reference style */}
            <div className="flex-1">
              {/* Results count & sorting */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="text-gray-600 mb-4 sm:mb-0">
                  Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="text-gray-600 text-sm">Sort by:</label>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Discount: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Products Grid/List - Exactly like reference image */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      {/* Product Image Area */}
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        {product.badge && (
                          <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                            product.badge === 'BESTSELLER' 
                              ? 'bg-amber-500 text-white' 
                              : product.badge === 'NEW'
                              ? 'bg-green-500 text-white'
                              : 'bg-blue-500 text-white'
                          }`}>
                            {product.badge}
                          </span>
                        )}
                        <img src={product.image.src} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Product Details */}
                      <div className="p-5">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        
                        {/* Price Section - Exactly like reference */}
                        <div className="mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-green-700">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-sm line-through text-gray-400">
                              {formatPrice(product.mrp)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs font-bold text-white bg-green-600 px-2 py-1 rounded">
                              {product.discount}% off
                            </span>
                            {product.stock === 'In Stock' && (
                              <span className="text-xs text-green-600">✓ In Stock</span>
                            )}
                            {product.stock === 'Limited Stock' && (
                              <span className="text-xs text-amber-600">⚠️ Limited</span>
                            )}
                            {product.stock === 'Pre-order' && (
                              <span className="text-xs text-blue-600">📅 Pre-order</span>
                            )}
                          </div>
                        </div>
                        
                        {/* Description - truncated */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        
                        {/* Features as tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {product.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* MOQ Info */}
                        <div className="mt-3 text-xs text-gray-500 text-center">
                          MOQ: {product.moq} | Custom printing available
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                          {product.badge && (
                            <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                              product.badge === 'BESTSELLER' 
                                ? 'bg-amber-500 text-white' 
                                : product.badge === 'NEW'
                                ? 'bg-green-500 text-white'
                                : 'bg-blue-500 text-white'
                            }`}>
                              {product.badge}
                            </span>
                          )}
                          <img src={product.image.src} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          
                          <p className="text-gray-600 mb-4">
                            {product.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-green-700">
                                  {formatPrice(product.price)}
                                </span>
                                <span className="text-sm line-through text-gray-400">
                                  {formatPrice(product.mrp)}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-xs font-bold text-white bg-green-600 px-2 py-1 rounded">
                                  {product.discount}% off
                                </span>
                                <span className="text-xs text-gray-600">MOQ: {product.moq}</span>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2">
                              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                                Add to cart
                              </button>
                              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                                Buy now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Load More Button */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="px-8 py-3 border-2 border-green-600 text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors">
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Minimal like reference */}
      <section className="py-12 bg-gradient-to-b from-white to-green-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Printing for Your Brand?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer full-color custom printing on all our bags. Add your logo and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Request Custom Quote
            </Link>
            <a href="tel:+9779851189191" className="bg-white hover:bg-gray-100 text-gray-800 font-bold px-8 py-3 rounded-lg border border-gray-300 transition-colors">
              Call for Samples: +977 9851189191
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}