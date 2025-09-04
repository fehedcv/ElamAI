import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MultiAgentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('multi-agent-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="multi-agent-section"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden font-sans py-8 sm:py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/6 rounded-full blur-3xl pointer-events-none"
          style={{ left: "15%", top: "15%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500/6 rounded-full blur-3xl pointer-events-none"
          style={{ right: "10%", bottom: "20%" }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-light mb-4"
              variants={itemVariants}
            >
              Multi-Agent
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Empowering Autonomous
              <br />
              Agents to Work Together
            </motion.h2>

            <motion.p
              className="text-sm sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Multiple specialized AI agents working in harmony to automate your
              entire workflow from data processing to intelligent actions.
            </motion.p>
          </div>

          {/* Simplified Workflow Visualization */}
          <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
            {/* Mobile: Simple Flow */}
            <div className="sm:hidden">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="space-y-6">
                  {/* Input */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          Data Input
                        </h4>
                        <p className="text-white/60 text-xs">
                          Email, CRM, Analytics
                        </p>
                      </div>
                    </div>
                    <div className="text-white/40">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center relative">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          AI Processing
                        </h4>
                        <p className="text-white/60 text-xs">
                          Smart Analysis & Learning
                        </p>
                      </div>
                    </div>
                    <div className="text-white/40">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          Automated Actions
                        </h4>
                        <p className="text-white/60 text-xs">
                          Responses, Reports, Tasks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        500+
                      </div>
                      <div className="text-xs text-white/60">Integrations</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        24/7
                      </div>
                      <div className="text-xs text-white/60">Automation</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        10x
                      </div>
                      <div className="text-xs text-white/60">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Enhanced Flow */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-5 gap-8 items-center">
                {/* Input Sources */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Data Sources</h4>
                  <p className="text-white/70 text-sm">
                    Email, CRM, Analytics & More
                  </p>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    className="text-white/40"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* AI Processing Hub */}
                <motion.div
                  className="bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-sm border border-indigo-400/40 rounded-2xl p-8 text-center shadow-2xl relative"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-xl relative">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">
                    AI Hub
                  </h3>
                  <p className="text-white/70 text-sm">
                    Smart Processing Engine
                  </p>

                  <div className="flex justify-center space-x-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    className="text-white/40"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Automated Actions */}
                <motion.div
                  className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-medium mb-2">Smart Actions</h4>
                  <p className="text-white/70 text-sm">
                    Responses, Reports & Tasks
                  </p>
                </motion.div>
              </div>

              {/* Desktop Stats */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">
                    500+
                  </div>
                  <div className="text-white/60 text-sm">
                    Platform Integrations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">
                    24/7
                  </div>
                  <div className="text-white/60 text-sm">
                    Continuous Automation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">10x</div>
                  <div className="text-white/60 text-sm">
                    Productivity Boost
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.button
              className="inline-flex items-center justify-center bg-white/95 text-black px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-white/90"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              Explore Multi-Agent Solutions
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MultiAgentSection;