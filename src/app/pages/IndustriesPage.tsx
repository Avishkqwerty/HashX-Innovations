import { motion } from 'motion/react';
import { Building2, Heart, ShoppingCart, BookOpen, Factory, Users, Building, Lock, TrendingUp, CheckCircle, Zap, Target } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function IndustriesPage() {
  const industries = [
    {
      name: 'Finance & Banking',
      icon: Building2,
      color: '#615BEA',
      lightColor: '#615BEA15',
      description: 'Transform financial operations with secure, scalable solutions that streamline payments, enhance customer experiences, and ensure compliance. Our platforms help banks and fintech companies leverage AI and cloud technology to drive growth, reduce risk, and stay ahead in a competitive landscape.',
      benefits: ['Secure Transactions', 'Regulatory Compliance', 'Real-time Analytics']
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: '#10B981',
      lightColor: '#10B98115',
      description: 'Revolutionize patient care with HIPAA-compliant digital health solutions, EHR integrations, and AI-powered diagnostics. We help healthcare providers improve operational efficiency, enhance patient engagement, and deliver better health outcomes through innovative technology.',
      benefits: ['HIPAA Compliant', 'Patient Engagement', 'Clinical Integration']
    },
    {
      name: 'Retail & E-Commerce',
      icon: ShoppingCart,
      color: '#F59E0B',
      lightColor: '#F59E0B15',
      description: 'Elevate retail experiences with AI-powered personalization, omnichannel strategies, and data-driven insights. From inventory management to predictive analytics, our solutions empower retailers to increase conversions, customer loyalty, and maximize revenue across all channels.',
      benefits: ['Personalization', 'Omnichannel Strategy', 'Conversion Optimization']
    },
    {
      name: 'Education & E-Learning',
      icon: BookOpen,
      color: '#8B5CF6',
      lightColor: '#8B5CF615',
      description: 'Modernize education with immersive learning platforms, virtual classrooms, and intelligent assessment systems. We help educational institutions adapt to digital transformation, improve student outcomes, and create engaging learning experiences that prepare students for tomorrow\'s challenges.',
      benefits: ['Virtual Learning', 'Student Analytics', 'Engagement Tools']
    },
    {
      name: 'Manufacturing & Industry 4.0',
      icon: Factory,
      color: '#EF4444',
      lightColor: '#EF444415',
      description: 'Optimize operations with IoT sensors, predictive maintenance, and supply chain visibility. Our Industry 4.0 solutions help manufacturers boost productivity, reduce downtime, cut costs, and make data-driven decisions that drive continuous improvement and innovation.',
      benefits: ['IoT Integration', 'Predictive Analytics', 'Supply Chain Visibility']
    },
    {
      name: 'Hospitality & Travel',
      icon: Users,
      color: '#EC4899',
      lightColor: '#EC489915',
      description: 'Create unforgettable guest experiences with AI-powered booking systems, property management solutions, and personalized service platforms. We help hospitality businesses streamline operations, increase occupancy rates, and build lasting customer relationships.',
      benefits: ['Booking Systems', 'Guest Experience', 'Revenue Management']
    },
    {
      name: 'Real Estate & Property',
      icon: Building,
      color: '#06B6D4',
      lightColor: '#06B6D415',
      description: 'Transform real estate with virtual tours, AI-powered property matching, and comprehensive property management software. Our solutions accelerate transactions, improve client satisfaction, and help real estate firms stay competitive in a digital-first market.',
      benefits: ['Virtual Tours', 'Property Matching', 'Digital Transactions']
    },
    {
      name: 'Cybersecurity & Data Protection',
      icon: Lock,
      color: '#14B8A6',
      lightColor: '#14B8A615',
      description: 'Protect your business with comprehensive cybersecurity frameworks, threat detection, and data privacy solutions. We help organizations build resilient security postures, detect threats in real-time, and ensure compliance with international security standards.',
      benefits: ['Threat Detection', 'Data Privacy', 'Compliance Management']
    }
  ];

  const whyChooseUs = [
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge and proven experience across diverse sectors',
      icon: Target
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored technology strategies designed for your unique business challenges',
      icon: Zap
    },
    {
      title: 'Proven Results',
      description: 'Track record of delivering measurable impact and ROI across industries',
      icon: TrendingUp
    },
    {
      title: 'Trusted Partnership',
      description: 'Long-term commitment to your success with ongoing support and innovation',
      icon: CheckCircle
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
              INDUSTRIES WE SERVE
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Transforming Industries
              <br />
              <span className="text-[#615BEA]">Through Innovation</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              From finance to healthcare, retail to manufacturing—we partner with leading 
              organizations across sectors to drive digital transformation, unlock new opportunities, 
              and achieve sustainable growth through cutting-edge technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Industries We Partner With
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Specialized expertise and innovative solutions tailored to each industry's unique challenges
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.02, borderColor: industry.color }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: industry.lightColor }}
                      >
                        <Icon className="w-8 h-8" style={{ color: industry.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F172A]">
                        {industry.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#334155] mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 border-t border-gray-200 pt-6">
                      <p className="text-sm font-semibold text-[#0F172A]">KEY SOLUTIONS:</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.benefits.map((benefit, idx) => (
                          <motion.span
                            key={idx}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-50 border border-gray-200"
                            style={{ borderColor: industry.color + '40', color: industry.color }}
                            whileHover={{ scale: 1.1, backgroundColor: industry.lightColor }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: industry.color }}
                            />
                            {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${industry.color}00, ${industry.color})` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Why Clients Choose Us
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Across industries and sectors, we're trusted by leading organizations for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: '#615BEA', boxShadow: '0 10px 30px rgba(97, 91, 234, 0.15)' }}
                >
                  <Icon className="w-12 h-12 text-[#615BEA] mb-4" />
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[#334155]">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#615BEA] to-[#7A71F0] rounded-3xl p-12 md:p-16 shadow-2xl">
            <motion.div
              className="grid md:grid-cols-4 gap-8 text-white text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: '8+', label: 'Industry Sectors' },
                { number: '500+', label: 'Projects Delivered' },
                { number: '200+', label: 'Enterprise Clients' },
                { number: '24/7', label: 'Dedicated Support' }
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <motion.div
                    className="text-5xl md:text-6xl font-bold mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-lg opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              See How We Deliver Results
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto mb-8">
              Explore real-world examples of how we've transformed businesses across industries
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: 'Finance Sector', stat: '99.99% Uptime', color: '#615BEA' },
              { title: 'Healthcare', stat: '95% Satisfaction', color: '#10B981' },
              { title: 'Retail & E-Commerce', stat: '45% Sales Growth', color: '#F59E0B' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                  {item.stat}
                </div>
                <p className="text-[#334155] font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/case-studies">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#615BEA] hover:bg-[#7A71F0] text-white text-lg px-8 py-6">
                  Explore Case Studies
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Target className="w-16 h-16" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're in finance, healthcare, retail, or any other sector, we have the expertise 
              and innovation to help you thrive in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-[#615BEA] hover:bg-gray-100 text-lg px-8 py-6">
                    Start Your Transformation
                    <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Learn More About Our Work
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
