import { useLanguage } from "@/contexts/LanguageContext";
import { Sofa, Refrigerator, TreePine, HardHat, Warehouse, Home } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Sofa, en: "Furniture Removal", es: "Remoción de Muebles" },
  { icon: Refrigerator, en: "Appliance Removal", es: "Electrodomésticos" },
  { icon: TreePine, en: "Yard Waste Cleanup", es: "Limpieza de Jardín" },
  { icon: HardHat, en: "Construction Debris", es: "Escombros de Construcción" },
  { icon: Warehouse, en: "Garage Cleanouts", es: "Limpieza de Garajes" },
  { icon: Home, en: "Full Property Cleanouts", es: "Limpiezas Completas" },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">{t("What We Do", "Lo Que Hacemos")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("Our Services", "Nuestros Servicios")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.en}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
              className="card-surface-hover rounded-3xl p-8 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{t(service.en, service.es)}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="outline-button inline-block">
            {t("View All Services", "Ver Todos los Servicios")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
