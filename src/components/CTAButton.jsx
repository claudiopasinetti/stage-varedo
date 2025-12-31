import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const CTAButton = ({ text = "ISCRIVITI ORA", variant = "primary", bgColor = "white" }) => {
  const scrollToForm = () => {
    const element = document.getElementById('iscrizione');
    if (element) {
      const offset = 80; // Altezza della navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const variants = {
    primary: "bg-[#007aff] hover:bg-[#0062cc] text-white",
    secondary: "bg-white hover:bg-ocean-50 text-ocean-700 border-2 border-ocean-600",
  };

  const bgClasses = {
    white: "bg-white",
    "ocean-50": "bg-ocean-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex justify-center py-12 ${bgClasses[bgColor]}`}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={scrollToForm}
        className={`group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 ${variants[variant]}`}
      >
        <span>{text}</span>
        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

export default CTAButton;
