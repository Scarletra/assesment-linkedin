'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    const throttledUpdateScrollDirection = () => {
      requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', throttledUpdateScrollDirection);
    
    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollDirection);
    };
  }, [scrollDirection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const getNavbarClasses = () => {
  if (scrollY < 50) {
    return 'translate-y-0 opacity-100 bg-black/20 backdrop-blur-md';
  } else if (scrollDirection === 'down') {
    return '-translate-y-full opacity-0 bg-black/5 backdrop-blur-md';
  } else {
    return 'translate-y-0 opacity-100 bg-black/80 backdrop-blur-md text-white shadow-md';
  }
};


  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'registration', label: 'Register' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${getNavbarClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">L</span>
              </div>
              <span className="text-white font-bold text-lg">Belajar LinkedIn</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection('registration')}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-yellow-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Daftar Sekarang
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('registration')}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg mt-4"
              >
                Daftar Sekarang
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

