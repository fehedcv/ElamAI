import React from 'react';
import { MessageCircle, Cog, BarChart3, Database, Link, ShieldCheck } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: MessageCircle,
      title: 'Customer Support Automation',
      description: 'AI chatbots that deliver instant, 24/7 support.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Operations Efficiency',
      description: 'Automated approvals, HR, and finance workflows.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Smarter Decisions',
      description: 'Predictive analytics that give clarity and foresight.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Turn raw data into actionable intelligence.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Link,
      title: 'Seamless Integrations',
      description: 'AI embedded into your existing tools (Slack, CRMs, ERP).',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'Enterprise-grade privacy, encryption, and compliance tools.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI solutions can revolutionize different aspects of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Flowing background gradient */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} rounded-full filter blur-2xl transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;