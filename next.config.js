/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // For local development with custom images
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    // Optional: Set image optimization settings
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@ecobagsa1?_r=1&_t=ZS-9A0JdEMZ8XX',
        permanent: false,
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/61581404986839/',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/ecobagssupplier?stkn=YzhpaHlxdGRqZTAw&utm_source=qr',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig