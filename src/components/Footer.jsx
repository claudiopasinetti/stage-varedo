import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, Waves } from 'lucide-react';

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-ocean-800 to-ocean-900 text-white overflow-hidden">
      <div className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Finale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Waves className="w-12 h-12 text-ocean-300" />
              <h3 className="text-3xl sm:text-4xl font-bold">
                Non Perdere Questa Opportunità
              </h3>
            </div>
            <p className="text-xl text-ocean-200 mb-8 max-w-2xl mx-auto">
              Impara i segreti del 5° stile dai migliori esperti del settore
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToForm}
              className="bg-white text-ocean-900 px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-ocean-300/50 transition-all duration-300"
            >
              PRENOTA IL TUO POSTO
            </motion.button>
          </motion.div>

          {/* Info e Links */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 border-t border-ocean-700 pt-12">
            {/* Informazioni Lido Azzurro */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-ocean-200">Lido Azzurro</h4>
              <div className="space-y-2 text-ocean-300">
                <p>Viale Felice Rebuzzini 20</p>
                <p>Varedo (MB)</p>
                <div className="pt-2 space-y-1">
                  <p>
                    <a href="tel:0362580874" className="hover:text-white transition-colors">
                      Tel. 0362/580874
                    </a>
                    {' - '}
                    <span>Fax 0362/576352</span>
                  </p>
                  <p>
                    <a href="mailto:info@npvaredo.it" className="hover:text-white transition-colors">
                      info@npvaredo.it
                    </a>
                  </p>
                  <p className="pt-2 text-sm">P.I. 00711020966</p>
                </div>
              </div>
            </div>

            {/* Info evento */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-ocean-200">Evento</h4>
              <div className="space-y-2 text-ocean-300">
                <p className="font-semibold text-white">SWIM LIKE A DOLPHIN</p>
                <p>I Segreti del 5° Stile nel Nuoto</p>
                <p className="pt-2">Domenica 18 Gennaio 2026</p>
                <p>Orario: 9:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-ocean-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <p className="text-ocean-400 text-sm">
                © 2026 Piscina Lido Azzurro. Tutti i diritti riservati.
              </p>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-ocean-300 hover:text-white transition-colors"
              >
                <span className="text-sm">Torna su</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-4 text-ocean-400 text-sm">
                <a
                  href="https://www.piscinavaredo.it/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocean-200 transition-colors"
                >
                  Privacy Policy
                </a>
                <span>|</span>
                <a
                  href="https://www.piscinavaredo.it/cookie-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocean-200 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
