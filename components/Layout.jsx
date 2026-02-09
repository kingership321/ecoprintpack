// components/Layout.jsx
import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children, pageTitle, pageDescription }) => {
  const siteTitle = "ECO PRINT & PACK | Eco-Friendly Custom Bags Manufacturer";
  const defaultDescription = "Leading manufacturer of eco-friendly non-woven bags, paper bags, and custom packaging. MOQ 20KG. Wholesale prices for retailers and distributors.";
  
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
        <meta name="description" content={pageDescription || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Tags for SEO */}
        <meta property="og:title" content={pageTitle || siteTitle} />
        <meta property="og:description" content={pageDescription || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NP" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="eco friendly bags, non woven bags, custom printed bags, wholesale bags, Nepal manufacturer, paper bags, suit covers, packaging" />
        <meta name="author" content="ECO PRINT & PACK" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Nepal" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};