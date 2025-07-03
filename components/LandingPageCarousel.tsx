"use client";

import { useState, useEffect } from 'react';

export default function LandingPageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const landingPages = [
    {
      category: "SaaS Platform",
      title: "Convert visitors into customers.",
      description: "Clean, modern design for software companies",
      bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-blue-400"
    },
    {
      category: "E-commerce Store",
      title: "Boost your online sales.",
      description: "Professional stores that drive purchases",
      bgColor: "bg-gradient-to-br from-purple-900 to-purple-800",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-purple-300"
    },
    {
      category: "Creative Agency",
      title: "Showcase your portfolio.",
      description: "Bold designs that capture attention",
      bgColor: "bg-gradient-to-br from-orange-900 to-red-900",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-orange-300"
    },
    {
      category: "Tech Startup",
      title: "Launch with impact.",
      description: "Innovation-focused landing pages",
      bgColor: "bg-gradient-to-br from-emerald-900 to-teal-900",
      image: "https://images.unsplash.com/photo-1744692149286-5c8b73250f59?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-emerald-300"
    },
    {
      category: "Restaurant",
      title: "Appetite for success.",
      description: "Delicious designs that convert",
      bgColor: "bg-gradient-to-br from-amber-900 to-orange-900",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-amber-300"
    },
    {
      category: "Consulting Firm",
      title: "Professional expertise.",
      description: "Trustworthy designs that build confidence",
      bgColor: "bg-gradient-to-br from-indigo-900 to-blue-900",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=entropy&auto=format",
      accent: "text-indigo-300"
    }
  ];

  const itemsPerView = 3;
  const totalSlides = Math.ceil(landingPages.length / itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 tracking-tight">
            Sample Landing Pages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            See the variety of professional landing pages our AI can create for any industry.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {landingPages
                  .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                  .map((page, index) => (
                    <div key={slideIndex * itemsPerView + index} className="flex justify-center">
                      <div className={`relative w-80 h-[600px] rounded-3xl overflow-hidden shadow-2xl ${page.bgColor} group`}>
                        
                        <div className="absolute inset-0 bg-black/20"></div>
                        
                        <div className="relative z-10 p-8 h-full flex flex-col">
                          <div className="mb-4">
                            <span className={`text-sm font-medium ${page.accent} tracking-wide uppercase`}>
                              {page.category}
                            </span>
                          </div>
                          
                          <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-2">
                              {page.title}
                            </h3>
                            <p className="text-gray-300 font-light">
                              {page.description}
                            </p>
                          </div>
                          
                          <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-xl">
                              <img 
                                src={page.image} 
                                alt={page.category}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-white/30">
                              <i className="ri-add-line text-white text-xl"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 z-30"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200 hover:scale-110 z-30"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}