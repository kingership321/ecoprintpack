// pages/paper-bags.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

const paperBagProducts = [
  {
    name: 'Brown Kraft Paper Bag',
    desc: '100% recyclable, unbleached brown kraft paper with sturdy twisted paper handles for retail stores.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/kraft-bag.jpg',
  },
  {
    name: 'Art Board Boutique Bag',
    desc: 'Smooth premium art paper bag with glossy lamination and custom brand print for luxury apparel.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/paper-boutique.jpg',
  },
  {
    name: 'Custom Printed Paper Bag',
    desc: 'Vibrant full-color offset printed bags with reinforced cardboard base for retail shops.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/paper-gloss.jpg',
  },
  {
    name: 'Himalayan Lokta Paper Bag',
    desc: 'Artisanal tree-free paper bag handmade from Daphne bark in Nepal with organic texture.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lokta-shopper.jpg',
  },
];

const faqItems = [
  {
    q: 'Are your paper bags manufactured in Nepal?',
    a: 'Yes, Eco Print & Pack manufactures paper bags directly in Kathmandu Valley (Lalitpur atelier), serving retail stores, gift shops, bakeries, and corporate brands throughout Nepal.'
  },
  {
    q: 'What types of paper bag handles are available?',
    a: 'We offer twisted paper handles, flat paper tape handles, die-cut handles, cotton rope handles, and satin ribbon handles depending on your aesthetic preference and load requirement.'
  },
  {
    q: 'Are brown kraft paper bags 100% biodegradable and recyclable?',
    a: 'Yes! Our unbleached brown kraft paper bags are 100% biodegradable, compostable, and recyclable, making them an ideal environmentally conscious choice for retail and food takeout.'
  },
  {
    q: 'What is the minimum order quantity for custom printed paper bags in Nepal?',
    a: 'Minimum wholesale order quantity for custom printed paper bags starts at 100 pieces for standard sizes.'
  }
];

export default function PaperBagsPage() {
  const pageTitle = "Paper Bags & Paper Bag Manufacturer Nepal | ECO PRINT & PACK";
  const pageDescription = "Premier manufacturer and supplier of paper bags in Nepal. Unbleached brown kraft paper bags, luxury boutique bags, and custom printed paper bags in Kathmandu & Lalitpur.";
  const keywords = "Paper Bags, Paper Bags Nepal, Paper Bag Manufacturer Nepal, Paper Bag Supplier Nepal, Brown Kraft Paper Bags Nepal, Printed Paper Bags Nepal, Custom Paper Bags Kathmandu, Eco Promotional Industries";

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Paper Bags Nepal', url: '/paper-bags' }
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
            <span>Direct Factory Manufacturer • Lalitpur, Nepal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Paper Bags &amp; <span className="italic font-serif text-brand-mint">Paper Bag Supplier Nepal</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            High-quality eco-friendly paper bags in unbleached kraft, luxury art board, and traditional Lokta paper. Custom printed to elevate your business brand in Nepal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Detailed Copy */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige shadow-xs space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
              Leading Paper Bag Manufacturer &amp; Wholesale Supplier in Nepal
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
              Looking for a dependable <strong>paper bag manufacturer in Nepal</strong>? <strong>Eco Print &amp; Pack</strong> produces versatile, eco-friendly paper bags crafted for retail stores, garment boutiques, bakeries, cafes, corporate events, and gift packaging across Kathmandu, Lalitpur, Pokhara, and all major cities in Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Brown Kraft Paper Bags</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                100% natural, unbleached kraft paper with high tear strength and twisted paper handles for everyday shopping and takeaway.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Boutique &amp; Art Board Bags</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Heavyweight laminated art board bags with cotton rope handles and sharp offset printing for luxury retail and fashion.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Custom Screen &amp; Offset Printing</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Complete customization of dimensions, color shades, paper weight (GSM), handle materials, and crisp brand logos.
              </p>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="editorial-tag">Paper Packaging</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mt-1">
                Paper Bag Specimens
              </h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-moss">
              View All Catalog →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paperBagProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-brand-beige shadow-xs flex flex-col justify-between group">
                <div className="relative h-48 bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} - Paper Bag Nepal`}
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
            Frequently Asked Questions about Paper Bags in Nepal
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
            Request Factory Direct Pricing for Paper Bags
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto font-sans relative z-10">
            Speak directly with our factory team in Lalitpur for custom sizes, sample inspection, and fast order fulfillment across Nepal.
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
