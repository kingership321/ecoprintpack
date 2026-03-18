// app/page.tsx
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { DirectorsMessage } from '@/components/sections/DirectorsMessage';
import {BoardOfDirectors} from '@/components/sections/BoardOfDirectors';
import Products from '@/components/sections/Products';
import { FeaturedProducts} from '@/components/sections/FeaturedProducts';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { MissionVision } from '@/components/sections/MissionVision';
import { Services } from '@/components/sections/Services';
import { OurOutlets } from '@/components/sections/OurOutlets';
import { Contact } from '@/components/sections/Contact';

// SEO Metadata for the Home Page
export const metadata: Metadata = {
  title: 'Sustainable Shopping Bags Manufactured in Nepal | ECO PRINT & PACK',
  description: 'Eco Promotional Industries - Leading manufacturer of Non-Woven, Canvas, and Lokta Paper bags in Nepal. Go Green with sustainable packaging.',
  keywords: 'eco friendly bags Nepal, non woven bags, canvas bags, lokta paper bags, sustainable packaging, manufacturer, Lalitpur',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Director's Message */}
        <DirectorsMessage />

        {/* Board of Directors */}
        <BoardOfDirectors />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Products */}
        <Products />

        {/* Who We Are */}
        <WhoWeAre />

        {/* Who We Serve */}
        <WhoWeServe />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Services */}
        <Services />

        {/* Our Outlets/Workplace */}
        <OurOutlets />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}