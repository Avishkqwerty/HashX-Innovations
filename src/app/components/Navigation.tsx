import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Logo from '@/assets/logo.png';
import { slideDown } from '@/lib/animations';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      category: 'Build',
      items: [
        'Custom Software Development',
        'SaaS Solutions',
        'Mobile & Web Applications',
        'API Development'
      ]
    },
    {
      category: 'Secure',
      items: [
        'Cybersecurity Assessment',
        'Compliance & Governance',
        'Managed SOC Services',
        'Penetration Testing'
      ]
    },
    {
      category: 'Scale',
      items: [
        'Cloud Migration',
        'Infrastructure Management',
        'DevOps & Automation',
        'Hybrid Cloud Solutions'
      ]
    },
    {
      category: 'Transform',
      items: [
        'Digital Transformation',
        'AI & Machine Learning',
        'Business Intelligence',
        'Process Automation'
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <motion.img
              src={Logo}
              alt="HashX Innovations Logo"
              className="h-14 lg:h-16 w-auto object-contain cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.a
              href="#about"
              className="text-[#334155] hover:text-[#615BEA] transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <motion.button
                className="flex items-center gap-1 text-[#334155] hover:text-[#615BEA] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Services
                <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-8"
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {services.map((pillar, idx) => (
                        <motion.div
                          key={pillar.category}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <h4 className="font-semibold text-[#615BEA] mb-3">
                            {pillar.category}
                          </h4>
                          <ul className="space-y-2">
                            {pillar.items.map((item) => (
                              <motion.li
                                key={item}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <a href="#" className="text-sm text-[#334155] hover:text-[#615BEA] transition-colors">
                                  {item}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#industries"
              className="text-[#334155] hover:text-[#615BEA] transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Industries
            </motion.a>
            <motion.a
              href="#case-studies"
              className="text-[#334155] hover:text-[#615BEA] transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Case Studies
            </motion.a>
            <motion.a
              href="#careers"
              className="text-[#334155] hover:text-[#615BEA] transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Careers
            </motion.a>
            <motion.a
              href="#contact"
              className="text-[#334155] hover:text-[#615BEA] transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white">
                Get a Free Tech Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#334155]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <motion.a
                  href="#about"
                  className="text-[#334155] hover:text-[#615BEA]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#industries"
                  className="text-[#334155] hover:text-[#615BEA]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Industries
                </motion.a>
                <motion.a
                  href="#case-studies"
                  className="text-[#334155] hover:text-[#615BEA]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Case Studies
                </motion.a>
                <motion.a
                  href="#careers"
                  className="text-[#334155] hover:text-[#615BEA]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Careers
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-[#334155] hover:text-[#615BEA]"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white w-full">
                    Get a Free Tech Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
