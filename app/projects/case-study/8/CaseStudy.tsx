
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CaseStudy({ caseId }:{ caseId: string }) {
  const [activeSection, setActiveSection] = useState('overview');

  const caseStudyData = {
    title: "DevStudio - Professional Development Studio Website",
    subtitle: "Modern web development services showcase with contemporary design",
    overview: "DevStudio represents a comprehensive solution for a professional development studio seeking to showcase their expertise and attract high-quality clients. The project focused on creating a modern, trustworthy, and technically sophisticated web presence.",
  const [activeSection, setActiveSection] = useState('overview');

  const caseStudyData = {
    title: "DevStudio - Professional Development Studio Website",
    subtitle: "Modern web development services showcase with contemporary design",
    overview: "DevStudio represents a comprehensive solution for a professional development studio seeking to showcase their expertise and attract high-quality clients. The project focused on creating a modern, trustworthy, and technically sophisticated web presence.",
    challenge: "The main challenge was to create a website that would effectively communicate technical expertise while remaining accessible to non-technical decision makers. The site needed to balance professional credibility with modern design trends.",
    solution: "We developed a clean, contemporary website featuring service showcases, portfolio galleries, and team presentations. The design emphasizes clarity, professionalism, and technical competence through thoughtful use of whitespace, typography, and interactive elements.",
    results: [
      { metric: "Client Inquiries", value: "150%", description: "increase in qualified leads" },
      { metric: "User Engagement", value: "45%", description: "longer average session duration" },
      { metric: "Mobile Traffic", value: "65%", description: "of total site visitors" },
      { metric: "Conversion Rate", value: "8.5%", description: "contact form submissions" }
    ],
    images: [
      "https://readdy.ai/api/search-image?query=professional%20development%20studio%20website%20homepage%20design%20with%20modern%20layout%2C%20hero%20section%2C%20service%20cards%2C%20clean%20white%20background%2C%20contemporary%20web%20design&width=800&height=600&seq=81&orientation=landscape",
      "https://readdy.ai/api/search-image?query=development%20services%20portfolio%20page%20design%20with%20project%20showcases%2C%20case%20studies%20grid%2C%20professional%20layout%2C%20clean%20white%20background&width=800&height=600&seq=82&orientation=landscape",
      "https://readdy.ai/api/search-image?query=development%20team%20page%20design%20with%20team%20member%20profiles%2C%20skills%20showcase%2C%20professional%20photos%2C%20modern%20layout%2C%20white%20background&width=800&height=600&seq=83&orientation=landscape"
    ]
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'ri-eye-line' },
    { id: 'process', label: 'Process', icon: 'ri-settings-line' },
    { id: 'results', label: 'Results', icon: 'ri-bar-chart-line' },
    { id: 'gallery', label: 'Gallery', icon: 'ri-image-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Link 
            href="/projects"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
            Back to Projects
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">{caseStudyData.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{caseStudyData.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <h3 className="font-semibold text-gray-800 mb-4">Case Study Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${section.icon} mr-3 w-5 h-5 flex items-center justify-center`}></i>
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4">
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {caseStudyData.overview}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {caseStudyData.challenge}
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">The Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {caseStudyData.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'process' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Process</h2>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Research & Discovery", desc: "Analyzed target audience, competitor landscape, and technical requirements to inform design decisions." },
                    { step: 2, title: "Wireframing", desc: "Created detailed wireframes focusing on user flow and information architecture for optimal user experience." },
                    { step: 3, title: "Visual Design", desc: "Developed a modern visual identity that balances professionalism with contemporary design trends." },
                    { step: 4, title: "Development & Testing", desc: "Implemented responsive design with thorough testing across devices and browsers for optimal performance." }
                  ].map((phase) => (
                    <div key={phase.step} className="bg-white p-8 rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">
                          {phase.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">{phase.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'results' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Results</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudyData.results.map((result, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                      <div className="text-lg font-semibold text-gray-800 mb-2">{result.metric}</div>
                      <div className="text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Key Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        Enhanced brand credibility and trust
                      </li>
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        Improved user engagement metrics
                      </li>
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        Mobile-first responsive design
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        Streamlined client acquisition process
                      </li>
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        SEO-optimized architecture
                      </li>
                      <li className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        Fast loading performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'gallery' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Visual Gallery</h2>
                
                <div className="space-y-8">
                  {caseStudyData.images.map((image, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-lg">
                      <img
                        src={image}
                        alt={`DevStudio design ${index + 1}`}
                        className="w-full h-96 object-cover object-top rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
