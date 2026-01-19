import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
};

const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28 }
  }
};

export function Footer() {
  const footerLinks = {
    'HashX': [
      { label: 'About Us', href: '#about' },
      { label: 'Leadership Team', href: '#leadership' },
      { label: 'Careers', href: '#careers' },
      { label: 'News & Press', href: '#news' }
    ],
    'Services': [
      { label: 'Software Development', href: '#services' },
      { label: 'Cloud Infrastructure', href: '#services' },
      { label: 'Cybersecurity', href: '#services' },
      { label: 'Digital Transformation', href: '#services' },
      { label: 'All Services', href: '#services' }
    ],
    'Support': [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Service Level Agreement', href: '#sla' },
      { label: 'System Status', href: '#status' },
      { label: 'Documentation', href: '#docs' }
    ],
    'Legal & Compliance': [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'ISO 27001 Certification', href: '#iso' },
      { label: 'Compliance Docs', href: '#compliance' }
    ]
  };

  return (
    <footer className="bg-[#0D1227] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/src/assets/logo.png" alt="HashX Logo" className="h-10" />
            </motion.div>
            <p className="text-gray-400 mb-6 text-sm">
              Engineering trusted digital futures through secure, scalable, and intelligent technology solutions.
            </p>
            
            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-start gap-3 text-sm text-gray-400" variants={listItem} whileHover={{ x: 4 }}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Tech Avenue, Colombo 03, Sri Lanka</span>
              </motion.div>
              <motion.div className="flex items-center gap-3 text-sm text-gray-400" variants={listItem} whileHover={{ x: 4 }}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+94 11 234 5678</span>
              </motion.div>
              <motion.div className="flex items-center gap-3 text-sm text-gray-400" variants={listItem} whileHover={{ x: 4 }}>
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@hashx.lk</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {category}
              </h4>
              <motion.ul
                className="space-y-3"
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {links.map((link) => (
                  <motion.li key={link.label} variants={listItem} whileHover={{ x: 4 }}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#615BEA] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-sm text-gray-400">
              © 2026 HashX Innovations Pvt. Ltd. | Colombo, Sri Lanka | Global Technology Partner
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#615BEA] flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs text-gray-500">
              Registered in Sri Lanka | Company Registration No: PV 12345 | ISO 27001:2013 Certified
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Badge Strip */}
      <motion.div
        className="bg-[#0a0d1a] py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            {[
              { label: 'ISO 27001 Certified', color: '#10B981' },
              { label: 'PDPA Compliant', color: '#10B981' },
              { label: 'SOC 2 Type II', color: '#10B981' },
              { label: 'GDPR Ready', color: '#10B981' }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: badge.color }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}