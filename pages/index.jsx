// pages/index.js
import {Hero} from '@/components/sections/Hero';
import {DirectorsMessage} from '@/components/sections/DirectorsMessage';
import GallerySection from '@/components/sections/Gallery';
import {WhoWeAre} from '@/components/sections/WhoWeAre';
import {WhyChooseUs} from '@/components/sections/WhyChooseUs';
import {MissionVision} from '@/components/sections/MissionVision';
import { Layout } from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <DirectorsMessage />
      <GallerySection isHomePage />
      <WhoWeAre />
      <WhyChooseUs />
      <MissionVision />
    </Layout>
  );
}