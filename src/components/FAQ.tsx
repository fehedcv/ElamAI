import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Is AI too expensive for small businesses?',
      answer: 'Not at all. Our solutions are designed to scale to your budget and your business goals. We offer flexible pricing and can start with small implementations that provide immediate value, then scale up as your business grows.'
    },
    {
      question: 'Do I need technical knowledge to work with you?',
      answer: 'No — we handle the technical side, you focus on your business. Our team takes care of all the complex implementation details while keeping you informed throughout the process with clear, non-technical communication.'
    },
    {
      question: 'How long does an implementation take?',
      answer: 'Most solutions can be deployed in weeks, not months. The timeline depends on the complexity of your requirements, but we prioritize rapid deployment with immediate value generation.'
    },
    {
      question: 'Can Elam AI integrate with tools I already use?',
      answer: 'Yes. We specialize in seamless integrations with your existing platforms including CRMs, ERPs, communication tools like Slack, and other business software you rely on daily.'
    },
    {
      question: 'What kind of support do you provide after implementation?',
      answer: 'We provide comprehensive ongoing support including training, maintenance, updates, and optimization. Our partnership extends well beyond the initial implementation to ensure your AI solutions continue delivering value.'
    },
    {
      question: 'How do you measure the ROI of AI implementations?',
      answer: 'We establish clear KPIs before implementation and provide detailed analytics and reporting. Common metrics include time saved, cost reduction, increased efficiency, and improved customer satisfaction scores.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our AI solutions and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-12 h-px bg-cyan-400 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;