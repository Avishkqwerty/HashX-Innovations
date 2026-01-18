import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Logo from '@/assets/logo.png';

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
            <img
              src={Logo}
              alt="HashX Innovations Logo"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-[#334155] hover:text-[#615BEA] transition-colors">
              About
            </a>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#334155] hover:text-[#615BEA] transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-8">
                  <div className="grid grid-cols-4 gap-6">
                    {services.map((pillar) => (
                      <div key={pillar.category}>
                        <h4 className="font-semibold text-[#615BEA] mb-3">
                          {pillar.category}
                        </h4>
                        <ul className="space-y-2">
                          {pillar.items.map((item) => (
                            <li key={item}>
                              <a href="#" className="text-sm text-[#334155] hover:text-[#615BEA] transition-colors">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#industries" className="text-[#334155] hover:text-[#615BEA] transition-colors">
              Industries
            </a>
            <a href="#case-studies" className="text-[#334155] hover:text-[#615BEA] transition-colors">
              Case Studies
            </a>
            <a href="#careers" className="text-[#334155] hover:text-[#615BEA] transition-colors">
              Careers
            </a>
            <a href="#contact" className="text-[#334155] hover:text-[#615BEA] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white">
              Get a Free Tech Consultation
            </Button>
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
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-[#334155] hover:text-[#615BEA]">About</a>
              <a href="#industries" className="text-[#334155] hover:text-[#615BEA]">Industries</a>
              <a href="#case-studies" className="text-[#334155] hover:text-[#615BEA]">Case Studies</a>
              <a href="#careers" className="text-[#334155] hover:text-[#615BEA]">Careers</a>
              <a href="#contact" className="text-[#334155] hover:text-[#615BEA]">Contact</a>
              <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white w-full">
                Get a Free Tech Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
