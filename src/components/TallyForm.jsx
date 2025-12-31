import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useEffect } from 'react';

const TallyForm = () => {
  useEffect(() => {
    // Carica lo script Tally se non è già presente
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        console.log('✅ Tally embed script caricato');
        // Inizializza Tally
        if (window.Tally) {
          window.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // Se lo script esiste già, inizializza gli embed
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <section id="iscrizione" className="py-20 bg-gradient-to-b from-ocean-50 to-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-500 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-800 mb-4">
            Prenota il Tuo Posto
          </h2>
          <p className="text-xl text-ocean-600 mb-4">
            Compila il modulo per iscriverti allo stage
          </p>
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-full font-semibold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Solo 50 posti disponibili
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8"
        >
          {/* Tally Embed */}
          <iframe
            data-tally-src="https://tally.so/embed/D4KryE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Modulo iscrizione Swim Like a Dolphin"
            style={{ border: 'none' }}
          />
        </motion.div>

        {/* Note privacy/sicurezza */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm text-ocean-600"
        >
          <p>🔒 I tuoi dati sono al sicuro e verranno utilizzati solo per la gestione dell'iscrizione</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TallyForm;
