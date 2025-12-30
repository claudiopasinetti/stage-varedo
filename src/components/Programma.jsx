import { motion } from 'framer-motion';
import { BookOpen, Waves, Clock, Coffee } from 'lucide-react';

const Programma = () => {
  const sessioni = [
    {
      tipo: 'Teoria',
      orario: '9:00 – 12:00',
      icon: BookOpen,
      color: 'from-ocean-600 to-ocean-500',
      moduli: [
        {
          titolo: 'Storia del 5° stile, Streamline e Drag',
          relatore: 'Valter Mazzei',
        },
        {
          titolo: 'Muscoli respiratori e Apnea',
          relatore: 'Mike Maric',
        },
        {
          titolo: 'Breakout della subacquea nel nuoto',
          relatore: 'Luca Dotto e Marco Orsi',
        },
      ],
    },
    {
      tipo: 'Pratica',
      orario: '14:00 – 16:00',
      icon: Waves,
      color: 'from-ocean-500 to-ocean-400',
      moduli: [
        {
          titolo: 'Esercizi pratici in piscina',
          relatore: 'Tutti gli istruttori',
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ocean-50">
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
            Programma della Giornata
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Una giornata intensiva di formazione teorica e pratica con i migliori esperti del settore
          </p>
        </motion.div>

        {/* Timeline/Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {sessioni.map((sessione, idx) => {
            const Icon = sessione.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Header colorato */}
                  <div className={`bg-gradient-to-r ${sessione.color} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12" />
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold text-sm">{sessione.orario}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold">{sessione.tipo}</h3>
                  </div>

                  {/* Contenuto */}
                  <div className="p-8">
                    <div className="space-y-6">
                      {sessione.moduli.map((modulo, mIdx) => (
                        <div
                          key={mIdx}
                          className="border-l-4 border-ocean-300 pl-6 py-2"
                        >
                          <h4 className="text-lg font-bold text-ocean-900 mb-2">
                            {modulo.titolo}
                          </h4>
                          <p className="text-ocean-600 text-sm font-medium">
                            {modulo.relatore}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorazione */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pausa pranzo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-ocean-500 to-ocean-400 text-white px-8 py-4 rounded-2xl shadow-lg">
            <Coffee className="w-5 h-5" />
            <span className="font-bold text-lg">Pausa pranzo: 12:00 – 14:00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programma;
