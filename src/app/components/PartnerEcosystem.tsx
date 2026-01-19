import { motion } from 'motion/react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function PartnerEcosystem() {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    },
    {
      name: 'VMware',
      logo: 'https://cdn.worldvectorlogo.com/logos/vmware-1.svg'
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg'
    },
    {
      name: 'Palo Alto Networks',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wjsl4BMgWMITv6_NrJbgA0HKUrFwcNdWPQ&s'
    },
    {
      name: 'OREL Cloud',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_Fta4J12ZRSb7LtrGuhMskjeLXyPNJO8jQ&s'
    },
    {
      name: 'Sophos',
      logo: 'https://logos-world.net/wp-content/uploads/2024/07/Sophos-Logo.png'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png'
    },
    {
      name: 'Zoho',
      logo: 'https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png'
    }
    {
      name: 'Fortinet',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-4"
            variants={fadeInUp}
          >
            TECHNOLOGY PARTNERS
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            variants={fadeInUp}
          >
            Trusted Ecosystem
          </motion.h2>

          <motion.p
            className="text-xl text-[#334155]"
            variants={fadeInUp}
          >
            Certified expertise across leading technology platforms
          </motion.p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(97, 91, 234, 0.15)',
                borderColor: 'rgba(97, 91, 234, 0.3)'
              }}
            >
              <motion.div
                className="w-28 h-20 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              <span className="text-sm text-[#334155] text-center font-semibold">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 rounded-full border border-[#10B981]/20"
            whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.5)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-3 h-3 bg-[#10B981] rounded-full shadow-lg shadow-[#10B981]/50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#10B981] font-semibold">
              All partnerships active and certified as of 2026
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
