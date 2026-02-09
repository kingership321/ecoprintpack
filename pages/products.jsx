// pages/products.jsx - PRODUCTS PAGE
import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function ProductsPage() {
  const productCategories = [
    {
      id: 'non-woven',
      name: 'Non Woven Bags',
      description: 'Our standard eco-friendly non-woven bags made from recycled materials. Perfect for everyday retail packaging needs.',
      features: [
        '100% Recyclable Material',
        'Custom Sizes Available',
        'Multiple Color Options',
        'Water & Tear Resistant',
        'Reusable & Durable',
        'FDA Approved Materials'
      ],
      specifications: {
        'Material': 'Non-woven Polypropylene',
        'GSM': '70-120 GSM (Customizable)',
        'Printing': 'Digital / Screen / Flexo',
        'Handle Types': 'Loop / D-cut / Stitched',
        'MOQ': '20 KG',
        'Lead Time': '7-14 Days'
      },
      applications: ['Retail Shopping', 'Gift Packaging', 'Brand Promotions', 'Trade Shows'],
      imageColor: 'from-emerald-500 to-green-600',
      badge: 'STANDARD'
    },
    {
      id: 'loop-handle',
      name: 'Loop Handle Non Woven Bags',
      description: 'Best selling bags with comfortable loop handles. Most popular choice for retail stores and supermarkets.',
      features: [
        'Ergonomic Loop Handles',
        'Extra Reinforcement',
        'Comfortable to Carry',
        'High Weight Capacity',
        'Custom Print Area',
        'Eco-Friendly Materials'
      ],
      specifications: {
        'Material': 'Non-woven Polypropylene',
        'GSM': '80-100 GSM (Recommended)',
        'Printing': 'Full Color Digital Print',
        'Handle': 'Loop Handle (Reinforced)',
        'MOQ': '20 KG',
        'Lead Time': '10-15 Days'
      },
      applications: ['Supermarkets', 'Clothing Stores', 'Boutiques', 'Department Stores'],
      imageColor: 'from-amber-500 to-orange-600',
      badge: 'BEST SELLER'
    },
    {
      id: 'd-cut',
      name: 'Printed D-Cut Non Woven Bags',
      description: 'Modern D-cut design with excellent print visibility. Perfect for brands wanting maximum visual impact.',
      features: [
        'Modern D-Cut Design',
        'Maximum Print Area',
        'Smooth Handle Edges',
        'Premium Finish',
        'Brand Visibility',
        'Luxury Feel'
      ],
      specifications: {
        'Material': 'Premium Non-woven',
        'GSM': '90-120 GSM',
        'Printing': 'High Resolution Digital',
        'Handle': 'D-Cut Design',
        'MOQ': '20 KG',
        'Lead Time': '12-18 Days'
      },
      applications: ['Fashion Brands', 'Luxury Goods', 'Corporate Gifts', 'Exhibitions'],
      imageColor: 'from-blue-500 to-indigo-600',
      badge: 'PREMIUM'
    },
    {
      id: 'stitched',
      name: 'Stitched Handle Non Woven Bags',
      description: 'Premium bags with stitched handles for extra strength and durability. Ideal for heavy items.',
      features: [
        'Double-Stitched Handles',
        'Extra Strength',
        'Heavy Duty',
        'Longer Lifespan',
        'Professional Look',
        'Reinforced Seams'
      ],
      specifications: {
        'Material': 'Heavy Duty Non-woven',
        'GSM': '100-150 GSM',
        'Printing': 'All Printing Methods',
        'Handle': 'Stitched Cotton/PP',
        'MOQ': '20 KG',
        'Lead Time': '15-20 Days'
      },
      applications: ['Books & Stationery', 'Hardware Items', 'Heavy Products', 'Industrial Packaging'],
      imageColor: 'from-purple-500 to-pink-600',
      badge: 'HEAVY DUTY'
    }
  ]

  const otherProducts = [
    {
      name: 'Paper Bags',
      description: 'Eco-friendly paper bags for sustainable packaging solutions.',
      icon: '📄'
    },
    {
      name: 'Suit Covers',
      description: 'Premium suit covers for clothing protection and presentation.',
      icon: '👔'
    },
    {
      name: 'Custom Printing',
      description: 'High-quality printing on various packaging materials.',
      icon: '🖨️'
    },
    {
      name: 'PP Woven Bags',
      description: 'Durable PP woven bags for industrial and agricultural use.',
      icon: '🛍️'
    }
  ]

  return (
    <Layout 
      pageTitle="Products | Eco-Friendly Custom Bags Manufacturer"
      pageDescription="Explore our range of eco-friendly bags: Non-woven bags, loop handle bags, D-cut bags, stitched handle bags. MOQ 20KG. Custom printing available."
    >
      {/* Hero Section for Products */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
              Our <span className="text-emerald-600">Product Range</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              High-quality eco-friendly bags for every packaging need. All products available with custom printing.
            </p>
            
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-lg rounded-xl shadow-lg">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Minimum Order Quantity: 20 KG per product
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Featured <span className="text-emerald-600">Bag Collections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete range of eco-friendly packaging solutions
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div 
                key={category.id} 
                id={category.id}
                className={`product-card ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex gap-12 items-center`}
              >
                {/* Product Image/Color Block */}
                <div className="md:w-2/5">
                  <div className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${category.imageColor} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="relative z-10 text-center p-8">
                      <span className={`inline-block px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r ${category.imageColor} shadow-lg mb-6`}>
                        {category.badge}
                      </span>
                      <div className="text-5xl font-black text-white mb-4">{category.name.split(' ')[0]}</div>
                      <div className="text-white text-xl font-medium">{category.name.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900">{category.name}</h3>
                    <span className="moq-badge text-lg px-6 py-2">MOQ: 20 KG</span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Specifications
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(category.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-900 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Common Applications</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.applications.map((app, idx) => (
                        <span key={idx} className="px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-lg">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`/contact#quote?product=${category.id}`}
                      className="btn-primary text-center"
                    >
                      <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      REQUEST QUOTE FOR {category.name.toUpperCase()}
                    </a>
                    
                    <a 
                      href="tel:+9779851189191" 
                      className="btn-secondary text-center"
                    >
                      <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      CALL FOR SAMPLES
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="section-padding bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Other <span className="text-emerald-600">Products & Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond bags, we offer a complete range of packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{product.name}</h3>
                <p className="text-gray-600 text-center mb-6">{product.description}</p>
                <a 
                  href="/contact" 
                  className="block text-center text-emerald-600 font-bold hover:text-emerald-700"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Common questions about our products and ordering process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity (MOQ)?',
                a: 'Our minimum order quantity is 20 KG per product. This allows us to maintain quality while offering competitive wholesale pricing.'
              },
              {
                q: 'Can I get custom printing on the bags?',
                a: 'Yes! We offer custom printing with your logo, design, or branding message. We support digital, screen, and flexo printing methods.'
              },
              {
                q: 'How long does production take?',
                a: 'Production time varies by product complexity and order size. Standard production time is 7-20 days after design approval.'
              },
              {
                q: 'Do you provide samples?',
                a: 'Yes, we can provide samples. Please contact us with your requirements to arrange sample delivery.'
              },
              {
                q: 'What materials are used in your bags?',
                a: 'We use eco-friendly, recyclable materials including non-woven polypropylene, recycled paper, and other sustainable materials.'
              },
              {
                q: 'Can I order multiple bag types together?',
                a: 'Yes, you can mix different bag types in your order. The 20 KG MOQ applies per product type.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Have more questions? We're here to help!
            </p>
            <a href="/contact" className="btn-primary px-12">
              CONTACT OUR SALES TEAM
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Contact us today for pricing, samples, or to discuss your custom requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="tel:+9779851189191" 
              className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-emerald-700 bg-white rounded-lg hover:bg-emerald-50 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL FOR QUOTE
            </a>
            
            <a 
              href="mailto:sales@ecoprintpack.com" 
              className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              EMAIL US
            </a>
          </div>
          
          <div className="mt-12 text-emerald-100">
            <p className="text-lg font-semibold">Working Hours: Sunday-Friday, 9:00 AM - 6:00 PM (NPT)</p>
            <p className="mt-2">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}