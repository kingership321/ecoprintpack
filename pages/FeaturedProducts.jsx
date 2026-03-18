// pages/featuredproducts.js
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import { Layout } from '@/components/Layout';

export default function FeaturedProductsPage() {
  return (
    <Layout pageTitle="Featured Products">
      <div className="pt-10">
        <FeaturedProducts />
      </div>
    </Layout>
  );
}