import React from 'react';
import { Rocket, Zap, Settings, TrendingUp } from 'lucide-react';

const ValuePropositions: React.FC = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Tailored AI Consultation',
      description: 'We identify how AI can create measurable growth in your business.'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Replace repetitive tasks with intelligent systems that work around the clock.'
    },
    {
      icon: Settings,
      title: 'Custom AI Solutions',
      description: 'From chatbots to predictive models, built to fit your unique needs.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable for Growth',
      description: 'Designed to evolve with your business, not against it.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;