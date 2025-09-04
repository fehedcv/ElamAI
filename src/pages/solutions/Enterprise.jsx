
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Building, ArrowRight, CheckCircle, Shield, Scale, Users } from 'lucide-react';

const Enterprise = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features with SOC 2 compliance, SSO, and data governance.'
    },
    {
      icon: Scale,
      title: 'Unlimited Scalability',
      description: 'Scale from hundreds to millions of interactions with enterprise-grade infrastructure.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced team management, role-based access, and organizational controls.'
    },
    {
      icon: Building,
      title: 'Custom Deployment',
      description: 'On-premise, private cloud, or hybrid deployment options for maximum control.'
    }
  ];

  const benefits = [
    'Dedicated customer success manager',
    'Priority support with SLA guarantees',
    'Custom integrations and API development',
    'Advanced analytics and reporting',
    'White-label and branding options',
    'Professional services and consulting'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <PageLayout
      title="Enterprise Solutions"
      subtitle="AI at Enterprise Scale"
      description="Deploy AI agents across your entire organization with enterprise-grade security, scalability, and support. Transform operations with custom AI solutions designed for large-scale businesses."
      badge="Solution"
    >
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white">{feature.title}</h3>
              </div>
              <p className="text-white/70 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Benefits Section */}
      <motion.div
        className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Enterprise Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white/80 font-light">{benefit}</span>
            </motion.div>
          ))}
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
          Ready for Enterprise AI?
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Transform your enterprise with AI solutions designed for scale, security, and success. 
          Contact our enterprise team to discuss your specific requirements.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Enterprise;
