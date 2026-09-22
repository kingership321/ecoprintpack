// pages/gallery.jsx
import { Layout } from '@/components/Layout';
import GallerySection from '@/components/sections/Gallery';

export default function GalleryPage() {
  return (
    <Layout
      pageTitle="Bag Photo Gallery | Eco Print & Pack Nepal"
      pageDescription="Explore our complete gallery of manufactured eco-friendly bags in Nepal: Non-Woven, Canvas, Lokta Paper, and Brown Kraft Paper bags."
    >
      <div className="bg-brand-linen min-h-screen">
        {/* Page Banner Header */}
        <section className="bg-brand-forest text-white py-14 md:py-18 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.09] graffiti-texture pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-sans font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" />
              <span>Visual Atelier Lookbook</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-normal text-white">
              Craftsmanship & <span className="italic font-serif text-brand-mint">Bag Showcase</span>
            </h1>
            <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed">
              A curated visual exhibition of manufactured specimens: Non-Woven cuts, organic cotton canvas, 1,000-year Himalayan Lokta textures, and unbleached kraft paper.
            </p>
          </div>
        </section>

        {/* Multi-Section Showcase Gallery */}
        <GallerySection />
      </div>
    </Layout>
  );
}
