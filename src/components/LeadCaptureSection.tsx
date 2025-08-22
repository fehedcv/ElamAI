import React from 'react';
import { ArrowRight } from 'lucide-react';

const LeadCaptureSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-screen filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Imagine what your business could do with 20% of your team's time back
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's talk about making it happen. Schedule a discovery call and see how AI can transform your operations.
          </p>
          
          <button
            onClick={scrollToContact}
            className="group bg-white text-cyan-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center space-x-3 mx-auto"
          >
            <span>Schedule a Discovery Call</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;