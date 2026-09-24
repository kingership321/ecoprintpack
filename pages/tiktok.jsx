import { useEffect } from 'react';
import Head from 'next/head';

export default function TikTokRedirect() {
  useEffect(() => {
    window.location.replace('https://www.tiktok.com/@ecobags81?_r=1&_t=ZS-9A0JdEMZ8XX');
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to TikTok – ECO PRINT &amp; PACK</title>
        <meta httpEquiv="refresh" content="0;url=https://www.tiktok.com/@ecobags81?_r=1&_t=ZS-9A0JdEMZ8XX" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-stone-700">
        <p className="text-sm font-sans">Redirecting to TikTok (@ecobags81)...</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.tiktok.com/@ecobags81?_r=1&_t=ZS-9A0JdEMZ8XX',
      permanent: false,
    },
  };
}
