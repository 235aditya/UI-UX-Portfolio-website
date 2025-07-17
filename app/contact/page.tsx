
'use client';

import { useState, useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'malapureaditya1@gmail.com',
      link: 'mailto:malapureaditya1@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+91 9373007865',
      link: 'tel:+919373007865'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Maharashtra, India',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm always excited to work on new projects and collaborate with creative individuals. 
                  Feel free to reach out if you have any questions or want to discuss potential opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`${info.icon} text-blue-600 w-6 h-6 flex items-center justify-center`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{info.label}</p>
                      {info.link !== null ? 
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a> : 
                        <p className="text-gray-600">{info.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <SocialLinks />
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <ContactForm />
          </div>
        </div>

        <div className={`mt-20 text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6">
              Let's turn your vision into reality. I'm here to help you create exceptional digital experiences.
            </p>
            <a
              href="mailto:malapureaditya1@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Start a Conversation
              <i className="ri-send-plane-line ml-2 w-5 h-5 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
