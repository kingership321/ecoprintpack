// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Logo configuration object for easy management
  const logoConfig = {
    sizes: {
      mobile: { width: 48, height: 48 },
      desktop: { width: 56, height: 56 }
    },
    text: {
      primary: 'ECO',
      secondary: 'PRINT & PACK',
      tagline: 'more than you anticipate...'
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
      <div className="px-4 py-2 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Enhanced with better image management */}
          <Link href="/" className="flex flex-col group outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg">
            <div className="flex items-center">
              {/* Responsive Logo Image with Next.js optimization */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 mr-3 md:mr-4 flex-shrink-0">
                <Image
                  src={logo}
                  alt="ECO PRINT & PACK - Sustainable Packaging Manufacturer since 2015"
                  fill
                  sizes="(max-width: 768px) 48px, 56px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  quality={95}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
              
              {/* Logo Text with Responsive Sizing */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                    {logoConfig.text.primary}
                  </span>
                  <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent ml-1 group-hover:from-emerald-500 group-hover:to-green-500 transition-all duration-300">
                    {logoConfig.text.secondary}
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-wide group-hover:text-gray-700 transition-colors">
                  {logoConfig.text.tagline}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-semibold text-lg transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <a href="/contact#quote" className="btn-primary">
              ORDER NOW
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-emerald-100 pt-6">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-emerald-600 font-semibold text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="/contact#quote" className="btn-primary w-full text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                ORDER NOW
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};