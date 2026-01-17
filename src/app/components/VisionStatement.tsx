export function VisionStatement() {
  return (
    <section className="relative py-36 bg-[#0D1227] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(97, 91, 234, 0.1) 2px,
              rgba(97, 91, 234, 0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(97, 91, 234, 0.1) 2px,
              rgba(97, 91, 234, 0.1) 4px
            )`
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#615BEA]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7A71F0]/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block w-20 h-1 bg-gradient-to-r from-[#615BEA] via-[#7A71F0] to-[#615BEA] rounded-full animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
          At HashX Innovations, we don't just write code — we architect resilience, intelligence, and growth.
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our mission is to be the silent engine behind your digital ambition.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-[#615BEA] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>500+</div>
            <div className="text-gray-300 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-[#615BEA] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>50+</div>
            <div className="text-gray-300 font-medium">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-[#615BEA] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>98%</div>
            <div className="text-gray-300 font-medium">Client Retention</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl font-bold text-[#615BEA] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>15+</div>
            <div className="text-gray-300 font-medium">Years Excellence</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-[#615BEA]/30 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-[#7A71F0]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}