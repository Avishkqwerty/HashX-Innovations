import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { TrustStrip } from '@/app/components/TrustStrip';
import { OurPillars } from '@/app/components/OurPillars';
import { FeaturedServices } from '@/app/components/FeaturedServices';
import { WhyHashX } from '@/app/components/WhyHashX';
import { ClientSuccess } from '@/app/components/ClientSuccess';
import { PartnerEcosystem } from '@/app/components/PartnerEcosystem';
import { VisionStatement } from '@/app/components/VisionStatement';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFF]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <OurPillars />
      <FeaturedServices />
      <WhyHashX />
      <ClientSuccess />
      <PartnerEcosystem />
      <VisionStatement />
      <Footer />
    </div>
  );
}