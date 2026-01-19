import { motion } from 'motion/react';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';

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
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#615BEA]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#7A71F0]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <motion.div
            className="inline-block w-20 h-1 bg-gradient-to-r from-[#615BEA] via-[#7A71F0] to-[#615BEA] rounded-full"
            animate={{ width: ['80px', '120px', '80px'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight"
          style={{ fontFamily: 'Manrope, sans-serif' }}
          variants={fadeInUp}
        >
          At HashX Innovations, we don't just write code — we architect resilience, intelligence, and growth.
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={fadeInUp}
        >
          Our mission is to be the silent engine behind your digital ambition.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '50+', label: 'Countries Served' },
            { value: '98%', label: 'Client Retention' },
            { value: '15+', label: 'Years Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              variants={scaleIn}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(97, 91, 234, 0.5)',
                boxShadow: '0 0 20px rgba(97, 91, 234, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-[#615BEA] mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                whileHover={{ scale: 1.2, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 border-2 border-[#615BEA]/30 rounded-full"
        animate={{
          rotate: 360,
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 border-2 border-[#7A71F0]/20 rounded-full"
        animate={{
          rotate: -360,
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </section>
  );
}