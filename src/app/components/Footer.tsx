import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#615BEA] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">#</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                HashX
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Engineering trusted digital futures through secure, scalable, and intelligent technology solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Tech Avenue, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@hashx.lk</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#615BEA] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 HashX Innovations Pvt. Ltd. | Colombo, Sri Lanka | Global Technology Partner
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#615BEA] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#615BEA] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#615BEA] flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Registered in Sri Lanka | Company Registration No: PV 12345 | ISO 27001:2013 Certified
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badge Strip */}
      <div className="bg-[#0a0d1a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full" />
              <span>PDPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full" />
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}