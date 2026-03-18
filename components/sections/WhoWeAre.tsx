// components/sections/WhoWeAre.tsx
'use client';

export function WhoWeAre() {
  return (
    <section id="about" className="section-padding pt-0 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <svg className="w-3 h-3 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
              WHO WE ARE
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Who <span className="text-green-600">We Are?</span>
            </h2>

            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                A company who believes that <strong className="text-green-700">packaging should not cost the earth</strong>. 
                That is why we dedicated ourselves to manufacturing high-quality, sustainable alternatives to single-use plastic.
              </p>
              
              <p>
                We are <strong className="text-gray-900">more than just suppliers; we are manufacturers</strong>. 
                This means when you order from us, you are buying directly from the source. We oversee every step 
                of the production process from sourcing raw materials to the final print ensuring that every 
                bag we ship meets our high standards of durability and design.
              </p>
              
              <p>
                We specialize in a diverse range of materials: the versatility of <strong className="text-green-700">Non-Woven Fabric</strong>, 
                the classic appeal of <strong className="text-green-700">Paper</strong>, and the unique, textured beauty of <strong className="text-green-700">Lokta Paper</strong>. 
                Beyond bags, we also provide essential storage solutions like <strong className="text-green-700">Coat and Lehenga Covers</strong>, 
                ensuring your garments stay safe in eco-friendly material.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-xl md:text-2xl font-black text-green-600">500+</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Happy Clients</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-xl md:text-2xl font-black text-green-600">8+</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-xl md:text-2xl font-black text-green-600">50K+</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Bags Monthly</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-5 md:p-6 text-white shadow-xl relative overflow-hidden">
              {/* Decorative Leaf Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10 transform translate-x-12 -translate-y-12">
                 <svg viewBox="0 0 200 200" fill="currentColor">
                   <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,87.9,-3.3C85.6,11.3,78.4,25.3,69.2,37.1C60,48.9,48.8,58.5,36.1,66.3C23.4,74.1,9.2,80.1,-4.1,85.6C-17.4,91.1,-30.7,96.1,-43.2,93.3C-55.7,90.5,-67.3,79.9,-75.2,67.1C-83.1,54.3,-87.3,39.3,-88.4,24.3C-89.5,9.3,-87.5,-5.7,-82.3,-19.5C-77.1,-33.3,-68.7,-45.9,-57.5,-55.1C-46.3,-64.3,-32.3,-70.1,-18.2,-74.7C-4.1,-79.3,10.1,-82.7,24.4,-81.8C38.7,-80.9,53.1,-75.7,44.7,-76.4Z" transform="translate(100 100)" />
                 </svg>
              </div>

              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-black mb-3 leading-tight">
                  &ldquo;More than you anticipate...&rdquo;
                </div>
                <p className="text-sm md:text-base mb-4 text-green-100 leading-relaxed">
                  From the busy streets of New Road to the boutique showrooms of Lalitpur, 
                  and from destination weddings in Pokhara to corporate offices in Thamel 
                  we provide sustainable packaging solutions tailored to Nepal&apos;s unique marketplace.
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-base">ECO PRINT & PACK</div>
                    <div className="text-green-200 text-[10px] md:text-xs">Eco Promotional Industries Pvt Ltd</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}