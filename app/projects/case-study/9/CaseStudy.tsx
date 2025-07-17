
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CaseStudy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudy = {
    title: 'FoodHub',
    subtitle: 'Revolutionizing Food Ordering Experience',
    overview: 'FoodHub is a comprehensive food ordering platform that transforms how customers discover restaurants, browse menus, and order their favorite meals with seamless delivery tracking.',
    challenge: 'Traditional food ordering platforms suffer from complex navigation, poor menu presentation, and lack of real-time tracking. Customers often face difficulties in finding restaurants, understanding menu options, and tracking their orders.',
    solution: 'We designed an intuitive food ordering platform with smart restaurant discovery, visual menu presentation, one-click ordering, and real-time delivery tracking that increased order completion rates by 75%.',
    process: [
      'User Research & Food Behavior Analysis',
      'Restaurant Partner Interviews',
      'Customer Journey Mapping',
      'Menu Design & Organization',
      'Ordering Flow Optimization',
      'Delivery Tracking Implementation'
    ],
    results: [
      { metric: 'Order Completion Rate', improvement: '+75%' },
      { metric: 'User Engagement', improvement: '+85%' },
      { metric: 'Restaurant Partner Satisfaction', improvement: '+90%' },
      { metric: 'Average Order Value', improvement: '+40%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=food%20ordering%20app%20wireframes%20restaurant%20menu%20interface%20design%20process%20sketches&width=400&height=300&seq=cs9-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=food%20delivery%20app%20user%20journey%20mapping%20customer%20experience%20flow&width=400&height=300&seq=cs9-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=food%20ordering%20platform%20final%20design%20restaurant%20interface%20delivery%20tracking&width=400&height=300&seq=cs9-3&orientation=landscape'
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
          >
            <i className="ri-arrow-left-line mr-2 group-hover:-translate-x-1 transition-transform w-5 h-5 flex items-center justify-center"></i>
            Back to Projects
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{caseStudy.subtitle}</p>
        </div>

        {/* Overview */}
        <section className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.overview}</p>
        </section>

        {/* Challenge & Solution */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-red-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-red-800 mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-green-800 mb-4">The Solution</h3>
            <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Process */}
        <section className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.process.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-800">{step}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Images */}
        <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Design Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={`Design process ${index + 1}`}
                  className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">{result.improvement}</p>
                <p className="text-gray-700 font-medium">{result.metric}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className={`bg-gray-50 p-8 rounded-2xl text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Success</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            FoodHub demonstrates how thoughtful design and user-centered approach can transform the food ordering experience, creating value for both customers and restaurant partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://readdy.link/preview/34bfd858-dc93-4686-8435-fb54a084f7de/1016208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap group"
            >
              View Live Demo
              <i className="ri-external-link-line ml-2 group-hover:scale-110 transition-transform w-5 h-5 flex items-center justify-center"></i>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap group"
            >
              Discuss Your Project
              <i className="ri-message-line ml-2 group-hover:translate-x-1 transition-transform w-5 h-5 flex items-center justify-center"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
