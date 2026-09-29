// pages/404.jsx
import Link from 'next/link';
import { Layout } from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout
      pageTitle="Page Not Found (404) | Eco Print & Pack Nepal"
      pageDescription="The page you are looking for does not exist. Browse our eco bags, paper bags, Lokta paper bags, and sustainable packaging solutions."
    >
      <div className="bg-brand-linen min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-brand-beige shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-semibold tracking-widest uppercase">
            <span>404 Error • Resource Missing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-forest">
            Page Not Found
          </h1>
          <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed">
            The page or product link you requested could not be located. You can explore our main product lines or return to the homepage.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 bg-brand-forest hover:bg-brand-moss text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 bg-brand-beige/70 hover:bg-brand-beige text-brand-forest text-xs font-semibold uppercase tracking-wider rounded-full border border-brand-mint/40 transition-colors"
            >
              Browse Products
            </Link>
          </div>

          <div className="pt-6 border-t border-stone-100 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Popular Categories:</p>
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              <Link href="/eco-bags" className="text-brand-forest hover:underline">Eco Bags</Link> •
              <Link href="/paper-bags" className="text-brand-forest hover:underline">Paper Bags</Link> •
              <Link href="/lokta-paper-bags" className="text-brand-forest hover:underline">Lokta Paper Bags</Link> •
              <Link href="/custom-paper-bags" className="text-brand-forest hover:underline">Custom Paper Bags</Link> •
              <Link href="/eco-friendly-packaging" className="text-brand-forest hover:underline">Sustainable Packaging</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
