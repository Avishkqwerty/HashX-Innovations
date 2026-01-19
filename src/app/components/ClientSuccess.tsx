import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverButtonScale } from '@/lib/animations';

export function ClientSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-block px-4 py-1 bg-[#3B82F6]/10 rounded-full text-[#3B82F6] text-sm font-semibold mb-4"
            variants={fadeInUp}
          >
            SUCCESS STORIES
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            variants={fadeInUp}
          >
            Client Impact
          </motion.h2>
          <motion.p
            className="text-xl text-[#334155]"
            variants={fadeInUp}
          >
            Measurable results that matter
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: '0 30px 60px rgba(59, 130, 246, 0.4)' }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <motion.div
              className="relative h-[400px] lg:h-auto overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODU4ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Client Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/50 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="p-8 lg:p-12 text-white">
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wider opacity-90">Banking & Finance</span>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Core Banking Platform Modernization
              </motion.h3>

              <motion.p
                className="text-lg mb-8 opacity-95"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                HashX modernized the core banking platform for a top-tier Sri Lankan financial institution — achieving remarkable improvements in performance, security, and compliance.
              </motion.p>

              {/* Results */}
              <motion.div
                className="grid grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, staggerChildren: 0.1 }}
              >
                <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    <span className="text-3xl font-bold">50%</span>
                  </div>
                  <p className="text-sm opacity-90">Faster Transaction Processing</p>
                </motion.div>
                <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#10B981]" />
                    <span className="text-3xl font-bold">99.99%</span>
                  </div>
                  <p className="text-sm opacity-90">System Uptime Achieved</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  ISO 27001 Compliant
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  PDPA Certified
                </span>
              </motion.div>

              <motion.div
                {...hoverButtonScale}
              >
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#3B82F6]"
                >
                  Read Full Case Study
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>

              {/* Client Logo Placeholder */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm opacity-75 mb-2">Trusted by</p>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl font-bold">B</span>
                  </motion.div>
                  <span className="font-semibold">Leading Financial Institution</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}