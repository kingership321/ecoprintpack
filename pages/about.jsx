// pages/about.js
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { MissionVision } from '@/components/sections/MissionVision';
import { Layout } from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout pageTitle="About Us">
      {/* Page Banner Header */}
      <section className="bg-brand-forest text-white py-14 md:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-sans font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Our Mission & Heritage</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-white">
            About Eco Print & <span className="italic font-serif text-brand-gold">Pack</span>
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Manufacturing sustainable packaging alternatives in Nepal. Dedicated to craftsmanship, quality, and zero plastic pollution.
          </p>
        </div>
      </section>

      <div>
        <WhoWeAre />
        <WhyChooseUs />
        <MissionVision />
      </div>
    </Layout>
  );
}