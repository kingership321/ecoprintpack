// components/sections/DirectorsMessage.tsx
'use client';
import Image from 'next/image';

export function DirectorsMessage() {
  return (
    <section className="section-padding bg-brand-linen relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="editorial-tag mb-3">
            <span>The Founder's Letter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-brand-forest">
            A Commitment to <span className="italic font-serif text-brand-olive">Craft & Care</span>
          </h2>
        </div>

        {/* Journal Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-brand-beige/90 shadow-[0_8px_30px_-6px_rgba(27,67,50,0.06)] relative overflow-hidden">
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Founder Portrait Column (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-brand-beige bg-stone-100 flex-shrink-0">
                <Image 
                  src="/asset/director_photo.jpeg" 
                  alt="Dipesh Rai - Managing Director, Eco Promotional Industries" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
              
              <div className="mt-4 space-y-1 text-center">
                <h3 className="font-serif text-lg font-bold text-brand-forest">Dipesh Rai</h3>
                <p className="text-xs font-sans font-semibold tracking-wider uppercase text-brand-olive">
                  Managing Director
                </p>
                <p className="text-[11px] font-sans text-stone-500">
                  Eco Promotional Industries Pvt Ltd
                </p>
              </div>

              {/* Artisanal Heritage Seal */}
              <div className="mt-5 px-3 py-1.5 rounded-full bg-brand-beige/50 border border-brand-beige text-[10px] font-sans uppercase tracking-widest text-brand-forest">
                Kathmandu Valley Atelier
              </div>
            </div>

            {/* Letter Body Column (8 cols) */}
            <div className="md:col-span-8 space-y-5 text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
              
              {/* Pull Quote */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-brand-forest italic leading-snug border-l-2 border-brand-olive pl-5 py-1">
                &ldquo;Why bags? Because every day, thousands of kilograms of plastic are thrown away after ten minutes of use. We wanted to offer an alternative that comes with zero guilt.&rdquo;
              </blockquote>

              <p>
                When we founded <strong className="text-brand-forest font-semibold">Eco Promotional Industries</strong>, 
                our goal was simple yet urgent: provide Nepali businesses with packaging that doesn't cost the earth. 
                Single-use plastic bags choke our rivers and landfills for centuries. But solving that problem requires 
                more than just idealism.
              </p>

              <p>
                It requires <strong className="text-brand-forest font-semibold">respect</strong>: 
                Respect for the business owner who cannot afford handles tearing under weight; 
                respect for brands that require packaging as refined as their products; 
                and respect for our skilled local craftspeople who cut, stitch, and print every piece right here in Lalitpur.
              </p>

              {/* Highlight callout in warm paper style */}
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-beige/30 border border-brand-beige">
                <p className="font-serif text-base sm:text-lg text-brand-forest italic">
                  Practical sustainability. Dependable local craftsmanship. Genuine care for the future of our environment.
                </p>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm italic">
                Thank you for choosing to make a difference, for supporting Nepali manufacturing, and for trusting us with your brand.
              </p>

              {/* Signature Line */}
              <div className="pt-4 border-t border-stone-200">
                <div>
                  <span className="font-serif font-bold text-brand-forest text-base block">Dipesh Rai</span>
                  <div className="text-[11px] text-stone-500 font-sans uppercase tracking-wider mt-0.5">
                    Managing Director • Eco Promotional Industries Pvt Ltd
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}