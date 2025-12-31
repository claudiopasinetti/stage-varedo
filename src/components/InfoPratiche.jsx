import { motion } from 'framer-motion';
import { Euro, Users, Check, Backpack, AlertCircle } from 'lucide-react';

const InfoPratiche = () => {
  const incluso = [
    'Accesso completo alla sessione teorica (3 ore)',
    'Accesso completo alla sessione pratica in piscina (2 ore)',
    'Materiale didattico e dispense',
    'Utilizzo vasca e struttura',
    'Certificato di partecipazione',
  ];

  const portare = [
    'Costume da bagno',
    'Cuffia',
    'Occhialini',
    'Asciugamano',
    'Ciabatte',
    'Borraccia',
    'Cambio completo',
  ];

  return (
    <section id="info-pratiche" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-800 mb-4">
            Informazioni Pratiche
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Tutto quello che devi sapere per partecipare allo stage
          </p>
        </motion.div>

        {/* Info principali: Costo e Posti */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Costo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-ocean-600 to-ocean-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Costo</h3>
                </div>
                <div className="mb-4">
                  <span className="text-6xl font-black">€100</span>
                  <span className="text-2xl">,00</span>
                </div>
                <p className="text-ocean-100 text-lg">
                  Un investimento nella tua tecnica con i migliori esperti del settore
                </p>
              </div>
              {/* Decorazione */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Posti */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Posti Limitati</h3>
                </div>
                <div className="mb-4">
                  <span className="text-6xl font-black">50</span>
                  <span className="text-2xl ml-2">posti</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">Affrettati!</span>
                </div>
              </div>
              {/* Progress bar decorativa */}
              <div className="mt-6 relative z-10">
                <div className="bg-white/20 h-3 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-2/3 rounded-full" />
                </div>
                <p className="text-sm mt-2 text-red-100">Posti in esaurimento</p>
              </div>
              {/* Decorazione */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Cosa è incluso e Cosa portare */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Incluso */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-ocean-50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-ocean-500 p-3 rounded-xl">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ocean-900">Cosa è Incluso</h3>
              </div>
              <ul className="space-y-4">
                {incluso.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
                    <span className="text-ocean-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Cosa portare */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-ocean-50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-ocean-500 p-3 rounded-xl">
                  <Backpack className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ocean-900">Cosa Portare</h3>
              </div>
              <ul className="space-y-4">
                {portare.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-ocean-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoPratiche;
