// components/Layout.jsx
import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';
import { MailingPopup } from './MailingPopup';

export const Layout = ({ children, pageTitle, pageDescription }) => {
  // Site configuration
  const siteTitle = "ECO PRINT & PACK | Sustainable Shopping Bags Manufacturer Nepal";
  const defaultDescription = "Sustainable Shopping Bags Manufactured in Nepal by Eco Promotional Industries Pvt Ltd. We specialize in Non-Woven, Canvas, Lokta Paper, and Kraft Paper bags. High-quality, eco-friendly packaging solutions for businesses. Go Green with us.";
  const siteUrl = "https://ecoprintandpack.com"; // Replace with actual domain when live

  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ECO PRINT & PACK` : siteTitle}</title>
        <meta name="description" content={pageDescription || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO Meta Tags */}
        <meta name="keywords" content="eco friendly bags Nepal, non woven bags, canvas bags, lokta paper bags, kraft paper bags, garment covers, lehenga covers, sustainable packaging, Eco Promotional Industries, Lalitpur, manufacturer" />
        <meta name="author" content="Eco Promotional Industries Pvt Ltd" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Geo Tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Lalitpur" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle || siteTitle} />
        <meta property="og:description" content={pageDescription || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:locale" content="en_NP" />
        <meta property="og:site_name" content="ECO PRINT & PACK" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#065F46" /> {/* Matches green-800 */}
        <meta name="msapplication-navbutton-color" content="#065F46" />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <MailingPopup />
    </>
  );
};

// Default props for safety
Layout.defaultProps = {
  pageTitle: '',
  pageDescription: ''
};