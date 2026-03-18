// components/sections/DirectorsMessage.tsx
'use client';
import Image from 'next/image';

export function DirectorsMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
            FROM THE FOUNDER
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
            Director's <span className="text-green-600">Message</span>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-50 via-white to-emerald-50 rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-green-100 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            
            {/* Director Photo / Avatar Area */}
            <div className="text-center md:text-left flex flex-col items-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                {/* Decorative Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-spin-slow opacity-40 blur-sm"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-green-600 flex items-center justify-center">
                  {/* Placeholder with Initials - Replace with Image component when real photo is available */}
                  {/* 
                    <Image 
                      src="/images/director.jpg" 
                      alt="Dipesh Rai - Managing Director" 
                      fill 
                      className="object-cover"
                    />
                  */}
                  <span className="text-3xl md:text-4xl font-bold text-white">DR</span>
                </div>
              </div>
              
              {/* Name Tag */}
              <div className="mt-4 text-center">
                <h3 className="text-lg md:text-xl font-black text-gray-900">Dipesh Rai</h3>
                <div className="text-green-600 font-bold text-sm md:text-base">Managing Director</div>
                <div className="text-gray-500 text-xs mt-0.5">Eco Promotional Industries Pvt Ltd</div>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-2 relative">
              <div className="text-4xl md:text-5xl text-green-200 font-serif leading-none absolute -top-3 -left-2 opacity-40 select-none">
                &ldquo;
              </div>
              
              <div className="relative z-10 space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p className="font-semibold text-gray-900 text-base md:text-lg">
                  I often get asked: Why bags? Why start a manufacturing company in Nepal?
                </p>
                
                <p>
                  The answer is simple: because I saw a problem that needed solving. Every day, Nepal generates thousands of kilograms of plastic waste. A huge portion comes from single-use shopping bags used for ten minutes, then thrown away to sit in landfills or rivers for hundreds of years.
                </p>
                
                <p>
                  I wanted to offer an alternative. I wanted to give businesses a way to package their products that didn&apos;t come with a side of guilt.
                </p>
                
                <p>
                  But I also wanted to offer something else: <strong className="text-green-700">respect</strong>. Respect for the business owner who needs bags that won&apos;t break. Respect for the brand that needs packaging that looks as good as their products. Respect for the craftspeople who stitch every bag with care.
                </p>
                
                <div className="director-message my-4 p-4 md:p-5">
                  <p className="text-green-800 font-semibold text-base">
                    That is what Eco Promotional Industries Pvt Ltd stands for. Practical sustainability. Local quality. Genuine care.
                  </p>
                </div>
                
                <p className="text-gray-600 italic text-sm">
                  Thank you for being here. Thank you for caring about where your packaging comes from. And thank you for giving us the chance to serve you.
                </p>
              </div>
              
              {/* Signature Area */}
              <div className="flex items-center mt-6 pt-4 border-t border-green-200">
                <div className="w-8 h-0.5 bg-green-600 mr-3 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900 text-base">Dipesh Rai</div>
                  <div className="text-gray-600 text-xs">Managing Director, Eco Promotional Industries Pvt Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}