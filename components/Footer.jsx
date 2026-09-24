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
                    src="/logo.svg"
                    alt="ECO PRINT & PACK Logo"
                    fill
                    sizes="176px"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-stone-300 leading-relaxed font-sans max-w-sm mx-auto md:mx-0">
              Manufacturing sustainable shopping bags and archival packaging in Lalitpur, Nepal. 
              Pioneering practical alternatives to single-use plastics through local craftsmanship and direct factory pricing.
            </p>

            <div className="pt-2 flex items-center justify-center md:justify-start space-x-3 text-stone-400">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-mint hover:text-brand-forest flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-mint hover:text-brand-forest flex items-center justify-center transition-colors" aria-label="Instagram">
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
              <li><Link href="/" className="hover:text-brand-mint transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-brand-mint transition-colors">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-mint transition-colors">Visual Lookbook</Link></li>
              <li><Link href="/about" className="hover:text-brand-mint transition-colors">About Atelier</Link></li>
              <li><Link href="/contact" className="hover:text-brand-mint transition-colors">Contact</Link></li>
              <li><Link href="/contact#quote" className="hover:text-brand-mint transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* 3. Core Collections (3 cols) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white mb-3 uppercase tracking-wider">
              Product Lines
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link href="/products#non-woven" className="hover:text-brand-mint transition-colors">Non-Woven Bags (D/W Cut)</Link></li>
              <li><Link href="/products#canvas" className="hover:text-brand-mint transition-colors">Cotton Canvas Totes</Link></li>
              <li><Link href="/products#lokta" className="hover:text-brand-mint transition-colors">Himalayan Lokta Paper</Link></li>
              <li><Link href="/products#paper" className="hover:text-brand-mint transition-colors">Brown Kraft & Boutique Paper</Link></li>
              <li><Link href="/products#covers" className="hover:text-brand-mint transition-colors">Coat & Garment Storage Covers</Link></li>
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
                <a href="tel:+9779869268248" className="hover:text-brand-mint transition-colors block mt-0.5">+977 9869268248</a>
                <a href="tel:+9779851189191" className="hover:text-brand-mint transition-colors block">+977 9851189191</a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Email</p>
                <a href="mailto:Ecopromotional2@gmail.com" className="hover:text-brand-mint transition-colors block break-all mt-0.5">
                  Ecopromotional2@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Archival Bar */}
      <div className="border-t border-white/5 bg-[#132A20] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Payment & Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4 pb-4 border-b border-white/5">
            <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-stone-400">Accepted Payments &amp; Settlement:</span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="h-7 w-24 relative rounded-md overflow-hidden shadow-xs hover:scale-105 transition-transform duration-200" title="eSewa Digital Wallet">
                <Image src="/asset/payments/esewa.svg" alt="eSewa" fill className="object-contain" unoptimized />
              </div>
              <div className="h-7 w-24 relative rounded-md overflow-hidden shadow-xs hover:scale-105 transition-transform duration-200" title="Khalti Digital Wallet">
                <Image src="/asset/payments/khalti.svg" alt="Khalti" fill className="object-contain" unoptimized />
              </div>
              <div className="h-7 w-28 relative rounded-md overflow-hidden shadow-xs hover:scale-105 transition-transform duration-200" title="Direct Bank Transfer / ConnectIPS">
                <Image src="/asset/payments/bank-transfer.svg" alt="Bank Transfer" fill className="object-contain" unoptimized />
              </div>
              <div className="h-7 w-28 relative rounded-md overflow-hidden shadow-xs hover:scale-105 transition-transform duration-200" title="Cash on Delivery Across Nepal">
                <Image src="/asset/payments/cod.svg" alt="Cash on Delivery" fill className="object-contain" unoptimized />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-sans">
            <p>
              &copy; {currentYear} <span className="text-white font-medium">Eco Promotional Industries Pvt Ltd</span>.
              {' '}Manufactured in Lalitpur, Nepal 🇳🇵
            </p>
            <p className="text-[11px] text-stone-400 font-serif italic">
              Integrity in every fiber • Conscious Nepali Packaging
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779869268248?text=Hello%20Eco%20Print%20%26%20Pack!%20I%20am%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 wa-float group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.143 1.547 5.878L.057 23.5l5.797-1.522A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.389l-.361-.214-3.44.903.918-3.352-.235-.375A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
        </svg>
        <span className="text-[11px] font-sans font-bold uppercase tracking-wider">WhatsApp Us</span>
      </a>
    </footer>
  );
};