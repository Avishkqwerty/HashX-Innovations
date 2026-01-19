import { motion } from 'motion/react';
import { Shield, Award, Users, Zap } from 'lucide-react';

export function TrustStrip() {
  const badges = [
    { icon: Shield, text: 'ISO 27001 Certified' },
    { icon: Award, text: 'Microsoft Solutions Partner' },
    { icon: Award, text: 'AWS Advanced Tier' },
    { icon: Award, text: 'Google Cloud Ready' }
  ];

  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '200+', label: 'Global Clients' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Expert Support' }
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 pb-12 border-b border-gray-100">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#615BEA]/5 to-transparent rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(97, 91, 234, 0.1)' }}
            >
              <badge.icon className="w-5 h-5 text-[#10B981]" />
              <span className="text-sm font-semibold text-[#334155]">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-[#615BEA] mb-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                whileHover={{ scale: 1.1, color: '#7A71F0' }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-sm md:text-base text-[#334155] font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}