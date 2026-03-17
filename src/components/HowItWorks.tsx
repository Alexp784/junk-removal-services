import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const steps = [
  { num: "01", en: "Get a Quote", es: "Solicita Cotización" },
  { num: "02", en: "We Arrive Fast", es: "Llegamos Rápido" },
  { num: "03", en: "We Remove Everything", es: "Retiramos Todo" },
  { num: "04", en: "You Relax", es: "Tú Descansas" },
];

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">{t("Simple Process", "Proceso Simple")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("How It Works", "¿Cómo Funciona?")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
              className="card-surface-hover rounded-3xl p-8 text-center"
            >
              <span className="font-mono text-4xl font-bold text-primary/30 block mb-4">{step.num}</span>
              <h3 className="text-lg font-bold tracking-tight">{t(step.en, step.es)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
