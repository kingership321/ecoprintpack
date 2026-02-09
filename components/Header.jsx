// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
      <div className="section-padding-sm">
        <div className="flex items-center justify-between">
          {/* Logo - matching your graphic */}
          <Link href="/" className="flex flex-col">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900 leading-tight">
                  ECO <span className="text-emerald-600">PRINT & PACK</span>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  more than you anticipate...
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