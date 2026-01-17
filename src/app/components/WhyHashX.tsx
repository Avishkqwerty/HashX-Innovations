import { Lock, Globe, TrendingUp, Handshake } from 'lucide-react';

export function WhyHashX() {
  const differentiators = [
    {
      icon: Lock,
      title: 'Security by Design',
      description: 'Every solution is architected with security baked into every layer — not bolted on as an afterthought.',
      color: '#10B981'
    },
    {
      icon: Globe,
      title: 'Local Expertise, Global Standards',
      description: 'Sri Lankan roots with international certifications and compliance frameworks.',
      color: '#615BEA'
    },
    {
      icon: TrendingUp,
      title: 'Outcome-Focused Delivery',
      description: 'Our success is measured by your KPIs — real business impact, not just deliverables.',
      color: '#7A71F0'
    },
    {
      icon: Handshake,
      title: 'True Partnership',
      description: 'We\'re not just a vendor. We\'re your trusted technology partner, invested in your long-term success.',
      color: '#F59E0B'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-4">
            OUR ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            The HashX Difference
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            What sets us apart in delivering exceptional technology solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#615BEA]/20" />

          {/* Items */}
          <div className="space-y-12">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:w-1/2">
                  <div className={`bg-white rounded-xl p-8 shadow-md ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : ''
                    }`}>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#334155] text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#615BEA] border-4 border-white shadow-lg z-10" />

                {/* Spacer */}
                <div className="hidden lg:block flex-1 lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}