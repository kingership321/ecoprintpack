// pages/contact.js
import {Contact} from '@/components/sections/Contact';
import { Layout } from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout pageTitle="Contact Us">
      <div className="pt-10">
        <Contact />
      </div>
    </Layout>
  );
}