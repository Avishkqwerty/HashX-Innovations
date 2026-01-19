import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, hoverButtonScale } from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1227] via-[#1a1f3a] to-[#0D1227] py-24 lg:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(97, 91, 234, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(122, 113, 240, 0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#615BEA] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 600,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 600],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            variants={fadeInUp}
          >
            Engineering Trusted Digital Futures
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={fadeInUp}
          >
            HashX Innovations delivers secure, scalable, and intelligent technology solutions — from custom software to sovereign cloud infrastructure.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div {...hoverButtonScale}>
              <Button 
                size="lg"
                className="bg-[#615BEA] hover:bg-[#7A71F0] text-white px-8 py-6 text-lg shadow-lg shadow-[#615BEA]/30 w-full sm:w-auto"
              >
                Start Your Project
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div {...hoverButtonScale}>
              <Button 
                size="lg"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg shadow-xl w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 45C840 40 960 30 1080 25C1200 20 1320 20 1380 20L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="#FAFAFF"/>
        </svg>
      </div>
    </section>
  );
}