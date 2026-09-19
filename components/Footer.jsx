// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-stone-300 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 opacity-[0.06] graffiti-texture pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* 1. Brand Info & Atelier Mission (4 cols) */}
          <div className="lg:col-span-4 text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Link href="/" className="group inline-block">
                <div className="relative w-44 h-16 bg-white/95 rounded-2xl p-2.5 shadow-xs border border-white/20 transition-all duration-300 overflow-hidden">
                  <Image
                    src="/logo-footer.png"
                    alt="ECO PRINT & PACK Logo"
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-stone-300 leading-relaxed font-sans max-w-sm mx-auto md:mx-0">
              Manufacturing sustainable shopping bags and archival packaging in Lalitpur, Nepal. 
              Pioneering practical alternatives to single-use plastics through local craftsmanship and direct factory pricing.
            </p>

            <div className="pt-2 flex items-center justify-center md:justify-start space-x-3 text-stone-400">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-forest flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-forest flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Navigation (2 cols) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-brand-gold transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Visual Lookbook</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Atelier</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
              <li><Link href="/contact#quote" className="hover:text-brand-gold transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* 3. Core Collections (3 cols) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white mb-3 uppercase tracking-wider">
              Product Lines
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link href="/products#non-woven" className="hover:text-brand-gold transition-colors">Non-Woven Bags (D/W Cut)</Link></li>
              <li><Link href="/products#canvas" className="hover:text-brand-gold transition-colors">Cotton Canvas Totes</Link></li>
              <li><Link href="/products#lokta" className="hover:text-brand-gold transition-colors">Himalayan Lokta Paper</Link></li>
              <li><Link href="/products#paper" className="hover:text-brand-gold transition-colors">Brown Kraft & Boutique Paper</Link></li>
              <li><Link href="/products#covers" className="hover:text-brand-gold transition-colors">Coat & Garment Storage Covers</Link></li>
            </ul>
          </div>

          {/* 4. Factory Atelier Contact Info (3 cols) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white mb-3 uppercase tracking-wider">
              Factory Atelier
            </h4>
            <div className="space-y-3 text-xs font-sans text-stone-300">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Location</p>
                <p className="mt-0.5">Thashikhel Chowk, Lalitpur, Nepal</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Direct Wholesale Lines</p>
                <a href="tel:+9779869268248" className="hover:text-brand-gold transition-colors block mt-0.5">+977 9869268248</a>
                <a href="tel:+9779851189191" className="hover:text-brand-gold transition-colors block">+977 9851189191</a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Email</p>
                <a href="mailto:Ecopromotional2@gmail.com" className="hover:text-brand-gold transition-colors block break-all mt-0.5">
                  Ecopromotional2@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Archival Bar */}
      <div className="border-t border-white/5 bg-[#0D1912] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-sans">
          <p>
            &copy; {currentYear} <span className="text-white font-medium">Eco Promotional Industries Pvt Ltd</span>. Manufactured in Lalitpur, Nepal.
          </p>
          <p className="text-[11px] text-stone-400 font-serif italic">
            Integrity in every fiber • Conscious Nepali Packaging
          </p>
        </div>
      </div>
    </footer>
  );
};