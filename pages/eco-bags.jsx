// pages/eco-bags.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

const ecoBagProducts = [
  {
    name: 'D-Cut Non-Woven Eco Bag',
    desc: 'Durable punch-cut handle shopping bags manufactured from eco-friendly polypropylene.',
    minQty: '20 KG',
    image: '/asset/products-studio/dcut-bag.jpg',
  },
  {
    name: 'W-Cut Non-Woven Grocery Bag',
    desc: 'High weight-bearing capacity grocery bag for supermarkets and department stores.',
    minQty: '20 KG',
    image: '/asset/products-studio/wcut-bag.jpg',
  },
  {
    name: 'Cotton Canvas Tote Bag',
    desc: '100% natural organic cotton woven tote bags for long-term reusable branding.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/canvas-tote.jpg',
  },
  {
    name: 'Non-Woven Box Bag',
    desc: 'Rigid 3D gusseted non-woven box bag designed for footwear, apparel, and gifts.',
    minQty: '20 KG',
    image: '/asset/products-studio/box-bag.jpg',
  },
];

const faqItems = [
  {
    q: 'Why choose Eco Bags over plastic bags in Nepal?',
    a: 'Eco bags made from non-woven polypropylene or cotton canvas are reusable, tear-resistant, and significantly reduce single-use plastic waste across Kathmandu Valley and Nepal.'
  },
  {
    q: 'What is the minimum order quantity for custom eco bags?',
    a: 'For non-woven eco bags, the minimum order is 20 KG. For custom cotton canvas totes, minimum order starts at 50 pieces with custom screen printing available.'
  },
  {
    q: 'Can Eco Print & Pack print custom company logos on eco bags?',
    a: 'Yes, Eco Print & Pack operates an in-house screen and flexographic printing facility in Lalitpur to print single-color or multi-color brand logos on all eco bags.'
  },
  {
    q: 'How fast is delivery across Kathmandu, Lalitpur, and Nepal?',
    a: 'Standard orders within Kathmandu Valley are delivered in 3-5 business days. Bulk orders across major cities in Nepal (Pokhara, Chitwan, Biratnagar, Butwal) are shipped via express logistics.'
  }
];

export default function EcoBagsPage() {
  const pageTitle = "Eco Bags & Eco Bag Manufacturer Nepal | ECO PRINT & PACK";
  const pageDescription = "Leading manufacturer of eco bags, reusable non-woven bags, and cotton canvas totes in Nepal. Direct factory pricing, custom logo printing, and wholesale supply across Kathmandu & Lalitpur.";
  const keywords = "Eco Bags, Eco Bags Nepal, Eco Friendly Bags Nepal, Custom Eco Bags Nepal, Eco Bag Manufacturer Nepal, Reusable Shopping Bags Nepal, Non-Woven Bags Lalitpur, Eco Promotional Industries";

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Eco Bags Nepal', url: '/eco-bags' }
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
            <span>Direct Manufacturer • Lalitpur, Nepal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Eco Bags &amp; <span className="italic font-serif text-brand-mint">Eco-Friendly Bag Manufacturer Nepal</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Replace single-use plastics with premium reusable non-woven shopping bags, cotton canvas totes, and custom branded eco bags manufactured right here in Kathmandu Valley.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Intro Copy */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige shadow-xs space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
              Sustainable, Reusable &amp; Custom Printed Eco Bags in Nepal
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
              <strong>Eco Print &amp; Pack</strong> (Eco Promotional Industries Pvt. Ltd.) is a trusted supplier and manufacturer of <strong>eco bags in Nepal</strong>. We produce a wide range of reusable shopping bags designed for retail stores, supermarkets, fashion boutiques, trade exhibitions, and promotional giveaways across Kathmandu, Lalitpur, Bhaktapur, and nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Non-Woven D-Cut &amp; W-Cut</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Lightweight, water-resistant, and high weight-bearing capacity polypropylene bags ideal for daily retail groceries and clothing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Cotton &amp; Canvas Totes</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                100% natural, washable woven cotton tote bags for organic brand aesthetics, events, and corporate merchandise.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Custom Logo Branding</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                In-house precision screen printing in crisp single or multi-color finishes to maximize brand visibility across Nepal.
              </p>
            </div>
          </div>
        </section>

        {/* Product Showcase Strip */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="editorial-tag">Eco Bag Varieties</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mt-1">
                Featured Eco Friendly Bags
              </h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-moss">
              View All Products →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoBagProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-brand-beige shadow-xs flex flex-col justify-between group">
                <div className="relative h-48 bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} - Eco Bag Nepal`}
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

        {/* FAQ Section */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest">
            Frequently Asked Questions about Eco Bags in Nepal
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

        {/* CTA Strip */}
        <section className="bg-brand-forest text-white p-8 md:p-12 rounded-3xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] graffiti-texture pointer-events-none" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white relative z-10">
            Order Custom Eco Bags Directly from Factory
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto font-sans relative z-10">
            Contact Eco Print &amp; Pack in Lalitpur, Kathmandu for custom dimensions, handle types, colors, and wholesale volume discounts across Nepal.
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
