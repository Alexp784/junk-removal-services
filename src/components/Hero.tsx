import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl"
        >
          {/* Trust Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="label-mono flex items-center gap-2">
              <span className="pulse-dot" />
              {t("Available 24/7", "Disponible 24/7")}
            </span>
            <span className="label-mono">{t("Licensed & Insured", "Licenciado y Asegurado")}</span>
            <span className="label-mono flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Tampa, FL
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance leading-[0.95] mb-6">
            {t("Junk Removal", "Eliminación de")}
            <br />
            <span className="text-primary">{t("Made Easy", "Basura Fácil")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed text-pretty max-w-lg mb-4">
            {t(
              "Fast, Affordable, Same-Day Service in Tampa",
              "Servicio rápido, económico y el mismo día en Tampa"
            )}
          </p>

          <a
            href="tel:8137667345"
            className="flex items-center gap-2 text-primary font-mono text-lg mb-10 hover:underline"
          >
            <Phone className="w-5 h-5" />
            813-766-7345
          </a>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="neon-button text-center text-lg">
              {t("Get Free Quote", "Obtener Cotización")}
            </a>
            <a href="tel:8137667345" className="outline-button text-center text-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              {t("Call Now", "Llamar Ahora")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
