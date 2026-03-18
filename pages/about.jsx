// pages/about.js
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { MissionVision } from '@/components/sections/MissionVision';
import { Layout } from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout pageTitle="About Us">
      <div className="pt-10">
        <WhoWeAre />
        <WhyChooseUs />
        <MissionVision />
      </div>
    </Layout>
  );
}