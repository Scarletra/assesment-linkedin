'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mastering LinkedIn for{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Career Growth
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Unlock your professional potential and accelerate your career with proven LinkedIn strategies that get results
              </p>
            </div>

            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6 Weeks</div>
                <div className="text-blue-200 text-sm">Program</div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/10"></div>
              
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-bounce">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  in
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-pulse">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                  📈
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-bounce delay-1000">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                  🤝
                </div>
              </div>
              
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-pulse delay-500">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                  🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};