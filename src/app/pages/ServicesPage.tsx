import { motion } from 'motion/react';
import { Code, Shield, Zap, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    {
      id: 'build',
      category: 'Build',
      icon: Code,
      color: '#3B82F6',
      lightColor: '#3B82F615',
      tagline: 'Creating Digital Solutions That Drive Growth',
      description: 'We craft custom software that transforms your vision into reality. From concept to deployment, our team builds scalable applications tailored to your unique business needs. Whether you need a powerful SaaS platform or a mobile app that delights users, we deliver solutions that work seamlessly and grow with you.',
      items: [
        {
          title: 'Custom Software Development',
          description: 'Tailored solutions designed specifically for your business challenges. We build software that fits your workflow perfectly, helping you work smarter and faster.'
        },
        {
          title: 'SaaS Solutions',
          description: 'Cloud-based platforms that scale effortlessly. We create software-as-a-service products that serve thousands of users with reliability and performance.'
        },
        {
          title: 'Mobile & Web Applications',
          description: 'Beautiful, intuitive apps that users love. We design and develop responsive experiences that work flawlessly across all devices and platforms.'
        },
        {
          title: 'API Development',
          description: 'Seamless integrations that connect your systems. We build robust APIs that enable your applications to communicate efficiently and securely.'
        }
      ]
    },
    {
      id: 'secure',
      category: 'Secure',
      icon: Shield,
      color: '#0F766E',
      lightColor: '#0F766E15',
      tagline: 'Protecting What Matters Most',
      description: 'Your security is our priority. We provide comprehensive cybersecurity services that safeguard your business from evolving threats. Our experts work proactively to identify vulnerabilities, ensure compliance, and maintain continuous protection. Trust us to keep your data, systems, and reputation secure.',
      items: [
        {
          title: 'Cybersecurity Assessment',
          description: 'Thorough evaluation of your security posture. We identify weaknesses before attackers do, providing clear recommendations to strengthen your defenses.'
        },
        {
          title: 'Compliance & Governance',
          description: 'Navigate regulations with confidence. We help you meet industry standards like GDPR, HIPAA, and ISO 27001, ensuring your business stays compliant.'
        },
        {
          title: 'Managed SOC Services',
          description: '24/7 monitoring and threat response. Our Security Operations Center watches over your infrastructure, detecting and neutralizing threats in real-time.'
        },
        {
          title: 'Penetration Testing',
          description: 'Ethical hacking that exposes vulnerabilities. We simulate real-world attacks to test your defenses and provide actionable insights to improve security.'
        }
      ]
    },
    {
      id: 'scale',
      category: 'Scale',
      icon: Zap,
      color: '#06B6D4',
      lightColor: '#06B6D415',
      tagline: 'Growing Your Infrastructure With Confidence',
      description: 'Scale without limits. We help businesses move to the cloud, optimize infrastructure, and automate operations for maximum efficiency. Our cloud and DevOps expertise ensures your systems can handle growth while reducing costs. Focus on your business—we will handle the technical complexity.',
      items: [
        {
          title: 'Cloud Migration',
          description: 'Smooth transition to the cloud. We move your applications and data with zero downtime, unlocking flexibility, cost savings, and global reach.'
        },
        {
          title: 'Infrastructure Management',
          description: 'Reliable systems that just work. We design, deploy, and maintain infrastructure that scales automatically, ensuring optimal performance at all times.'
        },
        {
          title: 'DevOps & Automation',
          description: 'Speed up delivery, reduce errors. We implement CI/CD pipelines and automation that enable your team to deploy faster and more reliably.'
        },
        {
          title: 'Hybrid Cloud Solutions',
          description: 'Best of both worlds. We create flexible architectures that combine on-premises and cloud resources, giving you control and scalability.'
        }
      ]
    },
    {
      id: 'transform',
      category: 'Transform',
      icon: Sparkles,
      color: '#8B5CF6',
      lightColor: '#8B5CF615',
      tagline: 'Innovating for Tomorrow, Today',
      description: 'Embrace the future with confidence. We help businesses harness emerging technologies like AI, machine learning, and intelligent automation to stay ahead of the competition. Transform operations, unlock insights from data, and create new opportunities for growth. Innovation starts here.',
      items: [
        {
          title: 'Digital Transformation',
          description: 'Modernize your entire business. We guide your transformation journey, integrating new technologies and processes that drive efficiency and innovation.'
        },
        {
          title: 'AI & Machine Learning',
          description: 'Intelligence that scales. We build AI-powered solutions that automate tasks, predict outcomes, and deliver personalized experiences to your customers.'
        },
        {
          title: 'Business Intelligence',
          description: 'Data-driven decisions made simple. We create dashboards and analytics that turn complex data into clear insights, empowering smarter strategies.'
        },
        {
          title: 'Process Automation',
          description: 'Work smarter, not harder. We automate repetitive tasks and workflows, freeing your team to focus on what truly matters—growing your business.'
        }
      ]
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
              OUR SERVICES
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Empowering Businesses
              <br />
              <span className="text-[#3B82F6]">Through Technology</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              From building custom software to securing your infrastructure and scaling with the cloud—
              we provide comprehensive solutions that drive real business value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${isEven ? 'bg-white' : 'bg-gradient-to-b from-white to-[#FAFAFF]'}`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: service.lightColor }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h2
                    className="text-4xl md:text-5xl font-bold"
                    style={{ fontFamily: 'Manrope, sans-serif', color: service.color }}
                  >
                    {service.category}
                  </h2>
                </motion.div>
                
                <p className="text-2xl font-semibold text-[#0F172A] mb-4">
                  {service.tagline}
                </p>
                <p className="text-lg text-[#334155] max-w-4xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              {/* Service Items Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {service.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: `0 20px 40px ${service.color}20`,
                      borderColor: service.color
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <CheckCircle className="w-6 h-6" style={{ color: service.color }} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#334155] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <motion.div
                  className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFF] to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-3xl p-12 text-center text-white shadow-2xl"
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
              <Sparkles className="w-16 h-16" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-[#3B82F6] hover:bg-gray-100 text-lg px-8 py-6">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/case-studies">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 text-lg px-8 py-6 transition-all"
                  >
                    View Our Work
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
