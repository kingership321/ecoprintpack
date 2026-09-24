// components/sections/Contact.tsx
'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const products = [
    'Non-Woven Bags (D-Cut / W-Cut / Box)',
    'Cotton Canvas Tote Bags',
    'Indigenous Nepali Lokta Paper Products',
    'Brown Kraft Paper Shopping Bags',
    'Art Board Boutique Bags',
    'Coat, Lehenga & Blanket Protective Covers',
    'Custom Screen Printing Wholesale Order',
  ];

  return (
    <section id="contact" className="bg-brand-linen py-8 sm:py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-brand-beige/90 shadow-xs">
            <div className="mb-6">
              <span className="editorial-tag mb-2">Direct Quotation Request</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">
                Start Your Custom Order
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                Provide your requirements below and our Lalitpur manufacturing team will respond within 24 hours.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-brand-beige/40 border border-brand-olive/30 rounded-2xl p-4 mb-6">
                <div className="flex items-center">
                  <span className="text-brand-olive font-bold text-lg mr-3">✦</span>
                  <div>
                    <h4 className="font-serif font-bold text-brand-forest text-sm">Thank You for Your Inquiry</h4>
                    <p className="text-stone-600 text-xs mt-0.5">Our production desk will reach out via phone or email shortly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Company / Brand *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800"
                    placeholder="Your enterprise or store"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Material / Product Line *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800 appearance-none"
                  >
                    <option value="">Select Packaging Type</option>
                    {products.map((product) => (
                      <option key={product} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Estimated Volume *
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs font-sans border border-stone-200 rounded-full focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800 appearance-none"
                  >
                    <option value="">Select Volume / Weight</option>
                    <option value="20-50">20 - 50 KG (Initial Batch)</option>
                    <option value="50-100">50 - 100 KG</option>
                    <option value="100-500">100 - 500 KG</option>
                    <option value="500+">500+ KG (Wholesale Commercial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Custom Requirements & Dimensions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 text-xs font-sans border border-stone-200 rounded-2xl focus:ring-2 focus:ring-brand-moss focus:border-brand-moss bg-stone-50 transition-all text-stone-800 resize-none"
                  placeholder="Specify bag dimensions, handle color, logo printing details, or delivery location in Nepal..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-forest hover:bg-brand-moss text-white font-sans text-xs font-semibold tracking-widest uppercase py-3.5 rounded-full border border-brand-forest shadow-xs hover:shadow-md transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Submit Quotation Request</span>
                    <span className="text-brand-mint font-bold">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Card */}
            <div className="bg-brand-forest text-white rounded-3xl p-7 sm:p-9 border border-brand-moss shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.09] graffiti-texture pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-brand-mint font-bold">
                    Kathmandu Valley Atelier
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    Eco Promotional Industries
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 font-sans leading-relaxed">
                    Direct factory visits and sample inspections are welcome during business hours.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/15 text-xs font-sans">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Factory Address</span>
                    <p className="text-white text-sm font-serif mt-0.5">Thashikhel Chowk, Lalitpur, Nepal</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Direct Dispatch Lines</span>
                    <a href="tel:+9779869268248" className="text-stone-200 hover:text-brand-mint block mt-0.5 text-sm">+977 9869268248</a>
                    <a href="tel:+9779851189191" className="text-stone-200 hover:text-brand-mint block text-sm">+977 9851189191</a>
                    <a
                      href="https://wa.me/9779869268248?text=Hello%20Eco%20Print%20%26%20Pack,%20I%20would%20like%20to%20inquire%20about%20your%20bags%20and%20packaging."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-brand-olive hover:bg-brand-moss text-white text-[11px] font-semibold tracking-wider transition-all"
                    >
                      <span>💬 Chat on WhatsApp (9869268248)</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Email Correspondence</span>
                    <a href="mailto:Ecopromotional2@gmail.com" className="text-stone-200 hover:text-brand-mint block mt-0.5 text-sm">
                      Ecopromotional2@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Production Hours</span>
                    <p className="text-stone-200 mt-0.5">Sunday – Friday: 9:00 AM – 6:00 PM</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-brand-mint font-semibold block mb-2">Connect on Social</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="https://www.tiktok.com/@ecobags81?_r=1&_t=ZS-9A0JdEMZ8XX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-black text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors border border-white/15"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43,121.43,0 0 0 67 20.14Z"/>
                        </svg>
                        <span>TikTok</span>
                      </a>
                      <a
                        href="https://www.facebook.com/61581404986839/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#1877F2] text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors border border-white/15"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/ecobagssupplier?stkn=YzhpaHlxdGRqZTAw&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-purple-600 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-colors border border-white/15"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.566.683.748 1.15.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nationwide Dispatch Badge */}
            <div className="bg-white rounded-3xl p-6 border border-brand-beige/90 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-beige flex items-center justify-center text-brand-forest text-xl flex-shrink-0 border border-brand-mint/30">
                🇳🇵
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-forest text-sm">
                  Nationwide Wholesale Distribution
                </h4>
                <p className="text-xs text-stone-500 font-sans mt-0.5">
                  Regular freight dispatch to Pokhara, Biratnagar, Butwal, Chitwan, Dharan, and across all 7 provinces.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}