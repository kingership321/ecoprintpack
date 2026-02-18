// components/Hero.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import product1 from '../public/asset/product1.jpg';
import product2 from '../public/asset/product2.jpg';
import product3 from '../public/asset/product3.jpg';
import product4 from '../public/asset/product4.jpg';
import product5 from '../public/asset/product5.jpg';
import product6 from '../public/asset/product6.jpg';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel slides data with Unsplash images
  const slides = [
    {
      id: 1,
      type: 'product',
      title: 'ECO FRIENDLY',
      subtitle: 'NON WOVEN BAGS',
      description: 'Premium quality eco-friendly bags for sustainable businesses',
      image: product1,
      badge: '🌟 FEATURED',
      price: '₦35,000',
      mrp: '₦42,000',
      discount: '17%',
      cta: 'ORDER NOW'
    },
    {
      id: 2,
      type: 'product',
      title: 'PREMIUM QUALITY',
      subtitle: 'LOOP HANDLE BAGS',
      description: 'Comfortable loop handles with custom printing for your brand',
      image: product2,
      badge: '🔥 BESTSELLER',
      price: '₦42,000',
      mrp: '₦50,000',
      discount: '16%',
      cta: 'ORDER NOW'
    },
    {
      id: 3,
      type: 'product',
      title: 'LUXURY FINISH',
      subtitle: 'D-CUT BAGS',
      description: 'Modern D-cut design for high-end retail and luxury brands',
      image: product3,
      badge: '✨ NEW',
      price: '₦48,000',
      mrp: '₦58,000',
      discount: '17%',
      cta: 'ORDER NOW'
    },
    {
      id: 4,
      type: 'product',
      title: 'HEAVY DUTY',
      subtitle: 'STITCHED HANDLE',
      description: 'Extra strong bags with reinforced handles for heavy items',
      image: product4,
      badge: '💪 PREMIUM',
      price: '₦52,000',
      mrp: '₦65,000',
      discount: '20%',
      cta: 'ORDER NOW'
    },
    {
      id: 5,
      type: 'promotion',
      title: 'BULK ORDER',
      subtitle: 'WHOLESALE SPECIAL',
      description: 'Get up to 25% off on orders above 100KG. Perfect for retailers.',
      image: product5,
      badge: '🎯 LIMITED',
      offer: '25% OFF 100KG+',
      cta: 'CONTACT SALES'
    },
    {
      id: 6,
      type: 'promotion',
      title: 'CUSTOM PRINTING',
      subtitle: 'YOUR BRAND HERE',
      description: 'Full-color custom printing with free design consultation',
      image: product6,
      badge: '🎨 FREE DESIGN',
      offer: 'No Minimum Order',
      cta: 'GET QUOTE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full h-screen max-h-[800px] min-h-[500px] overflow-hidden">
      {/* Carousel Container - Full width and height */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Full-width background image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:from-black/60 md:via-black/40"></div>
            </div>

            {/* Content overlay - Responsive positioning */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
                  {/* Badge - Responsive */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <span className="inline-block bg-white/20 backdrop-blur-md px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-bold text-white border border-white/30">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title - Responsive font sizes */}
                  <h1 className="mb-2 sm:mb-3 md:mb-4">
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-1 sm:mb-2">
                      {slide.title}
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white/90">
                      {slide.subtitle}
                    </span>
                  </h1>

                  {/* Description - Responsive */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-4 sm:mb-6 md:mb-8 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Price/Offer Display - Responsive */}
                  {slide.type === 'product' && (
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                          {slide.price}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl line-through text-white/50">
                          {slide.mrp}
                        </span>
                        <span className="bg-amber-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-bold">
                          {slide.discount} OFF
                        </span>
                      </div>
                    </div>
                  )}

                  {slide.type === 'promotion' && slide.offer && (
                    <div className="mb-4 sm:mb-6 md:mb-8">
                      <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-lg">
                        {slide.offer}
                      </span>
                    </div>
                  )}

                  {/* CTA Buttons - Responsive */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="/contact#quote"
                      className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      {slide.cta}
                    </a>
                    <a
                      href="/products"
                      className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-900 font-bold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105"
                    >
                      VIEW PRODUCTS
                    </a>
                  </div>

                  {/* MOQ Badge - Responsive */}
                  <div className="mt-6 sm:mt-8 md:mt-10 inline-flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border border-white/20">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-xs sm:text-sm md:text-base font-medium">Minimum Order: 20 KG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Responsive positioning */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 group"
          aria-label="Previous slide"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:scale-110">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 group"
          aria-label="Next slide"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:scale-110">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Slide Indicators - Responsive */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? 'w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 bg-white'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Responsive */}
        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20 bg-black/30 backdrop-blur-sm text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium border border-white/20">
          <span className="text-emerald-400 font-bold">{currentSlide + 1}</span> / {slides.length}
        </div>

        {/* Progress Bar - Full width */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-500 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};