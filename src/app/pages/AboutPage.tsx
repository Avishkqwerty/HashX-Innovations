import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Shield, Rocket, Heart, Award, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technology and push the boundaries of what\'s possible in enterprise solutions.',
      color: '#F59E0B'
    },
    {
      icon: Shield,
      title: 'Security-Centric',
      description: 'Every solution we build is designed with security at its core, protecting your business and data.',
      color: '#EF4444'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We partner with you to understand and exceed your expectations.',
      color: '#3B82F6'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      color: '#10B981'
    }
  ];

  const team = [
    {
      name: 'Avishka Bandara',
      role: 'Director CEO',
      image: 'https://ui-avatars.com/api/?name=Avishka+Bandara&size=256&background=3B82F6&color=fff&bold=true',
      bio: 'Visionary leader driving innovation and excellence in enterprise technology solutions'
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
              className="inline-block px-4 py-1 bg-[#3B82F6]/10 rounded-full text-[#3B82F6] text-sm font-semibold mb-6"
              variants={fadeInUp}
            >
              ABOUT US
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Innovating the Future
              <br />
              <span className="text-[#3B82F6]">of Enterprise Technology</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              We are HashX Innovations—a global innovative service provider dedicated to transforming 
              businesses through cutting-edge technology solutions, cybersecurity excellence, and cloud innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-[#334155]">
                <p>
                  Founded with a mission to bridge the gap between innovation and implementation, 
                  HashX Innovations has grown into a trusted partner for enterprises worldwide seeking 
                  digital transformation and cybersecurity excellence.
                </p>
                <p>
                  We specialize in building secure, scalable solutions that empower businesses to thrive 
                  in the digital age. From custom software development to comprehensive cloud infrastructure, 
                  our expertise spans the entire technology ecosystem.
                </p>
                <p>
                  With a team of world-class engineers, security experts, and innovators, we deliver 
                  solutions that don't just meet expectations—they exceed them. Our commitment to excellence 
                  and client success has made us a leader in enterprise technology services.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/5 rounded-2xl p-6 border border-[#3B82F6]/20"
                whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
              >
                <div className="text-4xl font-bold text-[#3B82F6] mb-2">500+</div>
                <div className="text-[#334155] font-semibold">Projects Delivered</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-2xl p-6 border border-[#10B981]/20"
                whileHover={{ scale: 1.05, borderColor: '#10B981' }}
              >
                <div className="text-4xl font-bold text-[#10B981] mb-2">200+</div>
                <div className="text-[#334155] font-semibold">Happy Clients</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-2xl p-6 border border-[#F59E0B]/20"
                whileHover={{ scale: 1.05, borderColor: '#F59E0B' }}
              >
                <div className="text-4xl font-bold text-[#F59E0B] mb-2">50+</div>
                <div className="text-[#334155] font-semibold">Expert Team Members</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[#EF4444]/10 to-[#EF4444]/5 rounded-2xl p-6 border border-[#EF4444]/20"
                whileHover={{ scale: 1.05, borderColor: '#EF4444' }}
              >
                <div className="text-4xl font-bold text-[#EF4444] mb-2">24/7</div>
                <div className="text-[#334155] font-semibold">Support Available</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              The principles that guide every decision and action we take
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: value.color
                  }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${value.color}15` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#334155]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-3xl p-10 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-9 h-9" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-lg opacity-95 leading-relaxed">
                To be the global leader in innovative technology solutions, empowering businesses 
                worldwide to achieve digital excellence through secure, scalable, and transformative 
                technologies. We envision a future where every organization can harness the full 
                potential of modern technology to drive growth and innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-10 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="w-9 h-9" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-lg opacity-95 leading-relaxed">
                To deliver world-class software development, cybersecurity, and cloud solutions that 
                drive measurable business value. We are committed to building long-term partnerships 
                with our clients, fostering innovation, and maintaining the highest standards of 
                security and excellence in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-[#334155]">
              The innovators and experts driving HashX forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(97, 91, 234, 0.15)'
                }}
              >
                <motion.div
                  className="relative overflow-hidden aspect-square"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#615BEA] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#334155]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFF] to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#615BEA] to-[#7A71F0] rounded-3xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-16 h-16" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how HashX Innovations can help you achieve your technology goals 
              and drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-[#615BEA] hover:bg-gray-100 text-lg px-8 py-6">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/careers">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    Join Our Team
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
