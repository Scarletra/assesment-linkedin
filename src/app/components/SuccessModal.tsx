'use client';

import { useState, useEffect, useRef } from 'react';
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

// TypeScript interfaces
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'
      }`}>

        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          ✕
        </button>

        <div className="p-8 text-center">

          <div className="relative mx-auto w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pendaftaran Berhasil! 🎉
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Selamat! Anda telah berhasil mendaftar ke program BelajarLinkedIn.id 
            Kami akan mengirimkan detail akses program ke email Anda dalam 5 menit.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                📧
              </div>
              <span className="text-gray-700 text-sm">Email konfirmasi akan segera dikirim</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                📅
              </div>
              <span className="text-gray-700 text-sm">Program dimulai Senin, 26 Agustus 2025</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                🎁
              </div>
              <span className="text-gray-700 text-sm">Bonus: LinkedIn Profile Audit senilai Rp 500k</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Mengerti, Terima Kasih!
          </button>
        </div>
      </div>
    </div>
  );
};