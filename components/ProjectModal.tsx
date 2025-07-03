"use client";

import { useState } from 'react';
import SuccessMessage from './SuccessMessage';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '$500'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email content
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: `New Project Request from ${formData.name}`,
        message: `Company: ${formData.company || 'Not provided'}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline || 'Not specified'}

Project Description:
${formData.description}`
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log('Project form submitted successfully');
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to submit project form:', errorData);
        alert('Failed to submit your project request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting project form:', error);
      alert('An error occurred while submitting your project request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset all states when closing
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      description: '',
      timeline: '',
      budget: '$500'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {isSuccess ? 'Thank You!' : 'Start Your Project'}
          </h2>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
        </div>

        {isSuccess ? (
          <SuccessMessage onClose={handleClose} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                name="projectType"
                id="projectType"
                required
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select project type</option>
                <option value="saas">SaaS Platform</option>
                <option value="ecommerce">E-commerce Store</option>
                <option value="agency">Creative Agency</option>
                <option value="startup">Tech Startup</option>
                <option value="restaurant">Restaurant</option>
                <option value="consulting">Consulting Firm</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Describe your project, goals, and any specific requirements..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Timeline
              </label>
              <select
                name="timeline"
                id="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (24 hours)</option>
                <option value="week">Within a week</option>
                <option value="month">Within a month</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="$500">$500 (Standard)</option>
                <option value="$750">$750 (Premium)</option>
                <option value="$1000+">$1000+ (Enterprise)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="ri-send-plane-line"></i>
                  Submit Project
                </>
              )}
            </button>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-blue-600 text-lg mt-0.5"></i>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">What happens next?</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• We&apos;ll review your project within 2 hours</li>
                  <li>• Get a detailed proposal and timeline</li>
                  <li>• Start building your landing page immediately</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}