import { motion } from 'motion/react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function PartnerEcosystem() {
  const firstRowPartners = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'VMware', logo: 'https://cdn.worldvectorlogo.com/logos/vmware-1.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
    { name: 'Palo Alto Networks', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wjsl4BMgWMITv6_NrJbgA0HKUrFwcNdWPQ&s' },
  ];

  const secondRowPartners = [
    { name: 'Sophos', logo: 'https://logos-world.net/wp-content/uploads/2024/07/Sophos-Logo.png' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png' },
    { name: 'Oracle Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'Zoho', logo: 'https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png' },
    { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg' },
  ];

  const renderPartner = (partner: { name: string; logo: string }, index: number) => (
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
  );

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

        {/* First Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {firstRowPartners.map((p, i) => renderPartner(p, i))}
        </div>

        {/* Second Row (Centered) */}
        <div className="flex flex-wrap justify-center gap-6">
          {secondRowPartners.map((p, i) => renderPartner(p, i))}
        </div>

      </div>
    </section>
  );
}
