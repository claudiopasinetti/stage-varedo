import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const nomi = [
  "Giovanni G.",
  "Maria R.",
  "Luca B.",
  "Alessandro M.",
  "Francesca T.",
  "Marco P.",
  "Chiara S.",
  "Matteo C.",
  "Sofia L.",
  "Andrea F.",
  "Valentina N.",
  "Davide R.",
  "Giulia V.",
  "Simone D.",
  "Elena B."
];

function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    // Primo popup dopo 10 secondi
    const firstTimeout = setTimeout(() => {
      setCurrentName(nomi[0]);
      setIsVisible(true);
      setNameIndex(1);

      // Nascondi dopo 5 secondi
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 10000);

    return () => clearTimeout(firstTimeout);
  }, []);

  useEffect(() => {
    if (nameIndex === 0) return;

    // Popup successivi ogni 60 secondi
    const interval = setInterval(() => {
      setCurrentName(nomi[nameIndex % nomi.length]);
      setIsVisible(true);
      setNameIndex(prev => prev + 1);

      // Nascondi dopo 5 secondi
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 60000);

    return () => clearInterval(interval);
  }, [nameIndex]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 pointer-events-none"
        >
          <div className="bg-white rounded-xl shadow-2xl drop-shadow-xl border border-ocean-100/20 px-5 py-4 flex items-center gap-3 min-w-[280px]">
            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <div className="flex-1">
              <p className="text-ocean-900 font-bold text-sm">
                {currentName}
              </p>
              <p className="text-ocean-600 text-xs">
                si è appena iscritto
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SocialProofNotification;
