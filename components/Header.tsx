"use client";

import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/95 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                AI Page Builder
              </span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:shadow-white/20'
              }`}
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}