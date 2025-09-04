import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';
import { Clock } from 'lucide-react';

const Careers = () => {
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
      title="Join Our Team"
      subtitle="Build the Future of AI Agents"
      description="We're building a world-class team of innovators, but our Careers section isn't live yet. Stay tuned for exciting opportunities."
      badge="Careers"
    >
      {/* Coming Soon Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white/5 backdrop-blur-sm rounded-2xl"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
          Careers Coming Soon
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          We’re preparing open positions, culture highlights, and benefits details.  
          Soon you’ll be able to explore exciting roles and join our journey to transform AI.
        </p>
      </motion.div>
    </PageLayout>
  );
};

export default Careers;
