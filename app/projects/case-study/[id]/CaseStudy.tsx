
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const caseStudies = {
  '1': {
    title: 'E-Commerce Mobile App',
    subtitle: 'Revolutionizing Online Shopping Experience',
    overview: 'A comprehensive mobile e-commerce solution that combines intuitive design with powerful functionality to create an engaging shopping experience.',
    challenge: 'Traditional e-commerce apps suffer from poor user experience, complex navigation, and low conversion rates. Users often abandon their carts due to lengthy checkout processes.',
    solution: 'We designed a streamlined mobile app with one-tap checkout, personalized recommendations, and seamless navigation that reduced checkout time by 60%.',
    process: [
      'User Research & Analysis',
      'Competitive Analysis',
      'User Journey Mapping',
      'Wireframing & Prototyping',
      'UI Design & Testing',
      'Development & Launch'
    ],
    results: [
      { metric: 'Conversion Rate', improvement: '+45%' },
      { metric: 'User Engagement', improvement: '+60%' },
      { metric: 'Cart Abandonment', improvement: '-40%' },
      { metric: 'User Satisfaction', improvement: '+75%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=mobile%20e-commerce%20app%20wireframes%20user%20interface%20design%20process%20sketches&width=400&height=300&seq=cs1-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=mobile%20app%20user%20journey%20mapping%20flowchart%20design%20process&width=400&height=300&seq=cs1-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=mobile%20e-commerce%20app%20final%20design%20mockup%20screens%20showcase&width=400&height=300&seq=cs1-3&orientation=landscape'
    ]
  },
  '2': {
    title: 'Healthcare Dashboard',
    subtitle: 'Empowering Medical Professionals with Data',
    overview: 'A comprehensive healthcare dashboard that enables medical professionals to efficiently manage patient data, track health metrics, and make informed decisions.',
    challenge: 'Healthcare professionals struggled with fragmented data systems, inefficient workflows, and lack of real-time patient monitoring capabilities.',
    solution: 'We created an integrated dashboard with real-time data visualization, automated alerts, and streamlined workflows that improved patient care efficiency by 50%.',
    process: [
      'Healthcare Professional Interviews',
      'Workflow Analysis',
      'Information Architecture',
      'Data Visualization Design',
      'Usability Testing',
      'Implementation Support'
    ],
    results: [
      { metric: 'Data Access Speed', improvement: '+70%' },
      { metric: 'Workflow Efficiency', improvement: '+50%' },
      { metric: 'Error Reduction', improvement: '-65%' },
      { metric: 'User Satisfaction', improvement: '+80%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=healthcare%20dashboard%20wireframes%20medical%20interface%20design%20process&width=400&height=300&seq=cs2-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=medical%20data%20visualization%20charts%20graphs%20healthcare%20analytics&width=400&height=300&seq=cs2-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=healthcare%20dashboard%20final%20design%20interface%20medical%20software&width=400&height=300&seq=cs2-3&orientation=landscape'
    ]
  },
  '3': {
    title: 'Financial App Redesign',
    subtitle: 'Modernizing Personal Finance Management',
    overview: 'A complete redesign of a legacy financial app focusing on user experience, accessibility, and modern design principles.',
    challenge: 'The existing app had outdated design, poor navigation, and low user engagement. Users found it difficult to manage their finances effectively.',
    solution: 'We redesigned the entire user experience with modern UI patterns, simplified navigation, and enhanced security features, resulting in 300% increase in daily active users.',
    process: [
      'Current App Audit',
      'User Pain Point Analysis',
      'Competitor Benchmarking',
      'Design System Creation',
      'Progressive Redesign',
      'A/B Testing & Optimization'
    ],
    results: [
      { metric: 'Daily Active Users', improvement: '+300%' },
      { metric: 'Task Completion Rate', improvement: '+85%' },
      { metric: 'User Retention', improvement: '+120%' },
      { metric: 'App Store Rating', improvement: '+2.3 stars' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=financial%20app%20before%20after%20redesign%20comparison%20old%20vs%20new%20interface&width=400&height=300&seq=cs3-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=financial%20app%20design%20system%20components%20colors%20typography&width=400&height=300&seq=cs3-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=modern%20financial%20app%20interface%20design%20clean%20minimalist%20banking&width=400&height=300&seq=cs3-3&orientation=landscape'
    ]
  },
  '4': {
    title: 'Restaurant Website',
    subtitle: 'Creating Digital Dining Experience',
    overview: 'An elegant restaurant website that combines beautiful design with functional features like online reservations and interactive menus.',
    challenge: 'The restaurant needed a digital presence that would reflect their brand quality while providing easy reservation and menu browsing functionality.',
    solution: 'We created a visually stunning website with integrated booking system, interactive menu, and mobile-first design that increased online reservations by 150%.',
    process: [
      'Brand Analysis',
      'Target Audience Research',
      'Content Strategy',
      'Visual Design',
      'Development & Integration',
      'SEO Optimization'
    ],
    results: [
      { metric: 'Online Reservations', improvement: '+150%' },
      { metric: 'Website Traffic', improvement: '+200%' },
      { metric: 'Mobile Engagement', improvement: '+180%' },
      { metric: 'Conversion Rate', improvement: '+90%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=restaurant%20website%20wireframes%20layout%20design%20process&width=400&height=300&seq=cs4-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=restaurant%20website%20visual%20design%20mockups%20food%20photography&width=400&height=300&seq=cs4-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=restaurant%20website%20final%20design%20elegant%20dining%20interface&width=400&height=300&seq=cs4-3&orientation=landscape'
    ]
  },
  '5': {
    title: 'Learning Platform UI',
    subtitle: 'Enhancing Online Education Experience',
    overview: 'A comprehensive learning management system designed to make online education more engaging and effective for students and instructors.',
    challenge: 'Existing e-learning platforms lacked engagement, had poor course progression tracking, and offered limited interaction between students and instructors.',
    solution: 'We designed an intuitive platform with gamification elements, progress tracking, and collaborative features that increased course completion rates by 80%.',
    process: [
      'Educational Research',
      'Student & Instructor Interviews',
      'Learning Path Mapping',
      'Interactive Design',
      'Accessibility Testing',
      'Beta Launch & Feedback'
    ],
    results: [
      { metric: 'Course Completion', improvement: '+80%' },
      { metric: 'Student Engagement', improvement: '+120%' },
      { metric: 'Instructor Satisfaction', improvement: '+95%' },
      { metric: 'Platform Usage', improvement: '+160%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=e-learning%20platform%20wireframes%20course%20interface%20design&width=400&height=300&seq=cs5-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=educational%20dashboard%20progress%20tracking%20student%20interface&width=400&height=300&seq=cs5-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=online%20learning%20platform%20final%20design%20modern%20education%20interface&width=400&height=300&seq=cs5-3&orientation=landscape'
    ]
  },
  '6': {
    title: 'Travel App Concept',
    subtitle: 'Reimagining Travel Planning Experience',
    overview: 'A comprehensive travel planning app that simplifies trip organization, destination discovery, and booking management.',
    challenge: 'Travel planning involves multiple platforms and complex coordination. Users needed a unified solution for destination research, booking, and itinerary management.',
    solution: 'We designed an all-in-one travel app with AI-powered recommendations, integrated booking, and collaborative trip planning that streamlined the entire travel experience.',
    process: [
      'Travel Behavior Research',
      'User Journey Analysis',
      'Feature Prioritization',
      'Prototype Development',
      'User Testing',
      'Design Refinement'
    ],
    results: [
      { metric: 'Planning Time', improvement: '-60%' },
      { metric: 'User Satisfaction', improvement: '+140%' },
      { metric: 'Booking Completion', improvement: '+75%' },
      { metric: 'App Engagement', improvement: '+200%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=travel%20app%20wireframes%20trip%20planning%20interface%20design&width=400&height=300&seq=cs6-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=travel%20app%20user%20journey%20map%20planning%20process%20flow&width=400&height=300&seq=cs6-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=travel%20app%20final%20design%20destination%20discovery%20booking%20interface&width=400&height=300&seq=cs6-3&orientation=landscape'
    ]
  },
  '7': {
    title: 'Corporate Website',
    subtitle: 'Building Professional Digital Presence',
    overview: 'A modern corporate website that effectively communicates company values, services, and expertise while providing excellent user experience.',
    challenge: 'The company needed a professional website that would establish credibility, showcase their expertise, and generate quality leads.',
    solution: 'We created a sophisticated corporate website with clear information architecture, compelling content presentation, and lead generation features that increased inquiries by 180%.',
    process: [
      'Stakeholder Interviews',
      'Content Audit',
      'Information Architecture',
      'Brand Integration',
      'Development & Testing',
      'Launch & Optimization'
    ],
    results: [
      { metric: 'Lead Generation', improvement: '+180%' },
      { metric: 'Website Traffic', improvement: '+250%' },
      { metric: 'Engagement Time', improvement: '+90%' },
      { metric: 'Conversion Rate', improvement: '+110%' }
    ],
    images: [
      'https://readdy.ai/api/search-image?query=corporate%20website%20sitemap%20information%20architecture%20planning&width=400&height=300&seq=cs7-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=corporate%20website%20design%20system%20brand%20guidelines&width=400&height=300&seq=cs7-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=corporate%20website%20final%20design%20professional%20business%20interface&width=400&height=300&seq=cs7-3&orientation=landscape'
    ]
  }
};

export default function CaseStudy({ projectId }: { projectId: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const caseStudy = caseStudies[projectId];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

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
            This project demonstrates the power of user-centered design and strategic thinking in creating solutions that not only look beautiful but also drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/projects/demo/${projectId}`}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap group"
            >
              View Live Demo
              <i className="ri-external-link-line ml-2 group-hover:scale-110 transition-transform w-5 h-5 flex items-center justify-center"></i>
            </Link>
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
