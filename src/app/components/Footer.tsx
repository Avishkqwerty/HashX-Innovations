import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from '@/assets/logo.png';

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
    HashX: [
      { label: 'About Us', href: '/about', isRoute: true },
      { label: 'Leadership Team', href: '/about#team', isRoute: true },
      { label: 'Careers', href: '/careers', isRoute: true },
      { label: 'News & Press', href: '#news' }
    ],
    Services: [
      { label: 'Software Development', href: '#services' },
      { label: 'Cloud Infrastructure', href: '#services' },
      { label: 'Cybersecurity', href: '#services' },
      { label: 'Digital Transformation', href: '#services' },
      { label: 'All Services', href: '#services' }
    ],
    Support: [
      { label: 'Contact Us', href: '/contact', isRoute: true },
      { label: 'Service Level Agreement', href: '#sla' },
      { label: 'System Status', href: '#status' },
      { label: 'Documentation', href: '#docs' }
    ],
    'Legal & Compliance': [
      { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { label: 'Terms of Service', href: '/terms-of-service', isRoute: true },
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
              <img src={Logo} alt="HashX Logo" className="h-10" />
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
              <motion.div className="flex items-start gap-3 text-sm text-gray-400" variants={listItem}>
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Tech Avenue, Colombo 03, Sri Lanka</span>
              </motion.div>

              <motion.div className="flex items-center gap-3 text-sm text-gray-400" variants={listItem}>
                <Phone className="w-4 h-4" />
                <span>+94 11 234 5678</span>
              </motion.div>

              <motion.div className="flex items-center gap-3 text-sm text-gray-400" variants={listItem}>
                <Mail className="w-4 h-4" />
                <span>contact@hashx.lk</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={fadeInUp}>
              <h4 className="font-semibold mb-4">
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
                  <motion.li key={link.label} variants={listItem}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 HashX Innovations Pvt. Ltd. | Colombo, Sri Lanka
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#3B82F6] flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Registered in Sri Lanka | ISO 27001:2013 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
