
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { BookOpen, ArrowRight, PlayCircle, Clock, User, Star } from 'lucide-react';

const Tutorials = () => {
  const tutorials = [
    {
      title: 'Building Your First AI Agent',
      description: 'Step-by-step guide to creating and deploying your first AI agent in under 10 minutes.',
      duration: '8 min read',
      level: 'Beginner',
      rating: 4.9,
      category: 'Getting Started'
    },
    {
      title: 'Advanced Workflow Automation',
      description: 'Learn how to create complex automated workflows that integrate multiple systems.',
      duration: '15 min read',
      level: 'Advanced',
      rating: 4.8,
      category: 'Workflows'
    },
    {
      title: 'Integrating with CRM Systems',
      description: 'Connect your AI agents with Salesforce, HubSpot, and other popular CRM platforms.',
      duration: '12 min read',
      level: 'Intermediate',
      rating: 4.7,
      category: 'Integrations'
    },
    {
      title: 'API Development Best Practices',
      description: 'Best practices for building robust applications with the Elam AI API.',
      duration: '20 min read',
      level: 'Advanced',
      rating: 4.9,
      category: 'Development'
    }
  ];

  const categories = [
    'Getting Started',
    'Workflows',
    'Integrations',
    'Development',
    'Best Practices',
    'Troubleshooting'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <PageLayout
      title="Tutorials"
      subtitle="Learn by Doing"
      description="Step-by-step tutorials and guides to help you master Elam AI. From beginner basics to advanced techniques, learn at your own pace with our comprehensive tutorials."
      badge="Resources"
    >
      {/* Categories Filter */}
      <motion.div
        className="mb-12"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-all duration-200 text-sm font-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <PlayCircle className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-light">{tutorial.category}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white/60 text-sm">{tutorial.rating}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-medium text-white mb-3">{tutorial.title}</h3>
            <p className="text-white/70 leading-relaxed font-light mb-4">{tutorial.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-white/40" />
                  <span className="text-white/60 text-sm">{tutorial.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                  {tutorial.level}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Tutorials Section */}
      <motion.div
        className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="text-center">
          <PlayCircle className="w-16 h-16 text-white/60 mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
            Video Tutorials Coming Soon
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            We're creating comprehensive video tutorials to help you learn visually. 
            Subscribe to get notified when they're available.
          </p>
          <motion.button
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-light transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Notify Me
          </motion.button>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
          Ready to Start Learning?
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Join our community and access exclusive tutorials, tips, and best practices 
          from AI experts and fellow developers.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resources/community">
            <motion.button
              className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Community
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Tutorials;
