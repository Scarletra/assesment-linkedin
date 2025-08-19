'use client';

import { useState, useEffect, useRef } from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export const BenefitsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <Target className="w-8 h-8" />,
      title: "Personal Branding Mastery",
      description: "Bangun personal brand yang autentik dan menarik perhatian recruiter top di industri Anda dengan strategi konten yang proven effective.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Networking",
      description: "Pelajari cara membangun network profesional yang berkualitas, bukan sekadar kuantitas, dan convert connections menjadi opportunities.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Acceleration",
      description: "Dapatkan akses ke job opportunities tersembunyi dan tingkatkan visibility Anda di mata decision makers di perusahaan target.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Posisikan diri sebagai thought leader di bidang Anda melalui content strategy yang akan membuat Anda dikenal sebagai expert.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50"
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Key Benefits
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mengapa Memilih Program Ini?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dapatkan hasil nyata dalam 6 minggu dengan metodologi yang telah terbukti meningkatkan karir ratusan profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 ${
                hoveredCard === benefit.id ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white mb-6 transition-all duration-300 ${
                  hoveredCard === benefit.id ? 'scale-110' : ''
                }`}>
                  {benefit.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                  hoveredCard === benefit.id ? 'opacity-5' : ''
                } bg-gradient-to-br ${benefit.gradient}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Siap Mengubah Karir Anda?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan 500+ profesional yang telah merasakan transformasi karir melalui program ini
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Mulai Perjalanan Anda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};