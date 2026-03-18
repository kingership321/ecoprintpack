// pages/_app.jsx
import '@/styles/globals.css'; // This line now works because the file exists

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Component {...pageProps} />
    </div>
  );
}