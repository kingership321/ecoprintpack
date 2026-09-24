import { useEffect } from 'react';
import Head from 'next/head';

export default function FacebookRedirect() {
  useEffect(() => {
    window.location.replace('https://www.facebook.com/61581404986839/');
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Facebook – ECO PRINT &amp; PACK</title>
        <meta httpEquiv="refresh" content="0;url=https://www.facebook.com/61581404986839/" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-stone-700">
        <p className="text-sm font-sans">Redirecting to Facebook...</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.facebook.com/61581404986839/',
      permanent: false,
    },
  };
}
