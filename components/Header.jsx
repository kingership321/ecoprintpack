// components/Header.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 font-sans transition-all duration-300">
      {/* Top Info Bar - Editorial Style */}
      <div className="bg-brand-forest text-stone-300 py-2 hidden md:block border-b border-white/10 text-[11px] font-medium tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2 animate-pulse" />
              Direct Manufacturer • Lalitpur, Nepal
            </span>
            <span className="text-white/20">|</span>
            <a href="tel:+9779869268248" className="hover:text-brand-gold transition-colors flex items-center">
              <span>+977 9869268248 / 9851189191</span>
            </a>
            <span className="text-white/20">|</span>
            <a href="mailto:Ecopromotional2@gmail.com" className="hover:text-brand-gold transition-colors flex items-center">
              <span>Ecopromotional2@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-stone-400 font-serif italic text-xs tracking-normal">
              Sustainable Packaging Atelier
            </span>
            <div className="flex items-center space-x-2.5 pl-2 border-l border-white/10">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-stone-200/80 shadow-xs py-2.5'
          : 'bg-brand-linen/95 backdrop-blur-sm border-stone-200/60 py-3 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link
              href="/"
              className="group outline-none rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <div className="relative w-36 h-12 sm:w-44 sm:h-14 md:w-52 md:h-16 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo-header.png"
                  alt="ECO PRINT & PACK Logo"
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative py-1 ${
                      active ? 'text-brand-forest font-bold' : 'text-stone-600 hover:text-brand-forest'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-moss text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border border-brand-forest shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <span>Request Quote</span>
                <span className="text-brand-gold transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-full border border-stone-200 text-brand-forest hover:bg-stone-100 focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[30rem] opacity-100 border-t border-stone-200 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="bg-brand-linen px-5 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-stone-800 hover:text-brand-forest font-semibold text-sm tracking-wider uppercase py-2 border-b border-stone-200/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 space-y-2 text-stone-600 text-xs">
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2" />
                Thashikhel, Lalitpur, Nepal
              </p>
              <p>+977 9869268248 / 9851189191</p>
            </div>

            <div className="pt-3">
              <Link
                href="/contact#quote"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-forest text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Request Quote</span>
                <span className="text-brand-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};