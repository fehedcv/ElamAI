import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';


const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'AI Agent Platform', href: '/platform/ai-agent-platform' },
      { name: 'Agentic Workflows', href: '/platform/agentic-workflows' },
      { name: 'Integrations', href: '/platform/integrations' },
      { name: 'Security', href: '/platform/security-deployment' }
    ],
    solutions: [
      { name: 'Enterprise', href: '/solutions/enterprise' },
      { name: 'Small Business', href: '/solutions/small-business' },
      { name: 'Developer Tools', href: '/solutions/developer-tools' },
      { name: 'Custom Solutions', href: '/solutions/custom-solutions' }
    ],
    resources: [
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'API Reference', href: '/resources/api-reference' },
      { name: 'Tutorials', href: '/resources/tutorials' },
      { name: 'Community', href: '/resources/community' }
    ],
    company: [
      { name: 'About Us', href: '/about/company' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Contact', href: '/about/contact' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/elam-ai', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/elamai.in/', name: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/4 rounded-full blur-3xl pointer-events-none"
          style={{ left: "10%", bottom: "-20%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/" className="inline-block mb-4">
                  <motion.img
                    src={Logo}
                    alt="Elam AI"
                    className="h-8 sm:h-10 w-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light max-w-xs">
                  Build an AI workforce that automates tasks efficiently and
                  transforms your business operations.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <motion.div
                  className="flex items-center gap-3 text-white/60 text-sm font-light"
                  whileHover={{ x: 2, color: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>info@elamai.in</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-white/60 text-sm font-light"
                  whileHover={{ x: 2, color: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Calicut</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections - Compact Grid */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 opacity-90">
                Platform
              </h4>
              <ul className="space-y-2">
                {footerLinks.platform.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 opacity-90">
                Solutions
              </h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 opacity-90">
                Resources
              </h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4 opacity-90">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div whileHover={{ x: 4 }}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200 block"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200 block"
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section - Compact */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="text-white font-light text-lg sm:text-xl mb-2">
                  Ready to get started?
                </h4>
                <p className="text-white/60 text-sm font-light">
                  Transform your business with AI agents today.
                </p>
              </div>
              <motion.div
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
                <Link
                  to="/about/contact"
                  className="inline-flex items-center gap-2 bg-white/95 text-black px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:bg-white/90 group flex-shrink-0"
                >
                  Speak to us
                  <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - Minimal */}
        <motion.div
          className="border-t border-white/10 bg-black/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <motion.p
                className="text-white/50 font-light text-center sm:text-left"
                whileHover={{ color: "rgba(255,255,255,0.7)" }}
              >
                © 2025 Elam AI. All rights reserved.
              </motion.p>
              <div className="flex items-center gap-6">
                <motion.a
                  href="#"
                  className="text-white/50 hover:text-white/70 font-light transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Terms
                </motion.a>
                <motion.a
                  href="#"
                  className="text-white/50 hover:text-white/70 font-light transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Privacy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-white/50 hover:text-white/70 font-light transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  Cookies
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;