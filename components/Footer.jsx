// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gradient-to-b from-gray-900 to-emerald-950 text-gray-300">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
                          {/* Logo - Enhanced with better image management */}
                          <Link href="/" className="flex flex-col group outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg">

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

                          </Link>
              <div>
                <div className="text-3xl font-black text-white leading-tight">
                  ECO <span className="text-emerald-400">PRINT & PACK</span>
                </div>
                <div className="text-sm text-emerald-300 font-medium">
                  more than you anticipate...
                </div>
              </div>
            </div>
            <p className="text-lg mb-6 max-w-xl">
              Leading manufacturer of eco-friendly non-woven bags, paper bags, suit covers, and printing works. We provide superior quality custom packaging solutions for retailers and wholesalers worldwide.
            </p>
            <div className="moq-badge text-lg px-6 py-3">
              Minimum Order Quantity: 20 KG
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-emerald-800">Our Products</h3>
            <ul className="space-y-4">
              <li><Link href="/products#non-woven" className="hover:text-white transition-colors text-lg flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Non-Woven Bags
              </Link></li>
              <li><Link href="/products#loop-handle" className="hover:text-white transition-colors text-lg flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Loop Handle Bags
              </Link></li>
              <li><Link href="/products#d-cut" className="hover:text-white transition-colors text-lg flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                D-Cut Bags
              </Link></li>
              <li><Link href="/products#stitched" className="hover:text-white transition-colors text-lg flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Stitched Handle Bags
              </Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors text-lg flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                View All Products
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-emerald-800">Contact Us</h3>
            <address className="not-italic space-y-5">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-emerald-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-white">Call Us Now</p>
                  <a href="tel:+977 986-9268248" className="hover:text-white transition-colors text-lg">+977 986-9268248</a>
                  <br />
                  <a href="tel:+977 976-2416063" className="hover:text-white transition-colors text-lg">+977 976-2416063</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-emerald-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <a href="mailto:ecopromotional2@gmail.com" className="hover:text-white transition-colors break-all">ecopromotional2@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-emerald-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-bold text-white">Based In</p>
                  <p>Nepal</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900 mt-12 pt-8 text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-lg">&copy; {currentYear} ECO PRINT & PACK. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <span className="text-emerald-300 font-semibold">Follow us:</span>
              <a href="https://instagram.com/eco.print_pack" aria-label="Instagram" className="hover:text-white transition-colors text-lg font-bold">
                @eco.print_pack
              </a>
            </div>
          </div>
          <div className="mt-6 text-gray-500 text-sm">
            <p>Non woven bag | Paper bag | Suit Cover | printing works and many more...</p>
          </div>
        </div>
      </div>
    </footer>
  );
};