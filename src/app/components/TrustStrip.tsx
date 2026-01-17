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
            <div key={index} className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#615BEA]/5 to-transparent rounded-lg">
              <badge.icon className="w-5 h-5 text-[#10B981]" />
              <span className="text-sm font-semibold text-[#334155]">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#615BEA] mb-2 group-hover:scale-110 transition-transform" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-[#334155] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}