// pages/custom-paper-bags.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

const customProducts = [
  {
    name: 'Custom Screen Printed Kraft Bag',
    desc: 'Unbleached kraft paper with sharp single or dual color screen printed logo and brand messaging.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/kraft-bag.jpg',
  },
  {
    name: 'Full Color Offset Boutique Bag',
    desc: 'Laminated luxury art board bag printed with full-color CMYK offset graphics and glossy finish.',
    minQty: '100 Pcs',
    image: '/asset/products-studio/paper-boutique.jpg',
  },
  {
    name: 'Custom Branded Cotton Canvas Tote',
    desc: 'Heavyweight organic cotton tote bags customized with screen print logos for retail marketing.',
    minQty: '50 Pcs',
    image: '/asset/products-studio/canvas-tote.jpg',
  },
  {
    name: 'Custom Non-Woven D-Cut Bag',
    desc: 'Custom color polypropylene non-woven shopping bag printed with store logos and contact numbers.',
    minQty: '20 KG',
    image: '/asset/products-studio/dcut-bag.jpg',
  },
];

const faqItems = [
  {
    q: 'How do I submit my brand logo for custom paper bag printing in Nepal?',
    a: 'You can send your logo file (vector PDF, AI, PNG, or SVG format) via WhatsApp (+977 9869268248) or email (Ecopromotional2@gmail.com). Our design team will provide a digital mockup before production begins.'
  },
  {
    q: 'What custom printing techniques do you use?',
    a: 'We utilize in-house high-density screen printing for eco bags and kraft paper bags, as well as multi-color offset lithography and flexographic printing for large retail volume orders.'
  },
  {
    q: 'Can I customize the bag dimensions, handles, and GSM thickness?',
    a: 'Yes! As a direct manufacturer in Lalitpur, Nepal, we customize length, width, gusset depth, paper thickness (GSM), and handle types (twisted paper, rope, ribbon, or die-cut) to your exact specifications.'
  },
  {
    q: 'Do you deliver custom printed paper bags to Pokhara, Chitwan, and other cities in Nepal?',
    a: 'Yes, we provide fast delivery across Kathmandu Valley and ship wholesale custom bag consignments to all major commercial hubs throughout Nepal.'
  }
];

export default function CustomPaperBagsPage() {
  const pageTitle = "Custom Paper Bags Nepal & Printed Paper Bags | ECO PRINT & PACK";
  const pageDescription = "Custom paper bags and printed paper bags manufacturer in Nepal. High quality screen & offset printing on brown kraft, boutique art paper, and eco bags in Kathmandu & Lalitpur.";
  const keywords = "Custom Paper Bags Nepal, Printed Paper Bags Nepal, Custom Eco Bags Nepal, Branded Retail Packaging Nepal, Screen Printed Paper Bags Kathmandu, Paper Bag Printing Lalitpur, Eco Promotional Industries";

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Custom Paper Bags Nepal', url: '/custom-paper-bags' }
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
            <span>In-House Screen &amp; Offset Printing • Lalitpur, Nepal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Custom Paper Bags &amp; <span className="italic font-serif text-brand-mint">Printed Paper Bags Nepal</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Elevate your retail brand with custom dimensions, vibrant logo printing, and eco-friendly paper packaging engineered directly in our Lalitpur manufacturing facility.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white p-6 md:p-10 rounded-3xl border border-brand-beige shadow-xs space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
              Turn Every Customer Into a Walking Brand Ambassador
            </h2>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans">
              Custom printed bags are one of the most cost-effective promotional investments for retail stores, fashion boutiques, cafes, and corporate events in Nepal. At <strong>Eco Print &amp; Pack</strong>, we specialize in high-precision <strong>custom paper bags and custom eco bags in Nepal</strong> tailored to your exact brand aesthetics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Custom Sizing &amp; Shapes</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                From compact jewelry pouches to wide-bottom garment boxes, we build bags matching your exact product dimensions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Precision Brand Printing</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Clean vector logo reproduction with rich opaque inks, foil stamping, or vibrant multi-color offset finishes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-forest text-base">Direct Factory Wholesale Rates</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                No middleman markup. Enjoy direct factory pricing, reliable delivery schedules, and rigorous quality control.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="editorial-tag">Custom Printing</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mt-1">
                Custom Printed Specimens
              </h2>
            </div>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-brand-forest hover:text-brand-moss">
              View All Catalog →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-brand-beige shadow-xs flex flex-col justify-between group">
                <div className="relative h-48 bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} - Custom Printed Bag Nepal`}
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
                      href={`https://wa.me/9779869268248?text=${encodeURIComponent(`Hello Eco Print & Pack, I want to inquire about custom printing for ${p.name}.`)}`}
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
            Frequently Asked Questions about Custom Paper Bags in Nepal
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
            Request Custom Bag Design &amp; Digital Proof
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto font-sans relative z-10">
            Send your logo or design ideas to our Lalitpur factory team. We provide fast price quotes and artwork mockups for businesses across Nepal.
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
              WhatsApp Logo / Query
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
