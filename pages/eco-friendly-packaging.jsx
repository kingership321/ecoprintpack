// pages/eco-friendly-packaging.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

const packagingProducts = [
  {
    name: 'Coat & Suit Garment Cover',
    desc: 'Breathable non-woven garment bag with full-length zipper and hanger opening for suits and formalwear.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/coat-cover.jpg',
  },
  {
    name: 'Lehenga & Bridal Cover',
    desc: 'High-volume protective garment cover with transparent display window for bridal sarees and heavy lehengas.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/lehenga-cover.jpg',
  },
  {
    name: 'Quilt & Bedding Storage Bag',
    desc: 'High-capacity zippered storage bag for blankets, duvets, and home textiles.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/quilt-bag.jpg',
  },
  {
    name: 'Unbleached Brown Kraft Shipping Bag',
    desc: 'Sturdy eco-friendly paper packaging bags engineered for retail e-commerce shipping and food deliveries.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/kraft-bag.jpg',
  },
];

const faqItems = [
  {
    q: 'What eco-friendly packaging solutions do you manufacture in Nepal?',
    a: 'Eco Print & Pack manufactures reusable non-woven shopping bags, brown kraft paper bags, traditional Lokta paper packaging, breathable suit and coat covers, bridal lehenga storage bags, and bedding storage bags.'
  },
  {
    q: 'Why switch to eco-friendly packaging for businesses in Nepal?',
    a: 'Eco-friendly packaging protects the environment from single-use plastic waste, complies with local government waste bans, enhances brand trust among conscious consumers, and provides durable protection for garments and retail goods.'
  },
  {
    q: 'Can garment and lehenga covers be printed with custom store branding?',
    a: 'Yes, we provide full custom screen printing of store logos, shop addresses, and phone numbers on garment covers, suit bags, and bridal lehenga covers for fashion boutiques in Nepal.'
  },
  {
    q: 'Do you offer bulk wholesale pricing for commercial packaging in Kathmandu?',
    a: 'Yes! As a direct manufacturer operating out of Lalitpur, Kathmandu Valley, we supply high-volume orders at competitive direct factory wholesale pricing.'
  }
];

export default function EcoFriendlyPackagingPage() {
  const pageTitle = "Sustainable Packaging Nepal & Eco Packaging | ECO PRINT & PACK";
  const pageDescription = "Eco-friendly packaging and sustainable packaging manufacturer in Nepal. Non-woven retail bags, Lokta paper packaging, garment & suit covers in Kathmandu & Lalitpur.";
  const keywords = "Sustainable Packaging Nepal, Eco-Friendly Packaging Nepal, Eco Packaging Nepal, Garment Covers Nepal, Suit Cover Lalitpur, Lehenga Cover Kathmandu, Eco Promotional Industries";

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Sustainable Packaging Nepal', url: '/eco-friendly-packaging' }
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
            <span>Eco Packaging Atelier • Kathmandu Valley</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Sustainable Packaging &amp; <span className="italic font-serif text-brand-mint">Eco-Friendly Packaging Nepal</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Transition your business to zero-guilt, environmentally responsible packaging. Reusable bags, brown paper packaging, and breathable garment storage engineered in Lalitpur, Nepal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige shadow-xs space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
              Comprehensive Sustainable &amp; Eco-Friendly Packaging Solutions
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
              As consumers and commercial enterprises across Nepal demand environmentally responsible alternatives, <strong>Eco Print &amp; Pack</strong> delivers comprehensive <strong>sustainable packaging in Nepal</strong>. We partner with fashion houses, retail outlets, organic exporters, and hospitality brands to deliver durable, aesthetically refined packaging that eliminates plastic waste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Garment &amp; Bridal Protection</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Breathable non-woven coat covers, suit bags, and spacious lehenga covers engineered to protect luxury apparel from dust and moisture.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Retail &amp; E-Commerce Packaging</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Recyclable brown kraft paper bags, Lokta paper gift wraps, and sturdy carrier bags built for daily retail fulfillment.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Direct Factory Wholesale</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Direct manufacturing in Lalitpur with customizable dimensions, branded printing, and reliable delivery across Nepal.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="editorial-tag">Eco Line</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mt-1">
                Featured Packaging Products
              </h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-moss">
              View All Catalog →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-brand-beige shadow-xs flex flex-col justify-between group">
                <div className="relative h-48 bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} - Sustainable Packaging Nepal`}
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
            Frequently Asked Questions about Eco-Friendly Packaging in Nepal
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
            Make the Switch to Sustainable Packaging Today
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto font-sans relative z-10">
            Contact Eco Print &amp; Pack in Lalitpur, Nepal to explore sample bags, bulk discounts, and custom store branding.
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
