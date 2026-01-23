import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { HeroSection } from '@/app/components/HeroSection';
import { TrustStrip } from '@/app/components/TrustStrip';
import { OurPillars } from '@/app/components/OurPillars';
import { FeaturedServices } from '@/app/components/FeaturedServices';
import { WhyHashX } from '@/app/components/WhyHashX';
import { ClientSuccess } from '@/app/components/ClientSuccess';
import { PartnerEcosystem } from '@/app/components/PartnerEcosystem';
import { VisionStatement } from '@/app/components/VisionStatement';
import { Footer } from '@/app/components/Footer';
import { CareersPage } from '@/app/pages/CareersPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { CaseStudiesPage } from '@/app/pages/CaseStudiesPage';
import { IndustriesPage } from '@/app/pages/IndustriesPage';
import { PrivacyPolicyPage } from '@/app/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/app/pages/TermsOfServicePage';
import { ServicesPage } from '@/app/pages/ServicesPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <OurPillars />
      <FeaturedServices />
      <WhyHashX />
      <ClientSuccess />
      <PartnerEcosystem />
      <VisionStatement />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFAFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}