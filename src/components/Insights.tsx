import React from 'react';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  const articles = [
    {
      title: 'How Startups Can Leverage AI on a Budget',
      excerpt: 'Discover practical ways to implement AI solutions without breaking the bank.',
      readTime: '5 min read',
      author: 'Elam AI Team',
      date: '2025-01-15'
    },
    {
      title: '5 Workflows Every Small Business Can Automate in 2025',
      excerpt: 'From HR to customer service, learn which processes to automate first.',
      readTime: '7 min read',
      author: 'Elam AI Team',
      date: '2025-01-10'
    },
    {
      title: 'The Future of Intelligent Operations',
      excerpt: 'Exploring how AI will reshape business operations in the next decade.',
      readTime: '8 min read',
      author: 'Elam AI Team',
      date: '2025-01-05'
    },
    {
      title: 'Balancing Growth with Ethical AI',
      excerpt: 'How to implement AI responsibly while driving business growth.',
      readTime: '6 min read',
      author: 'Elam AI Team',
      date: '2025-01-01'
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, automation, and business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{article.author}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
            <BookOpen className="w-5 h-5" />
            <span>Visit Insights</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;