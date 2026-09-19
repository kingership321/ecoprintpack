// pages/contact.js
import {Contact} from '@/components/sections/Contact';
import { Layout } from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout pageTitle="Contact Us">
      {/* Page Banner Header */}
      <section className="bg-brand-forest text-white py-14 md:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-sans font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Direct Wholesale & Factory Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-white">
            Contact & <span className="italic font-serif text-brand-gold">Request a Quote</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Ready to transition to sustainable packaging? Connect with our Kathmandu factory team for custom dimensions, screen branding, and wholesale orders.
          </p>
        </div>
      </section>

      <div className="py-10">
        <Contact />
      </div>
    </Layout>
  );
}