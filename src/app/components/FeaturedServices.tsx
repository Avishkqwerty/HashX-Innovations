import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Cloud, Brain, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { fadeInUp, hoverButtonScale, hoverCardLift, staggerContainer } from '@/lib/animations';

export function FeaturedServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Cloud,
      title: 'Zero-Downtime Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to Azure, AWS, or GCP with our proven methodology that guarantees business continuity.',
      platforms: 'Azure | AWS | GCP',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2ODY0NTE3OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence Dashboards',
      description: 'Transform raw data into actionable insights with custom BI solutions powered by machine learning and predictive analytics.',
      platforms: 'Power BI | Tableau | Custom',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2ODYzNzUxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Shield,
      title: '24/7 Managed SOC with Threat Hunting',
      description: 'Round-the-clock security monitoring and proactive threat detection by our elite cybersecurity team.',
      platforms: 'SIEM | EDR | XDR',
      image: 'https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbHxlbnwxfHx8fDE3Njg2NzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: RefreshCw,
      title: 'Legacy System Modernization',
      description: 'Revitalize aging systems with modern architectures while ensuring full compliance and zero data loss.',
      platforms: 'Microservices | Cloud Native | API-First',
      image: 'https://images.unsplash.com/photo-1726126780086-f37e8da83931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhY2VudGVyfGVufDF8fHx8MTc2ODY4MDY1OXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];
  const ServiceIcon = currentService.icon;

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
            FEATURED OFFERINGS
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
            variants={fadeInUp}
          >
            Enterprise-Grade Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-[#334155]"
            variants={fadeInUp}
          >
            High-impact services that accelerate business transformation
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            layout
          >
            {/* Image */}
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden"
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1227]/80 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceIcon className="w-8 h-8 text-[#3B82F6]" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {currentService.title}
              </h3>
              
              <p className="text-lg text-[#334155] mb-6">
                {currentService.description}
              </p>
              
              <motion.div
                className="flex items-center gap-2 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-medium">
                  {currentService.platforms}
                </span>
              </motion.div>

              <motion.div {...hoverButtonScale}>
                <Button className="bg-[#3B82F6] hover:bg-[#06B6D4] text-white shadow-lg shadow-[#3B82F6]/30">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#3B82F6] w-8 h-2' : 'bg-gray-300 w-2 h-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}