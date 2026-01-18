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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/VMware_logo.svg'
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg'
    },
    {
      name: 'Palo Alto Networks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Palo_Alto_Networks_logo.svg'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-4">
            TECHNOLOGY PARTNERS
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Trusted Ecosystem
          </h2>
          <p className="text-xl text-[#334155] mb-8">
            Certified expertise across leading technology platforms
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="w-28 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <span className="text-sm text-[#334155] text-center font-semibold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Status Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 rounded-full border border-[#10B981]/20">
            <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse shadow-lg shadow-[#10B981]/50" />
            <span className="text-[#10B981] font-semibold">
              All partnerships active and certified as of 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
