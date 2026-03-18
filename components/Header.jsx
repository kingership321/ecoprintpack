// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md font-sans">
      {/* Top Info Bar - Hidden on mobile */}
      <div className="bg-green-950 text-white py-1.5 hidden md:block border-b border-green-900">
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a href="tel:+9779869268248" className="flex items-center hover:text-green-300 transition-colors duration-200">
              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +977 9869268248 / 9851189191
            </a>
            {/* Email */}
            <a href="mailto:Ecopromotional2@gmail.com" className="flex items-center hover:text-green-300 transition-colors duration-200">
              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Ecopromotional2@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-200" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-200" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-gradient-to-r from-green-800 to-emerald-700 border-b border-green-700">
        <div className="container mx-auto px-3 py-2 md:px-4 lg:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo with White Background */}
            <Link href="/" className="flex flex-col group outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800 rounded-lg bg-white px-2 py-1 shadow-sm hover:shadow transition-all duration-300">
              <div className="flex items-center">
                <div className="relative w-8 h-8 md:w-10 md:h-10 mr-1.5 md:mr-2 flex-shrink-0">
                  <Image
                    src="/logo.jpg" 
                    alt="ECO PRINT & PACK Logo"
                    fill
                    sizes="(max-width: 768px) 32px, 40px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-baseline leading-tight">
                    <span className="text-base md:text-lg font-black text-emerald-700 group-hover:text-green-700 transition-colors">
                      ECO
                    </span>
                    <span className="text-base md:text-lg font-black text-gray-800 ml-0.5 group-hover:text-gray-900 transition-colors">
                      PRINT & PACK
                    </span>
                  </div>
                  <span className="text-[6px] md:text-[8px] text-green-600 font-semibold tracking-wide uppercase">
                    Sustainable Packaging Solutions
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-green-200 font-semibold text-sm xl:text-base transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green-300 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* CTA Button: Go Green. Order Now */}
              <Link
                href="/contact#quote"
                className="btn-primary inline-flex items-center text-sm py-2 px-4"
              >
                <svg className="w-4 h-4 mr-1.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
                <span>Go Green. Order Now</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-1.5 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-green-900 border-t border-green-700 shadow-lg px-4 py-3 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white hover:bg-green-800 font-semibold text-base py-2 px-3 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Contact Details */}
            <div className="border-t border-green-700 pt-3 mt-3 space-y-2 text-green-100 text-xs">
              <div className="flex items-center px-2">
                <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>9869268248 / 9851189191</span>
              </div>
              <div className="flex items-center px-2">
                <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Ecopromotional2@gmail.com</span>
              </div>
              <div className="flex items-center px-2">
                <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Thashikhel Chowk, Lalitpur</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-3">
              <Link
                href="/contact#quote"
                className="btn-primary inline-flex items-center justify-center w-full text-sm py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
                Go Green. Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};