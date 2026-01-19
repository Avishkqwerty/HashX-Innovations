import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      icon: Eye,
      content: [
        {
          heading: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This includes your name, email address, phone number, company information, and any other details you choose to share.'
        },
        {
          heading: 'Automatically Collected Information',
          text: 'When you visit our website or use our services, we automatically collect certain information, including your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs.'
        },
        {
          heading: 'Cookies and Tracking Technologies',
          text: 'We use cookies, web beacons, and similar tracking technologies to enhance user experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.'
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      icon: Shield,
      content: [
        {
          heading: 'Service Delivery',
          text: 'We use your information to provide, maintain, and improve our services, process transactions, and send service-related announcements.'
        },
        {
          heading: 'Communication',
          text: 'With your consent, we send marketing emails, newsletters, and product updates. You can opt-out of non-essential communications at any time.'
        },
        {
          heading: 'Analytics and Improvement',
          text: 'We analyze usage data to understand user behavior, improve our services, develop new features, and optimize our website performance.'
        },
        {
          heading: 'Security and Compliance',
          text: 'We use your information to detect fraud, prevent abuse, and comply with legal obligations and regulatory requirements.'
        }
      ]
    },
    {
      title: '3. Data Security',
      icon: Lock,
      content: [
        {
          heading: 'Security Measures',
          text: 'We implement industry-standard security measures, including encryption, firewalls, and secure access controls to protect your personal information from unauthorized access, alteration, or disclosure.'
        },
        {
          heading: 'Compliance Standards',
          text: 'Our security practices comply with ISO 27001, GDPR, and other international data protection standards. We conduct regular security audits and assessments.'
        },
        {
          heading: 'Limitations',
          text: 'While we maintain rigorous security practices, no system is completely secure. We cannot guarantee absolute security, but we remain committed to protecting your data.'
        }
      ]
    },
    {
      title: '4. Data Sharing and Third Parties',
      icon: FileText,
      content: [
        {
          heading: 'Service Providers',
          text: 'We may share your information with trusted service providers who assist us in delivering our services. All providers are contractually bound to maintain confidentiality.'
        },
        {
          heading: 'Legal Requirements',
          text: 'We may disclose information when required by law, in response to legal processes, or to protect our rights, privacy, safety, or property.'
        },
        {
          heading: 'Business Transfers',
          text: 'In case of merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. You will receive notification of any such changes.'
        },
        {
          heading: 'No Sales to Third Parties',
          text: 'We do not sell, rent, or lease your personal information to third parties for their marketing purposes.'
        }
      ]
    },
    {
      title: '5. Your Rights and Choices',
      icon: CheckCircle,
      content: [
        {
          heading: 'Access and Correction',
          text: 'You have the right to access, review, and correct your personal information. Contact us to request copies of your data or to update inaccuracies.'
        },
        {
          heading: 'Data Deletion',
          text: 'You may request deletion of your personal information, subject to legal and contractual obligations. We will comply with deletion requests within 30 days.'
        },
        {
          heading: 'Opt-Out',
          text: 'You can opt-out of marketing communications, cookies, and tracking at any time. Use the unsubscribe link in emails or adjust your preferences in your account settings.'
        },
        {
          heading: 'Portability',
          text: 'You have the right to request your data in a portable format. We will provide your information in a structured, commonly used format.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFF] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
              PRIVACY POLICY
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Your Privacy
              <br />
              <span className="text-[#615BEA]">Our Priority</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-[#334155] max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              At HashX Innovations, we are committed to protecting your privacy and ensuring transparency 
              in how we collect, use, and protect your personal information. This policy explains our practices.
            </motion.p>

            <motion.div
              className="mt-8 text-sm text-[#334155]"
              variants={fadeInUp}
            >
              <p>Last Updated: January 19, 2026</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#615BEA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#615BEA]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIdx * 0.05, duration: 0.4 }}
                      >
                        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-[#334155] leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFF]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
              6. Contact Us
            </h2>
            <p className="text-[#334155] mb-6">
              If you have questions about this Privacy Policy, our privacy practices, or how we handle your information, 
              please contact us:
            </p>
            <div className="space-y-3 text-[#334155]">
              <p><strong>Email:</strong> privacy@hashx.lk</p>
              <p><strong>Address:</strong> 123 Tech Avenue, Colombo 03, Sri Lanka</p>
              <p><strong>Phone:</strong> +94 11 234 5678</p>
            </div>
            <p className="text-[#334155] mt-6">
              We will respond to privacy inquiries within 10 business days. For GDPR-related requests, 
              we comply with applicable timelines and regulations.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Questions About Your Privacy?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We're here to help. Contact our Privacy Team for any concerns or inquiries.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-[#615BEA] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
