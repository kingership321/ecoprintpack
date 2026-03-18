'use client';

import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

export function MailingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user has already seen/closed the popup
    const hasSeenPopup = localStorage.getItem('hasSeenMailingPopup');
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds (5000ms) for better user experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenMailingPopup', 'true');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Success
        closePopup();
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to subscribe');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white rounded-full p-1"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-5">
          {/* Left Decorative Side */}
          <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white flex flex-col justify-center items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center">Stay Updated</h3>
            <p className="text-green-100 text-sm text-center mt-2">Join the Green Movement.</p>
          </div>

          {/* Right Form Side */}
          <div className="md:col-span-3 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Join Our Mailing List</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Get the latest updates on sustainable packaging, new products, and exclusive offers delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="you@example.com" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}