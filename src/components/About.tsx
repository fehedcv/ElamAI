import React from 'react';
import { Target, Eye, Heart, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Always forward-looking.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Your success is our success.'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Honest, ethical, transparent.'
    },
    {
      icon: Eye,
      title: 'Scalability',
      description: 'Building solutions that grow with you.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Elam AI
          </h2>
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              Elam AI was founded with a simple mission: to make intelligent automation accessible to businesses of all sizes. We've seen countless entrepreneurs and teams waste time on repetitive tasks — and we believe AI should free them to focus on what truly matters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <Target className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower startups, SMBs, and entrepreneurs to leverage AI with confidence, clarity, and measurable results.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
            <Eye className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A world where every business, regardless of size, benefits from the power of intelligent automation.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Core Values</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/30 hover:border-cyan-500/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-xl mb-4 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;