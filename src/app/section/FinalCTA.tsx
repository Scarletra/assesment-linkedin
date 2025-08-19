'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegistration = () => {
    // Handle registration logic here
    console.log('Registration clicked');
    // You can add form modal or redirect to registration page
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
      id="registration"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-lg animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/30">
            <Clock className="w-4 h-4" />
            Early Bird Price - Limited Time
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Jangan Tunggu Lagi,{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Mulai Sekarang!
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan batch terbatas hanya 50 peserta. Dapatkan akses eksklusif ke mentor LinkedIn expert dan community support yang akan mengakselerasi pertumbuhan karir Anda.
          </p>

          <div className={`flex justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 max-w-md mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-gray-300 text-lg mb-2">
              <span className="line-through">Rp 2.500.000</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              Rp 1.500.000
            </div>
            <div className="text-yellow-400 font-medium">
              Hemat 40% - Early Bird Price
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center gap-3 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-white">6 Week Intensive Program</span>
            </div>
            <div className="flex items-center gap-3 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-white">1-on-1 Mentoring Session</span>
            </div>
            <div className="flex items-center gap-3 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-white">Lifetime Community Access</span>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={handleRegistration}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              Daftar Sekarang - Hemat 40%
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>
        </div>

        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Money Back Guarantee</h4>
            <p className="text-gray-300 text-sm">100% refund jika tidak puas dalam 7 hari pertama</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Mentorship</h4>
            <p className="text-gray-300 text-sm">Dibimbing langsung oleh LinkedIn specialist berpengalaman 10+ tahun</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Lifetime Access</h4>
            <p className="text-gray-300 text-sm">Akses materi dan community selamanya, termasuk future updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};