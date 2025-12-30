import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  const indirizzo = 'Viale Rebuzzini 20, 20814 Varedo (MB)';

  const contatti = [
    {
      icon: Phone,
      label: 'Telefono',
      value: '0362 580874',
      link: 'tel:0362580874',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@npvaredo.it',
      link: 'mailto:info@npvaredo.it',
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
            Dove si Svolge
          </h2>
          <p className="text-xl text-ocean-600">
            Piscina Lido Azzurro, Varedo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info e contatti */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Indirizzo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-ocean-500 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ocean-900 mb-2">Indirizzo</h3>
                  <p className="text-ocean-700 text-lg">{indirizzo}</p>
                </div>
              </div>
            </div>

            {/* Contatti */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-ocean-900 mb-6">Contatti</h3>
              <div className="space-y-4">
                {contatti.map((contatto, idx) => {
                  const Icon = contatto.icon;
                  return (
                    <a
                      key={idx}
                      href={contatto.link}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-ocean-50 transition-colors group"
                    >
                      <div className="bg-ocean-100 p-3 rounded-lg group-hover:bg-ocean-500 transition-colors">
                        <Icon className="w-5 h-5 text-ocean-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm text-ocean-600">{contatto.label}</div>
                        <div className="font-semibold text-ocean-900">{contatto.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Mappa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[600px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Piscina+Lido+Azzurro,${encodeURIComponent(indirizzo)}`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Piscina Lido Azzurro"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
