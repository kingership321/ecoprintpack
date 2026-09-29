// pages/index.jsx
import { Hero } from '@/components/sections/Hero';
import { DirectorsMessage } from '@/components/sections/DirectorsMessage';
import GallerySection from '@/components/sections/Gallery';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { OurOutlets } from '@/components/sections/OurOutlets';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { MissionVision } from '@/components/sections/MissionVision';
import { Layout } from '@/components/Layout';

export default function HomePage() {
  const pageTitle = "Eco Print & Pack | Eco Bags & Paper Bag Manufacturer in Nepal";
  const pageDescription = "Eco Print & Pack (Eco Promotional Industries Pvt Ltd) is Nepal's premier manufacturer of eco bags, paper bags, Lokta paper bags, degradable paper bags, non-woven bags, and custom eco-friendly packaging in Kathmandu & Lalitpur.";
  const keywords = "Eco Print and Pack, Eco Print & Pack, Eco Bags, Paper Bags, Lokta Paper Bags, Degradable Nepali Paper Bags, Nepali Paper Bags, Eco-Friendly Paper Bags Nepal, Eco Friendly Bags Nepal, Biodegradable Paper Bags Nepal, Custom Paper Bags Nepal, Printed Paper Bags Nepal, Custom Eco Bags Nepal, Sustainable Packaging Nepal, Eco-Friendly Packaging Nepal, Paper Bag Manufacturer Nepal, Paper Bag Supplier Nepal, Eco Bag Manufacturer Nepal, Eco Packaging Nepal, Kathmandu, Lalitpur";

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      keywords={keywords}
    >
      <Hero />
      <DirectorsMessage />
      <GallerySection isHomePage />
      <WhoWeAre />
      <OurOutlets />
      <WhyChooseUs />
      <MissionVision />
    </Layout>
  );
}