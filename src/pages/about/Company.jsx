
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Building, ArrowRight, Target, Eye, Heart, Globe } from 'lucide-react';

const Company = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to create solutions that transform businesses.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We are committed to helping you achieve your goals.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe AI should be accessible to businesses of all sizes, everywhere in the world.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We build trust through clear communication, ethical AI practices, and honest partnerships.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Elam AI founded with a vision to democratize AI for businesses' },
    { year: '2021', event: 'First AI agent platform launched, serving 100+ early customers' },
    { year: '2022', event: 'Series A funding raised, expanded team to 50+ employees' },
    { year: '2023', event: 'Platform scaled to serve 10,000+ businesses globally' },
    { year: '2024', event: 'Advanced multi-agent workflows launched, expanding enterprise presence' }
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
      title="Our Company"
      subtitle="Building the Future of AI"
      description="Founded with a mission to make AI accessible to every business, Elam AI is transforming how organizations work, communicate, and grow through intelligent automation."
      badge="About"
    >
      {/* Mission & Vision */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-medium text-white mb-4">Our Mission</h3>
          <p className="text-white/70 leading-relaxed font-light">
            To democratize artificial intelligence by providing powerful, easy-to-use AI agents 
            that help businesses of all sizes automate processes, enhance customer experiences, 
            and accelerate growth.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-medium text-white mb-4">Our Vision</h3>
          <p className="text-white/70 leading-relaxed font-light">
            A world where every business, regardless of size or technical expertise, can harness 
            the power of AI to solve complex problems, improve efficiency, and create better 
            experiences for their customers.
          </p>
        </div>
      </motion.div>

      {/* Company Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {values.map((value, index) => {
          const IconComponent = value.icon;
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
                <h3 className="text-xl font-medium text-white">{value.title}</h3>
              </div>
              <p className="text-white/70 leading-relaxed font-light">{value.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
          Join Us on Our Mission
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Whether you're looking to transform your business with AI or want to be part of 
          our team, we'd love to hear from you.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Company;
