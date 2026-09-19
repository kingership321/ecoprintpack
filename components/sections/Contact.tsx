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
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-stone-200/90 shadow-xs">
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
              <div className="bg-brand-linen border border-brand-moss/30 rounded-2xl p-4 mb-6">
                <div className="flex items-center">
                  <span className="text-brand-moss font-bold text-lg mr-3">✦</span>
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
                    <span className="text-brand-gold font-bold">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Card */}
            <div className="bg-brand-forest text-white rounded-3xl p-7 sm:p-9 border border-brand-moss shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-brand-gold font-bold">
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
                    <a href="tel:+9779869268248" className="text-stone-200 hover:text-brand-gold block mt-0.5 text-sm">+977 9869268248</a>
                    <a href="tel:+9779851189191" className="text-stone-200 hover:text-brand-gold block text-sm">+977 9851189191</a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Email Correspondence</span>
                    <a href="mailto:Ecopromotional2@gmail.com" className="text-stone-200 hover:text-brand-gold block mt-0.5 text-sm">
                      Ecopromotional2@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Production Hours</span>
                    <p className="text-stone-200 mt-0.5">Sunday – Friday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nationwide Dispatch Badge */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-linen flex items-center justify-center text-brand-forest text-xl flex-shrink-0 border border-stone-200/70">
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