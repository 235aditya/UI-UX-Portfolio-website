
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDemoClick = (e) => {
    if (project.liveDemo.startsWith('http')) {
      e.preventDefault();
      window.open(project.liveDemo, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <i className="ri-close-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
        </button>

        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {project.details}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Project Overview</h4>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  User-Centered Approach
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Modern UI/UX
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveDemo.startsWith('http') ? (
              <button
                onClick={handleDemoClick}
                className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
              >
                <i className="ri-external-link-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                Live Demo
              </button>
            ) : (
              <Link
                href={project.liveDemo}
                className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
              >
                <i className="ri-external-link-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                Live Demo
              </Link>
            )}
            <Link
              href={project.caseStudy}
              className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-center whitespace-nowrap"
            >
              <i className="ri-file-text-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
              Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
