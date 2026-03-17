import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Shield, Leaf, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Clock, en: "Same-Day Service", es: "Servicio el Mismo Día" },
  { icon: Shield, en: "Licensed & Insured", es: "Licenciado y Asegurado" },
  { icon: Leaf, en: "Eco-Friendly Disposal", es: "Eliminación Ecológica" },
  { icon: DollarSign, en: "Affordable Pricing", es: "Precios Accesibles" },
  { icon: Users, en: "Friendly Local Team", es: "Equipo Local Confiable" },
];

const WhyUs = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">{t("Why Us", "¿Por Qué Nosotros?")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("Why Choose Rapid", "¿Por Qué Elegir Rapid?")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.en}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
              className="card-surface-hover rounded-3xl p-6 text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold tracking-tight">{t(reason.en, reason.es)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
