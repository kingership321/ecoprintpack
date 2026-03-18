// components/sections/MissionVision.tsx
'use client';

export function MissionVision() {
  return (
    <section className="section-padding pt-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            OUR PURPOSE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Mission & <span className="text-green-600">Vision</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12 transform group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900">Our Mission</h3>
              </div>
              
              <blockquote className="text-base md:text-lg text-gray-800 font-semibold leading-relaxed mb-5 border-l-4 border-green-600 pl-4 py-1.5 bg-green-50 rounded-r-lg">
                &ldquo;To provide Nepali businesses with high-quality, affordable, and sustainable packaging solutions that reduce plastic waste and protect our environment.&rdquo;
              </blockquote>
              
              <ul className="space-y-2">
                {[
                  'Develop eco-friendly alternatives to plastic packaging',
                  'Make sustainable packaging accessible for all businesses',
                  'Support local manufacturing and craftsmanship',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 transform group-hover:scale-150 transition-transform duration-500"></div>
             <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 shadow-md border border-white/10">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-white">Our Vision</h3>
              </div>
              
              <blockquote className="text-base md:text-lg text-white font-semibold leading-relaxed mb-5 border-l-4 border-green-400 pl-4 py-1.5 bg-white/10 rounded-r-lg backdrop-blur-sm">
                &ldquo;To create a Nepal where every shopping bag is reusable, every garment is protected in eco-friendly covers, and every business chooses sustainability over plastic.&rdquo;
              </blockquote>
              
              <ul className="space-y-2">
                {[
                  'Lead Nepal toward a plastic-free future',
                  'Preserve traditional craftsmanship like Lokta paper making',
                  'Inspire the next generation of eco-conscious businesses',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}