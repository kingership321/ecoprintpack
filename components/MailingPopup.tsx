// components/MailingPopup.tsx
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
      // Show popup after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);
      
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

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-forest/70 backdrop-blur-sm transition-opacity duration-300 font-sans">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200/90 transform transition-all duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors z-10 p-1 rounded-full hover:bg-stone-100"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-5">
          {/* Left Decorative Side */}
          <div className="md:col-span-2 bg-brand-forest p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.09] graffiti-texture-sm pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] uppercase font-sans tracking-widest text-brand-mint font-bold">
                Atelier Journal
              </span>
              <h3 className="font-serif text-2xl font-bold mt-2 leading-tight">
                Sustainable Dispatch
              </h3>
              <p className="text-stone-300 text-xs mt-2 leading-relaxed">
                Wholesale seasonal discounts, new fiber varieties, and eco packaging trends.
              </p>
            </div>

            <div className="relative z-10 pt-6 text-[10px] text-stone-400 font-sans uppercase tracking-wider">
              Lalitpur, Nepal
            </div>
          </div>

          {/* Right Form Side */}
          <div className="md:col-span-3 p-7 sm:p-8 bg-brand-linen">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-1">
              Join Our Registry
            </h2>
            <p className="text-stone-600 mb-5 text-xs leading-relaxed">
              Stay ahead with factory direct updates and eco-packaging insights.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full px-4 py-2.5 bg-white border border-brand-beige rounded-full focus:ring-2 focus:ring-brand-olive outline-none text-xs font-sans text-stone-800"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="you@company.com" 
                  className="w-full px-4 py-2.5 bg-white border border-brand-beige rounded-full focus:ring-2 focus:ring-brand-olive outline-none text-xs font-sans text-stone-800"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-forest text-white font-sans text-xs font-semibold tracking-widest uppercase py-3 rounded-full hover:bg-brand-moss transition-colors shadow-xs disabled:opacity-50"
              >
                {isSubmitting ? 'Joining...' : 'Join Newsletter →'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}