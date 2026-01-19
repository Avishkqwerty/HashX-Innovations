import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Code, Target, MessageSquare } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      industry: 'Financial Services',
      client: 'Global Banking Corporation',
      solution: 'Cloud Migration & Security Platform',
      challenge: 'Legacy infrastructure preventing scalability and exposing security vulnerabilities across 50+ branches globally.',
      outcome: 'Seamlessly migrated critical banking systems to a secure cloud infrastructure with zero downtime.',
      impact: {
        metric1: '99.99% uptime',
        metric2: '60% cost reduction',
        metric3: '3x faster deployment',
        metric4: 'Zero security incidents'
      },
      icon: Shield,
      color: '#615BEA'
    },
    {
      industry: 'Healthcare',
      client: 'MediCare Solutions',
      solution: 'HIPAA-Compliant Patient Portal',
      challenge: 'Needed a secure, user-friendly platform for 100,000+ patients to access medical records and communicate with providers.',
      outcome: 'Built a comprehensive patient portal with advanced security, real-time messaging, and seamless EHR integration.',
      impact: {
        metric1: '200K+ active users',
        metric2: '95% satisfaction rate',
        metric3: '50% reduced admin calls',
        metric4: 'HIPAA certified'
      },
      icon: Users,
      color: '#10B981'
    },
    {
      industry: 'E-Commerce',
      client: 'RetailMax Enterprise',
      solution: 'AI-Powered Recommendation Engine',
      challenge: 'Low conversion rates and poor customer engagement due to generic product recommendations.',
      outcome: 'Implemented machine learning algorithms to deliver personalized shopping experiences at scale.',
      impact: {
        metric1: '45% increase in sales',
        metric2: '3x engagement rate',
        metric3: '28% higher AOV',
        metric4: '2M+ daily predictions'
      },
      icon: TrendingUp,
      color: '#F59E0B'
    },
    {
      industry: 'Manufacturing',
      client: 'TechManufacture Inc.',
      solution: 'IoT-Based Predictive Maintenance',
      challenge: 'Frequent equipment failures causing production delays and millions in lost revenue annually.',
      outcome: 'Deployed IoT sensors and AI models to predict equipment failures before they occur.',
      impact: {
        metric1: '80% fewer breakdowns',
        metric2: '$5M annual savings',
        metric3: '95% prediction accuracy',
        metric4: '30% productivity boost'
      },
      icon: Zap,
      color: '#EF4444'
    }
  ];

  const methodology = [
    {
      phase: 'Discovery',
      description: 'Deep dive into your business goals, challenges, and technical requirements',
      icon: Target
    },
    {
      phase: 'Strategy',
      description: 'Develop a comprehensive roadmap aligned with your objectives and budget',
      icon: CheckCircle
    },
    {
      phase: 'Development',
      description: 'Build scalable, secure solutions using cutting-edge technologies',
      icon: Code
    },
    {
      phase: 'Optimization',
      description: 'Continuous monitoring, improvement, and support for lasting success',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      quote: "HashX Innovations transformed our entire infrastructure. Their expertise in cloud migration and security gave us the confidence to scale globally without compromising on safety.",
      author: "Michael Thompson",
      role: "CTO, Global Banking Corporation",
      rating: 5
    },
    {
      quote: "The patient portal exceeded our expectations. HashX delivered a solution that's not only secure and compliant but also intuitive for our diverse patient base.",
      author: "Dr. Sarah Chen",
      role: "Director of Digital Health, MediCare Solutions",
      rating: 5
    },
    {
      quote: "Our sales skyrocketed after implementing their AI recommendation engine. The ROI was evident within the first quarter. HashX truly understands e-commerce at scale.",
      author: "James Rodriguez",
      role: "VP of Technology, RetailMax Enterprise",
      rating: 5
    }
  ];

  const successFactors = [
    {
      title: 'Strategic Planning',
      description: 'Every project begins with a deep understanding of your business objectives and a clear roadmap to success.'
    },
    {
      title: 'Expert Design',
      description: 'User-centric designs that balance aesthetics with functionality, ensuring exceptional user experiences.'
    },
    {
      title: 'Robust Development',
      description: 'Clean, scalable code built on proven frameworks and best practices, tested rigorously for reliability.'
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing monitoring, performance tuning, and enhancements to maximize long-term value and ROI.'
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
              CASE STUDIES
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Driving Real Results
              <br />
              <span className="text-[#615BEA]">for Real Businesses</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              At HashX Innovations, we don't just build software—we solve business problems. 
              Explore how we've helped companies across industries achieve measurable transformation 
              through innovative technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Proven Approach
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              A systematic methodology that ensures every project delivers exceptional results, 
              on time and within budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: '#615BEA' }}
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#615BEA] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <Icon className="w-12 h-12 text-[#615BEA] mb-4" />
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {phase.phase}
                  </h3>
                  <p className="text-[#334155]">
                    {phase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Featured Success Stories
            </h2>
            <p className="text-xl text-[#334155]">
              Real challenges. Real solutions. Real impact.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.client}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ boxShadow: '0 30px 60px rgba(97, 91, 234, 0.15)' }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-10">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${study.color}15` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: study.color }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: study.color }}>
                            {study.industry}
                          </div>
                          <h3 className="text-2xl font-bold text-[#0F172A]">
                            {study.client}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-[#0F172A] mb-2">Solution</h4>
                          <p className="text-[#334155]">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F172A] mb-2">Challenge</h4>
                          <p className="text-[#334155]">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F172A] mb-2">Outcome</h4>
                          <p className="text-[#334155]">{study.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-[#0F172A] mb-6 text-xl">Measurable Impact</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.values(study.impact).map((metric, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200"
                            whileHover={{ scale: 1.05, borderColor: study.color }}
                          >
                            <div 
                              className="text-3xl font-bold mb-1"
                              style={{ color: study.color }}
                            >
                              {metric.split(' ')[0]}
                            </div>
                            <div className="text-sm text-[#334155] font-medium">
                              {metric.split(' ').slice(1).join(' ')}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              What Makes Results Possible
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Our success is built on four fundamental pillars that ensure every project delivers exceptional value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(97, 91, 234, 0.15)' }}
              >
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {factor.title}
                </h3>
                <p className="text-[#334155] text-lg">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#334155]">
              Don't just take our word for it—hear from the leaders we've partnered with
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: '#615BEA' }}
              >
                <MessageSquare className="w-10 h-10 text-[#615BEA] mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#334155] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#0F172A]">{testimonial.author}</div>
                  <div className="text-sm text-[#615BEA]">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve measurable results and transform your business 
              with innovative technology solutions tailored to your unique challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-[#615BEA] hover:bg-gray-100 text-lg px-8 py-6">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
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
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  View More Cases
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
