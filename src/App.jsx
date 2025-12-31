import { useEffect } from 'react';
import { initMetaPixel, setupTallyListener } from './lib/metaPixel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programma from './components/Programma';
import Istruttori from './components/Istruttori';
import InfoPratiche from './components/InfoPratiche';
import Location from './components/Location';
import FAQ from './components/FAQ';
import TallyForm from './components/TallyForm';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';

function App() {
  useEffect(() => {
    // Inizializza Meta Pixel
    initMetaPixel();

    // Setup listener per eventi Tally
    const cleanup = setupTallyListener();

    // Cleanup al unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Programma />
      <CTAButton bgColor="ocean-50" />
      <Istruttori />
      <CTAButton bgColor="white" />
      <InfoPratiche />
      <CTAButton bgColor="white" />
      <Location />
      <CTAButton bgColor="ocean-50" />
      <FAQ />
      <CTAButton bgColor="white" />
      <TallyForm />
      <Footer />
    </div>
  );
}

export default App;
