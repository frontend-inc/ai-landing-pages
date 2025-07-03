"use client";

import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/frontend-co/image/upload/v1751244860/projects/ai-powered-landing-pages/unsplash-1751244860171.jpg" 
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Built for AI Intelligence.
            </h3>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            AI Page Builder
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
            Professional AI-generated landing pages that convert visitors into customers.
          </p>
          
          <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            Just $500/project for professional landing pages. Unlimited revisions, custom design, and fast delivery.
          </p>
          
          <p className="text-lg text-white/70 mb-16 max-w-2xl mx-auto">
            24-hour delivery with 100% money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center gap-3 min-w-[200px]"
            >
              Start Your Project
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 flex items-center gap-3 min-w-[200px]">
              <i className="ri-play-circle-line text-lg"></i>
              View Portfolio
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex text-yellow-400 text-lg">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <span className="text-sm font-medium text-white/80">5.0 Rating</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <i className="ri-building-2-line text-2xl text-white/70"></i>
              <span className="text-sm font-medium text-white/80">500+ Built</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <i className="ri-time-line text-2xl text-white/70"></i>
              <span className="text-sm font-medium text-white/80">24hr Delivery</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <i className="ri-check-double-line text-2xl text-white/70"></i>
              <span className="text-sm font-medium text-white/80">100% Success</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <i className="ri-calendar-2-line text-2xl text-white/70"></i>
              <span className="text-sm font-medium text-white/80">Est. 2024</span>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}