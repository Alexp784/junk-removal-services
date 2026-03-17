import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  { price: 99, en: "Small Load", es: "Carga Pequeña" },
  { price: 199, en: "Medium Load", es: "Carga Mediana", featured: true },
  { price: 299, en: "Full Load", es: "Carga Completa" },
];

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-14"
        >
          <span className="label-mono mb-4 block">{t("Simple Pricing", "Precios Simples")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-balance">
            {t("Transparent Pricing", "Precios Transparentes")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.en}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
              className={`rounded-3xl p-8 text-center flex flex-col ${
                tier.featured
                  ? "card-surface-hover border-primary/30 ring-1 ring-primary/20"
                  : "card-surface-hover"
              }`}
            >
              <span className="label-mono mb-3">{t(tier.en, tier.es)}</span>
              <div className="mb-2">
                <span className="font-mono text-5xl font-bold tabular-nums text-foreground">
                  ${tier.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {t("Starting at", "Desde")}
              </p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {t("No hidden fees", "Sin cargos ocultos")}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {t("We load & clean", "Nosotros cargamos y limpiamos")}
                </div>
              </div>

              <a
                href="#contact"
                className={`mt-auto text-center rounded-xl py-3 font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.featured
                    ? "neon-button !py-3"
                    : "outline-button !py-3"
                }`}
              >
                {t("Get Exact Price", "Obtener Precio Exacto")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
