import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Full-page fixed background (covers entire page) */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        {/* Decorative blobs that span the whole page */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-20" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* semi-transparent overlay to darken background behind hero content */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Partner in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Intelligent Automation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              We help ambitious startups, entrepreneurs, and growing businesses harness the power of AI to simplify operations, cut costs, and innovate faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-cyan-400/30 hover:border-cyan-400/50 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Learn How It Works</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;