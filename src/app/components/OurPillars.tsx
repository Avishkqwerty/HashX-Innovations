import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Shield, Cloud, Zap, ChevronRight } from 'lucide-react';

export function OurPillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      icon: Code,
      title: 'Build',
      subtitle: 'Custom Software & SaaS',
      color: '#615BEA',
      services: [
        'Enterprise Software Development',
        'SaaS Platform Engineering',
        'Mobile & Web Applications'
      ]
    },
    {
      icon: Shield,
      title: 'Secure',
      subtitle: 'End-to-End Cyber Defense',
      color: '#10B981',
      services: [
        'Security Operations Center (SOC)',
        'Compliance & Risk Management',
        'Penetration Testing & Audits'
      ]
    },
    {
      icon: Cloud,
      title: 'Scale',
      subtitle: 'Cloud & Hybrid Infrastructure',
      color: '#7A71F0',
      services: [
        'Zero-Downtime Cloud Migration',
        'Infrastructure as Code (IaC)',
        'Multi-Cloud Management'
      ]
    },
    {
      icon: Zap,
      title: 'Transform',
      subtitle: 'AI, Automation & Digital Strategy',
      color: '#F59E0B',
      services: [
        'AI-Powered Business Intelligence',
        'Legacy System Modernization',
        'Digital Process Automation'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-4">
            OUR CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Four Core Pillars of Excellence
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Comprehensive technology solutions that drive digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 cursor-pointer border-2 border-transparent hover:border-[#615BEA] transition-all shadow-md"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${pillar.color}20` }}
              >
                <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ color: pillar.color, fontFamily: 'Manrope, sans-serif' }}>
                {pillar.title}
              </h3>
              <p className="text-[#334155] mb-4">{pillar.subtitle}</p>

              {/* Expanded Services */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {pillar.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#334155]">
                        <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: pillar.color }} />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}