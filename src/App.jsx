import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactModal from './components/ContactModal';
import CompanyOverview from './components/CompanyOverview';
import CoreDivisions from './components/CoreDivisions';
import WhyChooseUs from './components/WhyChooseUs';
import EngagementProcess from './components/EngagementProcess';
import Footer from './components/Footer';

function App() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);
  useEffect(() => {
    const handler = () => openContact();
    window.addEventListener('openContact', handler);
    return () => window.removeEventListener('openContact', handler);
  }, []);
  return (
    <div className="app">
      <Header onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <CompanyOverview />
        <CoreDivisions />
        <WhyChooseUs />
        <EngagementProcess />
      </main>
      <Footer />
      {/** Contact modal placed at app root */}
      <ContactModal visible={showContact} onClose={closeContact} />
    </div>
  );
}

export default App;
