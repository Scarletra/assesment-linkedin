'use client';

import { useState, useEffect, useRef } from 'react';

export const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Tentang Kelas
              </span>
              
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Transformasi Karir Dimulai dari LinkedIn
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Dalam era digital yang semakin kompetitif, LinkedIn bukan sekadar platform untuk networking biasa, melainkan sebuah gerbang strategis menuju peluang karier tanpa batas. Di sinilah para profesional, entrepreneur, hingga fresh graduate dapat menunjukkan jati diri mereka, membangun reputasi yang kredibel, serta terhubung dengan para decision maker di berbagai industri. Kelas intensif ini dirancang secara khusus bagi Anda yang ingin mengoptimalkan potensi LinkedIn dengan cara yang tepat sasaran. Selama 6 minggu, Anda akan dibimbing untuk memahami cara membangun personal brand yang autentik, menulis profil yang memikat, serta membagikan konten yang relevan sehingga menarik perhatian recruiter maupun calon partner bisnis. Tidak hanya itu, Anda juga akan belajar strategi memperluas jaringan secara efektif, berinteraksi dengan komunitas profesional, hingga memanfaatkan fitur-fitur LinkedIn untuk mendukung pertumbuhan karier maupun bisnis.
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      YN
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600">2.5x</div>
                    <div className="text-sm text-gray-500">Profile Views</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="text-2xl font-bold text-green-600">180%</div>
                    <div className="text-sm text-gray-500">Connections</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-10 lg:w-12 h-10 lg:h-12 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
