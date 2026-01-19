import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, Target, Heart } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';

export function CareersPage() {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technology and push boundaries'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe the best solutions come from diverse teams working together'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'We measure success by the value we create for our clients'
    },
    {
      icon: Heart,
      title: 'People Focused',
      description: 'We invest in our team\'s growth, wellbeing, and happiness'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFF] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block px-4 py-1 bg-[#615BEA]/10 rounded-full text-[#615BEA] text-sm font-semibold mb-6"
              variants={fadeInUp}
            >
              JOIN OUR TEAM
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Build the Future
              <br />
              <span className="text-[#615BEA]">With Us</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              We're not just building software—we're shaping the future of enterprise technology.
              Join a team of passionate innovators, problem solvers, and dreamers.
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={fadeInUp}
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white text-lg px-8 py-6">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-[#334155]">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(97, 91, 234, 0.15)'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#615BEA]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#615BEA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[#334155] text-lg">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
