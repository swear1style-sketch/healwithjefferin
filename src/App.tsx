import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Offerings } from './components/Offerings';
import { HealingJourney } from './components/HealingJourney';
import { InteractiveSanctuary } from './components/InteractiveSanctuary';
import { Testimonials } from './components/Testimonials';
import { ClosingCTA } from './components/ClosingCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DesignerLoadingScreen } from './components/DesignerLoadingScreen';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState('');

  const handleOpenContact = (offeringName?: string) => {
    if (offeringName) {
      setSelectedOffering(offeringName);
    } else {
      setSelectedOffering('');
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#EAF2FC] text-[#34455C] selection:bg-[#E5D7F4] selection:text-[#34455C] relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Introduction & About Section */}
        <About />

        {/* Offerings Section */}
        <Offerings
          onSelectOfferingForContact={(offeringTitle) =>
            handleOpenContact(offeringTitle)
          }
        />

        {/* Healing Journey / Philosophy Section */}
        <HealingJourney />

        {/* Interactive Breathing Sanctuary */}
        <InteractiveSanctuary />

        {/* Testimonials / Client Reflections */}
        <Testimonials />

        {/* Closing Call to Action */}
        <ClosingCTA onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Real Functional Contact Flow Modal */}
      <ContactSection
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        prefilledOffering={selectedOffering}
      />

      {/* Atmospheric Positive Vibe Loading Screen */}
      {isLoading && (
        <DesignerLoadingScreen onComplete={() => setIsLoading(false)} />
      )}
    </div>
  );
};

export default App;
