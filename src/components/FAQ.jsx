import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      domanda: 'Come posso iscrivermi?',
      risposta:
        'Puoi iscriverti compilando il modulo di iscrizione presente in questa pagina. Riceverai una conferma via email con tutti i dettagli e le istruzioni per il pagamento.',
    },
    {
      domanda: 'È adatto a tutti i livelli?',
      risposta:
        'Sì! Lo stage è pensato per nuotatori di tutti i livelli, dai principianti agli agonisti. I nostri esperti adatteranno gli esercizi in base al tuo livello tecnico per garantirti il massimo apprendimento.',
    },
    {
      domanda: 'Cosa devo portare?',
      risposta:
        'Devi portare: costume da bagno, cuffia, occhialini, asciugamano, ciabatte, borraccia e un cambio completo. Tutto il materiale didattico sarà fornito dalla struttura.',
    },
    {
      domanda: "C'è parcheggio disponibile?",
      risposta:
        'Sì, la Piscina Lido Azzurro dispone di un ampio parcheggio gratuito per tutti i partecipanti. Lo spazio è abbondante e accessibile facilmente.',
    },
    {
      domanda: 'Posso pagare in loco?',
      risposta:
        'Il pagamento deve essere effettuato al momento dell\'iscrizione per confermare il posto. Accettiamo pagamenti online tramite carta di credito o bonifico bancario. I dettagli ti verranno inviati via email dopo la compilazione del modulo.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-ocean-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-800 mb-4">
            Domande Frequenti
          </h2>
          <p className="text-xl text-ocean-600">
            Tutto quello che devi sapere prima di iscriverti
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-ocean-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-ocean-200 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2 rounded-2xl"
                >
                  <span className="text-lg sm:text-xl font-bold text-ocean-900 pr-4">
                    {faq.domanda}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-ocean-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-ocean-700 leading-relaxed">
                        {faq.risposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA o nota finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-ocean-600">
            Hai altre domande?{' '}
            <a
              href="mailto:info@npvaredo.it"
              className="text-ocean-700 font-semibold hover:text-ocean-800 underline"
            >
              Contattaci via email
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
