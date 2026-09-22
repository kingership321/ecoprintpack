// components/sections/BoardOfDirectors.tsx
'use client';
import Image from 'next/image';

// Import director images
import amrishThapa from '/public/asset/DipeshJI.jpg';
import dipeshRai from '/public/asset/DipeshJI.jpg';
import sujanGhimire from '/public/asset/DipeshJI.jpg';
import krishnaMahat from '/public/asset/DipeshJI.jpg';

// Uniform Icon for Role
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const directors = [
  {
    name: 'Dr. Amrish Thapa',
    role: 'Chairman',
    description: 'Strategic vision and business development',
    initials: 'AT',
    color: 'from-blue-500 to-indigo-600',
    image: amrishThapa,
    alt: 'Dr. Amrish Thapa - Chairman'
  },
  {
    name: 'Dipesh Rai',
    role: 'Managing Director',
    description: 'Operations and manufacturing excellence',
    initials: 'DR',
    color: 'from-green-500 to-emerald-600',
    image: dipeshRai,
    alt: 'Dipesh Rai - Managing Director'
  },
  {
    name: 'Sujan Ghimire',
    role: 'Director',
    description: 'Marketing and client relations',
    initials: 'SG',
    color: 'from-amber-500 to-orange-600',
    image: sujanGhimire,
    alt: 'Sujan Ghimire - Director'
  },
  {
    name: 'Krishna Kaji Mahat',
    role: 'Director',
    description: 'Finance and administration',
    initials: 'KM',
    color: 'from-purple-500 to-pink-600',
    image: krishnaMahat,
    alt: 'Krishna Kaji Mahat - Director'
  },
];

export function BoardOfDirectors() {
  return (
    <section className="section-padding pt-0 bg-brand-linen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-brand-beige text-brand-forest px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-brand-mint/30">
            <svg className="w-3 h-3 mr-1.5 text-brand-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            LEADERSHIP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-forest mb-3">
            Board of <span className="italic font-serif text-brand-olive">Directors</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto font-sans">
            Meet the visionaries driving Eco Promotional Industries towards a sustainable future.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {directors.map((director, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group border border-brand-beige/90"
            >
              {/* Image Area - Rectangular and prominent */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-brand-forest to-brand-moss">
                <Image
                  src={director.image}
                  alt={director.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                />
                
                {/* Optional overlay with gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Role badge on image (optional) */}
                <div className="absolute bottom-3 left-3 bg-brand-forest text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  {director.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-serif font-bold text-brand-forest mb-1">{director.name}</h3>
                <div className="inline-flex items-center justify-center text-xs font-semibold text-brand-forest mb-2 bg-brand-beige border border-brand-mint/30 px-3 py-1 rounded-full">
                  <IconUser />
                  <span className="ml-1.5">{director.role}</span>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed border-t border-stone-100 pt-3 mt-1 font-sans">
                  {director.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}