
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimatedRobot from '@/components/AnimatedRobot';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: 'UI/UX Design',
      icon: 'ri-palette-line',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Figma',
      icon: 'ri-pencil-ruler-2-line',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Adobe XD',
      icon: 'ri-crop-line',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'React',
      icon: 'ri-reactjs-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Python',
      icon: 'ri-code-s-slash-line',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'AI',
      icon: 'ri-robot-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'ML',
      icon: 'ri-brain-line',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'GitHub',
      icon: 'ri-github-line',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Hi, I'm <span className="text-blue-600">Aditya</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                UI/UX Designer & Front-End Enthusiast
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                I create beautiful, functional, and user-centered digital experiences that make a difference.
              </p>
            </div>

            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap group"
            >
              See My Work
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform w-5 h-5 flex items-center justify-center"></i>
            </Link>
          </div>

          <div className={`flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              
              <div className="relative group">
                <img
                  src="https://static.readdy.ai/image/b5b2f2729a648c52e57161fa1148d011/765e73b3417c7524c42a0b1425adc0e4.jfif"
                  alt="Aditya"
                  className="w-80 h-80 rounded-full object-cover object-top shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-white"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute -bottom-10 -right-10">
                <AnimatedRobot />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">My Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in creating exceptional digital experiences using cutting-edge technologies and design tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group transform transition-all duration-1000 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <i className={`${skill.icon} text-white text-2xl w-8 h-8 flex items-center justify-center`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with innovative design and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 whitespace-nowrap group"
              >
                View My Projects
                <i className="ri-eye-line ml-2 group-hover:scale-110 transition-transform w-5 h-5 flex items-center justify-center"></i>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap group"
              >
                Get In Touch
                <i className="ri-message-line ml-2 group-hover:translate-x-1 transition-transform w-5 h-5 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
