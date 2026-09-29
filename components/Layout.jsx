// components/Layout.jsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { Header } from './Header';
import { MailingPopup } from './MailingPopup';

export const Layout = ({ 
  children, 
  pageTitle, 
  pageDescription,
  keywords,
  ogImage = 'https://ecoprintandpack.com/logo-cropped.png',
  ogType = 'website',
  schemaData,
  breadcrumbs
}) => {
  const router = useRouter();
  const domain = 'https://ecoprintandpack.com';
  
  // Clean path without query parameters or anchors
  const cleanPath = router.asPath ? router.asPath.split('?')[0].split('#')[0] : '';
  const canonicalUrl = `${domain}${cleanPath === '/' ? '' : cleanPath}`;

  const siteName = 'ECO PRINT & PACK';
  const defaultTitle = 'ECO PRINT & PACK | Sustainable Shopping Bags & Packaging Manufacturer Nepal';
  const fullTitle = pageTitle 
    ? (pageTitle.includes('ECO PRINT') ? pageTitle : `${pageTitle} | ECO PRINT & PACK Nepal`)
    : defaultTitle;

  const defaultDescription = 'Eco Print & Pack (Eco Promotional Industries Pvt Ltd) is Nepal\'s premier manufacturer of eco bags, Lokta paper bags, brown kraft paper bags, cotton canvas totes, non-woven bags, and garment covers in Kathmandu & Lalitpur.';

  const metaDescription = pageDescription || defaultDescription;
  
  const defaultKeywords = 'Eco Print and Pack, Eco Print & Pack, Eco Bags, Paper Bags, Lokta Paper Bags, Degradable Nepali Paper Bags, Nepali Paper Bags, Eco-Friendly Paper Bags Nepal, Eco Friendly Bags Nepal, Biodegradable Paper Bags Nepal, Custom Paper Bags Nepal, Printed Paper Bags Nepal, Custom Eco Bags Nepal, Sustainable Packaging Nepal, Eco-Friendly Packaging Nepal, Paper Bag Manufacturer Nepal, Paper Bag Supplier Nepal, Eco Bag Manufacturer Nepal, Eco Packaging Nepal, Lalitpur, Kathmandu';

  const metaKeywords = keywords || defaultKeywords;

  // Global LocalBusiness & Organization JSON-LD Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Manufacturer'],
    '@id': `${domain}/#organization`,
    'name': 'Eco Print & Pack',
    'legalName': 'Eco Promotional Industries Pvt. Ltd.',
    'url': domain,
    'logo': `${domain}/logo.svg`,
    'image': `${domain}/logo-cropped.png`,
    'description': defaultDescription,
    'telephone': '+9779869268248',
    'email': 'Ecopromotional2@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Thashikhel Chowk, Ward No. 13',
      'addressLocality': 'Lalitpur',
      'addressRegion': 'Bagmati Province',
      'postalCode': '44700',
      'addressCountry': 'NP'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '27.6620',
      'longitude': '85.3210'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }
    ],
    'priceRange': '$$',
    'sameAs': [
      'https://www.facebook.com/61581404986839/',
      'https://www.instagram.com/ecobagssupplier',
      'https://www.tiktok.com/@ecobagsa1'
    ]
  };

  // Breadcrumb schema if provided or calculated
  const breadcrumbListSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((b, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': b.name,
      'item': `${domain}${b.url}`
    }))
  } : null;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Eco Promotional Industries Pvt Ltd" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Geo Tags for Local SEO in Nepal */}
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Lalitpur, Kathmandu Valley, Nepal" />
        <meta name="geo.position" content="27.6620;85.3210" />
        <meta name="ICBM" content="27.6620, 85.3210" />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Eco Print & Pack - Sustainable Shopping Bags Nepal" />
        <meta property="og:locale" content="en_NP" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Theme Color */}
        <meta name="theme-color" content="#1B4332" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {breadcrumbListSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
          />
        )}
        {schemaData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        )}
      </Head>

      <div className="min-h-screen flex flex-col bg-brand-linen text-brand-charcoal font-sans antialiased overflow-x-hidden w-full max-w-full">
        <Header />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>
      <MailingPopup />
    </>
  );
};