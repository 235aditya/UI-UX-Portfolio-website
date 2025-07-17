
'use client';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Moving gradient orbs - faster animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animation: 'float-fast 8s ease-in-out infinite' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full mix-blend-multiply filter blur-xl" style={{ animation: 'float-fast 6s ease-in-out infinite reverse', animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 rounded-full mix-blend-multiply filter blur-xl" style={{ animation: 'float-fast 7s ease-in-out infinite', animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-teal-400/40 to-green-400/40 rounded-full mix-blend-multiply filter blur-xl" style={{ animation: 'float-fast 9s ease-in-out infinite reverse', animationDelay: '3s' }}></div>
      </div>
      
      {/* Floating particles with faster movement */}
      <div className="absolute w-4 h-4 bg-blue-400/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 4s linear infinite' }}></div>
      <div className="absolute w-3 h-3 bg-purple-400/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 3s linear infinite reverse', animationDelay: '0.5s' }}></div>
      <div className="absolute w-5 h-5 bg-pink-400/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 5s linear infinite', animationDelay: '1s' }}></div>
      <div className="absolute w-2 h-2 bg-blue-500/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 3.5s linear infinite reverse', animationDelay: '1.5s' }}></div>
      <div className="absolute w-3 h-3 bg-cyan-400/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 4.5s linear infinite', animationDelay: '2s' }}></div>
      <div className="absolute w-4 h-4 bg-indigo-400/70 rounded-full shadow-lg" style={{ animation: 'particle-fast 3.8s linear infinite reverse', animationDelay: '2.5s' }}></div>
      
      {/* Moving geometric shapes - faster */}
      <div className="absolute w-8 h-8 border-2 border-blue-300/60 rotate-45 opacity-60" style={{ animation: 'shape-drift-fast 6s ease-in-out infinite' }}></div>
      <div className="absolute w-6 h-6 border-2 border-purple-300/60 opacity-70" style={{ animation: 'shape-drift-fast 5s ease-in-out infinite reverse', animationDelay: '1s' }}></div>
      <div className="absolute w-10 h-10 border-2 border-pink-300/60 rounded-full opacity-50" style={{ animation: 'shape-drift-fast 7s ease-in-out infinite', animationDelay: '2s' }}></div>
      
      {/* Flowing lines - faster */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" style={{ animation: 'line-flow-fast 4s ease-in-out infinite' }}></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" style={{ animation: 'line-flow-fast 3s ease-in-out infinite reverse', animationDelay: '1.5s' }}></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" style={{ animation: 'line-flow-fast 5s ease-in-out infinite', animationDelay: '3s' }}></div>
      
      {/* Pulsing dots - faster */}
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{ animation: 'pulse-move-fast 3s ease-in-out infinite' }}></div>
      <div className="absolute w-1 h-1 bg-purple-400 rounded-full" style={{ animation: 'pulse-move-fast 2.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
      <div className="absolute w-3 h-3 bg-pink-400 rounded-full" style={{ animation: 'pulse-move-fast 4s ease-in-out infinite', animationDelay: '1s' }}></div>
      <div className="absolute w-2 h-2 bg-cyan-400 rounded-full" style={{ animation: 'pulse-move-fast 3.5s ease-in-out infinite', animationDelay: '1.5s' }}></div>

      <style jsx>{`
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes particle-fast {
          0% { transform: translateY(100vh) translateX(0px) scale(0); opacity: 0; }
          10% { opacity: 1; scale: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px) scale(0); opacity: 0; }
        }
        
        @keyframes shape-drift-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-40px) translateX(30px) rotate(120deg); }
          66% { transform: translateY(-20px) translateX(-25px) rotate(240deg); }
        }
        
        @keyframes line-flow-fast {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulse-move-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) translateX(20px) scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}