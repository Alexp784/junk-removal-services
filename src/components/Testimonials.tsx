import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    en: "Super fast and professional. Same day service! Couldn't be happier with the results.",
    es: "Super rápido y profesional. ¡Servicio el mismo día! No podría estar más contento.",
    name: "Mike R.",
  },
  {
    en: "Muy buen servicio, rápido y económico. They cleaned everything perfectly.",
    es: "Muy buen servicio, rápido y económico. Limpiaron todo perfectamente.",
    name: "Maria G.",
  },
  {
    en: "Best junk removal in Tampa. Fair prices and the crew was incredibly respectful.",
    es: "La mejor remoción de basura en Tampa. Precios justos y el equipo fue muy respetuoso.",
    name: "James T.",
  },
];

const Testimonials = () => {
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
          <span className="label-mono mb-4 block">{t("Testimonials", "Testimonios")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("What Our Customers Say", "Lo Que Dicen Nuestros Clientes")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
              className="card-surface-hover rounded-3xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 leading-relaxed text-pretty mb-6 flex-1">
                "{t(review.en, review.es)}"
              </p>
              <span className="font-bold text-sm">{review.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
