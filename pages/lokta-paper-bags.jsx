// pages/lokta-paper-bags.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

const loktaProducts = [
  {
    name: 'Handcrafted Lokta Gift Bag',
    desc: 'Artisanal tree-free paper bag made from high-altitude Himalayan Daphne shrub bark with raw fibrous texture.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lokta-bag.jpg',
  },
  {
    name: 'Lokta Wine & Bottle Bag',
    desc: 'Specialized tall structured Lokta paper bag designed for premium wine bottles, spirits, and ceremonial gifts.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lokta-wine.jpg',
  },
  {
    name: 'Lokta Boutique Shopper Bag',
    desc: 'Traditional 1,000-year heritage paper shopper with twisted hemp handles and natural botanical dyes.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lokta-shopper.jpg',
  },
  {
    name: 'Handcrafted Lokta Heritage Boxes',
    desc: 'Custom rigid Lokta paper gift and wedding boxes featuring ancient Nepali paper craft aesthetic.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lokta-box.jpg',
  },
];

const faqItems = [
  {
    q: 'What is Lokta Paper and why is it unique to Nepal?',
    a: 'Lokta paper is a traditional handmade paper produced in the high Himalayas of Nepal from the bark of the Daphne bush (Lokta). It is 100% tree-free, naturally resistant to insects and moisture, and possesses a historic durability lasting over 1,000 years.'
  },
  {
    q: 'Are Lokta paper bags fully degradable and eco-friendly?',
    a: 'Yes, Lokta paper bags are 100% biodegradable, organic, and tree-free. The Daphne shrub regenerates naturally after harvesting without damaging the root system, making Lokta the most sustainable traditional packaging in Nepal.'
  },
  {
    q: 'Can Lokta paper bags be customized with company logos and screen prints?',
    a: 'Absolutely! We specialize in custom screen printing, foil stamping, and natural dye branding on Lokta paper bags for embassies, luxury gift brands, hotels, and corporate events.'
  },
  {
    q: 'What is the turnaround time for Lokta paper bag orders in Kathmandu?',
    a: 'Standard orders of 50 to 500 pieces are typically fulfilled within 4 to 7 business days from our Lalitpur atelier.'
  }
];

export default function LoktaPaperBagsPage() {
  const pageTitle = "Lokta Paper Bags & Degradable Nepali Paper Bags | ECO PRINT & PACK";
  const pageDescription = "Handcrafted Lokta paper bags and degradable Nepali paper bags. Made from 1,000-year heritage Himalayan Daphne bark in Lalitpur, Nepal. Ideal for luxury gifts, embassies & corporate branding.";
  const keywords = "Lokta Paper Bags, Degradable Nepali Paper Bags, Nepali Paper Bags, Handcrafted Lokta Bags Nepal, Traditional Himalayan Paper Bags, Eco Friendly Lokta Bags, Handmade Gift Bags Nepal, Eco Promotional Industries";

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Lokta Paper Bags Nepal', url: '/lokta-paper-bags' }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      keywords={keywords}
      breadcrumbs={breadcrumbs}
      schemaData={faqSchema}
    >
      {/* Banner */}
      <section className="bg-brand-forest text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.09] graffiti-texture pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" />
            <span>1,000-Year Himalayan Heritage Craft • Nepal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Lokta Paper Bags &amp; <span className="italic font-serif text-brand-mint">Degradable Nepali Paper Bags</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Authentic handcrafted tree-free Lokta paper bags made from wild Himalayan Daphne bark. Organic, insect-resistant, and extraordinarily durable packaging for eco-conscious brands.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Story Section */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige shadow-xs space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
              100% Tree-Free Traditional Nepali Lokta Paper Packaging
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
              <strong>Lokta paper</strong> (made from <em>Daphne Papyracea</em>) is one of Nepal&apos;s proudest artisanal heritages. At <strong>Eco Print &amp; Pack</strong>, we transform raw Himalayan Lokta sheets into exquisite gift bags, wine carriers, and boutique packaging. Highly prized by luxury hotels, embassies, organic product brands, and international travelers, Lokta bags offer an undeniable tactile elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Sustainable Daphne Harvesting</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                The Lokta shrub regenerates naturally within 4-6 years of pruning without deforestation or soil erosion in Nepal&apos;s high altitude forests.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Millennium Durability</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Naturally resistant to silverfish, moths, and moisture. Historical royal decrees in Nepal written on Lokta paper have survived over 1,000 years.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Artisanal Screen Branding</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Custom screen printing with organic water-based inks, hemp handles, and real flower petal inclusions for memorable corporate gifting.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="editorial-tag">Heritage Collection</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mt-1">
                Lokta Paper Bag Varieties
              </h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-moss">
              View All Catalog →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loktaProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-brand-beige shadow-xs flex flex-col justify-between group">
                <div className="relative h-48 bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} - Lokta Paper Bag Nepal`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-brand-forest text-base mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-stone-500">Min. {p.minQty}</span>
                    <a
                      href={`https://wa.me/9779869268248?text=${encodeURIComponent(`Hello Eco Print & Pack, I want to inquire about custom ${p.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-brand-forest hover:bg-brand-moss text-white text-xs font-semibold rounded-full uppercase tracking-wider"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
            Frequently Asked Questions about Lokta Paper Bags
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-2">
                <h3 className="font-serif font-bold text-brand-forest text-base">
                  {item.q}
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-forest text-white p-8 md:p-12 rounded-3xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] graffiti-texture pointer-events-none" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white relative z-10">
            Order Custom Handcrafted Lokta Paper Bags
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto font-sans relative z-10">
            Connect with Eco Print &amp; Pack in Lalitpur for direct artisan prices, custom colors, petal inclusions, and corporate gift bag branding.
          </p>
          <div className="pt-2 relative z-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#quote"
              className="px-6 py-3 bg-brand-mint text-brand-forest font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/9779869268248"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#20ba5a] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
