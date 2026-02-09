// pages/index.jsx - HOME PAGE
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import Link from 'next/link'

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: 'Loop Handle Non Woven Bag',
      description: 'Best selling eco-friendly bags with comfortable loop handles. Perfect for retail packaging.',
      features: ['Durable Material', 'Custom Printing', 'Multiple Sizes', 'Water Resistant'],
      moq: '20 KG',
      badge: 'BEST SELLER',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 2,
      name: 'Printed D-Cut Non Woven',
      description: 'Modern D-cut design with excellent print quality for brand visibility.',
      features: ['High-Quality Print', 'Ergonomic Design', 'Reusable', 'Eco-Friendly'],
      moq: '20 KG',
      badge: 'POPULAR',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 3,
      name: 'Stitched Handle Bags',
      description: 'Premium stitched handles for extra strength and durability.',
      features: ['Reinforced Handles', 'Heavy Duty', 'Luxury Finish', 'Custom Colors'],
      moq: '20 KG',
      badge: 'PREMIUM',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 4,
      name: 'Standard Non Woven Bags',
      description: 'Classic non-woven bags for everyday packaging needs.',
      features: ['Cost Effective', 'Lightweight', 'Various Colors', 'Bulk Orders'],
      moq: '20 KG',
      badge: 'ECONOMICAL',
      color: 'from-blue-500 to-indigo-600'
    }
  ]

  const features = [
    {
      title: 'Eco-Friendly Materials',
      description: '100% biodegradable and recyclable materials that help reduce plastic pollution.',
      icon: '🌿'
    },
    {
      title: 'Custom Printing',
      description: 'High-quality digital printing with your logo, design, or branding message.',
      icon: '🎨'
    },
    {
      title: 'Bulk Manufacturing',
      description: 'Specialized in large-scale production with MOQ starting from 20KG.',
      icon: '🏭'
    },
    {
      title: 'Fast Delivery',
      description: 'Timely production and shipping to meet your business deadlines.',
      icon: '🚚'
    }
  ]

  return (
    <Layout 
      pageTitle="Home | Eco-Friendly Custom Bags Manufacturer"
      pageDescription="ECO PRINT & PACK - Leading manufacturer of eco-friendly non-woven bags, paper bags, and custom packaging. MOQ 20KG. Wholesale prices for retailers and distributors."
    >
      {/* Hero Section */}
      <Hero />

      {/* Products Preview Section */}
      <section className="section-padding bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-emerald-600">Featured Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality eco-friendly bags for retailers, wholesalers, and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <div className={`h-3 bg-gradient-to-r ${product.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${product.color}`}>
                      {product.badge}
                    </span>
                    <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      MOQ: {product.moq}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/products"
                    className="block w-full text-center btn-secondary py-3 text-sm font-bold"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary px-12">
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-emerald-600">ECO PRINT & PACK</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver superior quality and service that goes beyond expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Order Your Custom Bags?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
            Contact us today for wholesale pricing, samples, and custom printing options. 
            Our team is ready to help with your packaging needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+9779851189191" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-emerald-700 bg-white rounded-lg hover:bg-emerald-50 transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL NOW: +977 9851189191
            </a>
            
            <Link 
              href="/contact#quote" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              REQUEST FREE QUOTE
            </Link>
          </div>
          
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">20 KG</div>
                <div className="text-emerald-100 font-semibold">Minimum Order</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">7-14 Days</div>
                <div className="text-emerald-100 font-semibold">Production Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-emerald-100 font-semibold">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trusted by <span className="text-emerald-600">Businesses Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply eco-friendly packaging solutions to retailers, wholesalers, and distributors across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Trust badges - replace with actual client logos */}
            {['Retail Stores', 'Supermarkets', 'Fashion Brands', 'Gift Shops', 'Event Planners', 'Exporters'].map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
                <div className="text-3xl mb-4">🏪</div>
                <div className="font-bold text-gray-800">{industry}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-2xl border border-emerald-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Custom Packaging Solutions?</h3>
                <p className="text-gray-600">We also manufacture paper bags, suit covers, and provide custom printing services.</p>
              </div>
              <Link href="/contact" className="btn-primary">
                CONTACT FOR MORE INFO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}