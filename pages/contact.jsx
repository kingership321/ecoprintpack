// pages/contact.jsx - CONTACT US PAGE
import { Layout } from '../components/Layout'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      title: 'Sales Inquiries',
      details: 'For pricing, quotes, and product information',
      phone: '+977 986-9268248',
      email: 'ecopromotional2@gmail.com',
      icon: '📞'
    },
    {
      title: 'Order Support',
      details: 'Existing order tracking and support',
      phone: '+977 976-2416063',
      email: 'ecopromotional2@gmail.com',
      icon: '📦'
    },
    {
      title: 'General Inquiries',
      details: 'General questions and information',
      phone: '+977 976-2416063',
      email: 'ecopromotional2@gmail.com',
      icon: '📋'
    }
  ]

  const products = [
    'Non Woven Bags',
    'Loop Handle Bags',
    'D-Cut Bags',
    'Stitched Handle Bags',
    'Paper Bags',
    'Suit Covers',
    'Other Printing Works'
  ]

  return (
    <Layout 
      pageTitle="Contact Us | Get Quote for Custom Bags"
      pageDescription="Contact ECO PRINT & PACK for quotes, samples, and inquiries about eco-friendly bags. Call +977 9851189191 or fill out our quote form."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
              Contact <span className="text-emerald-600">ECO PRINT & PACK</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              Get in touch for quotes, samples, or any questions about our eco-friendly packaging solutions
            </p>
            
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-lg rounded-xl shadow-lg">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Immediate Response: Call +977 976-2416063
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white" id="contact-info">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Get in <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team. We're here to help with your packaging needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 text-center">{method.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{method.title}</h3>
                <p className="text-gray-600 text-center mb-6">{method.details}</p>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${method.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center text-lg font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {method.phone}
                  </a>
                  
                  <a 
                    href={`mailto:${method.email}`}
                    className="flex items-center justify-center text-lg font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {method.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-2xl p-8 border border-emerald-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">We're available to assist you</p>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-xl font-bold text-gray-900">Sunday - Friday</div>
                  <div className="text-lg text-gray-700">9:00 AM - 6:00 PM (NPT)</div>
                  <div className="text-sm text-gray-500 mt-2">Response time: Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-emerald-50" id="quote">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Request a <span className="text-emerald-600">Quote</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out this form and we'll get back to you with pricing and samples
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Submission Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 text-lg">Thank You!</h4>
                        <p className="text-green-700">Your quote request has been submitted. We'll contact you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Dipesh Rai"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-lg font-bold text-gray-900 mb-3">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Eco Print & Pack"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="ecopromotional2@gmail.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-lg font-bold text-gray-900 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="+977 986-9268248"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Interest */}
                  <div>
                    <label htmlFor="product" className="block text-lg font-bold text-gray-900 mb-3">
                      Product Interest *
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a product</option>
                      {products.map((product, index) => (
                        <option key={index} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-lg font-bold text-gray-900 mb-3">
                      Estimated Quantity *
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select quantity range</option>
                      <option value="20-50">20-50 KG (Trial Order)</option>
                      <option value="50-100">50-100 KG (Small Order)</option>
                      <option value="100-500">100-500 KG (Medium Order)</option>
                      <option value="500-1000">500-1000 KG (Large Order)</option>
                      <option value="1000+">1000+ KG (Bulk Order)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-gray-900 mb-3">
                    Project Details / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-5 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements: size, color, printing specifications, timeline, etc."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary py-5 text-xl font-bold ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        REQUEST QUOTE NOW
                      </span>
                    )}
                  </button>
                  
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column - Info & Map */}
            <div className="space-y-12">
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-black mb-8 text-center">What Happens Next?</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Quick Response</h4>
                      <p className="text-emerald-100">We'll contact you within 24 hours to discuss your requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Detailed Quote</h4>
                      <p className="text-emerald-100">Receive a comprehensive quote with pricing, specifications, and timeline.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Samples Available</h4>
                      <p className="text-emerald-100">We can arrange sample delivery so you can verify quality before ordering.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-6">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Production & Delivery</h4>
                      <p className="text-emerald-100">Once approved, we begin production and keep you updated throughout.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-bold">No Spam Guarantee</div>
                      <div className="text-sm text-emerald-100">Your information is safe with us. We only contact you regarding your inquiry.</div>
                    </div>
                  </div>
                </div>
              </div>

<div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
  <div className="h-96 relative">
    {/* Google Maps Embed */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.482242297604!2d85.308307!3d27.670139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64b5f13e1%3A0x28b2d0eacda46b98!2sThashikhel%20Chowk%2C%20Lalitpur%2C%20Nepal!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="ECO PRINT & PACK Location - Thashikhel Chowk, Lalitpur, Nepal"
      className="absolute inset-0"
    ></iframe>
    
    {/* Overlay Elements */}
    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-bold">E</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">ECO PRINT & PACK</div>
          <div className="text-sm text-gray-600">Thashikhel Chowk, Lalitpur</div>
        </div>
      </div>
    </div>
    
    {/* Location Pin */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    
    {/* Google Maps Controls Overlay */}
    <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
      <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
    </div>
    
    {/* Open in Google Maps Button */}
    <a
      href="https://goo.gl/maps/3qXkZ5Lg9Rq7Wx2L6"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg flex items-center hover:bg-white transition-colors"
    >
      <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
      <span className="font-bold text-gray-900 text-sm">Open in Google Maps</span>
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Contact <span className="text-emerald-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600">Common questions about getting quotes and orders</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly will I receive a quote?',
                a: 'We typically respond within 24 hours with a detailed quote. For urgent requests, please call us directly.'
              },
              {
                q: 'Can I get samples before placing an order?',
                a: 'Yes, we provide samples for most products. Shipping charges may apply depending on your location.'
              },
              {
                q: 'What information do you need for a quote?',
                a: 'We need product type, quantity, size specifications, printing requirements, and your delivery timeline.'
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship to many countries worldwide. Shipping costs and times vary by destination.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, letters of credit, and other secure payment methods for international orders.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-6 mt-1">
                    <span className="font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                    <p className="text-gray-700 text-lg">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Contact Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
            Call us now for urgent inquiries or to speak directly with our sales team
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <div className="text-5xl mb-6">📞</div>
              <h3 className="text-3xl font-black text-white mb-6">Call Us Directly</h3>
              <a 
                href="tel:+977 986-9268248" 
                className="inline-block text-3xl font-black text-white hover:text-emerald-100 transition-colors mb-3"
              >
                +977 986-9268248
              </a>
              <br />
              <a 
                href="tel:+9779762416063" 
                className="inline-block text-3xl font-black text-white hover:text-emerald-100 transition-colors"
              >
                +977 9762416063
              </a>
              <p className="text-emerald-100 mt-6">Available Sunday-Friday, 9AM-6PM NPT</p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-10 border border-white/20">
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-3xl font-black text-white mb-6">Email Us</h3>
              <a 
                href="mailto:ecopromotional2@gmail.com" 
                className="inline-block text-2xl font-black text-white hover:text-gray-100 transition-colors break-all"
              >
                ecopromotional2@gmail.com
              </a>
              <p className="text-white mt-6">For detailed inquiries and document submissions</p>
              
              <div className="mt-8 pt-6 border-t border-white/30">
                <div className="text-sm text-white/90">
                  <div className="font-bold mb-2">Also available on:</div>
                  <div className="flex justify-center space-x-6">
                    <a href="#" className="hover:text-white">WhatsApp</a>
                    <a href="https://instagram.com/eco.print_pack" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">Viber</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">For Wholesale Buyers & Distributors</h3>
            <p className="text-emerald-100 mb-6">
              Special pricing and terms available for bulk orders and distribution partnerships.
            </p>
            <a 
              href="mailto:ecopromotional2@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-700 to-green-800 rounded-lg hover:from-emerald-800 hover:to-green-900 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              INQUIRE ABOUT DISTRIBUTORSHIP
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}