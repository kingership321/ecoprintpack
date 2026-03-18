// pages/index.js
import {Hero} from '@/components/sections/Hero';
import {DirectorsMessage} from '@/components/sections/DirectorsMessage';
import { BoardOfDirectors } from '@/components/sections/BoardOfDirectors';
import {FeaturedProducts} from '@/components/sections/FeaturedProducts';
import {WhoWeAre} from '@/components/sections/WhoWeAre';
import {WhoWeServe} from '@/components/sections/WhoWeServe';
import {WhyChooseUs} from '@/components/sections/WhyChooseUs';
import {MissionVision} from '@/components/sections/MissionVision';
import {OurOutlets} from '@/components/sections/OurOutlets';
import { Layout } from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <DirectorsMessage />
      <BoardOfDirectors />
      <FeaturedProducts />
      <WhoWeAre />
      <WhoWeServe />
      <WhyChooseUs />
      <MissionVision />
      <OurOutlets />
    </Layout>
  );
}