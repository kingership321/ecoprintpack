// components/sections/Hero.tsx
'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images - Fix the import paths
// For images in public folder, you don't need to import them
// Just use the path directly

// --- Icon Components for Uniformity (kept as fallback) ---
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const ScrollIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

// Slide data with images - Use direct paths for public folder images
const slides = [
  {
    id: 1,
    title: 'Sustainable Shopping Bags.',
    highlight: 'Manufactured in Nepal.',
    description: 'Practical sustainability. Local quality. Genuine care. Join the movement to make Nepal cleaner and greener.',
    buttonText: 'Go Green. Order Now',
    buttonLink: '/contact#quote',
    bgImage: '/asset/product1.jpg', // Direct path from public folder
    icon: <ShoppingBagIcon />,
    iconImage: '/asset/product5.jpg',
    alt: 'Sustainable shopping bags manufactured in Nepal',
  },
  {
    id: 2,
    title: 'Non-Woven & Canvas Bags',
    highlight: 'Strength & Style',
    description: 'Water resistant, tear resistant, and fully customizable. Perfect for retailers, events, and corporate branding.',
    buttonText: 'View Products',
    buttonLink: '/#products',
    bgImage: '/asset/product2.jpg',
    icon: <BoxIcon />,
    iconImage: '/asset/product5.jpg',
    alt: 'Non-woven and canvas bags for retail and events',
  },
  {
    id: 3,
    title: 'Traditional Lokta Paper',
    highlight: '1000-Year Heritage',
    description: 'Crafted by Nepali artisans using traditional methods. Tree-free, naturally textured, and exceptionally strong.',
    buttonText: 'Discover Lokta',
    buttonLink: '/#products',
    bgImage: '/asset/product3.jpg',
    icon: <ScrollIcon />,
    iconImage: '/asset/product5.jpg',
    alt: 'Traditional Lokta paper bags crafted in Nepal',
  },
  {
    id: 4,
    title: 'Eco-Friendly Packaging',
    highlight: 'For Every Business',
    description: 'From Kirana pasals to boutique showrooms. We deliver sustainable packaging solutions tailored to your needs.',
    buttonText: 'Get a Quote',
    buttonLink: '/contact#quote',
    bgImage: '/asset/product4.jpg',
    icon: <LeafIcon />,
    iconImage: '/asset/product5.jpg',
    alt: 'Eco-friendly packaging solutions for all businesses',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative h-[50vh] md:h-[70vh] min-h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              {!imageErrors[`bg-${slide.id}`] ? (
                <Image
                  src={slide.bgImage}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onError={() => handleImageError(`bg-${slide.id}`)}
                  quality={90}
                />
              ) : (
                // Fallback gradient if image fails to load
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0 ? 'from-green-700 to-emerald-600' :
                  index === 1 ? 'from-emerald-600 to-teal-500' :
                  index === 2 ? 'from-amber-600 to-orange-500' :
                  'from-green-800 to-lime-600'
                }`} />
              )}
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="grid md:grid-cols-2 gap-6 items-center w-full">
                <div className={`text-center md:text-left transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight drop-shadow-md">
                    {slide.title}<br />
                    <span className="text-green-200 text-xl md:text-2xl lg:text-3xl">{slide.highlight}</span>
                  </h1>
                  
                  <p className="text-sm md:text-base mb-6 text-green-50 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <Link 
                    href={slide.buttonLink} 
                    className="btn-primary inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                    </svg>
                    {slide.buttonText}
                  </Link>
                </div>

                {/* Product Image Showcase Card - Rectangular */}
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`product-pattern-${slide.id}`} patternUnits="userSpaceOnUse" width="20" height="20">
                            <path d="M10 0C10 5 5 10 0 10C5 10 10 15 10 20C10 15 15 10 20 10C15 10 10 5 10 0Z" fill="currentColor"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#product-pattern-${slide.id})`} />
                      </svg>
                    </div>

                    {/* Image Container */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      {slide.iconImage && !imageErrors[`icon-${slide.id}`] ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={slide.iconImage}
                            alt="Product showcase"
                            width={280}
                            height={200}
                            className="w-auto h-auto max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="text-white/40 transform group-hover:scale-110 transition-transform duration-500">
                          {slide.icon}
                        </div>
                      )}
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Bottom Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-semibold text-center">
                        {slide.title.split(' ')[0]} Collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}