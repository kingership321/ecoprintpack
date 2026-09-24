import { useEffect } from 'react';
import Head from 'next/head';

export default function InstagramRedirect() {
  useEffect(() => {
    window.location.replace('https://www.instagram.com/ecobagssupplier?stkn=YzhpaHlxdGRqZTAw&utm_source=qr');
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Instagram – ECO PRINT &amp; PACK</title>
        <meta httpEquiv="refresh" content="0;url=https://www.instagram.com/ecobagssupplier?stkn=YzhpaHlxdGRqZTAw&utm_source=qr" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] text-stone-700">
        <p className="text-sm font-sans">Redirecting to Instagram (@ecobagssupplier)...</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.instagram.com/ecobagssupplier?stkn=YzhpaHlxdGRqZTAw&utm_source=qr',
      permanent: false,
    },
  };
}
