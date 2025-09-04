import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Headphones, TrendingUp, FileText, Shield, UserPlus, MessageCircle, Search, FileCheck, Send, Zap, ArrowRight, Target, Package, BarChart3, Mail, Share2, Eye, Archive, Truck, AlertCircle } from 'lucide-react';

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedActions, setExpandedActions] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const solutions = [
    {
      id: 1,
      category: "Human Resources",
      title: "Employee Onboarding",
      description: "Handle new hire onboarding tasks like document collection and HR profile creation automatically to save time.",
      icon: UserPlus,
      actions: [
        { icon: FileText, text: "Collect required documents and information." },
        { icon: Shield, text: "Verify the authenticity of documents and validate credentials." },
        { icon: Users, text: "Create employee profiles in the system." },
        { icon: Send, text: "Send onboarding schedules, policies, and other resources to new hires." }
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      category: "Customer Service",
      title: "General Customer Support",
      description: "Manage customer inquiries efficiently with AI agents for General Customer Support, providing timely support and resolving common issues.",
      icon: Headphones,
      actions: [
        { icon: MessageCircle, text: "Analyze the content of the customer query and apply instructions and principles based on the supporting information to formulate a response." },
        { icon: Send, text: "Send the generated response to the customer." }
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      category: "Sales",
      title: "Proposal Generation",
      description: "Generate tailored sales proposals in minutes with AI agents for Sales Proposal Generation, reducing manual effort and accelerating your sales cycle.",
      icon: TrendingUp,
      actions: [
        { icon: Search, text: "Gather all relevant information about the client through a web search." },
        { icon: Zap, text: "Analyze the gathered client information and tailor the Unique Selling Propositions (USPs) of the seller company to meet the specific needs of the client." },
        { icon: FileCheck, text: "Compile the drafted proposal into a Google Document for easy sharing and collaboration." },
        { icon: Send, text: "Send an email to the client with the document link to the Google Document, ensuring streamlined communication." }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      category: "Marketing",
      title: "Campaign Management",
      description: "Automate marketing campaign creation and management with AI agents that optimize targeting, content creation, and performance tracking.",
      icon: Target,
      actions: [
        { icon: Search, text: "Research target audience demographics and preferences for optimal campaign targeting." },
        { icon: FileText, text: "Generate compelling marketing content including copy, subject lines, and creative briefs." },
        { icon: Mail, text: "Deploy campaigns across multiple channels including email, social media, and advertising platforms." },
        { icon: BarChart3, text: "Monitor campaign performance and provide detailed analytics and optimization recommendations." }
      ],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      category: "Inventory Management",
      title: "Stock Optimization",
      description: "Streamline inventory operations with AI agents that monitor stock levels, predict demand, and automate reordering processes.",
      icon: Package,
      actions: [
        { icon: Eye, text: "Monitor real-time inventory levels across all locations and warehouses." },
        { icon: BarChart3, text: "Analyze historical sales data and market trends to predict future demand patterns." },
        { icon: AlertCircle, text: "Generate automated alerts for low stock levels and potential stockouts." },
        { icon: Truck, text: "Create and send purchase orders to suppliers based on optimized reorder points and quantities." }
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 6,
      category: "Analytics",
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with AI agents that automate reporting, analysis, and strategic recommendations.",
      icon: BarChart3,
      actions: [
        { icon: Archive, text: "Collect and consolidate data from multiple business systems and sources." },
        { icon: Search, text: "Perform advanced data analysis to identify trends, patterns, and anomalies." },
        { icon: FileText, text: "Generate comprehensive reports with visualizations and key performance indicators." },
        { icon: Share2, text: "Distribute insights and recommendations to relevant stakeholders and decision-makers." }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    }
  ];

  // Auto-scroll mobile tabs when activeIndex changes
  useEffect(() => {
    if (mobileScrollRef.current) {
      const scrollContainer = mobileScrollRef.current;
      const activeButton = scrollContainer.children[activeIndex];
      
      if (activeButton) {
        const containerWidth = scrollContainer.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const currentScroll = scrollContainer.scrollLeft;
        
        // Calculate the center position for the active button
        const targetScroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        // Smooth scroll to center the active button
        scrollContainer.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Auto-rotate functionality with pause capability
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % solutions.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [solutions.length, isPaused]);

  const nextSolution = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSolution = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const toggleActions = (solutionId) => {
    setExpandedActions(prev => ({
      ...prev,
      [solutionId]: !prev[solutionId]
    }));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"
          style={{ left: "20%", top: "20%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-500/6 rounded-full blur-3xl pointer-events-none"
          style={{ right: "15%", bottom: "30%" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Keep original styling */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Build Your Workforce
              <br />
              Today!
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light mb-10"
              variants={itemVariants}
            >
              With Elam AI, build an AI workforce that automates tasks
              efficiently. Deploy intelligent agents to streamline operations
              and improve performance across your business today!
            </motion.p>
          </div>

          {/* Compact Solutions Carousel */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Solution Navigation Cards */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8 lg:max-w-5xl lg:mx-auto">
              {/* Solution Tabs - Mobile: Horizontal scroll, Desktop: Vertical */}
              <div className="lg:w-2/5">
                {/* Mobile: Horizontal scrollable tabs */}
                <div className="lg:hidden">
                  <div
                    ref={mobileScrollRef}
                    className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {solutions.map((solution, index) => (
                      <motion.button
                        key={solution.id}
                        onClick={() => setActiveIndex(index)}
                        className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 border min-w-[140px] ${
                          activeIndex === index
                            ? "bg-white/10 border-white/20 backdrop-blur-sm"
                            : "bg-white/5 border-white/10"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-center">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                              activeIndex === index
                                ? "bg-white/20"
                                : "bg-white/10"
                            }`}
                          >
                            <solution.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-xs text-white/60 uppercase tracking-wider font-light mb-1">
                            {solution.category}
                          </div>
                          <div className="text-white font-light text-xs leading-tight">
                            {solution.title}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Desktop: Vertical tabs */}
                <div className="hidden lg:block space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.button
                      key={solution.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border ${
                        activeIndex === index
                          ? "bg-white/10 border-white/20 backdrop-blur-sm"
                          : "bg-white/5 border-white/10 hover:border-white/15"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activeIndex === index
                              ? "bg-white/20"
                              : "bg-white/10"
                          }`}
                        >
                          <solution.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-white/60 uppercase tracking-wider font-light mb-1">
                            {solution.category}
                          </div>
                          <div className="text-white font-light text-sm">
                            {solution.title}
                          </div>
                        </div>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Active Solution Display */}
              <div
                className="lg:w-3/5 w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                >
                  {/* Image Section - More compact on mobile */}
                  <div className="relative h-40 sm:h-48 lg:h-44">
                    <img
                      src={solutions[activeIndex].image}
                      alt={solutions[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                    {/* Solution Number */}
                    <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-light border border-white/20">
                      <span className="text-xs lg:text-sm">
                        0{activeIndex + 1}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSolution}
                      className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                    <button
                      onClick={nextSolution}
                      className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>

                  {/* Content Section - More compact on mobile */}
                  <div className="p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-2 lg:mb-3">
                      {React.createElement(solutions[activeIndex].icon, {
                        className: "w-4 h-4 lg:w-5 lg:h-5 text-white/80",
                      })}
                      <span className="text-white/60 text-xs lg:text-sm uppercase tracking-wider font-light">
                        {solutions[activeIndex].category}
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-light text-white mb-2 lg:mb-3 leading-tight">
                      {solutions[activeIndex].title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed font-light mb-3 lg:mb-4">
                      {solutions[activeIndex].description}
                    </p>

                    {/* Compact Actions */}
                    <motion.button
                      onClick={() => toggleActions(solutions[activeIndex].id)}
                      className="flex items-center justify-between w-full p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 text-left group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-white/80" />
                        <span className="text-white font-light text-sm">
                          Agentic Actions (
                          {solutions[activeIndex].actions.length})
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedActions[solutions[activeIndex].id]
                            ? 90
                            : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white/60" />
                      </motion.div>
                    </motion.button>

                    {/* Expandable Actions - More compact on mobile */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedActions[solutions[activeIndex].id]
                          ? "auto"
                          : 0,
                        opacity: expandedActions[solutions[activeIndex].id]
                          ? 1
                          : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-3">
                        {solutions[activeIndex].actions.map(
                          (action, actionIndex) => (
                            <motion.div
                              key={actionIndex}
                              className="flex items-start gap-2 lg:gap-3 p-2 lg:p-3 bg-white/5 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: expandedActions[
                                  solutions[activeIndex].id
                                ]
                                  ? 1
                                  : 0,
                                x: expandedActions[solutions[activeIndex].id]
                                  ? 0
                                  : -20,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: expandedActions[
                                  solutions[activeIndex].id
                                ]
                                  ? actionIndex * 0.05
                                  : 0,
                              }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-white/10 rounded-md flex items-center justify-center mt-0.5">
                                <action.icon className="w-3 h-3 text-white/80" />
                              </div>
                              <p className="text-white/80 text-xs leading-relaxed font-light">
                                {action.text}
                              </p>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA - Keep original styling */}
          <motion.div
            className="text-center mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-base sm:text-lg text-white/70 mb-8 font-light"
              whileHover={{ y: -2 }}
            >
              Ready to transform your business with AI solutions?
            </motion.p>
            <motion.button
              className="inline-flex items-center gap-2 bg-white/95 text-black px-7 py-3.5 rounded-xl font-medium transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:bg-white/90 group"
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
              Get Started Today
              <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionsSection;