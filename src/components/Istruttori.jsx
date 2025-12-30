import { motion } from 'framer-motion';

const Istruttori = () => {
  const istruttori = [
    {
      nome: 'Mike Maric',
      ruolo: 'Medico, apneista, Formatore Olimpico CONI',
      foto: `${import.meta.env.BASE_URL}images/istruttori/mike-maric.jpg`,
      gradient: 'from-ocean-600 to-ocean-500',
      expertise: 'Respirazione e apnea',
    },
    {
      nome: 'Luca Dotto',
      ruolo: 'Plurimedagliato mondiale',
      foto: `${import.meta.env.BASE_URL}images/istruttori/luca-dotto.jpg`,
      gradient: 'from-ocean-500 to-ocean-400',
      expertise: 'Velocità e tecnica',
    },
    {
      nome: 'Marco Orsi',
      ruolo: 'Plurimedagliato mondiale',
      foto: `${import.meta.env.BASE_URL}images/istruttori/marco-orsi.jpg`,
      gradient: 'from-ocean-700 to-ocean-600',
      expertise: 'Sprint e breakout',
    },
    {
      nome: 'Valter Mazzei',
      ruolo: 'Allenatore nuoto pinnato e apnea',
      foto: `${import.meta.env.BASE_URL}images/istruttori/valter-mazzei.jpg`,
      gradient: 'from-ocean-400 to-ocean-300',
      expertise: 'Streamline e biomeccanica',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-400 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              I Tuoi Maestri
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ocean-800 mb-4">
            Impara dai Campioni
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Un team di eccellenza internazionale ti guiderà alla scoperta dei segreti del 5° stile
          </p>
        </motion.div>

        {/* Grid Istruttori */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {istruttori.map((istruttore, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Foto istruttore */}
                  <div className="relative h-80 overflow-hidden">
                    {/* Immagine */}
                    <img
                      src={istruttore.foto}
                      alt={istruttore.nome}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay gradient al hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${istruttore.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                    {/* Badge expertise */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-ocean-900/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-white text-sm font-semibold">
                          {istruttore.expertise}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-ocean-900 mb-2">
                      {istruttore.nome}
                    </h3>
                    <p className="text-ocean-600 leading-relaxed">
                      {istruttore.ruolo}
                    </p>
                  </div>

                  {/* Bordo animato al hover */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-ocean-400 rounded-2xl transition-all duration-300 pointer-events-none" />

                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA o nota */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-ocean-700 font-medium">
            Oltre <span className="font-bold text-ocean-900">100 anni</span> di esperienza combinata al tuo servizio
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Istruttori;
