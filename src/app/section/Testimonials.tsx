'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  results: string;
}

export const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Wijaya",
      position: "Senior Marketing Manager",
      company: "Tech Startup Jakarta",
      content: "Program ini benar-benar game changer! Dalam 3 bulan setelah menyelesaikan kelas, saya mendapat 5 job interview dari perusahaan top dan akhirnya promosi di perusahaan current dengan salary increase 40%.",
      rating: 5,
      avatar: "SW",
      results: "40% salary increase"
    },
    {
      id: 2,
      name: "Andi Prasetyo",
      position: "Product Manager",
      company: "E-commerce Unicorn",
      content: "Strategi LinkedIn yang diajarkan sangat praktis dan actionable. Profile views meningkat 300%, connections berkualitas bertambah 200+, dan yang terpenting, saya dapat offer remote work dari perusahaan international.",
      rating: 5,
      avatar: "AP",
      results: "300% profile views increase"
    },
    {
      id: 3,
      name: "Lisa Tan",
      position: "UX Designer",
      company: "Design Agency Singapore",
      content: "Sebagai introvert, networking selalu jadi challenge buat saya. Program ini mengubah mindset saya tentang networking dan memberikan framework yang jelas. Sekarang saya confident dan punya network yang solid di industry.",
      rating: 5,
      avatar: "LT",
      results: "200+ quality connections"
    }
  ];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Apa Kata Alumni Kami?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dengarkan langsung dari para profesional yang telah merasakan transformasi karir melalui program ini
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
            
            <div className="absolute top-6 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="mt-8">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].results}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Alumni Sukses</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating Program</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-gray-600">Career Growth Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};