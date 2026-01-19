import { motion } from 'motion/react';
import { FileText, AlertCircle, Gavel, DollarSign, CheckCircle, XCircle } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Link } from 'react-router-dom';

export function TermsOfServicePage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      icon: CheckCircle,
      content: [
        {
          heading: 'Agreement Binding',
          text: 'By accessing and using HashX Innovations\' website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
        },
        {
          heading: 'Updates to Terms',
          text: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of updated terms.'
        }
      ]
    },
    {
      title: '2. Use License',
      icon: FileText,
      content: [
        {
          heading: 'Grant of License',
          text: 'HashX Innovations grants you a limited, non-exclusive, non-transferable license to use our website and services in accordance with these terms.'
        },
        {
          heading: 'Permitted Use',
          text: 'You may use our services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment.'
        },
        {
          heading: 'Prohibited Activities',
          text: 'You agree not to: (a) harass, abuse, or harm others; (b) upload malware or harmful code; (c) attempt to gain unauthorized access; (d) engage in any form of fraud or deception; (e) violate any applicable laws or regulations.'
        }
      ]
    },
    {
      title: '3. Intellectual Property Rights',
      icon: Gavel,
      content: [
        {
          heading: 'Ownership',
          text: 'All content on our website, including text, graphics, logos, images, software, and documents, is the property of HashX Innovations or its content suppliers and is protected by international copyright laws.'
        },
        {
          heading: 'Limited Use Rights',
          text: 'You may view, download, and print content from our website for personal, non-commercial use only. You may not reproduce, distribute, or transmit content without prior written permission.'
        },
        {
          heading: 'Your Content',
          text: 'By submitting content to our services, you grant HashX Innovations a non-exclusive, royalty-free license to use, reproduce, and display your content for service improvement and business purposes.'
        }
      ]
    },
    {
      title: '4. Service Availability',
      icon: AlertCircle,
      content: [
        {
          heading: '"As Is" Basis',
          text: 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that services will be uninterrupted or error-free.'
        },
        {
          heading: 'Maintenance and Updates',
          text: 'We reserve the right to modify, suspend, or discontinue services at any time with or without notice. We are not liable for any inconvenience or damages resulting from service interruptions.'
        },
        {
          heading: 'Technical Support',
          text: 'Technical support is provided during business hours (Monday-Friday, 9 AM to 6 PM Sri Lanka Standard Time). We aim to resolve issues within 24 business hours.'
        }
      ]
    },
    {
      title: '5. Limitation of Liability',
      icon: DollarSign,
      content: [
        {
          heading: 'Disclaimer',
          text: 'In no event shall HashX Innovations be liable for any indirect, incidental, special, or consequential damages arising from your use or inability to use our services.'
        },
        {
          heading: 'Maximum Liability',
          text: 'Our total liability for any claims arising from or relating to these terms shall not exceed the amount you paid us in the 12 months preceding the claim.'
        },
        {
          heading: 'Third-Party Links',
          text: 'Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Access third-party sites at your own risk.'
        }
      ]
    },
    {
      title: '6. Indemnification',
      icon: Gavel,
      content: [
        {
          heading: 'Your Responsibility',
          text: 'You agree to indemnify, defend, and hold harmless HashX Innovations from all claims, damages, liabilities, and expenses arising from your use of our services or violation of these terms.'
        },
        {
          heading: 'Defense',
          text: 'We reserve the right to assume the defense of any claim and you agree to pay all costs associated with our defense, including reasonable attorneys\' fees.'
        }
      ]
    },
    {
      title: '7. Termination',
      icon: XCircle,
      content: [
        {
          heading: 'Right to Terminate',
          text: 'We reserve the right to terminate your access to our services immediately, without notice, for violation of these terms or any applicable law.'
        },
        {
          heading: 'Your Rights',
          text: 'You may terminate your account at any time by contacting us. Upon termination, your right to use our services ceases immediately.'
        },
        {
          heading: 'Survival',
          text: 'Provisions that by their nature should survive termination shall remain in effect after termination of these terms.'
        }
      ]
    },
    {
      title: '8. Governing Law',
      icon: Gavel,
      content: [
        {
          heading: 'Jurisdiction',
          text: 'These Terms of Service are governed by and construed in accordance with the laws of Sri Lanka, and you irrevocably submit to the exclusive jurisdiction of the courts located in Colombo.'
        },
        {
          heading: 'Dispute Resolution',
          text: 'Any disputes arising from these terms shall first be addressed through good-faith negotiation. If unresolved, disputes may be escalated to arbitration or litigation.'
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
              TERMS OF SERVICE
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
              variants={fadeInUp}
            >
              Terms & Conditions
              <br />
              <span className="text-[#615BEA]">Fair & Clear</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-[#334155] max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Please read these Terms of Service carefully before using HashX Innovations' website and services. 
              These terms establish the rules and expectations for your interaction with our company.
            </motion.p>

            <motion.div
              className="mt-8 text-sm text-[#334155]"
              variants={fadeInUp}
            >
              <p>Effective Date: January 19, 2026</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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
              9. Contact Information
            </h2>
            <p className="text-[#334155] mb-6">
              If you have questions about these Terms of Service or need clarification on any provisions, 
              please reach out to our legal team:
            </p>
            <div className="space-y-3 text-[#334155]">
              <p><strong>Email:</strong> legal@hashx.lk</p>
              <p><strong>Address:</strong> 123 Tech Avenue, Colombo 03, Sri Lanka</p>
              <p><strong>Phone:</strong> +94 11 234 5678</p>
            </div>
            <p className="text-[#334155] mt-6">
              We will address legal inquiries within 5 business days. For urgent matters, 
              please mark your email as "URGENT" in the subject line.
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
              Questions About Our Terms?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our legal and support teams are ready to assist. Don't hesitate to reach out.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-[#615BEA] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
