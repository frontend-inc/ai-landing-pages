"use client";

import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: "ri-speed-line",
      title: "Lightning Fast",
      description: "Your landing page delivered in 24 hours or less. No long wait times."
    },
    {
      icon: "ri-palette-line",
      title: "Custom Design",
      description: "Each landing page is uniquely crafted for your brand and industry."
    },
    {
      icon: "ri-line-chart-line",
      title: "Conversion Focused",
      description: "Built with proven conversion optimization techniques."
    },
    {
      icon: "ri-search-eye-line",
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your page rank higher in search results."
    },
    {
      icon: "ri-bar-chart-line",
      title: "Built-in Analytics",
      description: "Track visitor behavior and conversion metrics with integrated analytics."
    },
    {
      icon: "ri-global-line",
      title: "Custom Domain",
      description: "Connect your own domain name for a professional brand presence."
    }
  ];

  return (
    <>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 tracking-tight">
                Why Choose AI Page Builder?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 group-hover:scale-110">
                    <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-16 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
                  <p className="text-2xl mb-12 opacity-90 font-light max-w-3xl mx-auto leading-relaxed">
                    Join hundreds of businesses who have transformed their online presence with AI-generated landing pages.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-gray-900 px-12 py-5 rounded-full text-xl font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-1 flex items-center gap-4 mx-auto"
                  >
                    <i className="ri-rocket-line text-xl"></i>
                    Start Your Project Today
                  </button>
                  <div className="mt-8 text-lg opacity-75 font-light">
                    Fixed price of $500 • 24-hour delivery • Unlimited revisions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}