// components/Hero.jsx
export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <div className="moq-badge mb-6">Minimum Order Quantity: 20 KG</div>
            <h1 className="mb-6 text-gray-900">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black">ECO FRIENDLY</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-emerald-600">NON WOVEN BAGS</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-10 leading-relaxed">
              Use Eco-Friendly Non Woven Bags And Save the Environment
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/contact#quote" className="btn-primary text-center">
                ORDER NOW
              </a>
              <a href="/products" className="btn-secondary text-center">
                VIEW PRODUCTS
              </a>
            </div>
            <div className="mt-12 p-6 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-xl border border-emerald-200">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-emerald-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <p className="font-bold text-lg">Wholesale & Bulk Orders Only</p>
                  <p className="text-gray-600">Custom printing available for retailers and distributors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Contact */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <div className="text-4xl font-black mb-2">ECO PRINT & PACK</div>
                <div className="text-emerald-100 font-medium">more than you anticipate...</div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Contact for Quotes</h3>
                  <div className="space-y-4">
                    <a href="tel:+977 9869268248" className="flex items-center text-2xl font-bold hover:text-emerald-100 transition-colors">
                      <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +977 986-9268248
                    </a>
                    <a href="tel:+9779762416063" className="flex items-center text-2xl font-bold hover:text-emerald-100 transition-colors">
                      <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +977 9762416063
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black">BEST SELLER</div>
                  <div className="text-xl mt-2">Loop Handle Non Woven Bag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};