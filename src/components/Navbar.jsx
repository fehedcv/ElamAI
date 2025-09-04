import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Workflow,
  Bot,
  Database,
  Brain,
  Shield,
  Plug,
  FileText,
  Users,
  Building,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Platform',
      sectionId: 'platform',
      items: [
        { name: 'Agentic Workflows', icon: Workflow, path: '/platform/agentic-workflows' },
        { name: 'AI Agent Platform', icon: Bot, path: '/platform/ai-agent-platform' },
        { name: 'Integrations', icon: Plug, path: '/platform/integrations' },
        { name: 'Database, Memory & RAG', icon: Database, path: '/platform/database-memory-rag' },
        { name: 'Security & Deployment', icon: Shield, path: '/platform/security-deployment' }
      ]
    },
    {
      name: 'AI Agents',
      sectionId: 'ai-agents',
      items: [
        { name: 'Customer Support Agent', icon: MessageCircle, path: '/agents/customer-support' },
        { name: 'Sales Agent', icon: Users, path: '/agents/sales' },
        { name: 'Marketing Agent', icon: Zap, path: '/agents/marketing' },
        { name: 'Data Analysis Agent', icon: FileText, path: '/agents/data-analysis' }
      ]
    },
    {
      name: 'Solutions',
      sectionId: 'solutions',
      items: [
        { name: 'Enterprise', icon: Building, path: '/solutions/enterprise' },
        { name: 'Small Business', icon: Users, path: '/solutions/small-business' },
        { name: 'Developer Tools', icon: FileText, path: '/solutions/developer-tools' },
        { name: 'Custom Solutions', icon: Zap, path: '/solutions/custom-solutions' }
      ]
    },
    {
      name: 'Resources',
      sectionId: 'resources',
      items: [
        { name: 'Documentation', icon: BookOpen, path: '/resources/documentation' },
        { name: 'API Reference', icon: FileText, path: '/resources/api-reference' },
        { name: 'Tutorials', icon: BookOpen, path: '/resources/tutorials' },
        { name: 'Community', icon: MessageCircle, path: '/resources/community' }
      ]
    },
    {
      name: 'About',
      sectionId: 'about',
      items: [
        { name: 'Company', icon: Building, path: '/about/company' },
        // { name: 'Team', icon: Users, path: '/about/team' },
        { name: 'Careers', icon: Zap, path: '/about/careers' },
        { name: 'Contact', icon: MessageCircle, path: '/about/contact' }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMainNavClick = (item) => {
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/"
                className="flex items-center pl-4" // Added pl-4 for left padding
                onClick={() => {
                  setActiveDropdown(null);
                  setIsMobileMenuOpen(false);
                  // Add any additional logic if needed
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={Logo}
                  alt="Elam AI Logo"
                  className="h-8 w-auto"
                  style={{ maxHeight: 32 }}
                />
              </Link>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    onClick={() => {
                      handleDropdownToggle(index);
                      handleMainNavClick(item);
                    }}
                    onMouseEnter={() => setActiveDropdown(index)}
                    className="flex items-center px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 group font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium tracking-wide">
                      {item.name}
                    </span>
                    <motion.div
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
                        onMouseLeave={() => setActiveDropdown(null)}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2">
                          {item.items.map((subItem, subIndex) => {
                            const IconComponent = subItem.icon;
                            return (
                              <motion.div key={subItem.name}>
                                <Link
                                  to={subItem.path}
                                  className="w-full flex items-center px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group font-light"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 mr-3 group-hover:bg-white/20 transition-colors duration-200">
                                    <IconComponent className="h-4 w-4" />
                                  </div>
                                  <span className="font-light leading-relaxed">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
            <motion.div
  className="hidden md:flex items-center"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  <Link to="/about/contact">
    <motion.button
      className="inline-flex items-center space-x-2 bg-white/95 text-black px-5 py-2 rounded-xl font-medium hover:bg-white/90 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>Speak to us</span>
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  </Link>
</motion.div>
            </motion.div>

            <div className="md:hidden">
              <motion.button
                onClick={handleMobileMenuToggle}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleMobileMenuToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden font-sans"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-20">
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Link
                  to="/"
                  className="flex items-center text-white font-light text-xl tracking-tight pl-4" // Added pl-4 for left padding
                  onClick={() => {
                    setActiveDropdown(null);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={Logo}
                    alt="Elam AI Logo"
                    className="h-8 w-auto"
                    style={{ maxHeight: 32 }}
                  />
                </Link>
                <motion.button
                  onClick={handleMobileMenuToggle}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {/* Home Button for Mobile */}
                <Link
                  to="/"
                  className="w-full flex items-center px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium tracking-wide">Home</span>
                </Link>
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.button
                      onClick={() => {
                        handleDropdownToggle(index);
                        // Don't redirect on mobile, only toggle dropdown
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium tracking-wide">
                        {item.name}
                      </span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 mt-2">
                            {item.items.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <motion.div key={subItem.name}>
                                  <Link
                                    to={subItem.path}
                                    className="w-full flex items-center px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-light"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsMobileMenuOpen(false);
                                    }}
                                  >
                                    <IconComponent className="h-4 w-4 mr-3 opacity-60" />
                                    <span className="font-light leading-relaxed">
                                      {subItem.name}
                                    </span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.button
                  className="inline-flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>Speak to us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="text-white/70 text-base leading-relaxed font-light">
                  With Elam AI, build an AI workforce that automates tasks
                  efficiently. Deploy intelligent agents to streamline
                  operations and improve performance across your business today!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
