import { Button } from '@/app/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';

export function ClientSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Client Impact
          </h2>
          <p className="text-xl text-[#334155]">Measurable results that matter</p>
        </div>

        <div className="bg-gradient-to-br from-[#615BEA] to-[#7A71F0] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODU4ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Client Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#615BEA]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wider opacity-90">Banking & Finance</span>
              </div>

              <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Core Banking Platform Modernization
              </h3>

              <p className="text-lg mb-8 opacity-95">
                HashX modernized the core banking platform for a top-tier Sri Lankan financial institution — achieving remarkable improvements in performance, security, and compliance.
              </p>

              {/* Results */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    <span className="text-3xl font-bold">50%</span>
                  </div>
                  <p className="text-sm opacity-90">Faster Transaction Processing</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#10B981]" />
                    <span className="text-3xl font-bold">99.99%</span>
                  </div>
                  <p className="text-sm opacity-90">System Uptime Achieved</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  ISO 27001 Compliant
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  PDPA Certified
                </span>
              </div>

              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#615BEA]"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              {/* Client Logo Placeholder */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-75 mb-2">Trusted by</p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">B</span>
                  </div>
                  <span className="font-semibold">Leading Financial Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}