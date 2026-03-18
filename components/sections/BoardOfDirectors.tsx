// components/sections/BoardOfDirectors.tsx
'use client';

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
  },
  {
    name: 'Dipesh Rai',
    role: 'Managing Director',
    description: 'Operations and manufacturing excellence',
    initials: 'DR',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Sujan Ghimire',
    role: 'Director',
    description: 'Marketing and client relations',
    initials: 'SG',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Krishna Kaji Mahat',
    role: 'Director',
    description: 'Finance and administration',
    initials: 'KM',
    color: 'from-purple-500 to-pink-600',
  },
];

export function BoardOfDirectors() {
  return (
    <section className="section-padding pt-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            LEADERSHIP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Board of <span className="text-green-600">Directors</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries driving Eco Promotional Industries towards a sustainable future.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {directors.map((director, index) => (
            <div 
              key={index}
              className="board-card"
            >
              {/* Image / Avatar Area */}
              <div className="relative h-36 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Decorative Background Circle */}
                <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-br ${director.color} opacity-20 group-hover:scale-110 transition-transform duration-300`}></div>
                
                {/* Avatar Circle */}
                <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${director.color} flex items-center justify-center shadow-md border-4 border-white`}>
                  <span className="text-2xl font-black text-white">{director.initials}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-gray-900 mb-0.5">{director.name}</h3>
                <div className="inline-flex items-center justify-center text-xs font-semibold text-green-600 mb-2">
                  <IconUser />
                  <span className="ml-1">{director.role}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{director.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}