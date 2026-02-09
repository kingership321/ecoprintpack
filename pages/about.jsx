// pages/about.jsx - ABOUT US PAGE
import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      position: 'Founder & CEO',
      bio: 'With over 15 years of experience in packaging industry, Rajesh leads our vision for sustainable packaging solutions.',
      expertise: ['Business Strategy', 'Sustainable Materials', 'Market Expansion'],
      imageColor: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Priya Patel',
      position: 'Production Director',
      bio: 'Expert in manufacturing processes and quality control, ensuring every bag meets our high standards.',
      expertise: ['Quality Control', 'Production Management', 'Supply Chain'],
      imageColor: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Amit Kumar',
      position: 'Sales & Marketing Head',
      bio: 'Driving business growth and building lasting relationships with our wholesale clients worldwide.',
      expertise: ['Client Relations', 'Market Research', 'Brand Development'],
      imageColor: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Sunita Gurung',
      position: 'Design & Innovation Lead',
      bio: 'Creative force behind our custom designs and innovative packaging solutions.',
      expertise: ['Graphic Design', 'Product Innovation', 'Material Research'],
      imageColor: 'from-purple-500 to-pink-600'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Company Founded', description: 'Started as a small packaging unit in Kathmandu' },
    { year: '2017', event: 'First Export Order', description: 'Expanded to international markets with orders from India' },
    { year: '2019', event: 'ECO PRINT & PACK Brand Launch', description: 'Officially launched our eco-friendly brand' },
    { year: '2020', event: 'Production Capacity Doubled', description: 'Invested in new machinery and expanded facility' },
    { year: '2022', event: '500+ Clients', description: 'Served over 500 businesses across 4 countries' },
    { year: '2023', event: 'Sustainable Certification', description: 'Received eco-friendly manufacturing certification' }
  ]

  const values = [
    {
      title: 'Sustainability First',
      description: 'We prioritize eco-friendly materials and processes in everything we do.',
      icon: '🌱'
    },
    {
      title: 'Quality Excellence',
      description: 'Every product undergoes rigorous quality checks to ensure perfection.',
      icon: '⭐'
    },
    {
      title: 'Customer Partnership',
      description: 'We build long-term relationships, not just transactions.',
      icon: '🤝'
    },
    {
      title: 'Innovation Driven',
      description: 'Continuously improving our products and processes.',
      icon: '💡'
    }
  ]

  return (
    <Layout 
      pageTitle="About Us | Eco-Friendly Packaging Manufacturer"
      pageDescription="Learn about ECO PRINT & PACK - our mission, vision, values, and commitment to sustainable packaging solutions since 2015."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
              About <span className="text-emerald-600">ECO PRINT & PACK</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              Leading the way in sustainable packaging solutions since 2015. 
              More than just a manufacturer - we're partners in your environmental journey.
            </p>
            
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-lg rounded-xl shadow-lg">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Serving 500+ Businesses Across 4 Countries
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Our <span className="text-emerald-600">Story</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Founded in 2015, <span className="font-bold text-emerald-700">ECO PRINT & PACK</span> began as a small 
                  packaging unit in Kathmandu with a vision to transform the packaging industry 
                  through sustainable solutions.
                </p>
                
                <p className="text-lg text-gray-700">
                  What started as a local supplier has grown into an international manufacturer 
                  serving businesses across Nepal, India, Bhutan, and beyond. Our journey has 
                  been guided by one simple principle: <span className="font-bold">quality packaging shouldn't cost the earth.</span>
                </p>
                
                <p className="text-lg text-gray-700">
                  Today, we're proud to be at the forefront of eco-friendly packaging innovation, 
                  helping hundreds of businesses reduce their environmental footprint while 
                  enhancing their brand presence.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-2">8+</div>
                  <div className="text-gray-700 font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-700 font-semibold">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-2">50K+</div>
                  <div className="text-gray-700 font-semibold">Bags Produced Monthly</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-10 text-white">
                <div className="text-5xl font-black mb-6">"more than you anticipate..."</div>
                <p className="text-xl mb-8">
                  This isn't just our tagline - it's our promise. We deliver not just products, 
                  but partnerships, innovation, and commitment to excellence.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">E</span>
                  </div>
                  <div>
                    <div className="font-bold text-xl">ECO PRINT & PACK</div>
                    <div className="text-emerald-100">Since 2015</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-emerald-600">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-emerald-100">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl mb-8">
                <p className="text-2xl font-bold text-gray-900 text-center italic">
                  "To provide innovative, sustainable packaging solutions that help businesses thrive while protecting our planet."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Develop eco-friendly alternatives to plastic packaging</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Make sustainable packaging accessible and affordable for all businesses</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Educate and partner with clients on their sustainability journey</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 text-white shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                <p className="text-2xl font-bold text-center italic">
                  "To be Asia's leading sustainable packaging partner, driving the transition to a plastic-free future."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p>Expand to serve 1000+ businesses across Asia by 2025</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p>Develop 100% biodegradable packaging materials</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p>Establish a circular economy model for packaging materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Director's <span className="text-emerald-600">Message</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-10 md:p-16 shadow-xl">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Director Info */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">RS</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Rajesh Sharma</h3>
                <div className="text-lg text-emerald-600 font-bold mb-4">Founder & CEO</div>
                <div className="text-gray-600">
                  <p>15+ Years Experience</p>
                  <p>Packaging Industry Expert</p>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <div className="text-4xl text-emerald-600 mb-6">"</div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-700">
                    When I started ECO PRINT & PACK in 2015, I saw two things clearly: 
                    the growing environmental crisis caused by plastic waste, and the need 
                    for businesses to have affordable, quality packaging solutions.
                  </p>
                  
                  <p className="text-xl text-gray-700">
                    Our journey hasn't been just about making bags. It's been about creating 
                    <span className="font-bold text-emerald-700"> sustainable alternatives</span> that don't compromise on quality or functionality. 
                    Every day, I'm inspired by our team's dedication and our clients' trust 
                    in choosing eco-friendly options.
                  </p>
                  
                  <p className="text-xl text-gray-700">
                    We believe that businesses have a crucial role in environmental 
                    stewardship. By choosing our products, you're not just getting 
                    packaging - you're joining a movement toward a cleaner, greener future.
                  </p>
                  
                  <p className="text-xl text-gray-700 font-bold">
                    Thank you for being part of our journey. Together, we're making 
                    a difference - one bag at a time.
                  </p>
                </div>
                
                <div className="flex items-center mt-10">
                  <div className="w-12 h-0.5 bg-emerald-600 mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">Rajesh Sharma</div>
                    <div className="text-gray-600">Founder, ECO PRINT & PACK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Core <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Meet Our <span className="text-emerald-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="product-card text-center">
                <div className={`h-32 bg-gradient-to-r ${member.imageColor} flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-emerald-600 font-bold mb-4">{member.position}</div>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-emerald-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-green-500 hidden md:block"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-6 md:mb-0">
                    <div className={`text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="text-5xl font-black text-emerald-600 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 max-w-md">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    {/* Empty for spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Partner With Us
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Join hundreds of businesses who trust us for their sustainable packaging needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-emerald-700 bg-white rounded-lg hover:bg-emerald-50 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              VIEW OUR PRODUCTS
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}