import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      content: '123 Tech Avenue, Colombo 03, Sri Lanka',
      color: '#615BEA'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@hashx.live',
      color: '#10B981'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+94 11 234 5678',
      color: '#F59E0B'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday – Friday, 07am – 10pm',
      color: '#EF4444'
    }
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
    { icon: Github, label: 'GitHub', href: '#', color: '#181717' },
    { icon: Facebook, label: 'Facebook', href: '#', color: '#1877F2' }
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
              CONTACT US
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Let's Talk!
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-[#334155] max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              We'd love to hear from you! Whether you have questions about our services, need support, 
              or want to discuss a custom cybersecurity solution, our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: info.color
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${info.color}15` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: info.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-[#334155] text-sm">
                    {info.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Social */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Send Us a Message
                </h2>
                <p className="text-[#334155] mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#615BEA] focus:ring-2 focus:ring-[#615BEA]/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#615BEA] focus:ring-2 focus:ring-[#615BEA]/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#615BEA] focus:ring-2 focus:ring-[#615BEA]/20 outline-none transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#615BEA] focus:ring-2 focus:ring-[#615BEA]/20 outline-none transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-[#615BEA] hover:bg-[#7A71F0] text-white text-lg py-6"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Social Media & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#615BEA] to-[#7A71F0] rounded-3xl p-8 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Connect With Us
                </h3>
                <p className="mb-8 opacity-90">
                  Follow us on social media to stay updated with our latest news, insights, and innovations.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="font-semibold">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Additional CTA */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Need Immediate Assistance?
                </h3>
                <p className="text-[#334155] mb-6">
                  For urgent matters or immediate support, feel free to call us directly or send an email. 
                  Our team is ready to assist you with any questions, feedback, or suggestions.
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+94112345678"
                    className="flex items-center gap-3 text-[#615BEA] font-semibold hover:text-[#7A71F0] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-5 h-5" />
                    +94 11 234 5678
                  </motion.a>
                  <motion.a
                    href="mailto:contact@hashx.live"
                    className="flex items-center gap-3 text-[#615BEA] font-semibold hover:text-[#7A71F0] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5" />
                    contact@hashx.live
                  </motion.a>
                </div>
              </div>

              {/* Quick Note */}
              <motion.div
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#065F46] text-center font-medium">
                  💡 <strong>Pro Tip:</strong> The more details you provide, the better we can assist you! 
                  Don't hesitate to share your specific needs or questions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              We're Here to Help
            </h3>
            <p className="text-lg text-[#334155]">
              Whether you have questions about our services, need technical support, or want to explore 
              partnership opportunities, we're just a message away. Your feedback and suggestions are 
              always welcome as we strive to deliver the best solutions for your business.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
