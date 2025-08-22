import React from 'react';
import { Users, Cog, Code, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Users,
      title: 'AI Consultation',
      description: 'We start by listening. Our consultation process helps uncover where AI will create the most value in your business.',
      features: [
        'Strategy workshops tailored to your sector',
        'ROI-focused roadmaps backed by data',
        'Clear, actionable steps for implementation'
      ],
      cta: 'Request AI Consultation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Workflow Automation',
      description: 'Streamline repetitive, time-consuming workflows with intelligent automation.',
      features: [
        'HR, supply chain, and sales processes',
        'Integrations with CRMs, ERPs, and SaaS platforms',
        'Data processing and document automation'
      ],
      cta: 'See Workflow Solutions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Code,
      title: 'Custom AI Solutions',
      description: 'When your business needs more than off-the-shelf tools, we build bespoke AI solutions that fit seamlessly.',
      features: [
        'Conversational AI (Chatbots & Virtual Assistants)',
        'Predictive Analytics for smarter planning',
        'Personalized Recommendation Engines',
        'Computer Vision for document/image automation'
      ],
      cta: "Let's Build Your Solution",
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 overflow-hidden h-full flex flex-col"
              >
                {/* Flowing background gradient */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full filter blur-3xl transform translate-x-12 -translate-y-12`}></div>
                </div>
                
                <div className="relative flex flex-col h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="mt-auto group/btn w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;