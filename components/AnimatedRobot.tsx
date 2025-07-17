
'use client';

import { useEffect, useState } from 'react';

export default function AnimatedRobot() {
  const [isWaving, setIsWaving] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 4000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    return () => {
      clearInterval(waveInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="relative">
      {/* Robot Body */}
      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
        
        {/* Robot Head */}
        <div className="relative z-10 space-y-3">
          
          {/* Eyes */}
          <div className="flex space-x-3 justify-center">
            <div className={`w-3 h-3 bg-white rounded-full transition-all duration-200 ${isBlinking ? 'h-1' : 'h-3'} shadow-lg`}>
              <div className="w-1 h-1 bg-blue-600 rounded-full mt-1 mx-auto animate-pulse"></div>
            </div>
            <div className={`w-3 h-3 bg-white rounded-full transition-all duration-200 ${isBlinking ? 'h-1' : 'h-3'} shadow-lg`}>
              <div className="w-1 h-1 bg-blue-600 rounded-full mt-1 mx-auto animate-pulse"></div>
            </div>
          </div>
          
          {/* Mouth */}
          <div className="w-8 h-2 bg-white rounded-full shadow-inner">
            <div className="w-6 h-1 bg-blue-400 rounded-full mx-auto mt-0.5"></div>
          </div>
          
          {/* Body Details */}
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse delay-200"></div>
          </div>
          
          {/* Arms */}
          <div className="flex justify-between items-center w-full px-2">
            <div className={`w-3 h-8 bg-blue-400 rounded-full transform transition-all duration-500 ${isWaving ? 'rotate-45 scale-110' : 'rotate-12'} shadow-lg`}>
              <div className="w-2 h-2 bg-blue-300 rounded-full mx-auto mt-6"></div>
            </div>
            <div className="w-3 h-8 bg-blue-400 rounded-full transform -rotate-12 shadow-lg">
              <div className="w-2 h-2 bg-blue-300 rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </div>

        {/* Floating particles around robot */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute -top-1 -right-3 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute -bottom-2 -left-3 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-500 opacity-70"></div>
        <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-700 opacity-70"></div>
      </div>
      
      {/* Speech Bubble */}
      {isWaving && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl animate-bounce border-2 border-blue-200">
          <span className="text-sm font-bold text-blue-600">Hello! 👋</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r-2 border-b-2 border-blue-200"></div>
        </div>
      )}

      {/* Floating heart when waving */}
      {isWaving && (
        <div className="absolute -top-8 -right-4 text-red-500 animate-ping">
          <i className="ri-heart-fill w-4 h-4 flex items-center justify-center"></i>
        </div>
      )}
    </div>
  );
}